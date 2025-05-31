const tg = window.Telegram.WebApp
tg.isExpanded
tg.expand()
tg.setHeaderColor("#001122")
tg.setBackgroundColor("#001122")
tg.setBottomBarColor("#001122")

var turtles = [
    {
        title: "Classic Turtle",
        rarity: 0,
        pic: "assets/turtles/0.png"
    },
    {
        title: "Rich Turtle",
        rarity: 6,
        pic: "assets/turtles/0.png"
    }
]

var rarities = ["#00ff00","#222222","#00aaff","#aa00ff","#cc00ff","#aa0000","#FFD700"]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function roll(){
    var result = Math.round(getRandomArbitrary(0,turtles.length))

    document.getElementById("img-t").src = turtles[result].pic
    document.getElementById("image-turtle").style.background = "linear-gradient(0deg, " + rarities[turtles[result].rarity] + ",rgb(0,0,0,0)) no-repeat"
    document.getElementById("img-t").style.filter = "brightness(1)"
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}