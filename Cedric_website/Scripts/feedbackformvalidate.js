function feedbackFormValidate()
{
    var contactFormObj = document.getElementById("contactForm");
    var firstName = contactFormObj.firstName.value;
    var lastName = contactFormObj.lastName.value;
    var phone = contactFormObj.phone.value;
    var email = contactFormObj.email.value;
    var beverage = contactFormObj.beverage.value;
    var food = contactFormObj.food.value;
    var everythingOK = true;

if (!validateName(firstName)){
    alert("Error: Invalid first name.");
    everythingOK = false;
}
if (!validateName(lastName)){
    alert("Error: Invalid last name.");
    everythingOK = false;
}
if (!validatePhone(phone)){
    alert("Error: Invalid phone number.");
    everythingOK = false;
}
if (!validateEmail(email)){
    alert("Error: Invalid e-mail address.");
    everythingOK = false;
}
if (everythingOK)  {
    const foodprice = parseInt(food.split('$')[1]);
    const beverageprice = parseInt(beverage.split('$')[1])
    const total = "Your total is: $" + (foodprice + beverageprice).toString();
    alert("1x " + beverage + '\n' + "1x " + food + '\n' + total);
}
}
function validateName(name){
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
    return true;
    else
    return false;
}
function validatePhone(phone){
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
    return true;
    else
    return false; 
}
function validateEmail(address){
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
    return true;
    else
    return false;
}