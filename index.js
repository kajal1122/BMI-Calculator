
var btn = document.getElementById("submit")
var bmiRes = document.getElementById('bmiFinal')
var response = document.getElementById('response')

//console.log(btn);
btn.addEventListener('click',function(event) {
         var age = Number(document.getElementById("age").value)
         var ht = Number(document.getElementById('ht').value)
         var wt = Number(document.getElementById('wt').value)
         if(ht >= 999 )
         {
           alert("Please choose proper value of Height")
         }
         if(wt >= 9999)
         {
           alert("Please choose proper value of Weight")
         }
         else {
           var ht_m = ht/100
           var bmi = wt /Math.pow(ht_m,2)
           var bmiFinal = Math.round(bmi)
           bmiRes.innerText = bmiFinal
           if(bmiFinal < 18.5)
           {
             response.innerText = "Under Weight"
           }
           else if(bmiFinal >= 18.5 && bmiFinal <= 24.9)
           {
             response.innerText = "Normal Weight"
           }
           else if(bmiFinal >= 25.0 && bmiFinal <= 29.9)
           {
             response.innerText = "Over Weight"
           }
           else {
             {
               response.innerText = "Obese"
             }
           }
           console.log(bmiFinal)


         }


         event.preventDefault()

})


/*function calculateBMI(event)
{
  var age = document.getElementById('age').value
  var ht = document.getElementById('ht').value
  var wt = document.getElementById('wt').value

   var bmi = Math.round(wt/Math.pow(ht,2) * 10000);
   console.log(Math.round(bmi * 100) / 100);
   event.preventDefault();




}*/
