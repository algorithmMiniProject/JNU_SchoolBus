var Timetable3 = function(){
    var oceanAT = ["08:07", "08:27", "08:47", "09:32", "10:07", "10:27", "10:47", "11:22", "12:42", "13:07", "13:27", "13:47", "14:32", "14:51", "15:27", "15:47", "16:32", "17:02", "17:22", "17:42",  "18:02",  "18:22",  "18:42"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = oceanAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#oceanA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//해양대1호관

setInterval(function() {
    Timetable3();
},600);