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