module.exports = (expression) => {

    const array = expression.split('*');
    const factorialResultArray = array.map(item => {
        const number = parseInt(item, 10);
        return ~item.indexOf('!!') ?
            productOfArray(createArray(number)) : factorial(number);
    });
    return zeros(productOfArray(factorialResultArray));
};

const factorial = n => {
    return n === 0 ? '1' : multiply(String(n), String(factorial(n - 1)));
};

const productOfArray = array => {
    let product = '1';
    array.forEach(item => {
        product = multiply(product, String(item));
    });
    return product;
};

const createArray = number => {
    const array = [];
    while (number > 0) {
        array.push(number);
        number -= 2;
    }
    return array;
};

const zeros = (number) => {
    return String(number).split('').reverse().findIndex(n => n !== '0');
};

const multiply = (first, second) => {

    const firstArray = first.split('').reverse();
    const secondArray = second.split('').reverse();
    const result = [];

    firstArray.forEach((faElement, i) => {
        secondArray.forEach((saElement, j) => {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += faElement * saElement;
        });
    });

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('');
};
