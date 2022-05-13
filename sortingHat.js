const body = document.querySelector("body");
var coords = document.getElementById("coords");
var wandDiv = document.getElementById("wandDiv");
// var moveOnMe = document.getElementById("mouseOnMe");

/* Setting the coordinates of the ball to the cursor position */

body.onmousemove = wandCoords;

function wandCoords(mouseEvent) {
  var xpos;
  var ypos;
  if (mouseEvent) {
    xpos = mouseEvent.pageX;
    ypos = mouseEvent.pageY;
    wandDiv.style.top = ypos + 1+ "px";
    wandDiv.style.left = xpos + 'px';
  }

}


// const body = document.querySelector("body");
var button = document.getElementById("button");
const div = document.querySelector("div");

button.onclick = function outputText() {
  var audio = document.getElementById("myAudio");
  var introAudio = document.getElementById("introAudio");
  var hatAudio = document.getElementById("hatAudio");
  audio.play();
  introAudio.play();
  var delayInMilliseconds = 15800; //5 second
  var seconddelayInMilliseconds = 9000;
  var thirddelayInMilliseconds = 5600;
  var endDelay = 18800;
  var endDelay2 = 5000;
  var endDelay3 = 6000;

  $("h3").empty();

  setTimeout(function () {
    $("#button").empty();
    var img = document.createElement("img");
    img.setAttribute("src", "Audio/Mcgonegal gif.gif");
    img.setAttribute("id", "picture");
    button.appendChild(img);
    div.appendChild(button);
  }, thirddelayInMilliseconds);

  setTimeout(function () {
    $("#button").empty();
    var img = document.createElement("img");
    img.setAttribute("src", "blake-johnson-animation-test.gif");
    img.setAttribute("id", "picture");
    button.appendChild(img);
    div.appendChild(button);
    hatAudio.play();
  }, seconddelayInMilliseconds);

  setTimeout(function () {
    //your code to be executed after 5 second
    var address = "https://wizard-world-api.herokuapp.com/Houses";
    $.get(address, (data) => {
      console.log(data);
      var randomHouse = Math.floor(Math.random() * 4);
      const answer = data[randomHouse]["name"];
      console.log(answer);
      const div2 = document.createElement("div");
      const anchor = document.createElement("a");
      anchor.innerText = answer;
      anchor.setAttribute("id", "houseText");
      div2.appendChild(anchor);
      body.appendChild(div2);
      if (answer == "Gryffindor") {
        var gryfAudio = document.getElementById("gryfAudio");
        gryfAudio.play();
        $("#button").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/61H-6Hj3liL._AC_SL1000_.jpg");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
      } else if (answer == "Ravenclaw") {
        var ravenAudio = document.getElementById("ravenAudio");
        ravenAudio.play();
        $("#button").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/ravenclaw flag.jpg");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
      } else if (answer == "Hufflepuff") {
        var huffAudio = document.getElementById("huffAudio");
        huffAudio.play();
        $("#button").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/Hufflepuff flag.jpg");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
      } else if (answer == "Slytherin") {
        var slythAudio = document.getElementById("slythAudio");
        slythAudio.play();
        $("#button").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/slytherin flag.jpg");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
      }
    });
  }, delayInMilliseconds);

  setTimeout(function () {
    var h2 = document.querySelector("h2");
    h2.innerText = "Click on your house flag to move on to wand selection!";
  }, endDelay);

  button.onclick = function outputText() {
    var wandAudio = document.getElementById("wandAudio");
    wandAudio.play();
    $("#button").empty();
    var h2 = document.querySelector("h2");
    h2.innerText = "Click on a wand to see if Olivander's has it in stock.";
    $("a").empty();
    $("#button").empty();
    var img = document.createElement("img");
    img.setAttribute("src", "Audio/wandChoice.jpeg");
    img.setAttribute("id", "picture");
    button.appendChild(img);
    div.appendChild(button);
    button.onclick = function outputText() {
      audio.play();
      $("#button").empty();
      var img = document.createElement("img");
      img.setAttribute("src", "Audio/fetchingwand.gif");
      img.setAttribute("id", "picture");
      button.appendChild(img);
      div.appendChild(button);
      setTimeout(function () {
        $("#button").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/handing wand.gif");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
      }, endDelay2);
      setTimeout(function () {
        $("#button").empty();
        $("h1").empty();
        $("h2").empty();
        var img = document.createElement("img");
        img.setAttribute("src", "Audio/wallpapertip_harry-potter-wallpaper_58575.jpg");
        img.setAttribute("id", "picture");
        button.appendChild(img);
        div.appendChild(button);
        var h1 = document.querySelector("h1");
        h1.innerText = "Congratulations! Your welcome ceremony is complete!";
      }, endDelay3);
    };
  };
};

//add div
//look up jquery.empty

//setAttribute but for source .attr in jquery
