var Ttable12 = function(){
    var admBT = ["08:21", "08:21", "09:01", "09:51", "10:21", "10:41", "11:01", "11:41", "12:01", "13:21", "13:41", "14:01", "14:51", "15:21", "15:41", "16:01", "16:51", "17:21", "17:41", "18:01",  "18:21",  "18:41",  "19:01"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = admBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#admB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//본관

setInterval(function() {
    Ttable12();
},600);
//갱신