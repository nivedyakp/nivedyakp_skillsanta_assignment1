// function qstn2(){
//     let input1 = document.getElementById("q2input1");
//     for (var x=0; x<=input1.value; x++) {
//         if (x === 0) {
//                 document.write(x +  " is even" + '<br/>'); 
//         }
//         else if(x ==2){
//                 document.write(x + " is even and prime" + '<br/>')
//         }
//         else if (x % 2 === 0) {
//                 document.write(x + " is even" + '<br/>');
//         }
//         // else if(x%2!=0){
//         //         document.write(x + " is odd" + '<br/>');
//         // }
//         // else{
//         //         document.write(x + " is odd" + '<br/>');
//         // }
// }
// let m = input1.length/2;
// for(let i=2;i<=m;i++){
//         if(input1.value%i!=0){
//                 document.write(x+"is odd and prime"+'<br/>');
//         }
//         else{
//                 document.write(x+"is odd"+'<br/>');
//         }
// }
// }


// function qstn2(){
//         let input1 = document.getElementById("q2input1");
//         let m = input1.value/2;
//         for(var x=0;x<=input1.value;x++){
//                 if(x==0){
//                         document.write(x+" is even"+'<br/>');
//                 }
//                 else if(x==2){
//                         document.write(x+" is even and prime"+'<br/>');
//                 }
//                 else if(x%2==0){
//                         document.write(x+" is even"+'<br/>');
//                 }
//                  else{
//                         for(let i=2;i<=m;i++){
//                                 if(input1.value%i!=0){
//                                         document.write(x+"is odd and prime"+'<br/>');
//                                 }
//                                 else{
//                                         document.write(x+" is odd"+'<br/>');
//                                 }
//                         }
//                 }
//         }
// }



// let input1 = document.getElementById("q2input1");
// function qstn2(){
// const higherNumber = input1.value;

// for (let i = 3; i <= higherNumber; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
// }






function qstn2(){
            let input1 = document.getElementById("q2input1");
            let count = 0;
            for (var x=0; x<=input1.value; x++) {
                if (x == 0) {
                        document.write(x +  " is even" + '<br/>'); 
                }
                else if(x == 1){
                        document.write(x+" is odd"+'<br/>');
                }
                else if(x == 2){
                        document.write(x + " is even and prime" + '<br/>')
                }
                else if (x % 2 == 0) {
                        document.write(x + " is even" + '<br/>');
                }
                else if(x%2!=0){
                        for(let i=2;i<=x;i++){
                                if(x%i!=0){
                                        count = count + 1;
                                        // break;
                                }
                                else{
                                        count = 0;
                                }
                        }
                        if(count>0){
                                document.write(x+" is odd and prime"+'<br/>');
                        }
                        else{
                                document.write(x+" is odd"+'<br/>');
                        }
                }
                
        }
        
}