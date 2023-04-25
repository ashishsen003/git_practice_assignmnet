// prime function

function prime(num){
    let count = 2
    for(let i=2; i<num; i++){
        if(num%i==0){
            count++
        }
    }
    if(count == 2){
        console.log("Prime")
    }  else {
        console.log("Not Prime")
    } 
}

prime(5)