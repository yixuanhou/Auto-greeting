let morningMessageArray = ["morning", "good morning", "enjoy your day", "hiya", "best wishes from Yixuan", "best wishes from Ana", "ohhhhhh hello"];
let seeyaMessageArray = ["good bye", "have a lovely night", "have a nice evening", "toodle pip"]

document.getElementById("morning-button").addEventListener("click", changeMorningMessage);
document.getElementById("seeya-button").addEventListener("click", changeSeeyaMessage);

function changeMorningMessage () {
    message = morningMessageArray[Math.floor(Math.random() * morningMessageArray.length)];
    return (readMessage());
}

function changeSeeyaMessage() {
    message = seeyaMessageArray[Math.floor(Math.random() * seeyaMessageArray.length)];
    return (readMessage());
}

function readMessage () {
    responsiveVoice.speak(message);
}
