//Score=100% O(N) or O(N*log(N))
function solution(A) {
    let xorResult = 0;
    for (let i = 0; i < A.length; i++) {
        xorResult ^= A[i]; // xorResult = xorResult ^ A[i];
    }

    return xorResult;
}

let result = solution([9, 3, 9, 3, 9, 7, 9]);
console.log(result);

//score = 25% O(N**2)
function solution2(A) {
    // Implement your solution here
    for (let i = 0; i < A.length; i++) {
        let filtered = A.filter(num => num === A[i]);
        let len = filtered.length;
        if(len === 1 || len % 2 !== 0) return A[i];
    }
}

//score = 25% O(N**2)
function solution3(A){
    while(i<A.length){
        let len = A.length; //7  3
        let current = A[i]; //9  7
        A = A.filter(num => num !== A[i]);
        let lenDiff = len - A.length; //7-3=4;  3-2=1;
        if( lenDiff === 1 || lenDiff % 2 !== 0 ) return current;
    }
}