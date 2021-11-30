var Timetable4 = function(){
    var admAT = ["08:08", "08:28", "08:48", "09:33", "10:08", "10:28", "10:48", "11:23", "12:43", "13:08", "13:28", "13:48", "14:33", "14:52", "15:28", "15:48", "16:33", "17:03", "17:23", "17:43",  "18:03",  "18:23",  "18:43"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = admAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#admA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//본관

setInterval(function() {
    Timetable4();
},600);