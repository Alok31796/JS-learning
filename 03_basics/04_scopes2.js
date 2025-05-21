console.log("============= Scope level and mini hoisting =============");

function one(){           // nexted function me andr wale function bah wale ko accss kr skte h
    const username = "Alok"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website); // ye access ni kr skta h kyuki scope khtam ho cuka h

    two() 

}

// one()



if(true){
    const username = "alok"
    if(username === "alok"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); // nahi kr payega scope ni h inner if ke bahr
    
}

// console.log(username); // nahi kr payega scope ni h if ke bahr

// +++++++++++++++++++++ interesting +++++++++++++++++++++

console.log(addone(5));

function addone(num){ // function
    return num + 1
}


// console.log(addTwo(5)); // Hoisting ke karnd error aata h function expression me
const addTwo = function (num){   // function expression
    return num + 2
}
