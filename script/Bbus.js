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

var Ttable6 = function(){
    var medBT = ["08:15", "08:35", "08:55", "09:45", "10:15", "10:35", "10:55", "11:35", "12:55", "13:15", "13:35", "13:55", "14:45", "15:15", "15:35", "15:55", "16:45", "17:15", "17:35", "17:55",  "18:15",  "18:35",  "18:55"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = medBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#medB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//의전원

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

var Ttable8 = function(){
    var hueastBT = ["08:17", "08:37", "08:57", "09:47", "10:17", "10:37", "10:57", "11:37", "12:57", "13:17", "13:37", "13:57", "14:47", "15:17", "15:37", "15:57", "16:47", "17:17", "17:37", "17:57",  "18:17",  "18:37",  "18:57"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = hueastBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#hueastB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대동쪽


var Ttable9 = function(){
    var dormBT = ["08:18", "08:38", "08:58", "09:48", "10:18", "10:38", "10:58", "11:38", "12:58", "13:18", "13:38", "13:58", "14:48", "15:18", "15:38", "15:58", "16:48", "17:18", "17:38", "17:58",  "18:18",  "18:38",  "18:58"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = dormBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#dormB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생생활관

var Ttable10 = function(){
    var huwestBT = ["08:19", "08:39", "08:59", "09:49", "10:19", "10:39", "10:59", "11:39", "12:59", "13:19", "13:39", "13:59", "14:49", "15:19", "15:39", "15:59", "16:49", "17:19", "17:39", "17:59",  "18:19",  "18:39",  "18:59"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = huwestBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#huwestB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//인문대서쪽

var Ttable11 = function(){
    var sthallBT = ["08:20", "08:20", "09:00", "09:50", "10:20", "10:40", "11:00", "11:40", "12:00", "13:20", "13:40", "14:00", "14:50", "15:20", "15:40", "16:00", "16:50", "17:20", "17:40", "18:00",  "18:20",  "18:40",  "19:00"];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var remainShuttle = sthallBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    var leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
    document.querySelector("#sthallB").innerHTML= parseInt(leftMinutes / 60) + " hours and " + leftMinutes % 60 +" minutes left for next bus";
}
//학생회관

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
    Ttable1();
    Ttable2();
    Ttable3();
    Ttable4();
    Ttable5();
    Ttable6();
    Ttable7();
    Ttable8();
    Ttable9();
    Ttable10();
    Ttable11();
    Ttable12();
},600);
//갱신