function checkPass(){
    if (document.getElementById("code").value.toLowerCase() == "test"){
        alert("This is a test code!")
    } else if (document.getElementById("code").value.toLowerCase() == "monkey4clipping") {
        location.href = "/monkey4clipping_quiz"
    } else {
        alert("Code does not exist!")
    }
}
