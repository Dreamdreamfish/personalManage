// comment 绘制扇形区域，代表数据
function drawSector (context, end) {
    context.lineWidth=2;
    context.moveTo(35.5,35.5);
    context.arc(35.5,35.5,35.5,Math.PI*1.5,Math.PI*end,false);//x轴、y轴、半径r、起始角、结束角、（false顺时针，true逆时针）
    context.closePath();
    context.fill();
}

var canvas1=document.getElementById('twitter');
var context1=canvas1.getContext('2d');
context1.strokeStyle="#d2e6f4";
context1.fillStyle="#d2e6f4";
drawSector(context1, 0.4);

var canvas2=document.getElementById('sales');
var context2=canvas2.getContext('2d');
context2.strokeStyle="#e2ead1";
context2.fillStyle="#e2ead1";
drawSector(context2, 0.3);

var canvas3=document.getElementById('visiters');
var context3=canvas3.getContext('2d');
context3.strokeStyle="#f8d7d4";
context3.fillStyle="#f8d7d4";
drawSector(context3, 0.7);

var canvas4=document.getElementById('messages');
var context4=canvas4.getContext('2d');
context4.strokeStyle="#f6e7c9";
context4.fillStyle="#f6e7c9";
drawSector(context4, 0.4);
/* function getLengthPercent (id) {
    var updateLengthContent = document.getElementById(id).innerHTML;
    var updateLength = parseInt(updateLengthContent);
    var updateTotalLength = [1000, 20000, 25000, 1000]; 
    var idN = parseInt(id);
    var updateLengthPercent = getLength(id)/updateTotalLength[idN-1];
    return updateLengthPercent;
}
*/