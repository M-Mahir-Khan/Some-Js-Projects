
const mySlider = document.getElementById("mySidebar")
const openbtn  = document.querySelector(".openbtn")

function toggleNav(){
  if(mySlider.style.width === "250px"){
    mySlider.style.width = "0";
    openbtn.innerHTML = "☰";
  }else{
    mySlider.style.width ="250px"
    openbtn.innerHTML = "✖";
  }

}