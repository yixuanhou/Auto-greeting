let messageArray = ["morning", "good morning", "enjoy your day", "hiya", "best wishes from Yixuan", "best wishes from Ana", "ohhhhhh hello"];

document.getElementById("morning-button").addEventListener("click", changeMessage);

function changeMessage () {
    message = messageArray[Math.floor(Math.random() * messageArray.length)];
    return (readMessage())
}

function readMessage () {
    responsiveVoice.speak(message)
}
