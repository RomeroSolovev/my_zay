function  ymn(){
    var number1,number2,res;
    number1= document.getElementById('a1').value;
  number2= document.getElementById('a2').value;
    if((/\D/.test(number1)) || (/\D/.test(number2))){
        console.log('complete');
        document.getElementById('result').innerHTML = "Error"; 
     }
    else {
        console.log('not complete');
    res=number1*number2;
    document.getElementById('result').innerHTML=res;
    }
}