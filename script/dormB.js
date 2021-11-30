var Ttable9 = function(){
    var dormBT = ["08:18", "08:38", "08:58", "09:48", "10:18", "10:38", "10:58", "11:38", "12:58", "13:18", "13:38", "13:58", "14:48", "15:18", "15:38", "15:58", "16:48", "17:18", "17:38", "17:58",  "18:18",  "18:38",  "18:58"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = dormBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#dormB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생생활관

setInterval(function() {
    Ttable9();
},600);
//갱신