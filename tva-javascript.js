function toggle2() {
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
  document.getElementById('myButton2').addEventListener('click', toggle);