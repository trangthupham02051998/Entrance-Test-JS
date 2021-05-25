   // random value generated
   var y = Math.floor(Math.random() * 10 + 1);
      
   // counting the number of guesses
   // made for correct Guess
   var guess = 1;
     
   document.getElementById("submitguess").onclick = function(){
     
  // number guessed by user     
  var x = document.getElementById("guessField").value;
 
    if(x == y)
    {    
        alert("Trúng thưởng" + ""
                + guess );
    }
    else if(x > y) /* if guessed number is greater
                    than actual number*/ 
    {    
        guess++;
        alert("Số may mắn nhỏ hơn ");
    }
    else
    {
        guess++;
        alert("Số may mắn lớn")
    }
 
  
}
