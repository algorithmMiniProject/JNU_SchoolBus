var Timetable1 = function(){
	var shuttleOrange = ["09:01", "09:37", "10:03", "10:29", "10:55", "11:21", "11:47", "12:13", "12:39", "13:05", "13:31", "13:57", "14:23", "14:49", "15:25", "15:51", "16:17", "16:57", "17:37", "18:17"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = shuttleOrange.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#text").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next shuttle";
}
var timetable = new Timetable1();
document.onready = function(){
  document.querySelector("#text").innerHTML = timetable.next("a");
}
