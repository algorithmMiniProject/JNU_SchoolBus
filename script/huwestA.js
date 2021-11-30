var Timetable6 = function(){
    var huwestAT = ["08:10", "08:30", "08:50", "09:35", "10:10", "10:30", "10:50", "11:25", "12:45", "13:10", "13:30", "13:50", "14:35", "14:54", "15:30", "15:50", "16:35", "17:05", "17:25", "17:45",  "18:05",  "18:25",  "18:45"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = huwestAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#huwestA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}

setInterval(function() {
    Timetable6();
},600);
//갱신