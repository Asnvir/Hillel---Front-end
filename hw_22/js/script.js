const select = document.querySelector(`#jokesCategories`),
        list = document.querySelector(`#jokesList`);


const renderSelect = async () => {
    try {
        const selectRequest = await fetch(`https://api.chucknorris.io/jokes/categories`);
        const selectResponse = await selectRequest.json();
        select.innerHTML = selectResponse
            .map(category => `<option value ="${category}">${category}</option>`)
            .join(``);

    }catch (error){
        console.log(`Error during downloading select - ${error.statusText}`);
    }
}

renderSelect();



const createButton = (li,option) => {
    const removeBtn = document.createElement(`button`);
    removeBtn.innerHTML = `Remove joke`;
    removeBtn.addEventListener(`click`, () => {
        li.remove();
        option.disabled = false;
    });
    return removeBtn;
}

const createLI = (category,jokeText) => {
    const li = document.createElement(`li`);
    li.innerHTML = `<p>Category: <b>${category}</b></p>
                    <p>${jokeText}</p>`;
    return li;
}


const renderJoke = async (category,option) => {
    try {
        const jokeRequest = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const jokeResponse = await  jokeRequest.json();
        const jokeText = jokeResponse[`value`];

        const li = createLI(category,jokeText);
        const removeBTN = createButton(li,option);

        li.append(removeBTN);
        list.append(li);
    }catch (error){
        console.log(`Error during downloading a joke - ${error.statusText}`);
    }
}

const selectCategory = (event) => {
    event.preventDefault();

    const category = event.target.value;
    const option = select.querySelector(`option[value="${category}"]`);
    option.disabled = true;

    renderJoke(category, option);
};


select.addEventListener('change', event => selectCategory(event));

