var btn_eng = document.getElementById('btn_eng')
var btn_metric = document.getElementById('btn_metric')
var btn = document.getElementById('submit')
var startover = document.getElementById('startover')
var showDiv = document.getElementById('res1')
var errorList = document.createElement("UL")


var input = document.createElement("INPUT");
input.setAttribute("type","number")
input.setAttribute("placeholder","Your Height(cm)")
input.setAttribute("min",0)
input.setAttribute("id","ht_cm")


res1.classList.add("hidden")


var ht_feat = document.createElement("SELECT")

var op1 = document.createElement('option')
op1.text = "Your Height(ft)"
op1.value=""

var op2 = document.createElement('option')
op2.text = "3 ft"
op2.value="3"

var op3 = document.createElement('option')
op3.text = "4 ft"
op3.value="4"

var op4 = document.createElement('option')
op4.text = "5 ft"
op4.value="5"

var op5 = document.createElement('option')
op5.text = "6 ft"
op5.value="6"

var op6 = document.createElement('option')
op6.text = "7 ft"
op6.value="7"

var op7 = document.createElement('option')
op7.text = "8 ft"
op7.value="8"



var ht_in_feat = document.createElement('SELECT')
var oc1 = document.createElement('option')
oc1.text = "In."
oc1.value=""

var oc2 = document.createElement('option')
oc2.text = "0 in"
oc2.value="0"

var oc3 = document.createElement('option')
oc3.text = "1 in"
oc3.value="1"

var oc4 = document.createElement('option')
oc4.text = "2 in"
oc4.value="2"

var oc5 = document.createElement('option')
oc5.text = "3 in"
oc5.value="3"

var oc6 = document.createElement('option')
oc6.text = "4 in"
oc6.value="4"

var oc7 = document.createElement('option')
oc7.text = "5 in"
oc7.value="5"

var oc8 = document.createElement('option')
oc8.text = "6 in"
oc8.value="6"

var oc9 = document.createElement('option')
oc9.text = "7 in"
oc9.value="7"

var oc10 = document.createElement('option')
oc10.text = "8 in"
oc10.value="8"

var oc11 = document.createElement('option')
oc11.text = "9 in"
oc11.value="9"

var oc12 = document.createElement('option')
oc12.text = "10 in"
oc12.value="10"

var oc13 = document.createElement('option')
oc13.text = "11 in"
oc13.value="11"




var isMetric = "false"




btn_metric.addEventListener('click',function(){
  isMetric = "true"
  btn_eng.removeAttribute("disabled");
  btn_metric.setAttribute("disabled", "true");
  document.getElementById('wt').placeholder="Your Weight(kg)"
  document.getElementById('ht_fit').remove();
  document.getElementById('ht_inch').remove();
  document.getElementById('ht_age').append(input)
  //document.getElementById('ht_fit').replaceWith(input);

  //document.getElementById('ht_inch').style.visibility = 'hidden';
  //btn_metric.removeAttribute("disabled")
  console.log(isMetric)
})

btn_eng.addEventListener('click',function(){
  isMetric = "false"
  btn_metric.removeAttribute("disabled")
 btn_eng.setAttribute("disabled", "true");
 document.getElementById('wt').placeholder="Your Weight(lbs)"
  document.getElementById('ht_cm').remove(); ///??? hm ht_cm ko remove krke phir ht_fit ko add kr rhe har baar
  // wo to thik hai par phle to ye error nhi ta.
  // udhar index.html me kuch change ki kya ,nhi
  ht_feat.setAttribute("id","ht_fit")
  ht_feat.add(op1);
  ht_feat.add(op2);
  ht_feat.add(op3);
  ht_feat.add(op4);
  ht_feat.add(op5);
  ht_feat.add(op6);
  ht_feat.add(op7);

  ht_in_feat.setAttribute("id","ht_inch")
  ht_in_feat.add(oc1)
  ht_in_feat.add(oc2)
  ht_in_feat.add(oc3)
  ht_in_feat.add(oc4)
  ht_in_feat.add(oc5)
  ht_in_feat.add(oc6)
  ht_in_feat.add(oc7)
  ht_in_feat.add(oc8)
  ht_in_feat.add(oc9)
  ht_in_feat.add(oc10)
  ht_in_feat.add(oc11)
  ht_in_feat.add(oc12)
  ht_in_feat.add(oc13)


   document.getElementById('ht_age').append(ht_feat)
   document.getElementById('ht_age').append(ht_in_feat)
  //document.getElementById('ht_inch').style.visibility = 'visible'









})

btn.addEventListener('click',function(event){
  //event.preventDefault();
  errorList.innerHTML = ""; // ab jo error bachega wo add hoga. test krte hiA JI // ye list ko reset krne ke liye
  // ar agar ye h to code nhi chalega na niche wala ? bolour na ag , ha ji ?
  // abhi wha tak nhi phuche. ahi error dikha rhe hai. wait
  // USME V HOGA METRIC WAL
  // yha error ke jagah eror tha may be y galat ho ab krke dekhte h
  // ek min. karo kaha tumko dkih rha tha
  //console.log(errorList)
  // ek min web cam kaat rhe uff kya hua , krenge
  // achcha


  if(isMetric === "true")
  {
    var age = Number(document.getElementById('age').value)
    var ht_cm = Number(document.getElementById('ht_cm').value)
    var wt = Number(document.getElementById('wt').value)
    console.log(age);
    console.log(ht_cm);
    console.log(wt);
    if(age ===  0)
    {

      var li_age = document.createElement("LI")
      li_age.innerText = "Please enter proper value of age."

      errorList.append(li_age)

    }
    if(ht_cm === 0)
    {
      var li_cm = document.createElement("LI")
      li_cm.innerText = "Please enter a valid value for Height."

      errorList.append(li_cm)

    }
    if(wt == 0)
    {
      var li_wt = document.createElement("LI")
      li_wt.innerText = "Please enter a valid value for Weight."


      errorList.append(li_wt)

    }
    if (!(document.getElementById('male').checked || document.getElementById('female').checked)) {
      var gender_error = document.createElement("LI")
      gender_error.innerText = "Please select a gender."
      errorList.append(gender_error)
    }
    document.querySelector('.error').append(errorList)
    if (errorList.innerHTML === "") {
      var ht_m = ht_cm/100;
      var bmi = wt/Math.pow(ht_m,2);
      var bmiFinal = bmi.toFixed(2);
      console.log(bmi);
      var type;
      if(bmi < 18.5)
      {
         type = "Underweight"
      }
      else if(bmi >= 18.5 && bmi <= 24.9)
      {
         type = "Normal Weight"
      }

      else if(bmi >= 25.0 && bmi <= 29.9)
      {
         type = "Overweight"
      }
      else {
         type = "Obese"
      }


      showDiv.classList.remove("hidden")
      var show = document.getElementById("show")
      show.innerText = "Based on your body mass index (BMI) of "+bmiFinal+", you are classed as "+type+" .";















    }



    event.preventDefault();



   }
  else {

    var age = Number(document.getElementById('age').value)
    var ht_inch = Number(document.getElementById('ht_inch').value)
    var ht_fit = Number(document.getElementById('ht_fit').value)
    var wt = Number(document.getElementById('wt').value)
    if(age === 0)
    {
      var li_age = document.createElement("LI")

      li_age.innerText = "Please enter proper value of age."
      //console.log("Test")
      errorList.append(li_age)

    }
    if(ht_fit === 0)
    {
      var li_ht = document.createElement("LI")

      li_ht.innerText = "Please enter a valid value for Height."
      //console.log("Test")
      // inch ko chod diye kyuki wo 0 ho skta hai ha
      errorList.append(li_ht)

    }
    if(wt === 0)
    {
      var li_wt = document.createElement("LI")

      li_wt.innerText = "Please enter a valid value for Weight."
      //console.log("Test")
      errorList.append(li_wt)

    }
    // agar dono me se koi bhi checked hai to tumko kuch nhi krna.
    // agar dono unchecked hai to krna hai. thik hai? ha pls kar digie na bs ye , hm kiye na itnna sara ag na pls
    // chup chap se check kro mushkil nhi hai. stharmtk kroo  ham help hkr dengehmko pta h ulti aa rha pani pi ke aate h kijie na pls
    if (!(document.getElementById('male').checked || document.getElementById('female').checked)) {
      var gender_error = document.createElement("LI")
      gender_error.innerText = "Please select a gender."
      errorList.append(gender_error)
    }

    document.querySelector('.error').append(errorList)
    if (errorList.innerHTML === "") {
      // to yaha pe ham errorList ko
      // hamlog rest tabhi kr rhe hai jab errorList empty ho.
     // kha chan
// ho gya na ? kg wala ho gya. ab result wala dekh rhe h
       var totalLen = ht_inch+ht_fit*12;
       //console.log(totalLen);
       var bmi = (wt /Math.pow(totalLen,2))*703;
       console.log("BMI: ", bmi.toFixed(2));
       var bmiFinal = bmi.toFixed(2);
       var type;
       if(bmi < 18.5)
       {
          type = "Underweight"
       }
       else if(bmi >= 18.5 && bmi <= 24.9)
       {
          type = "Normal Weight"
       }
       else if(bmi >= 25.0 && bmi <= 29.9)
       {
          type = "Overweight"
       }
       else {
          type = "Obese"
       }


       // showDiv = document.getElementById('res1')
       showDiv.classList.remove("hidden")
       //showDiv.classList.add("nothidden")
       var show = document.getElementById("show")

       show.innerText = "Based on your body mass index (BMI) of "+bmiFinal+", you are classed as "+type+" .";

       event.preventDefault();


    }



  }
  var res = document.getElementById('res1')
  //console.log(res);

  res.scrollIntoView();



})

// kha change krna h , smjh nhi aa rha ?
// jo metric wlaa if hai usme


startover.addEventListener('click',function(event){
  var temp = document.getElementById('bmi-heading')
  //console.log(form);
  temp.scrollIntoView();
  showDiv.classList.add("hidden")


})
