'use strick';
/**
 * Task:

You have an object containing data about a restaurant. A beginner developer created several functions that don’t work correctly and can’t figure out why. You need to fix the functions so that they always return the correct result.

The function isOpen doesn’t work properly. No matter what values we pass to it, the result is always wrong. You need to find the reasons and fix it.

The function isAverageLunchPriceTrue should take the prices of any two dishes from the menu, add them, and compare the sum with the average check (averageLunchPrice).

Right now, the function works but constantly returns the wrong result. This is because, for the given menu, the sum of any two prices is always greater than 20. You need to find the reason and fix it.

The function transferWaitors is designed to copy a data template and transfer it to another restaurant. Of course, the other restaurant will have different dishes, different waiters, etc. Currently, this function is only at the early stage of development and should only change data about waiters.

However, in its current form, after running it, not only does the copy contain the new waiters, but the original data also changes! In restorantData, employee Alice disappears and is replaced by Mike! You need to find the reason and immediately fix it so that the data are separated.
 */
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    return prop ? 'Открыто' : 'Закрыто'
    // return;
}
console.log(isOpen(restorantData.openNow));


function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price.slice(0, -1)) < average.slice(0, -1)) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
function transferWaitors(data, i) {
    const copy = Object.assign({}, data);

    copy.waitors = [{ name: 'Mike', age: 32 }];
    return copy;
}

console.log(transferWaitors(restorantData));


