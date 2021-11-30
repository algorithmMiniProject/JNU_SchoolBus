var Ttable1 = function(){
      var mainBT = ["08:10", "08:30", "08:50", "09:40", "10:10", "10:30", "10:50", "11:30", "12:50", "13:10", "13:30", "13:50", "14:40", "15:10", "15:30", "15:50", "16:40", "17:10", "17:30", "17:50",  "18:10",  "18:30",  "18:50"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = mainBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#mainB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//정문

setInterval(function() {
    Ttable1();
},600);
//갱신