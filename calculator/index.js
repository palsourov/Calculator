
 const display=document.getElementById("display");

 function displaybtn(input){
    display.value += input;
 }
 function clearbtn(){
    display.value="";
 }
 function equalbtn(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error';
    }
      
 }

 function deletebtn(){

     display.value=display.value.toString().slice(0,-1);
 }