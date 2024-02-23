let ran_num=Math.floor(Math.random()*100)+1;
    // console.log(ran_num)
    const guess=(b)=>{
        if(ran_num>b){
        console.log("your guess is wrong")
        console.log("your number is less than actual number")
    }
    else if(ran_num<b){
        console.log("your guess is wrong")
        console.log("your number is greater than actual number")
    }
    else{
        c=4
        console.log("your guess is right")
        console.log("the random number is ",b)
    }

    }
    let chance=0;
    let c;
    while( c!=4){
        guess(prompt("guess the number"))
        chance+=1
    }
    console.log("your score is ",100-chance)