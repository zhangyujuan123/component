$(function(){
	var data = [
		['Java','1','降','-0.01%'],
		['C', '2', '升', '+2.44%'],
		['Python', '3', '升', '+1.41%'],
		['C++', '4', '降', '-2.58%'],
		['C#', '5', '升', '+2.07%'],
		['Visual Basic.NET', '6', '降', '-1.17%'],
		['JavaScript', '7', '降', '-0.85%']
	  ];
	  
	  var container = document.getElementById('example');
	  var hot = new Handsontable(container, {
		data: data,
		colHeaders: ['语言名称','排名','升或降','变化幅度'],
		startRows: 7,
		startCols: 4
	  });



	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init($('#main')[0]);
	var xData=[],
		yData=[];
	for(var p=2000;p<=2020;p+=5){
		xData.push(p);
		if(p>=2000&&p<2005){
			yData.push((p-2000)*0.6+6);
		}
		else if(p>=2005&&p<2010){
			yData.push(9-0.2*(p-2005));
		}
		else if(p>=2010&&p<2015){
			yData.push(8);
		}
		else if(p>=2015&&p<=2020){
			yData.push(8-0.2*(p-2015));
		}
	   
	}
	// 指定图表的配置项和数据
	var option = {
		title: {
			text: 'JavaScript语言排名变化'
		},
		tooltip: {},
		xAxis: {
			data: xData
		},
		yAxis: {},
		series: [{
			name: '排名',
			type: 'line',
			data: yData
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});