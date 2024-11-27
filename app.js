var convertToTitle = function(columnNumber) {
    let n = columnNumber
    const A= 65
    let result = ""
    while(n > 26){
        const mod = (n-1) % 26
        n = Math.floor((n-1) / 26)
        result = String.fromCharCode(mod + A) + result
    }
    return String.fromCharCode((n-1) + A) + result
};

//solution 2
var convertToTitle = function(columnNumber) {
    let n = columnNumber
    const A= 65
    if(n <= 26) return String.fromCharCode((n-1) + A)

    const mod = (n-1) % 26
    n = Math.floor((n-1) / 26)
    return converToTitle(n) + String.fromCharCode(mod + A)
};