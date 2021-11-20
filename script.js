var Timetable = function(){
  var abusT = ["08:05", "08:25", "08:45", "09:30", "10:05", "10:25", "10:45","11:20", "12:40", "13:05", "13:25", "13:45", "14:30", "15:05", "15:25", "15:45", "16:30", "17:00", "17:20", "17:40", "18:00", "18:20", "18:40"];
  var bbusT = ["08:10", "08:30", "08:50", "09:40", "10:10", "10:30", "10:50","11:30", "12:50", "13:10", "13:30", "13:50", "14:40", "15:10", "15:30", "15:50", "16:40", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50"];
  var fuckT = ["08:10", "08:30", "08:50", "09:40", "10:10", "10:30", "10:50","11:30", "12:50", "13:10", "13:30", "13:50", "14:40", "15:10", "15:30", "15:50", "16:40", "17:10", "17:30", "17:50", "18:10", "18:30", "18:50"];
  
  var today = new Date().toUTCString().slice(0, 16);

  for(var i=0, l=abusT.length; i<l; i++){
    abusT[i] = new Date(today+" "+abusT[i]);
  }
  for(var i=0, l=bbusT.length; i<l; i++){
    bbusT[i] = new Date(today+" "+bbusT[i]);
  }
  for(var i=0, l=fuckT.length; i<l; i++){
    fuckT[i] = new Date(today+" "+fuckT[i]);
  }
  
  var abus = abusT;
  var bbus = bbusT;
  var fuck = fuckT;
  var update = setTimeout($.noop, 0);
  
  this.next = function(place){
    clearTimeout(update);
    if(place == "a")
      var times = abus;
    else if(place =="b")
      var times = bbus;
    else
      times = fuck;
    var now = new Date();
    var d; //분구하기
    var next = '<span id="time">';
    for(var i=0, l=times.length; i<l; i++){
      if(times[i].getTime() >= now.getTime()){
        d = (times[i].getTime()-now.getTime())/(1000*60);
        if(d >= 60)
          next += Math.floor(d/60)+"</span>hours and "+Math.round(d % 60)+" mins";
        else
          next += Math.round(d)+"</span> mins";
        break;
      }
    }
    var fn = arguments.callee;
    var _this = this;
    update = setTimeout(function(){
      document.getElementById('info').innerHTML = fn.call(_this, place);
    },(d+0.5-Math.floor(d+0.5))*60*1000+1000);
    return next;
  }
}

//실행함수

var timetable = new Timetable();
document.onready = function(){
  document.getElementById('info').innerHTML = timetable.next('a');
}
$(document).ready(function(){
    $('#a').click(function(){
      if($(this).hasClass('active'))
        return;
      document.getElementById('info').innerHTML = timetable.next('a');
      $(this).addClass('active')
             .siblings().removeClass('active');
    });
    $('#b').click(function(){
      if($(this).hasClass('active'))
        return;
      document.getElementById('info').innerHTML = timetable.next('b');
      $(this).addClass('active')
             .siblings().removeClass('active');
    });
    $('#f').click(function(){
      if($(this).hasClass('active'))
        return;
      document.getElementById('info').innerHTML = timetable.next('f');
      $(this).addClass('active')
             .siblings().removeClass('active');
    });
});