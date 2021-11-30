var Timetable10 = function(){
    var medAT = ["08:14", "08:34", "08:54", "09:39", "10:14", "10:34", "10:54", "11:29", "12:49", "13:14", "13:34", "13:54", "14:39", "14:58", "15:34", "15:54", "16:39", "17:09", "17:29", "17:49",  "18:09",  "18:29",  "18:49"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = medAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#medA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//의전원

setInterval(function() {
    Timetable10();
},600);
//갱신