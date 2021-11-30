var Timetable2 = function(){
    var selAT = ["08:06", "08:26", "08:46", "09:31", "10:06", "10:26", "10:46", "11:21", "12:41", "13:06", "13:26", "13:46", "14:31", "14:50", "15:26", "15:46", "16:31", "17:01", "17:21", "17:41",  "18:01",  "18:21",  "18:41"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = selAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#selA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}

setInterval(function() {
    Timetable2();
},600);
//갱신