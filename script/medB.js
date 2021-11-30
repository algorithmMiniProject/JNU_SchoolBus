var Ttable6 = function(){
    var medBT = ["08:15", "08:35", "08:55", "09:45", "10:15", "10:35", "10:55", "11:35", "12:55", "13:15", "13:35", "13:55", "14:45", "15:15", "15:35", "15:55", "16:45", "17:15", "17:35", "17:55",  "18:15",  "18:35",  "18:55"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = medBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#medB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//의전원

setInterval(function() {
    Ttable6();
},600);
//갱신