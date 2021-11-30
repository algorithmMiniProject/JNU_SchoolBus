var Timetable7 = function(){
    var dormAT = ["08:11", "08:31", "08:51", "09:36", "10:11", "10:31", "10:51", "11:26", "12:46", "13:11", "13:31", "13:51", "14:36", "14:55", "15:31", "15:51", "16:36", "17:06", "17:26", "17:46",  "18:06",  "18:26",  "18:46"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = dormAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#dormA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}

setInterval(function() {
    Timetable7();
},600);
//갱신