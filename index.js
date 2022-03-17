// Code your solutions in this file

//for loops 1
for (let age = 30; age <40; age ++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    debugger;
}

// for & while loop to wrap gift
const gifts =["teddy bear", "drome", "doll"];
function wrapGifts(gifts){
    let i =0;
    // for (let i = 0; i<gifts.length; i++){
    //     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //    // debugger;
    // }
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
   return gifts;
}

// for loop to write thankyou letters
function writeCards(name , eventName){
    const messages = [];
    for( let counter = 0; counter < name.length; counter++){
        messages[counter] = `Thank you, ${name[counter]}, for the perfect ${eventName} gift!`;
        debugger;

    }
    return messages;
}

wrapGifts(gifts);
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday")
);


// while loop for count down to zero
function countDown(number){
    while(number >= 0){
        console.log(number--);
    }
}
countDown(10);