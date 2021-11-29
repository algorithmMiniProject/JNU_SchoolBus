var Timetable1 = function(){
	  var mainAT = ["08:05", "08:25", "08:45", "09:30", "10:05", "10:25", "10:45", "11:20", "12:40", "13:05", "13:25", "13:45", "14:30", "14:49", "15:25", "15:45", "16:30", "17:00", "17:20", "17:40",  "18:00",  "18:20",  "18:40"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = mainAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#mainA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//정문

var Timetable2 = function(){
    var selAT = ["08:06", "08:26", "08:46", "09:31", "10:06", "10:26", "10:46", "11:21", "12:41", "13:06", "13:26", "13:46", "14:31", "14:50", "15:26", "15:46", "16:31", "17:01", "17:21", "17:41",  "18:01",  "18:21",  "18:41"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = selAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#selA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//제2도서관

var Timetable3 = function(){
    var oceanAT = ["08:07", "08:27", "08:47", "09:32", "10:07", "10:27", "10:47", "11:22", "12:42", "13:07", "13:27", "13:47", "14:32", "14:51", "15:27", "15:47", "16:32", "17:02", "17:22", "17:42",  "18:02",  "18:22",  "18:42"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = oceanAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#oceanA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//해양대1호관

var Timetable4 = function(){
    var admAT = ["08:08", "08:28", "08:48", "09:33", "10:08", "10:28", "10:48", "11:23", "12:43", "13:08", "13:28", "13:48", "14:33", "14:52", "15:28", "15:48", "16:33", "17:03", "17:23", "17:43",  "18:03",  "18:23",  "18:43"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = admAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#admA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//본관

var Timetable5 = function(){
    var sthallAT = ["08:09", "08:29", "08:49", "09:34", "10:09", "10:29", "10:49", "11:24", "12:44", "13:09", "13:29", "13:49", "14:34", "14:53", "15:29", "15:49", "16:34", "17:04", "17:24", "17:44",  "18:04",  "18:24",  "18:44"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = sthallAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#sthallA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생회관

var Timetable6 = function(){
    var huwestAT = ["08:10", "08:30", "08:50", "09:35", "10:10", "10:30", "10:50", "11:25", "12:45", "13:10", "13:30", "13:50", "14:35", "14:54", "15:30", "15:50", "16:35", "17:05", "17:25", "17:45",  "18:05",  "18:25",  "18:45"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = huwestAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#huwestA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대서쪽

var Timetable7 = function(){
    var dormAT = ["08:11", "08:31", "08:51", "09:36", "10:11", "10:31", "10:51", "11:26", "12:46", "13:11", "13:31", "13:51", "14:36", "14:55", "15:31", "15:51", "16:36", "17:06", "17:26", "17:46",  "18:06",  "18:26",  "18:46"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = dormAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#dormA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생생활관

var Timetable8 = function(){
    var hueastAT = ["08:12", "08:32", "08:52", "09:37", "10:12", "10:32", "10:52", "11:27", "12:47", "13:12", "13:32", "13:52", "14:37", "14:56", "15:32", "15:52", "16:37", "17:07", "17:27", "17:47",  "18:07",  "18:27",  "18:47"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = hueastAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#hueastA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대동쪽

var Timetable9 = function(){
    var libAT = ["08:13", "08:33", "08:53", "09:38", "10:13", "10:33", "10:53", "11:28", "12:48", "13:13", "13:33", "13:53", "14:38", "14:57", "15:33", "15:53", "16:38", "17:08", "17:28", "17:48",  "18:08",  "18:28",  "18:48"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = libAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#libA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//중앙도서관

var Timetable10 = function(){
    var medAT = ["08:14", "08:34", "08:54", "09:39", "10:14", "10:34", "10:54", "11:29", "12:49", "13:14", "13:34", "13:54", "14:39", "14:58", "15:34", "15:54", "16:39", "17:09", "17:29", "17:49",  "18:09",  "18:29",  "18:49"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = medAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#medA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//의전원

var Timetable11 = function(){
    var eng4AT = ["08:15", "08:35", "08:55", "09:40", "10:15", "10:35", "10:55", "11:30", "12:50", "13:15", "13:35", "13:55", "14:40", "14:59", "15:35", "15:55", "16:40", "17:10", "17:30", "17:50",  "18:10",  "18:30",  "18:50"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eng4AT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eng4A").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//공대4호관

var Timetable12 = function(){
    var eduAT =  ["08:16", "08:36", "08:56", "09:41", "10:16", "10:36", "10:56", "11:31", "12:51", "13:16", "13:36", "13:56", "14:41", "15:00", "15:36", "15:56", "16:41", "17:11", "17:31", "17:51",  "18:11",  "18:31",  "18:51"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = eduAT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#eduA").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//교양강의동

setInterval(function() {
    Timetable1();
    Timetable2();
    Timetable3();
    Timetable4();
    Timetable5();
    Timetable6();
    Timetable7();
    Timetable8();
    Timetable9();
    Timetable10();
    Timetable11();
    Timetable12();
},600);
//갱신