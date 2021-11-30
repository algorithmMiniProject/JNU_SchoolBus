var Ttable2 = function(){
    var selBT = ["08:11", "08:31", "08:51", "09:41", "10:11", "10:31", "10:51", "11:31", "12:51", "13:11", "13:31", "13:51", "14:41", "15:11", "15:31", "15:51", "16:41", "17:11", "17:31", "17:51",  "18:11",  "18:31",  "18:51"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = selBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#selB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//제2도서관

setInterval(function() {
    Ttable2();
},600);
//갱신