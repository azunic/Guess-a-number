function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const randomNumber=getRandomInt(100);
  console.log(randomNumber);

  var i=0;




function PogodiBroj(userNumber) {


    var userNumber = document.getElementById('broj').value;

    if (userNumber < 0 || userNumber > 100)
    {
      $('#littleModalRange').modal('show')
    }else{


      console.log("element koji je korisnik unio",userNumber);
 
      if (userNumber > randomNumber){
       
  
       $('#littleModal').modal('show')
       i+=1
       
       }
       else if (userNumber < randomNumber){

         $('#littleModal').modal('show')
     
   
       i+=1
       } else if (userNumber == randomNumber){
   
         $('#winModal').modal('show')
   
        i+=1
        }

    }
    $('#guessNumber').text(i);
    
}

  

function ResetFunction() {
  document.getElementById("myForm").reset();
}
    
    








