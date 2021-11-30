var Timetable9 = function(){
    var libAT = ["08:13", "08:33", "08:53", "09:38", "10:13", "10:33", "10:53", "11:28", "12:48", "13:13", "13:33", "13:53", "14:38", "14:57", "15:33", "15:53", "16:38", "17:08", "17:28", "17:48",  "18:08",  "18:28",  "18:48"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = libAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#libA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//중앙도서관

setInterval(function() {
    Timetable9();
},600);
//갱신