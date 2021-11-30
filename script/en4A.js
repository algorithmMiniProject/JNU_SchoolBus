var Timetable11 = function(){
    var eng4AT = ["08:15", "08:35", "08:55", "09:40", "10:15", "10:35", "10:55", "11:30", "12:50", "13:15", "13:35", "13:55", "14:40", "14:59", "15:35", "15:55", "16:40", "17:10", "17:30", "17:50",  "18:10",  "18:30",  "18:50"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eng4AT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eng4A").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//공대4호관


setInterval(function() {
    Timetable11();
},600);
//갱신