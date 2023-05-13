function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="celia"&& password=="c2464")
{
    alert("login succesfully");
    window.open("index.html");
    return false;

}
else
{
    alert("login failed");
}


}


