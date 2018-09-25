module.exports.findCommonElement = (arr1, arr2) => {
    return arr1.filter(function (v) { return arr2.indexOf(v) !== -1; })
}

module.exports.isParameterValid = (param) => {
    return !(/^ *$/.test(param)) ;
}

module.exports.createRequestConfig = () => {
    return {
        headers: {
            'Authorization': 'Bearer ' + process.env.MONEEDAAPI_TOKEN
        }
    }
}
