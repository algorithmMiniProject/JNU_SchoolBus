

			//마커 이미지
			var imageSrc_A = 'https://cdn-icons-png.flaticon.com/512/3448/3448339.png', // A노선 마커(빨강) 이미지의 주소입니다  
			imageSrc_B = 'https://cdn-icons-png.flaticon.com/512/3448/3448314.png', // B노선 마커(파랑) 이미지의 주소입니다
			imageSize = new kakao.maps.Size(27, 27), // 마커이미지의 크기입니다
    		imageOption = {offset: new kakao.maps.Point(16, 27)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
			
			// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
			var markerImage_A = new kakao.maps.MarkerImage(imageSrc_A, imageSize, imageOption);	//A노선
			var markerImage_B = new kakao.maps.MarkerImage(imageSrc_B, imageSize, imageOption);	//B노선


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


			// 마커를 생성합니다
			// A노선 마커이미지 설정
			var marker1_A = new kakao.maps.Marker({
				position: markerPosition1_A,
				image: markerImage_A
			});
			marker1_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker2_A = new kakao.maps.Marker({
				position: markerPosition2_A,
				image: markerImage_A 
			});
			marker2_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker3_A = new kakao.maps.Marker({
				position: markerPosition3_A,
				image: markerImage_A 
			});
			marker3_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker4_A = new kakao.maps.Marker({
				position: markerPosition4_A,
				image: markerImage_A 
			});
			marker4_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker5_A = new kakao.maps.Marker({
				position: markerPosition5_A,
				image: markerImage_A 
			});
			marker5_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker6_A = new kakao.maps.Marker({
				position: markerPosition6_A,
				image: markerImage_A 
			});
			marker6_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker7_A = new kakao.maps.Marker({
				position: markerPosition7_A,
				image: markerImage_A 
			});
			marker7_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker8_A = new kakao.maps.Marker({
				position: markerPosition8_A,
				image: markerImage_A 
			});
			marker8_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker9_A = new kakao.maps.Marker({
				position: markerPosition9_A,
				image: markerImage_A 
			});
			marker9_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker10_A = new kakao.maps.Marker({
				position: markerPosition10_A,
				image: markerImage_A 
			});
			marker10_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker11_A = new kakao.maps.Marker({
				position: markerPosition11_A,
				image: markerImage_A 
			});
			marker11_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker12_A = new kakao.maps.Marker({
				position: markerPosition12_A,
				image: markerImage_A 
			});
			marker12_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker13_A = new kakao.maps.Marker({
				position: markerPosition13_A,
				image: markerImage_A 
			});
			marker13_A.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다
				

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


			// B노선 마커이미지 설정
			var marker1_B = new kakao.maps.Marker({
				position: markerPosition1_B,
				image: markerImage_B
			});
			marker1_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker2_B = new kakao.maps.Marker({
				position: markerPosition2_B,
				image: markerImage_B
			});
			marker2_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker3_B = new kakao.maps.Marker({
				position: markerPosition3_B,
				image: markerImage_B 
			});
			marker3_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker4_B = new kakao.maps.Marker({
				position: markerPosition4_B,
				image: markerImage_B
			});
			marker4_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker5_B = new kakao.maps.Marker({
				position: markerPosition5_B,
				image: markerImage_B 
			});
			marker5_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker6_B = new kakao.maps.Marker({
				position: markerPosition6_B,
				image: markerImage_B 
			});
			marker6_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker7_B = new kakao.maps.Marker({
				position: markerPosition7_B,
				image: markerImage_B 
			});
			marker7_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker8_B = new kakao.maps.Marker({
				position: markerPosition8_B,
				image: markerImage_B 
			});
			marker8_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker9_B = new kakao.maps.Marker({
				position: markerPosition9_B,
				image: markerImage_B 
			});
			marker9_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker10_B = new kakao.maps.Marker({
				position: markerPosition10_B,
				image: markerImage_B 
			});
			marker10_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker11_B = new kakao.maps.Marker({
				position: markerPosition11_B,
				image: markerImage_B
			});
			marker11_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker12_B = new kakao.maps.Marker({
				position: markerPosition12_B,
				image: markerImage_B
			});
			marker12_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			var marker13_B = new kakao.maps.Marker({
				position: markerPosition13_B,
				image: markerImage_B
			});
			marker13_B.setMap(map);	// 마커가 지도 위에 표시되도록 설정합니다

			

			// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
			// marker.setMap(null); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
		//마커 클릭이벤트//

		//A노선
		//정문_A
		// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
		var iwContent1_A = '<a href="javascript:Timetable1();"></a>'+'<div style="padding:5px;" id="mainA">'+'</div>';
		var infowindow1_A = new kakao.maps.InfoWindow({
			content : iwContent1_A
		});
		// 마커에 마우스오버 이벤트를 등록합니다
		kakao.maps.event.addListener(marker1_A, 'mouseover', function() {
			// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
			infowindow1_A.open(map, marker1_A);
		});
		// 마커에 마우스아웃 이벤트를 등록합니다
		kakao.maps.event.addListener(marker1_A, 'mouseout', function() {
			// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
			infowindow1_A.close();
		});

		//약학대학(구 제2도서관)_A
		var iwContent2_A = '<a href="javascript:Timetable2();"></a>'+'<div style="padding:5px;" id="selA">'+'</div>';
		var infowindow2_A = new kakao.maps.InfoWindow({
			content : iwContent2_A
		});
		kakao.maps.event.addListener(marker2_A, 'mouseover', function() {
			infowindow2_A.open(map, marker2_A);
		});
		kakao.maps.event.addListener(marker2_A, 'mouseout', function() {
			infowindow2_A.close();
		});

		//해양대1호관_A
		var iwContent3_A = '<a href="javascript:Timetable3();"></a>'+'<div style="padding:5px;" id="oceanA">'+'</div>';
		var infowindow3_A = new kakao.maps.InfoWindow({
			content : iwContent3_A
		});
		kakao.maps.event.addListener(marker3_A, 'mouseover', function() {
			infowindow3_A.open(map, marker3_A);
		});
		kakao.maps.event.addListener(marker3_A, 'mouseout', function() {
			infowindow3_A.close();
		});
		
		//본관_A
		var iwContent4_A = '<a href="javascript:Timetable4();"></a>'+'<div style="padding:5px;" id="admA">'+'</div>';
		var infowindow4_A = new kakao.maps.InfoWindow({
			content : iwContent4_A
		});
		kakao.maps.event.addListener(marker4_A, 'mouseover', function() {
			infowindow4_A.open(map, marker4_A);
		});
		kakao.maps.event.addListener(marker4_A, 'mouseout', function() {
			infowindow4_A.close();
		});

		//학생회관_A
		var iwContent5_A = '<a href="javascript:Timetable5();"></a>'+'<div style="padding:5px;" id="sthallA">'+'</div>';
		var infowindow5_A = new kakao.maps.InfoWindow({
			content : iwContent5_A
		});
		kakao.maps.event.addListener(marker5_A, 'mouseover', function() {
			infowindow5_A.open(map, marker5_A);
		});
		kakao.maps.event.addListener(marker5_A, 'mouseout', function() {
			infowindow5_A.close();
		});

		//인문대서쪽_A
		var iwContent6_A = '<a href="javascript:Timetable6();"></a>'+'<div style="padding:5px;" id="huwestA">'+'</div>';
		var infowindow6_A = new kakao.maps.InfoWindow({
			content : iwContent6_A
		});
		kakao.maps.event.addListener(marker6_A, 'mouseover', function() {
			infowindow6_A.open(map, marker6_A);
		});
		kakao.maps.event.addListener(marker6_A, 'mouseout', function() {
			infowindow6_A.close();
		});

		//학생생활관_A
		var iwContent7_A = '<a href="javascript:Timetable7();"></a>'+'<div style="padding:5px;" id="dormA">'+'</div>';
		var infowindow7_A = new kakao.maps.InfoWindow({
			content : iwContent7_A
		});
		kakao.maps.event.addListener(marker7_A, 'mouseover', function() {
			infowindow7_A.open(map, marker7_A);
		});
		kakao.maps.event.addListener(marker7_A, 'mouseout', function() {
			infowindow7_A.close();
		});

		//인문대동쪽(학생생활관5호관)_A
		var iwContent8_A = '<a href="javascript:Timetable8();"></a>'+'<div style="padding:5px;" id="hueastA">'+'</div>';
		var infowindow8_A = new kakao.maps.InfoWindow({
			content : iwContent8_A
		});
		kakao.maps.event.addListener(marker8_A, 'mouseover', function() {
			infowindow8_A.open(map, marker8_A);
		});
		kakao.maps.event.addListener(marker8_A, 'mouseout', function() {
			infowindow8_A.close();
		});

		//중앙도서관_A
		var iwContent9_A = '<a href="javascript:Timetable9();"></a>'+'<div style="padding:5px;" id="libA">'+'</div>';
		var infowindow9_A = new kakao.maps.InfoWindow({
			content : iwContent9_A
		});
		kakao.maps.event.addListener(marker9_A, 'mouseover', function() {
			infowindow9_A.open(map, marker9_A);
		});
		kakao.maps.event.addListener(marker9_A, 'mouseout', function() {
			infowindow9_A.close();
		});

		//의전원_A
		var iwContent10_A = '<a href="javascript:Timetable10();"></a>'+'<div style="padding:5px;" id="medA">'+'</div>';
		var infowindow10_A = new kakao.maps.InfoWindow({
			content : iwContent10_A
		});
		kakao.maps.event.addListener(marker10_A, 'mouseover', function() {
			infowindow10_A.open(map, marker10_A);
		});
		kakao.maps.event.addListener(marker10_A, 'mouseout', function() {
			infowindow10_A.close();
		});

		//공대4호관_A
		var iwContent11_A = '<a href="javascript:Timetable11();"></a>'+'<div style="padding:5px;" id="eng4A">'+'</div>';
		var infowindow11_A = new kakao.maps.InfoWindow({
			content : iwContent11_A
		});
		kakao.maps.event.addListener(marker11_A, 'mouseover', function() {
			infowindow11_A.open(map, marker11_A);
		});
		kakao.maps.event.addListener(marker11_A, 'mouseout', function() {
			infowindow11_A.close();
		});

		//해양대4호관_A
		var iwContent12_A = '<div style="padding:5px;">해양대4호관 A노선 버스시간표</div>';
		var infowindow12_A = new kakao.maps.InfoWindow({
			content : iwContent12_A
		});
		kakao.maps.event.addListener(marker12_A, 'mouseover', function() {
			infowindow12_A.open(map, marker12_A);
		});
		kakao.maps.event.addListener(marker12_A, 'mouseout', function() {
			infowindow12_A.close();
		});

		//교양강의동_A
		var iwContent13_A = '<a href="javascript:Timetable12();"></a>'+'<div style="padding:5px;" id="eduA">'+'</div>';
		var infowindow13_A = new kakao.maps.InfoWindow({
			content : iwContent13_A
		});
		kakao.maps.event.addListener(marker13_A, 'mouseover', function() {
			infowindow13_A.open(map, marker13_A);
		});
		kakao.maps.event.addListener(marker13_A, 'mouseout', function() {
			infowindow13_A.close();
		});

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		//B노선
		//정문_B
		// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
		var iwContent1_B = '<a href="javascript:Ttable1();"></a>'+'<div style="padding:5px;" id="mainB">'+'</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
		// 인포윈도우를 생성합니다
		var infowindow1_B = new kakao.maps.InfoWindow({
			content : iwContent1_B
		});
		// 마커에 마우스오버 이벤트를 등록합니다
		kakao.maps.event.addListener(marker1_B, 'mouseover', function() {
			// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
			infowindow1_B.open(map, marker1_B);
		});
		// 마커에 마우스아웃 이벤트를 등록합니다
		kakao.maps.event.addListener(marker1_B, 'mouseout', function() {
			// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
			infowindow1_B.close();
		});

		//약학대학(구 제2도서관)_B
		var iwContent2_B = '<a href="javascript:Ttable2();"></a>'+'<div style="padding:5px;" id="selB">'+'</div>';
		var infowindow2_B = new kakao.maps.InfoWindow({
			content : iwContent2_B
		});
		kakao.maps.event.addListener(marker2_B, 'mouseover', function() {
			infowindow2_B.open(map, marker2_B);
		});
		kakao.maps.event.addListener(marker2_B, 'mouseout', function() {
			infowindow2_B.close();
		});

		//해양대1호관_B
		var iwContent3_B = '<a href="javascript:Ttable3();"></a>'+'<div style="padding:5px;" id="oceanB">'+'</div>';
		var infowindow3_B = new kakao.maps.InfoWindow({
			content : iwContent3_B
		});
		kakao.maps.event.addListener(marker3_B, 'mouseover', function() {
			infowindow3_B.open(map, marker3_B);
		});
		kakao.maps.event.addListener(marker3_B, 'mouseout', function() {
			infowindow3_B.close();
		});
		
		//교양강의동_B
		var iwContent4_B = '<a href="javascript:Ttable4();"></a>'+'<div style="padding:5px;" id="eduB">'+'</div>';
		var infowindow4_B = new kakao.maps.InfoWindow({
			content : iwContent4_B
		});
		kakao.maps.event.addListener(marker4_B, 'mouseover', function() {
			infowindow4_B.open(map, marker4_B);
		});
		kakao.maps.event.addListener(marker4_B, 'mouseout', function() {
			infowindow4_B.close();
		});

		//해양대4호관_B
		var iwContent5_B = '<div style="padding:5px;">해양대4호관 B노선 버스시간표</div>';
		var infowindow5_B = new kakao.maps.InfoWindow({
			content : iwContent5_B
		});
		kakao.maps.event.addListener(marker5_B, 'mouseover', function() {
			infowindow5_B.open(map, marker5_B);
		});
		kakao.maps.event.addListener(marker5_B, 'mouseout', function() {
			infowindow5_B.close();
		});

		//공대4호관_B
		var iwContent6_B = '<a href="javascript:Ttable5();"></a>'+'<div style="padding:5px;" id="eng4B">'+'</div>';
		var infowindow6_B = new kakao.maps.InfoWindow({
			content : iwContent6_B
		});
		kakao.maps.event.addListener(marker6_B, 'mouseover', function() {
			infowindow6_B.open(map, marker6_B);
		});
		kakao.maps.event.addListener(marker6_B, 'mouseout', function() {
			infowindow6_B.close();
		});

		//의전원_B
		var iwContent7_B = '<a href="javascript:Ttable6();"></a>'+'<div style="padding:5px;" id="medB">'+'</div>';
		var infowindow7_B = new kakao.maps.InfoWindow({
			content : iwContent7_B
		});
		kakao.maps.event.addListener(marker7_B, 'mouseover', function() {
			infowindow7_B.open(map, marker7_B);
		});
		kakao.maps.event.addListener(marker7_B, 'mouseout', function() {
			infowindow7_B.close();
		});

		//중앙도서관_B
		var iwContent8_B = '<a href="javascript:Ttable7();"></a>'+'<div style="padding:5px;" id="libB">'+'</div>';
		var infowindow8_B = new kakao.maps.InfoWindow({
			content : iwContent8_B
		});
		kakao.maps.event.addListener(marker8_B, 'mouseover', function() {
			infowindow8_B.open(map, marker8_B);
		});
		kakao.maps.event.addListener(marker8_B, 'mouseout', function() {
			infowindow8_B.close();
		});

		//인문대동쪽_B
		var iwContent9_B = '<a href="javascript:Ttable8();"></a>'+'<div style="padding:5px;" id="hueastB">'+'</div>';
		var infowindow9_B = new kakao.maps.InfoWindow({
			content : iwContent9_B
		});
		kakao.maps.event.addListener(marker9_B, 'mouseover', function() {
			infowindow9_B.open(map, marker9_B);
		});
		kakao.maps.event.addListener(marker9_B, 'mouseout', function() {
			infowindow9_B.close();
		});

		//학생생활관_B
		var iwContent10_B = '<a href="javascript:Ttable9();"></a>'+'<div style="padding:5px;" id="dormB">'+'</div>';
		var infowindow10_B = new kakao.maps.InfoWindow({
			content : iwContent10_B
		});
		kakao.maps.event.addListener(marker10_B, 'mouseover', function() {
			infowindow10_B.open(map, marker10_B);
		});
		kakao.maps.event.addListener(marker10_B, 'mouseout', function() {
			infowindow10_B.close();
		});

		//인문대서쪽(학생생활관5호관)_B
		var iwContent11_B = '<a href="javascript:Ttable10();"></a>'+'<div style="padding:5px;" id="huwestB">'+'</div>';
		var infowindow11_B = new kakao.maps.InfoWindow({
			content : iwContent11_B
		});
		kakao.maps.event.addListener(marker11_B, 'mouseover', function() {
			infowindow11_B.open(map, marker11_B);
		});
		kakao.maps.event.addListener(marker11_B, 'mouseout', function() {
			infowindow11_B.close();
		});

		//학생회관_B
		var iwContent12_B = '<a href="javascript:Ttable11();"></a>'+'<div style="padding:5px;" id="sthallB">'+'</div>';
		var infowindow12_B = new kakao.maps.InfoWindow({
			content : iwContent12_B
		});
		kakao.maps.event.addListener(marker12_B, 'mouseover', function() {
			infowindow12_B.open(map, marker12_B);
		});
		kakao.maps.event.addListener(marker12_B, 'mouseout', function() {
			infowindow12_B.close();
		});

		//본관_B
		var iwContent13_B = '<a href="javascript:Ttable12();"></a>'+'<div style="padding:5px;" id="admB">'+'</div>';
		var infowindow13_B = new kakao.maps.InfoWindow({
			content : iwContent13_B
		});
		kakao.maps.event.addListener(marker13_B, 'mouseover', function() {
			infowindow13_B.open(map, marker13_B);
		});
		kakao.maps.event.addListener(marker13_B, 'mouseout', function() {
			infowindow13_B.close();
		});

		var Aswitch = true;
		var Bswitch = true;

	//B마커 없애기
	function Ashow() {
		if(Bswitch==true){
			marker1_B.setMap(null);
			marker2_B.setMap(null);
			marker3_B.setMap(null);
			marker4_B.setMap(null);
			marker5_B.setMap(null);
			marker6_B.setMap(null);
			marker7_B.setMap(null);
			marker8_B.setMap(null);
			marker9_B.setMap(null);
			marker10_B.setMap(null);
			marker11_B.setMap(null);
			marker12_B.setMap(null);
			marker13_B.setMap(null);
			//Bswitch = !Bswitch;
			marker1_A.setMap(map);
			marker2_A.setMap(map);
			marker3_A.setMap(map);
			marker4_A.setMap(map);
			marker5_A.setMap(map);
			marker6_A.setMap(map);
			marker7_A.setMap(map);
			marker8_A.setMap(map);
			marker9_A.setMap(map);
			marker10_A.setMap(map);
			marker11_A.setMap(map);
			marker12_A.setMap(map);
			marker13_A.setMap(map);
		}
		/*else{
			marker1_B.setMap(map);
			marker2_B.setMap(map);
			marker3_B.setMap(map);
			marker4_B.setMap(map);
			marker5_B.setMap(map);
			marker6_B.setMap(map);
			marker7_B.setMap(map);
			marker8_B.setMap(map);
			marker9_B.setMap(map);
			marker10_B.setMap(map);
			marker11_B.setMap(map);
			marker12_B.setMap(map);
			marker13_B.setMap(map);
			Bswitch = !Bswitch;
		}*/
	}

	//A마커 없애기
	function Bshow() {
		if(Aswitch==true){
			marker1_A.setMap(null);
			marker2_A.setMap(null);
			marker3_A.setMap(null);
			marker4_A.setMap(null);
			marker5_A.setMap(null);
			marker6_A.setMap(null);
			marker7_A.setMap(null);
			marker8_A.setMap(null);
			marker9_A.setMap(null);
			marker10_A.setMap(null);
			marker11_A.setMap(null);
			marker12_A.setMap(null);
			marker13_A.setMap(null);
			//Aswitch = !Aswitch;
			marker1_B.setMap(map);
			marker2_B.setMap(map);
			marker3_B.setMap(map);
			marker4_B.setMap(map);
			marker5_B.setMap(map);
			marker6_B.setMap(map);
			marker7_B.setMap(map);
			marker8_B.setMap(map);
			marker9_B.setMap(map);
			marker10_B.setMap(map);
			marker11_B.setMap(map);
			marker12_B.setMap(map);
			marker13_B.setMap(map);
		}
		/*else{
			marker1_A.setMap(map);
			marker2_A.setMap(map);
			marker3_A.setMap(map);
			marker4_A.setMap(map);
			marker5_A.setMap(map);
			marker6_A.setMap(map);
			marker7_A.setMap(map);
			marker8_A.setMap(map);
			marker9_A.setMap(map);
			marker10_A.setMap(map);
			marker11_A.setMap(map);
			marker12_A.setMap(map);
			marker13_A.setMap(map);
			Aswitch = !Aswitch;
		}*/
	}
