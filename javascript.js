///Spoiler Blocker
function toggle() {
    if (document.getElementById("block").style.visibility === "visible") {
      document.getElementById("block").style.visibility = "hidden"
    } else {
      document.getElementById("block").style.visibility = "visible"
    }
    if (document.getElementById("spoil").style.visibility === "hidden") {
      document.getElementById("spoil").style.visibility = "visible";
    } else {
      document.getElementById("spoil").style.visibility = "hidden";
    }
  
  }
  document.getElementById('myButton').addEventListener('click', toggle);
  ///<p style="visibility: hidden" id="spoiler">Message has been sent</p>
  ///<p style="visibility: visible" id="block">Email Us!</p>
  ///<button id="myButton">
    ///Toggle
  ///</button>