$( document ).ready(function() {
	var ctx = document.getElementById("myChart").getContext('2d');
//	var myChart = new Chart(ctx, config);
	window.myLine = new Chart(ctx, config);
	
	$('#randomizeData').click(function(e) {
		config.data.datasets.forEach(function(dataset) {
			// 새로 받은 데이터를 설정하는 부분(서버 호출)
			$.get(path+"/update_graph.do", function(data, status){
		        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
		        
		        // 받아온 데이터를 추가한다.
		        config.data.labels = ["8/10", "8/11", "8/12", "8/13", "8/14", "8/15"];
		        dataset.data = data.test.arr;
		        window.myLine.update();
		    });
		});
	});
	
	$('#phone').click(function(e) {
		$.get(path+"/update_graph_iphone.do", function(data, status){
	        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
	        
	        // 받아온 데이터를 추가한다.
	        config.type = data.type;
	        config.data.label = data.label;
	        config.data.labels = data.labels;
	        config.data.datasets[0].data = data.data;
	        
	        window.myLine.update();
	    });
		
		
	});
	
	$('#spec').click(function(e) {
		var krname = $("#krname").val();
		var gb = $("#gb").val();
		var conditions = $("#conditions").val();
		var changes = $("#changes").val();
		
		$.get(path+"/query_line_phone.do"
				, {
					krname: krname,
					gb: gb,
					conditions: conditions,
					changes: changes
				}, function(data, status){
			        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
			        
			        // 받아온 데이터를 추가한다.
			        config.type = data.type;
			        config.data.label = data.label;
			        config.data.labels = data.labels;
			        config.data.datasets[0].data = data.data;
			        
			        window.myLine.update();
			    });
	});
	
	
	$.getJSON(path+"/krnameList.do", function(data){
		var options = '';
		options += '<option value="">--select--</option>';
		for (var i = 0; i < data.krnameList.length; i++) {
		  options += '<option value="' + data.krnameList[i] + '">' + data.krnameList[i] + '</option>';
		}
		$("select#krname").html(options);
	});
	
	$("select#krname").change(function() {
		var krname = $("#krname").val();
		
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
	$("select#gb").change(function() {
		var krname = $("#krname").val();
		var gb = $("#gb").val();
		
		$.getJSON(path+"/conditionsList.do"
				,{ krname: krname, gb: gb}
				,function(data){
					var options = '';
					options += '<option value="">--select--</option>';
					for (var i = 0; i < data.conditionsList.length; i++) {
						options += '<option value="' + data.conditionsList[i] + '">' + data.conditionsList[i] + '</option>';
					}
					$("select#conditions").html(options);
				});
	});
	$("select#conditions").change(function() {
		var krname = $("#krname").val();
		var gb = $("#gb").val();
		var conditions = $("#conditions").val();
		
		$.getJSON(path+"/changesList.do"
				,{ krname: krname, gb: gb, conditions:conditions }
				,function(data){
					var options = '';
					options += '<option value="">--select--</option>';
					for (var i = 0; i < data.changesList.length; i++) {
					  options += '<option value="' + data.changesList[i] + '">' + data.changesList[i] + '</option>';
					}
					$("select#changes").html(options);
				});
	});
	
});


var config = {
    type: 'line',
    data: {
        labels: ["8/10", "8/11", "8/12", "8/13", "8/14", "8/15"],
        datasets: [{
            type: 'line',
        	label: 'price of iPhone7',
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
            text:'iPhone7'
        },
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
                // type: 'logarithmic',
            }]
        },
        annotation: {
            events: ['click'],
            annotations: [{
                drawTime: 'afterDraw',
                id: 'hline',
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 7,
                borderColor: 'red',
                borderWidth: 2,
                label: {
                    backgroundColor: "red",
                    content: "Mean",
                    enabled: true
                }
            }, {
                drawTime: 'afterDraw',
                id: 'vline',
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                value: '8/12',
                borderColor: 'orange',
                borderWidth: 2,
                label: {
                    backgroundColor: "red",
                    content: "Release Day",
                    enabled: true
                }
            }]
        }
    }
}


