function solution(A) {
    const N = A.length;
    const targetBricks = 10;
    let moves = 0;

    for (let i = 0; i < N; i++) {
        if (A[i] > targetBricks) {
            const diff = A[i] - targetBricks;
            A[i] -= diff;
            if (i + 1 < N) {
                A[i + 1] += diff;
                moves += diff;
            } else {
                return -1; // Cannot move bricks to the right if it's the last box
            }
        } else if (A[i] < targetBricks) {
            const diff = targetBricks - A[i];
            A[i] += diff;
            if (i + 1 < N) {
                A[i + 1] -= diff;
                moves += diff;
            } else {
                return -1; // Cannot move bricks to the right if it's the last box
            }
        }
    }

    return moves;
}

// Examples
console.log(solution([7, 15, 10, 8])); // Output: 7
console.log(solution([11, 10, 8, 12, 8, 10, 11])); // Output: 6
console.log(solution([7, 14, 10])); // Output: -1
