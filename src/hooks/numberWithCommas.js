function numberWithCommas(a) {
    a = a.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(a))
        a = a.replace(pattern, "$1,$2");
    return a;
}

export default numberWithCommas
