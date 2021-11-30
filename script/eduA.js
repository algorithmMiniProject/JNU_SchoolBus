var Timetable12 = function(){
    var eduAT =  ["08:16", "08:36", "08:56", "09:41", "10:16", "10:36", "10:56", "11:31", "12:51", "13:16", "13:36", "13:56", "14:41", "15:00", "15:36", "15:56", "16:41", "17:11", "17:31", "17:51",  "18:11",  "18:31",  "18:51"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eduAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eduA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//교양강의동

setInterval(function() {
    Timetable12();
},600);
//갱신