// try {
//     console.log("Outer try block");
    
//     try {
//         // Code that might throw an error
//         let result = undefinedVariable; // This will throw a ReferenceError
//     } catch (innerError) {
//         // Handle inner error
//         console.log("Inner catch block: " + innerError.message);
//     }

// } catch (outerError) {
//     // Handle outer error (if any)
//     console.log("Outer catch block: " + outerError.message);
// }
// try{
//     console.log("Outer try block");

//     try{
//         let result=undefinedvariable;

//     }catch(innerError){
//         console.log("Inner catch block:"+ innerError.message);
//     }
// }catch(outerError){
//     console.log("Outer catch block:" +outerError.message);
// }

try{
     result=10/w;
console.log(result);
}catch(error) {
    console.log("An error occurred:"+ error.message);
}finally {
    console.log("This section is run no matter what");
}
