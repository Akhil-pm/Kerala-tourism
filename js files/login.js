function validate()
{

    let email= document.getElementById('email').value;
    let pwd= document.getElementById('pwd');
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/;
    var passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!$%@#£€*?&]{8,}$/;

    if(email=="")
{
 alert("All fields are required");
 return false;
}
else if(regexp.test(email)==false)
{
  alert("Enter a valid email id");
  return false;
}
if(pwd.value=="")
{
 alert("All fields are required");
 return false;
}

else if(passregexp.test(pwd.value)==false)
{
  alert("**** Enter a valid password ****");
  return false;
}
else{
  alert("Login success");
  return true;
}
}


let email= document.getElementById('email')
email.addEventListener('input',function(){
  checkMail(email.value)
})
function checkMail(mail)
{
  let regexp1=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/;
  if(regexp1.test(mail)==false)
    {
      document.getElementById('email').style.background="url(../images/invalid.png)";
      document.getElementById('email').style.backgroundRepeat ="no-repeat";
      document.getElementById('email').style.backgroundSize ="22px";
      document.getElementById('email').style.backgroundPosition ="98% 70%";
      document.getElementById('email').style.backgroundColor ="white";
    }
  else{
    document.getElementById('email').style.background="url(../images/valid.png)";
    document.getElementById('email').style.backgroundRepeat ="no-repeat";
    document.getElementById('email').style.backgroundSize ="22px";
    document.getElementById('email').style.backgroundPosition ="98% 70%";
    document.getElementById('email').style.backgroundColor ="white";

  }
  }