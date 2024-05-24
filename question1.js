A1=[7,15,10,8]
A2=[11,10,8,12,8,10,11]
A3=[7,14,10]
A4=[7,13,10]
function solution(arr){
    let sum = arr.reduce((previous, current) => previous+current);
    let remainder = sum % arr.length;
    console.log("Q: " + remainder)
    if(remainder!==0){
       return -1;
    }

    let indicesWithExtra =[]
    let valueWeNeed = 0;
    let ideal = 10;
    let extra = 0;

    let i = 0;
    let j = 1;
    let k = 1;
    let done = false;

    let moves = 0;

    while(done === false){
        console.log("starting...")
        console.log("index..." + i)
       if(arr[i]=== 10){
           console.log("actually 10...")
          i++;
       } else if(arr[i] > 10){
           console.log("bigger than 10...")
           indicesWithExtra.push(i);
           i++;
       } else if(arr[i] < 10){
           console.log("less 10...")
           valueWeNeed = ideal - arr[i];
           console.log("valueWeNeed: " + valueWeNeed);
           let filled = false;
           while(filled === false){
               console.log("filling...")
               // console.log("filling at index: " + (i === arr.length - 1));
               if (i === arr.length - 1){
                   console.log("going backwards...")
                   console.log("lookingarr[i-k]..." + k)
                   if(arr[i-k] > 10){
                       console.log("lookingarr[i-k]..." + arr[i-k])
                       //use first index
                       extra = arr[i-k] - ideal;
                       console.log("extra: " + extra);
                       let rem = extra - valueWeNeed;
                       console.log("rem: " + rem);
                       if(rem === 0){
                           arr[i] += valueWeNeed;
                           arr[i-k] -= valueWeNeed;
                           moves += i - (i-k);
                           console.log("moves: " + moves);
                           filled = true;
                           i++;
                           console.log("C: " + arr);
                       } else if(rem < 0){
                           rem = Math.abs(rem);
                           valueWeNeed -= rem;
                           arr[i] += rem;
                           arr[i-k] = 10; //replace with valu
                           k++;
                           console.log("D: " +arr);
                       } else if(rem > 0){
                           filled = true;
                           arr[i]= 10;
                           valueWeNeed = 0;
                           i++;
                           console.log("K: " + arr);
                       }
                   } else {
                       k++;
                   }
               }

               if(arr[i+j] > 10){
                   console.log("lookingarr[i+j]..." + arr[i+j])
                   console.log("index..." + i)
                   //use first index
                   extra = arr[i+j] - ideal;
                   console.log("extra: " + extra);
                   let rem = extra - valueWeNeed;
                   console.log("rem: " + rem);
                   if(rem === 0){
                       arr[i] = 10;
                       arr[i+j] = 10;
                       moves += (i+j) - i;
                       console.log("moves: " + moves);
                       filled = true;
                       i++;
                       console.log("C: " + arr);
                   } else if(rem < 0){
                       rem = Math.abs(rem);
                       valueWeNeed -= rem;
                       arr[i] += rem;
                       arr[i+j] = 10;
                       j++;
                       console.log("E: " +arr);
                   } else if(rem > 0){
                       arr[i+j] -= valueWeNeed;
                       arr[i] += valueWeNeed;
                       filled = true;
                       valueWeNeed = 0;
                       i++;
                       console.log("K: " + arr);
                   }

               }
               else if (i < arr.length){
                   j++;

               }



           }
       }
       if(i === arr.length){
           done = true;
       }
    }
    console.log("Final: " +moves)
}

solution(A2)