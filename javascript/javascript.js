function openSlide() {
  if (document.getElementById("slideout-section").style.width == "0px"){
    document.getElementById("slideout-section").style.width = "250px";
    document.getElementById("slideout-button-sec").style.margin= "0px 0px 0px 250px";
  } else {
    document.getElementById("slideout-section").style.width = "0px";
    document.getElementById("slideout-button-sec").style.margin = "0";
  }

}
