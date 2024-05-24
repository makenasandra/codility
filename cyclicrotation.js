function solution(A, K){
    const len = A.length;
    if (K === len || len === 1) return A;
    let rotatedArr = [];

    for (let index = 0; index < len; index++) {
        let position = index + K;
        if(position> len-1) position%=len;
        rotatedArr[position] = A[index];
    }

    return rotatedArr;
};

let result = solution([1, 1, 2, 3, 5], 42);
console.log(result)

function solulu(A, K){
    if(K===0|| A.length ===0 || K === A.length) return A;
    const num = A.pop();
    A.unshift(num);
    return solulu(A, K-1)
}

let result2 = solulu([1, 1, 2, 3, 5], 42);
console.log(result2)