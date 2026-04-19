document.getElementById("agreement").value = ""
document.getElementById("nickname").value = ""
document.getElementById("question").style.display = "none"

if (localStorage.getItem("agreement") == "true") {document.getElementById("warning-bg").style.display = "none"}

monkeyPercentage = 0
streamerName = ""
questions = [
    {question: "Streamer's favourite meme - 67?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer - female?", yes: "Yes, she's woman", no: "No, he's man", answer4Monkey: true, answer: ""},
    {question: "Is streamer a black?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer using Twitch?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer - furry?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer - V-Tuber?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer under 18?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer playing Roblox regularly?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer turned on DonationAlerts/DonatePay?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer turned on MemeAlerts?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer played in Cry Of Fear?", yes: "Yes", no: "No", answer4Monkey: false, answer: ""},
    {question: "Is streamer hiding face?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer using Kick?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer playing Minecraft horror mods regularly?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer using word 'Texture' instead of 'Wall'", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer using voice changer software?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer drunk during streams regularly?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer smoking during streams regularly?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer - toxic?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""},
    {question: "Is streamer in Epstein's files?", yes: "Yes", no: "No", answer4Monkey: true, answer: ""}
]
currentQuestion = -1
console.log(questions.length)

function agreement(){
    let readedThis = document.getElementById("agreement").value == "I read this warning carefully"

    if (!readedThis) {
        alert("why you didnt read warning?")
    } else {
        document.getElementById("warning-bg").style.display = "none"
        localStorage.setItem("agreement", true)
    }
}

function nextQuestion(){
    currentQuestion++

    if (currentQuestion >= questions.length) {
        let finalResult = Math.max(0, Math.min(100, monkeyPercentage));

        document.getElementById("question").style.display = "none"
        document.getElementById("baitilka").style.display = "block"
        setTimeout(() => {document.getElementById("baitilka").style.display = "none";document.getElementById("result").style.display = "block";},6000)
        document.getElementById("notify-user").innerHTML = streamerName + " is a <u>monkey for clipping</u> at"
        document.getElementById("percentage-spoiler").innerText = finalResult
    } else {
        document.getElementById("q").innerText = questions[currentQuestion].question
        document.getElementById("q-yes").innerText = questions[currentQuestion].yes
        document.getElementById("q-no").innerText = questions[currentQuestion].no
    }
}

function configureStreamer(){
    streamerName = document.getElementById("nickname").value
    monkeyPercentage = 0

    document.getElementById("config").style.display = "none"
    document.getElementById("question").style.display = "block"

    nextQuestion()
}

function plusMonkey(){
    console.log("+monkey QUESTION "+(currentQuestion+1)+" | "+questions[currentQuestion].question)
    if (monkeyPercentage != 100) {
        monkeyPercentage += 5;
    }
}

function minusMonkey(){
    console.log("-monkey QUESTION "+(currentQuestion+1)+" | "+questions[currentQuestion].question)
    if (monkeyPercentage != 0) {
        monkeyPercentage -= 5;
    }
}

function yes(){
    if (questions[currentQuestion].answer4Monkey == true) {
        plusMonkey()
        questions[currentQuestion].answer = true
    } else {
        minusMonkey()
        questions[currentQuestion].answer = false
    }
    nextQuestion()
}

function no(){
    if (questions[currentQuestion].answer4Monkey == true) {
        minusMonkey()
        questions[currentQuestion].answer = false
    } else {
        plusMonkey()
        questions[currentQuestion].answer = true
    }
    nextQuestion()
}

function restart(){
    location.reload(true)
}