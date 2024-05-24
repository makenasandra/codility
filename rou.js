if(arr[i-k] > 10){
    console.log("lookingarr[i+k]..." + arr[i-k])
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
        k--;
        console.log("D: " +arr);
    } else if(rem > 0){
        filled = true;
        arr[i]= 10;
        valueWeNeed = 0;
        i++;
        console.log("K: " + arr);
    }
} else {
    k--;
}
