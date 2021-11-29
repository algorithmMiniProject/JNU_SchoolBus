var Ast = function(){
  var asT = ["02:05", "08:25", "08:45", "09:30", "10:05", "10:25", "10:45","11:20", "12:40", "13:05", "13:25", "13:45", "14:30", "15:05", "15:25", "15:45", "16:30", "17:00", "17:20", "17:40", "18:00", "18:20", "23:59"];
  
  var today = new Date().toUTCString().slice(0, 16);

  for(var i=0, l=asT.length; i<l; i++){
    asT[i] = new Date(today+" "+asT[i]);
  }

  var abus = asT;
  var update = setTimeout($.noop, 0);
  
  this.next = function(place){
    clearTimeout(update);
    var times = abus;
    var now = new Date();
    var d; //분구하기
    var next;
    for(var i=0, l=times.length; i<l; i++){
      if(times[i].getTime() >= now.getTime()){
        d = (times[i].getTime()-now.getTime())/(1000*60);
        if(d >= 60)
          next += Math.floor(d/60)+"hours and "+Math.round(d % 60)+" mins";
        else
          next += Math.round(d)+" mins";
        break;
      }
    }
    var fn = arguments.callee;
    var _this = this;
    update = setTimeout(function(){
      document.querySelector("#info").innerHTML = fn.call(_this, place);
    },(d+0.5-Math.floor(d+0.5))*60*1000+1000);
    return next;
  }
}

//실행함수

var timetable = new Ast();
document.onready = function(){
  document.querySelector("#info").innerHTML = timetable.next('point');
}
