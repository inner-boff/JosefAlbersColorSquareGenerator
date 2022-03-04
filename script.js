let colors = {
    reds: ["salmon", "indianred", "crimson", "firebrick", "red"],
    oranges: ["coral", "tomato", "gold", "orange", "orangered"],
    yellows: ["lemonchiffon", "papayawhip", "moccasin", "peachpuff", "khaki", "yellow"],
    greens: ["lawngreen", "chartreuse", "limegreen", "lime", "forestgreen", "green", "yellowgreen", "greenyellow", "springgreen", "seagreen", "olive"],
    cyans: ["cyan", "aqua", "aquamarine", "paleturquoise", "turquoise", "lightseagreen", "teal", "cadetblue"],
    blues: ["powderblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "darkblue", "navy", "midnightblue", "mediumslateblue", "slateblue"],
    purples: ["lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "blueviolet", "purple", "indigo"],
    pinks: ["pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred"]
  };


var mainSquare = document.querySelector("#main-square");
var firstSquare = document.querySelector("#first-square");
var secondSquare = document.querySelector("#second-square");
var thirdSquare = document.querySelector("#third-square");
var fourthSquare = document.querySelector("#fourth-square");

mainSquare.addEventListener("click", changeColor, true);

function changeColor(e){
    firstSquare.style.backgroundColor = "red";
    secondSquare.style.backgroundColor = "gold";
    thirdSquare.style.backgroundColor = "khaki";
    fourthSquare.style.backgroundColor = "yellow";
};

// tengo un objeto "colors" con pares key:values tipo diccionario pero not quite porque es javascript

// hacemos una función para encontrar un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


//ejemplo de color quiz - one html page challenge

//   function randomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function setButton(id, val) {
//     var button = document.getElementById("answer-" + id);
//     button.innerHTML = val;
//     button.dataset["value"] = val;
//   }

//   function getRandomProperty(obj) {
//     var keys = Object.keys(obj);
//     return obj[keys[(keys.length * Math.random()) << 0]];
//   }

//   function setRandomBackgroundColor() {
//     var colorType = getRandomProperty(colors);
//     var colorPos = randomNumberBetween(0, colorType.length - 1);

//     body.style.background = colorType[colorPos];
//     body.dataset["value"] = colorType[colorPos];

//     return [colorType, colorPos];
//   }