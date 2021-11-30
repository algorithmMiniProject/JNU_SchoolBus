var Ttable3 = function(){
    var oceanBT = ["08:12", "08:32", "08:52", "09:42", "10:12", "10:32", "10:52", "11:32", "12:52", "13:12", "13:32", "13:52", "14:42", "15:12", "15:32", "15:52", "16:42", "17:12", "17:32", "17:52",  "18:12",  "18:32",  "18:52"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = oceanBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#oceanB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//해양대1호관

setInterval(function() {
    Ttable3();
},600);
//갱신