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
        rarity: 5,
        pic: "assets/turtles/1.png"
    }
]

var rarities = ["#00ff00","#222222","#00aaff","#aa00ff","#cc00ff","#aa0000"]
var raritiesText = ["Common","Uncommon","Rare","Epic","Legendary","Mythical"]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function roll(){
    document.getElementById("image-turtle").style.background = "linear-gradient(0deg, " + "#000000" + ",rgb(0,0,0,0)) no-repeat"
    document.getElementById("img-t").style.filter = "brightness(0)"

    document.getElementById("turtle-rarity").textContent = "???"
    document.getElementById("turtle-rarity").style.color = "#000"
    document.getElementById("turtle-title").textContent = "???"

    var result = Math.round(getRandomArbitrary(0,turtles.length-1))
    var quality = getRandomArbitrary(0.01,99.99)

    document.getElementById("img-t").src = turtles[result].pic

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 400);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 400);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 800);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 800);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 1200);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 1200);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 1600);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 1600);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 2000);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 2000);
    setTimeout(() => getOut(), 2000);

    function getOut(){
        document.getElementById("image-turtle").style.background = "linear-gradient(0deg, " + rarities[turtles[result].rarity] + ",rgb(0,0,0,0)) no-repeat"
        document.getElementById("img-t").style.filter = "brightness(1)"
        document.getElementById("turtle-rarity").textContent = raritiesText[turtles[result].rarity]
        document.getElementById("turtle-rarity").style.color = rarities[turtles[result].rarity]
        document.getElementById("turtle-title").textContent = turtles[result].title

        if (quality <= 3) {
            document.getElementById("q").style.color = "#ffd700"
            document.getElementById("q").textContent = "(Gold Quality) "
        } else {
            document.getElementById("q").textContent = ""
        }
    }
}