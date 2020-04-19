function validate()
{
    let fname= document.getElementById('FName');
    let lname= document.getElementById('LName');
    let uname= document.getElementById('UserName');
    let phno= document.getElementById('phoneNumber');
    let email= document.getElementById('inputEmail').value;
    let pass= document.getElementById('InputPassword1');
    let cpass= document.getElementById('confirmPassword');
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/;
    var phregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!$%@#£€*?&]{8,}$/;
   

    let name1= document.getElementById("name1");
    let name2= document.getElementById("name2");
    let uname1= document.getElementById("usname");
    let pnum= document.getElementById("pnum");
    let mail= document.getElementById("mail");
    let pass1= document.getElementById("pass1");
    let pass2= document.getElementById("pass2");
    
    if(fname.value=="")
    {
     alert("All fields are required");
     name1.style.visibility="visible";
     return false;
}
else{
  name1.style.visibility="hidden";
}

if(lname.value=="")
    {
     alert("All fields are required");
     name2.style.visibility="visible";
     return false;
}
else{
  name2.style.visibility="hidden";
}

if(uname.value=="")
{
 alert("All fields are required");
 uname1.style.visibility="visible";
 return false;
}
else{
uname1.style.visibility="hidden";
}


if(phno.value=="")
{
 alert("All fields are required");
 pnum.style.visibility="visible";
 return false;
}
else if(phregexp.test(phno.value)==false)
{
  alert("Enter a valid phone number");
  pnum.innerHTML="** Enter a valid phone number";
  pnum.style.visibility="visible";
  return false;
}
else{
  pnum.innerHTML="";
pnum.style.visibility="hidden";
}

   
if(email.value=="")
{
 alert("All fields are required");
 mail.style.visibility="visible";
 return false;
}
else if(regexp.test(email)==false)
{
  alert("Enter a valid email id");
  mail.innerHTML="** Enter a valid email id";
  mail.style.visibility="visible";
  return false;
}
else{
mail.style.visibility="hidden";
}

if(pass.value=="")
{
 alert("All fields are required");
 pass1.style.visibility="visible";
 return false;
}

else if(passregexp.test(pass.value)==false)
{
  alert("**** Password must contain ****\n \n 1.At least one uppercase.\n 2.At least one lowercase.\n 3.At least one number.\n 4.Minimum 8 characters.");
  pass1.innerHTML="** Enter a valid password";
  pass1.style.visibility="visible";
  return false;
}
else{
  pass1.innerHTML="";
pass1.style.visibility="hidden";
}


if(cpass.value=="")
{
 alert("All fields are required");
 pass2.style.visibility="visible";
 return false;
}
else if(pass.value!=cpass.value)
{
  alert("Passwords doesnot match");
  pass2.innerHTML="** Passwords doesnot match";
  pass2.style.visibility="visible";
  return false;
}
else{
  pass2.innerHTML="";
pass2.style.visibility="hidden";
alert("Signup success");
return true;
}

}

//************** STRENGTH PROGRESSION **********************/

let pass= document.getElementById('InputPassword1');
pass.addEventListener('keyup',function(){
    checkPassword(pass.value)
  })
  function checkPassword(password)
  {
      var prog=document.getElementById('prog');
    var strengthBar= document.getElementById('strength');
    var strength=0;
    if(password.match(/[a-zA-Z0-9]+/))
    {
      strength += 1;
  
    }
    if((password.length>4)&&((password.match(/(?=.*[a-z])(?=.*[A-Z])/))|| (password.match(/(?=.*[a-z])(?=.*[0-9])/)) || (password.match(/(?=.*[0-9])(?=.*[A-Z])/) )))
    {
      strength += 1;
  
    }
 
    if((password.length>=8)&&(password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)))
    {
      strength += 1;
  
    }
    switch(strength)
    {
      case 0: strengthBar.style.width='0%';
              prog.style.visibility='hidden';
              strengthBar.style.backgroundColor='red';
              document.getElementById('strength1').style.visibility='hidden';
              break;
      case 1: strengthBar.style.width='33.33%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='red';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Poor"
              document.getElementById('strength1').style.color='red'
              break;
      case 2: strengthBar.style.width='66.66%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='orange';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Medium"
              document.getElementById('strength1').style.color='orange'
              break;
      case 3: strengthBar.style.width='100%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='green';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Strong"
              document.getElementById('strength1').style.color='green'
              break;

  }

}