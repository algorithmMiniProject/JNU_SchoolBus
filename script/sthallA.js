var Timetable5 = function(){
    var sthallAT = ["08:09", "08:29", "08:49", "09:34", "10:09", "10:29", "10:49", "11:24", "12:44", "13:09", "13:29", "13:49", "14:34", "14:53", "15:29", "15:49", "16:34", "17:04", "17:24", "17:44",  "18:04",  "18:24",  "18:44"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = sthallAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#sthallA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생회관

setInterval(function() {
    Timetable5();
},600);