function solution(X, Y, D) {
    // Implement your solution here
    let distance = Y - X;
    let jumps = Math.trunc(distance/D);
    return distance%D===0? jumps: jumps+=1;
}

const result = solution(5, 105, 3);
console.log(result)