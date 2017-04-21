// Do your work in this file.

//view



var view = document.createElement("div");
view.className = "view";
document.body.appendChild(view);

//   var view = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   view.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(view, currentDiv); 





// var view = document.createElement("div");
// document.body.appendChild(view);



//grass

var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);

//sun

var sun = document.createElement("div");
sun.className = "sun";
view.appendChild(sun);



// // while for ray from 1 to 5

var n = 0;

while (n < 6) {
  var ray = document.createElement("div")
  ray.className = ( "ray-" + (n + 1) );
  sun.appendChild(ray);
  n++;
}

// // mountain and mountain top 

var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain);

var mountainTop = document.createElement("div");
mountainTop.className = "mountain-top";
mountain.appendChild(mountainTop);

var t = 0 ;
do { 
  var mountainCap = document.createElement("div");
mountainCap.className = ( "mountain-cap-" + (t + 1 ) );
mountainTop.appendChild(mountainCap);
t++;

    
} while(t<3);


// document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   // and give it some content 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newDiv.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }




