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
        rarity: 3,
        pic: "assets/turtles/1.png"
    },
    {
        title: "Happiest Turtle",
        rarity: 4,
        pic: "assets/turtles/2.png"
    },
    {
        title: "Hedgehog Turtle",
        rarity: 1,
        pic: "assets/turtles/3.png"
    },
    {
        title: "Turtle on Turtle",
        rarity: 2,
        pic: "assets/turtles/4.png"
    },
    {
        title: "Turtle with monocle",
        rarity: 0,
        pic: "assets/turtles/5.png"
    },
    {
        title: "Spider Turtle",
        rarity: 3,
        pic: "assets/turtles/6.png"
    },
    {
        title: "Sad Turtle",
        rarity: 4,
        pic: "assets/turtles/7.png"
    },
    {
        title: "Laughing Turtle",
        rarity: 4,
        pic: "assets/turtles/8.png"
    },
    {
        title: "Wooden Turtle",
        rarity: 0,
        pic: "assets/turtles/9.png"
    },
    {
        title: "Saddest Turtle",
        rarity: 3,
        pic: "assets/turtles/10.png"
    },
    {
        title: "Epic Turtle",
        rarity: 5,
        pic: "assets/turtles/11.png"
    },
    {
        title: "Invisible Turtle",
        rarity: 3,
        pic: "assets/turtles/12.png"
    },
    {
        title: "King of Turtles",
        rarity: 5,
        pic: "assets/turtles/13.png"
    },
    {
        title: "Mutated Turtle",
        rarity: 3,
        pic: "assets/turtles/14.png"
    },
    {
        title: "Cook Turtle",
        rarity: 0,
        pic: "assets/turtles/15.png"
    },
    {
        title: "Sad Turtle",
        rarity: 2,
        pic: "assets/turtles/16.png"
    },
    {
        title: "Turtle with Rose",
        rarity: 5,
        pic: "assets/turtles/17.png"
    },
    {
        title: "Patriotic Turtle",
        rarity: 3,
        pic: "assets/turtles/18.png"
    },
    {
        title: "Turtle with Goggle Eyes",
        rarity: 0,
        pic: "assets/turtles/19.png"
    },
    {
        title: "Retro Turtle",
        rarity: 2,
        pic: "assets/turtles/20.png"
    },
    {
        title: "Evil Demon Turtle",
        rarity: 3,
        pic: "assets/turtles/21.png"
    },
    {
        title: "Happy Demon Turtle",
        rarity: 4,
        pic: "assets/turtles/22.png"
    },
    {
        title: "Cowboy Turtle",
        rarity: 2,
        pic: "assets/turtles/23.png"
    },
    {
        title: "Sad Turtle (curved mouth)",
        rarity: 2,
        pic: "assets/turtles/24.png"
    },
    {
        title: "Clown Turtle",
        rarity: 1,
        pic: "assets/turtles/25.png"
    },
]

var rarities = ["#00ff00","#222222","#00aaff","#aa00ff","#cc00ff","#aa0000"] // 0 - Common | 1 - Uncommon | 2 - Rare | 3 - Epic | 4 - Legendary | 5 - Mythical
var raritiesText = ["Common","Uncommon","Rare","Epic","Legendary","Mythical"]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var canClose = false

function roll(){
canClose = false
    document.getElementById("image-turtle").style.background = "linear-gradient(0deg, " + "#000000" + ",rgb(0,0,0,0)) no-repeat"
document.getElementById("q").textContent = ""
    document.getElementById("img-t").style.filter = "brightness(0)"

    document.getElementById("turtle-rarity").textContent = "???"
    document.getElementById("turtle-rarity").style.color = "#000"
    document.getElementById("turtle-title").textContent = "???"

    var result = Math.round(getRandomArbitrary(0,turtles.length-1))
    var quality = getRandomArbitrary(0.01,99.99)

    document.getElementById("img-t").src = turtles[result].pic

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 200);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 200);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 400);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 400);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 600);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 600);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 800);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 800);

    setTimeout(() => result = Math.round(getRandomArbitrary(0,turtles.length-1)), 1000);
    setTimeout(() => document.getElementById("img-t").src = turtles[result].pic, 1000);
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
        canClose = true
    }
}