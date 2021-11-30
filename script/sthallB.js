var Ttable11 = function(){
    var sthallBT = ["08:20", "08:20", "09:00", "09:50", "10:20", "10:40", "11:00", "11:40", "12:00", "13:20", "13:40", "14:00", "14:50", "15:20", "15:40", "16:00", "16:50", "17:20", "17:40", "18:00",  "18:20",  "18:40",  "19:00"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = sthallBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#sthallB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생회관

setInterval(function() {
    Ttable11();
},600);
//갱신