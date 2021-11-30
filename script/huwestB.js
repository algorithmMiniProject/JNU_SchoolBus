var Ttable10 = function(){
    var huwestBT = ["08:19", "08:39", "08:59", "09:49", "10:19", "10:39", "10:59", "11:39", "12:59", "13:19", "13:39", "13:59", "14:49", "15:19", "15:39", "15:59", "16:49", "17:19", "17:39", "17:59",  "18:19",  "18:39",  "18:59"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = huwestBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#huwestB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대서쪽

setInterval(function() {
    Ttable10();
},600);
//갱신