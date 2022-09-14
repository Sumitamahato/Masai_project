let num = 19;
let count = 0;

for (i=0;i<=num;i++){
    if (num % i == 0){
        count++;
    }
}

if (count == 2){
    console.log("Prime Number");
} else{
    console.log("Not a Prime number");
}