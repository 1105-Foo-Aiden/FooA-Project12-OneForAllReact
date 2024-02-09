export async function LevelOne(name){
    if(!name){
        return "Please enter a valid name"
    }
    else{
        const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/Hello/${name}`)
        const data = await promise.text()
        return data;
    }
}

export async function levelTwo(num1, num2){
    if(num1 && num2 ){
        const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/AddNumbers/${num1}/${num2}`)
        const data = await promise.text()
        return data;   
    }
    else{
        return 'Please enter two valid numbers'
    }
    
}

export async function LevelThree(name, wakeUpTime){
    if(name && wakeUpTime){
       const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/TwoQuestions/${name}/${wakeUpTime}`)
        const data = await promise.text()
        return data;  
    }
    else{
        return "Please enter a valid name and number"
    }
}

export async function LevelFour(num1, num2){
    if(num1 && num2){
      const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/CompareNumbers/${num1}/${num2}`)
    const data = await promise.text()
    return data;  
    }
    else{
        return "Plase enter valid numbers"
    }
    
}

export async function LevelFive(name, place, adverb, name2, numberOf, thing, adjective, verb, verb2){
    if(name && place && adverb && name2 && numberOf && thing && adjective && verb && verb2){
        const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/MadLib/${name}/${place}/${adverb}/${name2}/${numberOf}/${thing}/${adjective}/${verb}/${verb2}?adverb=${adverb}`)
        const data = await promise.text()
        return data;  
    }else{
        return 'Please make sure that all the fields are filled in then try again'
    }
}

export async function LevelSix(num1){
    if(num1){
        const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/OddOrEven/${num1}`)
        const data = await promise.text()
    return data;  
    }else{
        return "Please enter a valid number"
    }
}

export async function LevelSeven(word){
    if(word){
       const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItWord/${word}`)
    const data = await promise.text()
    return data;  
    }else{
        return 'Please enter a word to be reversed'
    }
   
}

export async function LevelEight(num1){
    if(num1){
       const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/8Ball/${num1}`)
        const data = await promise.text()
        return data; 
    }else{
        return'Please enter a number';
    }
}


export async function LevelNine(num1){
    if(num1){
        const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/ReverseItNum/${num1}`)
        const data = await promise.text()
        return data;  
    }
    else{
        return "Please enter a number to reverse"
    }
    
}

export async function LevelTen(num1){
    if(num1){
       const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/RestaurantPicker/FastFoodSitDownTakeOut/${num1}`)
        const data = await promise.text()
        return data; 
    }
    else{
        return "Please enter a valid option, fastfood, sitdown, or takeout"
    }
    
}