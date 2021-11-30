var Ttable7 = function(){
    var libBT = ["08:16", "08:36", "08:56", "09:46", "10:16", "10:36", "10:56", "11:36", "12:56", "13:16", "13:36", "13:56", "14:46", "15:16", "15:36", "15:56", "16:46", "17:16", "17:36", "17:56",  "18:16",  "18:36",  "18:56"];
    var d = new Date(); //현재 날짜
    var h = d.getHours(); //현재 시각의 시간
    var m = d.getMinutes(); // 현재 시각의 분
    var remainShuttle = libBT.filter(bus => bus.substring(0,2) > h || (bus.substring(0,2) == h && bus.substring(3,5) > m));
    // filter는 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다. 조건을 만족하는 배열의 값이 없을 경우 undefined를 반환한다.
    // substring 함수를 이용해 문자열을 자른다. 기본 구조는 .sbustring(시작인덱스, 종료인덱스)로, 이를 이용해 table의 시간과 분을 구분했다. .substring(0,2)=시간 .substring(3,5)=분
    var leftMinutes;
    var name = '<span style="font-weight:bold;">중앙도서관B&nbsp;</span>';
    if(remainShuttle[0]==null){
        document.querySelector("#libB").innerHTML= name + "운행이 종료됐습니다";
    } // 버스운행이 멈춘 경우, filter의 조건을 만족하는 배열의 값이 없어 undefined을 반환한다.
    else{
        leftMinutes = (parseInt(remainShuttle[0].substring(0,2))*60 + parseInt(remainShuttle[0].substring(3,5))  - (parseInt(h) *60 + parseInt(m)));
        document.querySelector("#libB").innerHTML= name + parseInt(leftMinutes / 60) + " 시 " + leftMinutes % 60 +" 분 후 도착";}
        //parseInt는 문자열을 정수값으로 반환한다. 본 공식에서 모두 정수만 사용되기 때문에 쓰지 않아도 무방하지만, 문자열의 첫글자가 숫자가 아니면 NaN(Not a Number)로 반환되는 성질이 오류를 확인해주는 역할을 해줘서 사용했다.
}

setInterval(function() {
    Ttable7();
},600);

//사이트를 새로고침하지 않아도 남은 시간을 새로이 알 수 있게, 함수를 1초마다 갱신해준다.

