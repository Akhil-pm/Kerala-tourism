function validate()
{

    let uname= document.getElementById('uname');
    let pwd= document.getElementById('pwd');
    if(uname.value=="" )
    {  
    alert("Empty Field");
    return false;
    }
    else if(pwd.value=="")
    {
      alert("Empty Field");
      return false;
    }
    else if(pwd.value.length<8)
    {
      alert("Password must be at least 8 characters long");
        return false;
    }
  
    else
    {
     return true;
    }
}