var Ttable8 = function(){
    var hueastBT = ["08:17", "08:37", "08:57", "09:47", "10:17", "10:37", "10:57", "11:37", "12:57", "13:17", "13:37", "13:57", "14:47", "15:17", "15:37", "15:57", "16:47", "17:17", "17:37", "17:57",  "18:17",  "18:37",  "18:57"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = hueastBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#hueastB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대동쪽

setInterval(function() {
    Ttable8();
},600);
//갱신