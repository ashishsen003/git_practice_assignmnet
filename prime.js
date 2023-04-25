// prime function

function prime(num){
    let count = 2
    for(let i=2; i<num; i++){
        if(num%i==0){
            count++
        }
    }
    (count == 2) ? console.log("Prime") : console.log("Not Prime")
}

prime(5)