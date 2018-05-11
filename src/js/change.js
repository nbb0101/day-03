function change(num) {
    var num = num.toString();

    var str = num.substring(14);
    str = '****';
    var strs = num.substring(0, 14) + str;
    return strs;
}
//142327199401010630


console.log(change(142327199401010630));