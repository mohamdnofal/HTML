console.log ('cars traiding is loading');

var $name = prompt ('Whats your name');
if ($name != '') {
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
    // to hide and show cars section
    var x = document.getElementById("cars"); //x refers to cars section in the page
    var t = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
      t.innerText="Hide";
    } else {
      x.style.display = "none";
      t.innerText="Show";
    }
  }

  var order = prompt("Hello, you like offroad or speed?");

while(order !== "offroad" && order !== "speed") {
  order = prompt("Hello, you like offroad or speed?");
}

var itemorder = '';

if(order == "offroad") {
  itemorder = '<img src="jeep.jpg"/>';
}

else if(order == "speed") {
  itemorder = '<img src="speed.jpg"/>';
}

var itemOfCars = prompt("How many cars do you want?");
var cars = '';

for(var i=0 ; i<itemOfCars ; i++)
{
  cars = cars + itemorder;
}
 
document.write(cars);



















