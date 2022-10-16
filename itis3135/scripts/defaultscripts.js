function greeting() {
    var form = document.getElementById("form");
    var name = form.elements[0];
    var mood = form.elements[1];
    var messages = document.getElementById("messages");
    console.log(messages);
    messages.innerHTML+="The Finley Inc. welcomes you, " + name + "! We're glad you are doing " + mood;
    console.log(messages.innerHTML);
}

function insultMe() {
    const insults = [
        "If I had a face like yours, I'd sue my parents",
        "There is no vaccine for your stupidity"
    ];
    const random = Math.floor(Math.random() * insults.length);
    console.log(random,insults[random]);
    messages.innerHTML = insults[random];

}

function complimentMe() {
    const compliments = [
        "You were cool way before hipsters were cool",
        "You're smart"
    ];
    const random = Math.floor(Math.random() * compliments.length);
    console.log(random,compliments[random]);
    messages.innerHTML = compliments[random];
}
function timesTable() {
    const timesTable1 = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    const timesTable2 = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    var random1 = Math.floor(Math.random() * timesTable1.length);
    var random2 = Math.floor(Math.random() * timesTable2.length);
    console.log(random1,timesTable1[random1], timesTable2[random2]);
    var first = timesTable1[random1];
    var second = timesTable2[random2];
    var multiply = first * second;
    messages.innerHTML = first + " * " + second + " = " + multiply;
}

function showDate() {
    var today = new Date();
    var time = today.toLocaleTimeString();
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    var day = days[today.getDay()];
    var date = today.toLocaleDateString();
    var dateTarget= document.getElementById("dateTarget");
    dateTarget.innerHTML = "Today is " + time + " on " + day + " " + date;
}