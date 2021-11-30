var Timetable1 = function(){
    var mainAT = ["08:05", "08:25", "08:45", "09:30", "10:05", "10:25", "10:45", "11:20", "12:40", "13:05", "13:25", "13:45", "14:30", "14:49", "15:25", "15:45", "16:30", "17:00", "17:20", "17:40",  "18:00",  "18:20",  "18:40"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = mainAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes;
    if(remainShuttle[0]==null){
        document.querySelector("#mainA").innerHTML="운행이 없습니다";
    }
    else{
        leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
        document.querySelector("#mainA").innerHTML= parseInt(leftMinutes / 60) + " 시 " + leftMinutes % 60 +" 분";}
}
//정문

setInterval(function() {
    Timetable1();
},600);
//갱신