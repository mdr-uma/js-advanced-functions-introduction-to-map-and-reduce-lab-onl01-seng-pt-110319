function mapToNegativize(sourceArray) {
    let value = [];
    for (let i = 0; i < sourceArray.length; i++) {
        value.push(-1 * sourceArray[i]);
    }
    return value;
};

function mapToNoChange(sourceArray) {
    let value = [];
    for (let i = 0; i < sourceArray.length; i++) {
        value.push(sourceArray[i]);
    };
    return value;
};

function mapToDouble(sourceArray) {
    let value = [];
    for (let i = 0; i < sourceArray.length; i++) {
        value.push(sourceArray[i] * 2);
    };
    return value;
};

function mapToSquare(sourceArray) {
    let value = [];
    for (let i = 0; i < sourceArray.length; i++) {
        value.push(sourceArray[i] ** 2);
    };
    return value;
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i])
            return false
    };
    return true;
};

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])
            return true
    };
    return false;
};