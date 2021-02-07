console.log ('cars traiding is loading');

var $name = prompt ('Whats your name');
if ($name != null) {
    document.getElementById("userName").innerHTML="Hello " + $name+", ";
    console.log("User Name is" + $name);
} else{
    console.log("User didn't fill the name!");
}

function changeColor($color) {
   var body = document.getElementsByTagName("BODY")[0];
   body.style.background= $color;
   console.log("change color to"+ $color);
}

function showCars() {
    var x = document.getElementById("cars");
    var t = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
      t.innerText="Hide";
    } else {
      x.style.display = "none";
      t.innerText="Show";
    }
  }




















