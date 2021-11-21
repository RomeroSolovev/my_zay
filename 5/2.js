function  ymn(){
    var number1,number2,res;
    number1= document.getElementById('a1').value;
    number1=parseInt(number1);
    number2= document.getElementById('a2').value;
    number2=parseInt(number2);
    res=number1*number2;
    document.getElementById('result').innerHTML=res;
}