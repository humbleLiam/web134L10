
var changeButton = document.getElementById("changeTextBtn");

changeButton.onclick = function(){
    document.getElementById("message").innerHTML= "Text Changed Successfully!";
};




// change background color
// on load
window.onload = function(){
  
// creating the three rgb colours to create random color
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    //formating to css rgb
    newColor = "rgb("+x +","+y+","+z+")";  
 
    document.body.style.background = newColor;

    // adding the paragrahp dynamically
    var div = document.getElementById("container");
    div.innerHTML += '<p> New paragraph added dynamically! </p>'
};
//update text