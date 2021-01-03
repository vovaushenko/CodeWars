// https://www.codewars.com/kata/5d23d89906f92a00267bb83d

const capitalizeAndStringify = (arr) =>
    arr.map((el) => el[0].toUpperCase() + el.substring(1)).join(' ');

const getOrder = (input) => {
    const MENU = [
        'burger',
        'fries',
        'chicken',
        'pizza',
        'sandwich',
        'onionrings',
        'milkshake',
        'coke',
    ];
    const orders = [];
    for (let i = 0; i < MENU.length; i++) {
        orders.push(input.match(new RegExp(`${MENU[i]}`, 'gi')));
    }

    let finalOrder = [].concat(...orders).filter((meal) => meal);

    return capitalizeAndStringify(finalOrder);
};
