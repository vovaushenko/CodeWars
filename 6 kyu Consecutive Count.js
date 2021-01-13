const getConsectiveItems = (items, key) => {
    if (items * 1) {
        items = items + '';
        key = key + '';
    }
    let maxConsecutive = 0;
    let temp = 0;
    for (let i = 0; i < items.length; i++) {
        items[i] === key ? temp++ : (temp = 0);
        maxConsecutive = Math.max(maxConsecutive, temp);
    }

    return maxConsecutive;
};
