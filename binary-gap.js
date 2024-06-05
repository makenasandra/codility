console.log(solution(561892)); 
// // console.log(solution(15));
// // console.log(solution(328));
// console.log(solution2(20));[34]


function solution(N) {
  // Implement your solution here
  let onesIndex = [];
  let maxLength = 0;
  let index = 0;

  while (N !== 0) {
    if (N % 2 !== 0) {
      onesIndex.push(index);
    }
    index++;
    N = Math.floor(N / 2);
  } 

  for (let index = 0; index <= onesIndex.length - 2; index++) {
    let zeroLength = onesIndex[index + 1] - onesIndex[index] - 1;
    maxLength = zeroLength > maxLength ? zeroLength : maxLength;
  }

  return maxLength;
}
//O(n)+O(n)= O(n)

//86% accuracy
function solution2(N) {
    // Implement your solution here
    let onesIndex = [];
    let maxLength = 0;
    let currentIndex = 0;
    let previousIndex = 0;
  
    while (N !== 0) {
      if (N % 2 !== 0) { 3
        onesIndex.push(currentIndex);//[3,6] //110 [1,2]
        if (onesIndex.length > 1) {
          let zerosLength = currentIndex - previousIndex - 1;
          maxLength = zerosLength > maxLength ? zerosLength : maxLength;
          previousIndex = currentIndex;
        }
      }
      currentIndex++;
      N = Math.floor(N / 2);
    }
  
    return maxLength;
}
