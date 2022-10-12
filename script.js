var tablinks= document.getElementsByClassName("tab-link")
var tabcontainer  = document.getElementsByClassName("tab-container")

function opentab(tabname){
 for(tablink of tablinks){
    tablink.classList.remove("active-link")
 }
 for(tabcontent of tabcontainer){
    tabcontent.classList.remove("active-tab")
 }
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}