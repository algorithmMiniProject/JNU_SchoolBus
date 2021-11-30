var Ttable4 = function(){
    var eduBT =  ["08:13", "08:33", "08:53", "09:43", "10:13", "10:33", "10:53", "11:33", "12:53", "13:13", "13:33", "13:53", "14:43", "15:13", "15:33", "15:53", "16:43", "17:13", "17:33", "17:53",  "18:13",  "18:33",  "18:53"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eduBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eduB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//교양강의동

setInterval(function() {
    Ttable4();
},600);
//갱신