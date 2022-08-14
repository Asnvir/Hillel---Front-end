const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

const recursionInsert = (res, obj) => {
    for (const objKey in obj) {
        (typeof obj[objKey] === 'object') ? recursionInsert(res, obj[objKey]) : res[objKey] = obj[objKey];
    }
}

const convert = (obj) => {
    const res = {};
    recursionInsert(res,obj);
    return res;
}

const newObj = convert(obj);
console.log(newObj);

