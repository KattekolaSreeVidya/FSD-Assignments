// let n=7
// for(let i=1;i<=n;i++){
//     let line=""
//     for(let j=1;j<=i;j++){
//         line+="#"

//     }
//     console.log(line)

// }


// let n=8;
// for(let i=n;i>=1;i--){
//     let line=""
//     for(let j=1;j<=i;j++){
//         line+=j
//     }
//     console.log(line)
// }


function charCount(str,char){
    let count=0
    const lowerStr=str.toLowerCase()
    const lowerChar=char.toLowerCase()
    for(let i=0;i<lowerStr.length;i++){
        if(lowerStr[i]==lowerChar){
            count++;
        }
    }
    return count
}

function countBs(str){
    return charCount(str,"V")
}

console.log(countBs("Vidyaa"))
console.log(charCount("Vidyaaaaaa","V"))