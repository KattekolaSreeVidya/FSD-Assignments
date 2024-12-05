// // // // // // // function reverseArray(arr){
// // // // // // //     let res=[]
// // // // // // //     for(let i=arr.length-1;i>=0;i--){
// // // // // // //         res.push(arr[i])
// // // // // // //     }
// // // // // // //     return res;
// // // // // // // }
// // // // // // // let myArray=[1,23,78]
// // // // // // // console.log(reverseArray(myArray))


// // // // // // // function reverseInplace(arr){
// // // // // // //     leftindex=0
// // // // // // //     rightindex=arr.length-1
// // // // // // //     while(leftindex<rightindex){
// // // // // // //         let temparray=arr[leftindex];
// // // // // // //         arr[leftindex]=arr[rightindex];
// // // // // // //         arr[rightindex]=temparray;
// // // // // // //         leftindex++
// // // // // // //         rightindex--
// // // // // // //     }
// // // // // // //     return arr;
// // // // // // // }
// // // // // // // let myArray=[1,23,78]
// // // // // // // console.log(reverseInplace(myArray))



// // // // // // function reverseInplace(arr){
// // // // // //     let leftIndex=0
// // // // // //     let rightIndex=arr.length-1
// // // // // //     while(leftIndex<rightIndex){
// // // // // //         let temparray=arr[leftIndex]
// // // // // //         arr[leftIndex]=arr[rightIndex]
// // // // // //         arr[rightIndex]=temparray
// // // // // //         leftIndex++
// // // // // //         rightIndex--
// // // // // //     }
// // // // // //     return arr 
// // // // // // }
// // // // // // let res=[1,2,4]
// // // // // // console.log(reverseInplace(res))






// // // // // function reverse(arr,leftindex,rightindex){
// // // // //     while(leftindex<rightindex){
// // // // //         let temp=arr[leftindex]
// // // // //         arr[leftindex]=arr[rightindex]
// // // // //         arr[rightindex]=temp
// // // // //         leftindex++
// // // // //         rightindex--
// // // // //     }
// // // // // }

// // // // // function middleindex(arr){
// // // // //     n=arr.length
// // // // //     let middleindex=Math.floor(n/2);
// // // // //     reverse(arr,0,middleindex-1);
// // // // //     reverse(arr,middleindex+1,n-1);
// // // // //     return arr;
// // // // // }

// // // // // let array=[7,6,5,4,3,2,1]
// // // // // console.log(middleindex(array))








// // // // function edho(start,end,step=1){
// // // //     let arr=[]
// // // //     while (step>0?start<=end:start>=end){
// // // //         arr.push(start)
// // // //         start+=step

// // // //     }
// // // //     return arr
// // // // }



// // // // function calculatesum(arr){
// // // //     let sum=0
// // // //     for(let i=0;i<arr.length;i++){
// // // //         sum+=arr[i]
// // // //     }
// // // //     return sum
// // // // }
// // // // res=edho(1,10)
// // // // console.log(res)

// // // // console.log(calculatesum(res))







// // // function generateRange(start,end,step=1){
// // //     let arr=[]
// // //     while(step>0?start<=end:start<=end){
// // //         arr.push(start)
// // //         start+=step
// // //     }
// // //     return arr
// // // }


// // // function sum(arr){
// // //     let sum=0
// // //     for(let i=0;i<arr.length;i++){
// // //         sum+=arr[i]
// // //     }
// // //     return sum
// // // }
// // // let res=generateRange(1,8)
// // // console.log(res)
// // // let sus=sum(res)
// // // console.log(sus)


// // // function reverse(arr){
// // //     let res=[]
// // //     for(let i=arr.length-1;i>=0;i--){
// // //         res.push(arr[i])
// // //     }
// // //     return res
// // // }
// // // let ress=[9,8,7,6]
// // // console.log(reverse(ress))


// // // function reverseInplace(arr){
// // //     let leftIndex=0;
// // //     let rightIndex=arr.length-1
// // //     while(leftIndex<rightIndex){
// // //         let tempArray=arr[leftIndex]
// // //         arr[leftIndex]=arr[rightIndex]
// // //         arr[rightIndex]=tempArray
// // //         leftIndex++
// // //         rightIndex--
// // //     }
// // //     return arr
// // // }
// // // let arruu=[9,8,7,6,19]
// // // console.log(reverseInplace(arruu))


// // function reverse(arr,start,end){
// //     while(start<end){
// //         let tempArray=arr[start]
// //         arr[start]=arr[end]
// //         arr[end]=tempArray
// //         start++
// //         end--
// //     }
// // }

// // function reverseMiddle(arr){
// //     n=arr.length
// //     let middle=Math.floor(n/2)
// //     reverse(arr,0,middle-1)
// //     reverse(arr,middle+1,n-1)
// //     return arr
// // }
// // let result=[1,2,3,4,5]
// // console.log(reverseMiddle(result))


// // // // function reverse(arr,leftindex,rightindex){
// // // //     while(leftindex<rightindex){
// // // //         let temp=arr[leftindex]
// // // //         arr[leftindex]=arr[rightindex]
// // // //         arr[rightindex]=temp
// // // //         leftindex++
// // // //         rightindex--
// // // //     }
// // // // }

// // // // function middleindex(arr){
// // // //     n=arr.length
// // // //     let middleindex=Math.floor(n/2);
// // // //     reverse(arr,0,middleindex-1);
// // // //     reverse(arr,middleindex+1,n-1);
// // // //     return arr;
// // // // }

// // // // let array=[7,6,5,4,3,2,1]
// // // // console.log(middleindex(array))




// // function arraytolist(arr){
// //     let list=null;
// //     for(let i=arr.length-1;i>=0;i--){
// //         list={value:arr[i],rest:list}
// //     }
// //     return list
// // }
// // console.log(arraytolist([10, 20]));

// // function listtoarray(arr){
// //     let arr=null;
// //     while(list){
// //         arr.push(list.value);
// //         list=list.rest;
// //     }
// //     return arr;
// // }




// function calculateRange(start,end,step=1){
//     let arr=[]
//     while(step>0?start<=end:start>=end){
//         arr.push(start)
//         start+=step
//     }
//     return arr
// }

// function calculateSum(arr){
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// let result=calculateRange(1,6)
// console.log(result)
// console.log(calculateSum(result))



// function reverse(arr){
//     let res=[]
//     for(let i=arr.length-1;i>=0;i--){
//         res.push(arr[i])
//     }
//     return res
// }
// let res=[9,8,6,2]
// console.log(reverse(res))


// function inPlace(arr){
//     let leftIndex=0
//     let rightIndex=arr.length-1
//     while(leftIndex<rightIndex){
//         let tempArray=arr[leftIndex]
//         arr[leftIndex]=arr[rightIndex]
//         arr[rightIndex]=tempArray
//         leftIndex++
//         rightIndex--
//     }
//     return arr;
// }
// let ress=[9,8,7,6,5]
// console.log(inPlace(ress))




// function reverse(arr,start,end){
//     while(start<end){
//         let tempArray=arr[start]
//         arr[start]=arr[end]
//         arr[end]=tempArray
//         start++
//         end--
//     }
// }
// function reverseMiddle(arr){
//     let n=arr.length;
//     let middle=Math.floor(n/2)
//     reverse(arr,0,middle-1)
//     reverse(arr,middle+1,n-1)
//     return arr;
// }

// // let solution=[2,3,4,5,6,7,8]
// // console.log(reverseMiddle(solution))


// let arrays=[]
// let fkattenedArray=arrays.reduce((accumulator,currentArray)=>{
//     return accumulator.concat()
// })



function arraytoList(arr){
    let list=null
    for(let i=arr.length-1;i>=0;i--){
        list={value:arr[i],rest:list}
    }
    return list
}


function listtoArray(list){
    let arr=[]
    while(list){
        arr.push(list.value)
        list=list.rest
    }
    return arr
}
console.log(arraytoList([10, 20]));
console.log(listtoArray(arraytoList([10, 20, 30])));





function listToArray(list){
    let arr=[]
    while(list){
        arr.push(list.value)
        list=list.rest
    }
    return arr

}