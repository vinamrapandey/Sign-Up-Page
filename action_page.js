function validateForm() 
{
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null)
    {
      alert("First Name must be filled out.");
      return false;
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "" || y  == null)
    {
      alert("Last Name must be filled out.");
      return false;
    }
    var z = document.forms["myForm"]["email"].value;
    if (z == "" || z == null)
    {
      alert("Email-ID must be filled out.");
      return false;
    }
    var p = document.forms["myForm"]["password"].value;
    if (p == "" || p == null)
    {
      alert("Password must be filled out.");
      return false;
    }
    var q = document.forms["myForm"]["cpassword"].value;
    if (q == "" || q == null)
    {
      alert("Confirm Password must be filled out.");
      return false;
    }
}
