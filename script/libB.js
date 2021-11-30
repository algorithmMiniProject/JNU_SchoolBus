var Ttable7 = function(){
    var libBT = ["08:16", "08:36", "08:56", "09:46", "10:16", "10:36", "10:56", "11:36", "12:56", "13:16", "13:36", "13:56", "14:46", "15:16", "15:36", "15:56", "16:46", "17:16", "17:36", "17:56",  "18:16",  "18:36",  "18:56"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = libBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#libB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//중앙도서관

setInterval(function() {
    Ttable7();
},600);
//갱신