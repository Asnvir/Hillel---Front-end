const container = document.querySelector(`#containerHeroTable`);
const containerUpdateBTN = document.querySelector(`#containerUpdateBTN`);
const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;



const controller = async (url, method = `GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }

    if (obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    return request.ok ? request.json() : Promise.catch(request.statusText);
};

const getTable = () => {
    return document.querySelector("table");
};

const updateTable = async () => {
    let table = getTable();
    table.remove();
    await renderTable();
};

const renderCheckBox = (tr, td, hero) => {
    const checkBox = document.createElement(`input`);
    checkBox.type = `checkbox`;
    checkBox.checked = hero[`favourite`];
    td.append(checkBox);
    tr.append(td);


    checkBox.addEventListener(`change`, async () => {
        hero[`favourite`] = checkBox.checked;
        try {
            await controller(API + `/heroes/${hero[`id`]}`, `PUT`, hero);
        } catch (error) {
            console.log(`Error PUT favourite user with id:${hero[`id`]}.`);
        }
    })
};

const renderRemoveBTN = (tr, td, hero) => {
    const removeBTN = document.createElement(`button`);
    removeBTN.innerHTML = `Remove hero`;
    td.append(removeBTN);
    tr.append(td);
    removeBTN.addEventListener(`click`, async () => {
        tr.remove();
        try {
            await controller(API + `/heroes/${hero[`id`]}`, `DELETE`);
        } catch (error) {
            console.log(`Error DELETE user with id:${hero[`id`]}.`);
        }
    })
};

const renderProperty = (tr,td,hero,property) => {
    td.innerHTML = hero[property];
    tr.append(td);
}

const renderHero = (table,hero, columnNames) => {
    const tr = document.createElement(`tr`);

    for (let i = 0; i < columnNames.length; i++) {
        const td = document.createElement(`td`);
        switch (columnNames[i]) {
            case `Favourite`:
                renderCheckBox(tr, td, hero);
                break;

            case `Actions`:
                renderRemoveBTN(tr, td, hero);
                break;

            default:
                renderProperty(tr,td,hero,columnNames[i].toLowerCase());
                break;
        }
    }
    return tr;
};

const renderHeroes = (table,heroes, columnNames) => {
    return heroes.map(hero => renderHero(table, hero, columnNames));

};

const renderColumnNames = (table,columnNames) => {
    const tr = document.createElement(`tr`);
    columnNames.forEach(title => {
        const th = document.createElement(`th`);
        th.innerHTML = title;
        tr.append(th);
    })
    table.append(tr);
};

const renderTable = async () => {
    try {
        const heroes = await controller(API + `/heroes`);
        const table = document.createElement(`table`);
        const columnNames = [`Name`, `Comics`, `Favourite`, `Actions`];
        renderColumnNames(table,columnNames);
        renderHeroes(table,heroes, columnNames).forEach(tr => table.append(tr));

        container.append(table);
    }catch (error){
        console.log(`Error GET heroes.`)
    }

};



const renderFormSelect = async (select) => {
    try {
        const options = await controller(API + `/universes`);
        select.innerHTML = options
            .map(option => option[`name`])
            .map(option => `<option value="${option}">${option}</option>`);
    } catch (error) {
        console.log(`Error download universes of comics.`)
    }


};

const checkExistingUser = async (newHeroName) => {
    try{
        const heroes = await controller(API + `/heroes`);
        const heroesNames = heroes.map(hero => hero[`name`].toLowerCase());
        return heroesNames.includes(newHeroName.toLowerCase());

    }catch (error){
        console.log(`Error getting heroes.`)
    }
};

const renderForm = async () => {
    const form = document.querySelector(`#formHero`);
    const name = document.querySelector(`#nameHero`);
    const select = document.querySelector(`#selectHero`);
    const checkBox = document.querySelector(`#checkboxHero`);

    await renderFormSelect(select);



    form.addEventListener(`submit`, async event => {
        event.preventDefault();
        const newHero = {
            name: name.value,
            comics: select.value,
            favourite: checkBox.checked
        };

        {
            try {
                const addNewUser = await checkExistingUser(name.value);
                if(!addNewUser ){
                    await controller(API + `/heroes`, `POST`, newHero);
                    await updateTable();
                }else{
                    window.alert(`Current user already exists.`);
                }
            } catch (error) {
                console.log(`In catch ${error}`);}
        }
    })
};

const renderUpdateButton = () => {
    const updateBTN = document.createElement(`button`);
    updateBTN.innerHTML = `Update table`;
    containerUpdateBTN.append(updateBTN);
    updateBTN.addEventListener(`click`, async () => {
        try {
            await updateTable();
        } catch (error) {
            console.log(`Error UPDATE table.`);
        }
    })
};


const init = async () => {
    try {
        await renderTable();
        await renderForm();
        renderUpdateButton();
    } catch (error) {
        console.log(`In catch ${error}`);
    }

};


init();



