$( document ).ready(function() {
	// 캔버스 객체 가져오기
	var ctx = document.getElementById("myChart").getContext('2d');
	
	var graphLabel = 1;
	var krnameOptions;
	
	// 두 종류의 차트 객체 생성(LINE, BAR)
	window.myLine = new Chart(ctx, lineConfig);
	// window.myBar = new Chart(ctx, barConfig);
	
	// 대상 모델 추가 버튼
	$("#add").click(function(e) {
		$('#option_case').append('<div class="graph_option'+graphLabel+'">'
				+'<select id="krname'+graphLabel+'">'
				+'<optgroup label="스마트폰 모델명">'
				+ krnameOptions
				+'</optgroup>'
				+'</select>'
				+'<select id="gb'+graphLabel+'">'
				+'<optgroup label="용량 선택">'
				+'<option value="" selected="">--select--</option>'
				+'</optgroup>'
				+'</select>'
				+'<button class="btn btn-danger search" type="button" id="search'+graphLabel+'">조회</button>'
				+'</div>');
		graphLabel++;
	});
	
//	$('.search').click(function(e) {
//		let krname = $("#krname").val();
//		let gb = $("#gb").val();
//		
//		$.get(path+"/query_line_phone.do"
//				, {
//					krname: krname,
//					gb: gb
//				}, function(data, status){
//
//					// 받아온 데이터를 추가한다.
//			        config.type = data.type;
//			        config.data.labels = data.labels;
//			        config.data.datasets[0].label = data.label;
//			        config.data.datasets[0].data = data.data;
//			        
//			        window.myLine.update();
//			    });
//	});
	
	
	$('body').click(function(e){
        var cls = e.target.getAttribute('class');
        if ( ( cls != '') && (cls != null)) {
        	let myRe = /search$/g;
            let myArray = myRe.exec(cls);
            
            if(myArray == "search") {
            	let krname = e.target.parentNode.children[0].getAttribute('id');
            	let gb = e.target.parentNode.children[1].getAttribute('id');
            	alert($('#'+krname).val()+", "+$('#'+gb).val());
            	
            } 
        } 
    });
	
	
	// krname 리스트 조회
	$.getJSON(path+"/krnameList.do", function(data){
		var options = '';
		options += '<option value="">--select--</option>';
		for (var i = 0; i < data.krnameList.length; i++) {
		  options += '<option value="' + data.krnameList[i] + '">' + data.krnameList[i] + '</option>';
		}
		$("select#krname").html(options);
		krnameOptions = options;
	});
	
	// krname이 변경되면 해당 모델의 용량 종류 조회
	$("select#krname").change(function() {
		var krname = $("#krname").val();

		// lineConfig 설정
		lineConfig.data.datasets[0].label = "price of "+krname;
		
		$.getJSON(path+"/gbList.do"
				,{ krname: krname }
				,function(data){
					var options = '';
					options += '<option value="">--select--</option>';
					for (var i = 0; i < data.gbList.length; i++) {
						options += '<option value="' + data.gbList[i] + '">' + data.gbList[i] + '</option>';
					}
					$("select#gb").html(options);
				});
	});
	// krname이 변경되면 해당 모델의 용량 종류 조회
	$("select#krname1").change(function() {
		alert("asdasd");
//		var krname = $("#krname1").val();
//
//		// lineConfig 설정
//		lineConfig.data.datasets[0].label = "price of "+krname;
//		
//		$.getJSON(path+"/gbList.do"
//				,{ krname: krname }
//				,function(data){
//					var options = '';
//					options += '<option value="">--select--</option>';
//					for (var i = 0; i < data.gbList.length; i++) {
//						options += '<option value="' + data.gbList[i] + '">' + data.gbList[i] + '</option>';
//					}
//					$("select#gb1").html(options);
//				});
	});
	
});


var lineConfig = {
    type: 'line',
    data: {
        labels: ["8/10", "8/11", "8/12", "8/13", "8/14", "8/15"],
        datasets: [{
            type: 'line',
        	label: 'price of X',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title:{
            display:true,
            text:'X'
        },
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
            }]
        },
        annotation: {
            events: ['click'],
        }
    }
}

//var barConfig = {
//    type: 'bar',
//    data: barChartData,
//    options: {
//        responsive: true,
//        legend: {
//            position: 'top',
//        },
//        title: {
//            display: true,
//            text: 'Chart.js Bar Chart'
//        }
//    }
//}

//var barChartData = {
//        labels: ["January", "February", "March", "April", "May", "June", "July"],
//        datasets: [{
//            label: 'Dataset 1',
//            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
//            borderColor: window.chartColors.red,
//            borderWidth: 1,
//            data: [
//                1,2,3,4,5
//            ]
//        }, {
//            label: 'Dataset 2',
//            backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
//            borderColor: window.chartColors.blue,
//            borderWidth: 1,
//            data: [
//                5,4,3,2,1
//            ]
//        }]
//
//    };


