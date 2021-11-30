var Ttable5 = function(){
    var eng4BT = ["08:14", "08:34", "08:54", "09:44", "10:14", "10:34", "10:54", "11:34", "12:54", "13:14", "13:34", "13:54", "14:44", "15:14", "15:34", "15:54", "16:44", "17:14", "17:34", "17:54",  "18:14",  "18:34",  "18:54"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eng4BT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eng4B").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//공대4호관

setInterval(function() {
    Ttable5();
},600);
//갱신