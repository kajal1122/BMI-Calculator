
var btn = document.getElementById("submit")
var bmiRes = document.getElementById('bmiFinal')
var response = document.getElementById('response')
var reset = document.getElementById('reset')

//console.log(btn);
btn.addEventListener('click',function(event) {
         var age = Number(document.getElementById("age").value)
         var ht = Number(document.getElementById('ht').value)
         var wt = Number(document.getElementById('wt').value)
        // console.log(age);

          if(ht >= 999 )
         {
           response.innerText = "Please choose proper value of Height"
         }
          else if(wt >= 9999)
         {
             response.innerText = "Please choose proper value of Weight"
         }
         else {
           var ht_m = ht/100
           if (ht_m === 0) {
             bmiRes.innerText = "Invalid Data entered"
             response.innerText = "Please enter valid information"

           } else {
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
         }


         event.preventDefault()

})




reset.addEventListener('click',function(event){
  var age = Number(document.getElementById("age").value)
  var ht = Number(document.getElementById('ht').value)
  var wt = Number(document.getElementById('wt').value)

  age.innerText = "";
  ht.innerText = "";
  wt.innerText="";

})
