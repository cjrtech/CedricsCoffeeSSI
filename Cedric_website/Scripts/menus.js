var isShowing = false;
var dropdownMenu = null;
function show(id)
{
hide();
dropdownMenu = document.getElementById(id);
if (dropdownMenu != null){
    dropdownMenu.style.visibility = 'visible';
    isShowing = true;
}
}
function hide(){
    if (isShowing) dropdownMenu.style.visibility = 'hidden';
    isShowing = false;
}