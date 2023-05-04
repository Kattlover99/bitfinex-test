export const setVariable = (arr) => {
    const variableArr = Object.keys(arr).map((item, key) => {
        return `${arr[item].key}: ${arr[item].value};`;
    });
    return variableArr.join('\n');
}
