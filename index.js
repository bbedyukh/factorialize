const factorialize = function(num){
    let result = 1
    for (var i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}

module.exports = factorialize
