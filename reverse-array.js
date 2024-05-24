let car = ['mazda']
let number = [1, "six", 4, 5, 6]
let con = []


function reverseArr(A){
    const len = A.length
    for(i=0; i<len/2; i++){
        let k = len-i-1
        A[i], A[k] = A[k], A[i];
    }
}

reverseArr(number)
console.log(number)