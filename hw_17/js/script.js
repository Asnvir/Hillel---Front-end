const root = document.querySelector(`ul.root`);

const addClasses = (arrLIs) => {
    const firstItem = arrLIs[0];
    const lastItem = arrLIs[arrLIs.length - 1];
    firstItem.classList.add(`first`);
    lastItem.classList.add(`last`);
}

const nestedQuerySelector = (ul, level) => {
    const nextLevel = level - 1;
    const arrLIs = [...ul.children];
    if (nextLevel <= 0) {
        addClasses(arrLIs);
        return;
    }
    const arrULs = arrLIs.map(li => [...li.children]).flat();
    console.log(arrULs);
    arrULs.forEach(ul => nestedQuerySelector(ul, nextLevel));

}

nestedQuerySelector(root, 4);

