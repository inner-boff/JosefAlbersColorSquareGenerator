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
    firstSquare.style.backgroundColor = getRandomColor();
    secondSquare.style.backgroundColor = getRandomColor();
    thirdSquare.style.backgroundColor = getRandomColor();
    fourthSquare.style.backgroundColor = getRandomColor();
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

function getRandomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

function getRandomColor() {
    var colorType = getRandomProperty(colors);
    var colorPos = randomNumber(0, colorType.length - 1);

    var randomColor = colorType[colorPos];

    return randomColor;
  };

