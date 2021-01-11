// https://www.codewars.com/kata/52b50a20fa0e77b304000103

const isSantaClausable = (obj) => {
    let interfaces = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];

    for (interface of interfaces) {
        if (typeof obj[interface] !== 'function') return false;
    }
    return true;
};
