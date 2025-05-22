console.log("=============== forEach ===============");
const coding = ["js", "rb", "py", "java", "cpp"]


// coding.forEach((item)=>{
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// const printME = (item)=>{
//     console.log(item);
// }

// coding.forEach(printME)

// coding.forEach((item,index,arraylist)=>{
//     console.log(item,index,arraylist); 
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: ".js"
    },
    {
        languageName: "JAVA",
        languageFileName: ".java"
    },
    {
        languageName: "Python",
        languageFileName: ".py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})

