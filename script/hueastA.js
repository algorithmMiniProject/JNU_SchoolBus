var Timetable8 = function(){
    var hueastAT = ["08:12", "08:32", "08:52", "09:37", "10:12", "10:32", "10:52", "11:27", "12:47", "13:12", "13:32", "13:52", "14:37", "14:56", "15:32", "15:52", "16:37", "17:07", "17:27", "17:47",  "18:07",  "18:27",  "18:47"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = hueastAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#hueastA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대동쪽

setInterval(function() {
    Timetable8();
},600);
//갱신