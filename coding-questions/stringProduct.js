/*
NOTE: write a function to return product of two numbers in string formate with out using
multiply operation on top level

- adobe
*/

const getProduct = (num1, num2) {
    let res = 0
    let currPlaceMultiplier = 1
    for (let i = num1.length - 1; i >= 0; i--) {
        let currCarry = 0
        let curSum = ''

        for (let j = num2.length - 1; j >= 0; j--) {
            const unitMult = parseInt(num1[i]) * parseInt(num2[j]) + currCarry
            currCarry = Math.floor(unitMult / 10)
            curSum = (unitMult - 10 * currCarry) + curSum

        }

        res = res + parseInt((currCarry || '') + curSum) * currPlaceMultiplier
        currPlaceMultiplier = currPlaceMultiplier * 10
    }

    return res
}

console.log(getProduct('22', '11'))