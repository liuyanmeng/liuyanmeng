/*
 * @Author: YanMeng
 * @Date: 2023-04-05 07:35:04
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-05 09:11:52
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\Login\bg.ts
 * @Company: 沃尔玛
 */
var canvas:any;
var stars_count :any;
var stars :any;
var context:any
var interval :any
// ini();
const init = () =>{
  ini()
  makeStars();
  interval = setInterval(function() {
   drawStars();
 }, 50);
 drawStars()
}



function ini() { //初始化
	canvas = document.getElementById("starfield");
  // console.log(canvas)
	canvas.width = window.innerWidth ;
	canvas.height = window.innerHeight;
  context = canvas.getContext("2d");
	stars = Array(); //数组存放随机生成的星星数据（x,y,大小，颜色，速度）
	stars_count = 800; //星星数量
   //定时刷新星星数据
	clearInterval(interval);
}

function makeStars() { //随机生成星星数据
  // debugger
	for (var i = 0; i < stars_count; i++) {
		let x = Math.random() * canvas.offsetWidth;
		let y = Math.random() * canvas.offsetHeight;
		let radius = Math.random() * 0.8;
		let color = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ",0.8)";
		let speed = Math.random() * 0.5;
		let arr = {
			'x': x,
			'y': y,
			'radius': radius,
			'color': color,
			'speed': speed
		}; //（x,y,大小，颜色，速度）
		stars.push(arr); //随机生成的星星数据存在这里
	}
}

function drawStars() { //把星星画到画布上
	context.fillStyle = "#0e1729";
	context.fillRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < stars.length; i++) {
		var x = stars[i]['x'] - stars[i]['speed'];
		if (x < -2 * stars[i]['radius']) x = canvas.width;
		stars[i]['x'] = x;
		var y = stars[i]['y'];
		var radius = stars[i]['radius'];
		context.beginPath();
		context.arc(x, y, radius * 2, 0, 2 * Math.PI);
		context.fillStyle = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 +
			",0.8)";
		context.fill();
	}
}

window.onresize = function() { //窗口大小发生变化时重新随机生成星星数据
	ini();
	makeStars();
	interval = setInterval(function() {
		drawStars();
	}, 50);
}
export default init