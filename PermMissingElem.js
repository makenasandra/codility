/**
 * 
 * @param {*} A 
 * @returns diff
 * 
 * Detected time complexity: O(N) or O(N * log(N))
 * Correctness:100%, Performance:100%
 */
function solution(A){ 
    const N = A.length;
    if(!N) return 1;
    const maxRange = N+1; // 3
    const expectedSum = (maxRange * (maxRange+1)) / 2;
    let currentSum = 0;
    A.sort();
    for (let index = 0; index < N; index++) {
       currentSum += A[index];
    }
    const diff = expectedSum - currentSum
    return diff;
};

const result = solution([1,3,4])
console.log(result);

/** Detected time complexity: O(N ** 2) 
 * Correctness:100%, Performance:40%
 * 
*/
function solution1(A){ 
    const N = A.length;
    A.sort();

    for (let index = 1; index <= N+1; index++) {
        
        if(!(A.includes(index))) return index;
        
    }

    return 1;
};

