const addClasses = (arrLIs) => {
    const firstItem = arrLIs[0];
    const lastItem = arrLIs[arrLIs.length - 1];
    firstItem.classList.add(`first`);
    lastItem.classList.add(`last`);
}

const recursion = (ul, level) => {
    const nextLevel = level - 1;
    const arrLIs = [...ul.children];
    if (nextLevel <= 0) {
        addClasses(arrLIs);
        return;
    }
    const arrULs = arrLIs.map(li => [...li.children]).flat();
    arrULs.forEach(ul => recursion(ul, nextLevel));

}

const setFirstItemClassName = (level) => {
    const root = document.querySelector(`ul.root`);
    recursion(root, level);
}

setFirstItemClassName(4);

