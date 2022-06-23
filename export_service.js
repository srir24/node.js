function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

function bank_credentials(){
    console.log("Hello")

}

exports.mul_exp=function mul(a,b){
    bank_credentials()
    return a*b
}

module.exports.add_exp=add
exports.sub_exp=sub
