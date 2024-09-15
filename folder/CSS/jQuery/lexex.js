function outerfunction() {
    let outerVar= 'I am outside';


    
function innerFunction(){
    console.log(outerVar);

}
innerFunction();
}

outerfunction();
