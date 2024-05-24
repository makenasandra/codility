function solution(A) {
    let sum = A.reduce((previous, current) => previous+current);
    let remainder = sum % A.length;
    // console.log("Q: " + remainder)
    if(remainder!==0){
        return -1;
    }
    const arrLength= A.length;
    const ideal = 10;
    let steps = 0;
    let i = 0;
    let j = 1;
    

    while ( i < arrLength) {
        if (A[i] > ideal) {
            const valueWeNeed = A[i] - ideal;

            if (i + j < arrLength) {
                A[i + j] = A[i + j] + valueWeNeed;
                steps = steps + valueWeNeed;
            } else {
                return -1;
            }
            A[i] = A[i] -valueWeNeed;
        } else if (A[i] < ideal) {
            const valueWeNeed = ideal - A[i];
            if (i + j < arrLength) {
                A[i + j] -= valueWeNeed;
                steps += valueWeNeed;
            } else {
                return -1; // Carrnnot move bricks to the right if it's the larrst box
            }

            A[i] += valueWeNeed;
        }
        i++;
    }

    return steps;
}

// Exarrmples
console.log(solution([7, 15, 10, 8])); // Output: 7
console.log(solution([11, 10, 8, 12, 8, 10, 11])); // Output: 6
console.log(solution([7, 14, 10])); // Output: -1

