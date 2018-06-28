var total = 0.0;
var timer = null;
var clicks = 0;
var pause = 0;
var stop = false;
var listen = false;
var flag = false;
var flagmove = false;
var MOVE = 20; // 设置打乱的循环次数
// Puzzle调用函数变量
var HEIGHT = 4,
    WIDTH = 4,
    div,
    divElements = [],
    input,
    startGame,
    timer;
var utils = {
    id: function (id) {
        return document.getElementById(id);},
    getNodeAsInt: function (parent) {// 获取节点值
        return parent.firstChild.nodeValue - 0;},
    setFirstChildValue: function (parentElem, value) {
        parentElem.firstChild.nodeValue = value;},
    setTimer: function (func, ms) {
        return setInterval(func, ms);}
};
// 时间函数
    function startTime() {// 开始计时
        clearInterval(timer);
        $("#para2").html("Click the button \"Pause Game\" to pause!");
        $("#time").html(Math.round(10*total)/10);
        total += 0.1;
        timer = setTimeout("startTime()",100);
    }
    function stopCount() { // 停止计时
        setTimeout("$('#time').html(0)",0);
        setTimeout("$('#clicks').html(0)",0);
        total = 0; 
        clearTimeout(timer);
        pause++; // 再次开始只用按一次，相当于已经暂停了 
        listen = false;
        $("#playing").html("NotStarted");
    }
    function restopCount() {// 暂停
        setTimeout("$('#time').html(Math.round(10*total)/10)",0);
        $("#para2").html("Click the button \"Start Game\" to continue!");
        clearTimeout(timer);
    }
    function startlistener() {
    	var s = document.getElementById("start").onclick=function() {
    		move_mix();
			ifplaying();           
    	}
    };
    function move_mix() {
	        if (flagmove === false) {
	            move();
	            flagmove = true;
	        }
	        if (flag === false) {
	            mix();
	            flag = true; 
	        }
    };
    function ifplaying() {
	        pause++;
	        if (pause%2 === 1) {
	        	$("#playing").html("playing");
	            listen = true;
	            startTime(); 
	        } else {
	            restopCount();
	            listen = false;    
	        } 
    };
    function prepStage() {// 生成准备
        input = document.createElement('input');
        div = document.createElement('div');
    };
    function renderStage() {// 渲染
        for (var i = 0; i < (HEIGHT * WIDTH); i++) {
            input.type = "button";
            input.id = "block"+(i+1);
            input.className = "block";
            input.name = i+1;
            div.id = "pos" + (i+1);
            div.className = "tag" + (i+1);
            var clonediv = div.cloneNode(false), cloneinput = input.cloneNode(false);
            clonediv.appendChild(cloneinput);// 在列表中添加项目
            $("#main")[0].appendChild(clonediv);
            divElements.push(clonediv);
        }
    };
    function prepGame() {
        clicksHolder = utils.id('clicks');
        clicks = utils.getNodeAsInt(clicksHolder);// 获取节点值就是文本节点的值
    };
    function getposright(pos) {
    	var pos_right;
	    if (pos.length > 1) {
            pos_right = parseInt(pos[1])+1;
            pos_right = pos[0] + pos_right;
        } else {
            pos_right = parseInt(pos[0]) +1;
        }
        return pos_right;
    };
    function getposleft(pos) {
       	var pos_left;
        if (pos.length > 1) {
            if (pos === "10") {
                pos_left = 9;
            } else {
                pos_left = parseInt(pos[1])-1;
                pos_left = pos[0] + pos_left;                        
           	}
		} else {
            pos_left = parseInt(pos[0]) -1;
        }
    	return pos_left;
    };
    function getposdown(pos) {
    	var pos_down;
        if (pos.length > 1) {
			pos_down = parseInt(pos[0]*10) + parseInt(pos[1])+4;
		} else {
			pos_down = parseInt(pos[0]) +4;
		}
    	return pos_down;
    };
    function getposup(pos) {
    	var pos_up;
    	if (pos.length > 1) {
            pos_up = parseInt(pos[0]*10)+parseInt(pos[1])-4;
        } else {
            pos_up = parseInt(pos[0])-4;
        }
		parseInt(pos_up);
        return pos_up;
    };
    function command(i) {
        var block = $("input.block");
        var pos = getposidnum($("." + "tag"+(i+1)).attr('id'));
        var div1 = 0,div2 = 0;
        var div_right = $("#pos"+getposright(pos))[0];
        var div_left = $("#pos"+getposleft(pos))[0];
		var div_down = $("#pos"+getposdown(pos))[0];
        var div_up = $("#pos"+getposup(pos))[0];
        canmove(pos,div_right,div_left,div_down,div_up,block,i);
    };
    function getcan(pos) {
    	var can;
    	if (pos.length > 1) {
            can = parseInt(pos[0])* 10 + parseInt(pos[1]) - 1;
        } else {
            can = parseInt(pos[0]) -1;
       	}
       	return can;
    };
    function movetoright(div_right,block,i) {
            if (div_right.className === "tag16") {
                div1 = block[i].name;
                parseInt(div1);
                div2 = div_right.className;
                moveDiv(div1,div2);
            }     	
    };
    function movetoleft(div_left,block,i) {
            if (div_left.className === "tag16") {
                div1 = block[i].name;
                parseInt(div1);
                div2 = div_left.className;
                moveDiv(div1,div2);               
            }                     
    };
    function movetodown(div_down,block,i) {
            if (div_down.className === "tag16") {
                div1 = block[i].name;
                parseInt(div1);
                div2 = div_down.className;
                moveDiv(div1,div2);                         
            }
    };
    function movetoup(div_up, block, i) {
            if (div_up.className === "tag16") {
                div1 = block[i].name;
                parseInt(div1);
                div2 = div_up.className;
                moveDiv(div1,div2);
            }    	
    }
    function canmove(pos,div_right,div_left,div_down,div_up,block,i) {
        var can = getcan(pos);
        if (can%4 != 3) {
            movetoright(div_right,block,i);
        }
        if (can%4 != 0) {
			movetoleft(div_left,block,i);
        }
        if (can < 12) {
            movetodown(div_down,block,i);        
        }
        if (can > 3) {
			movetoup(div_up, block, i);                     
        }
    };
    function mix() {
        var count = 15; 
        var originalArray=new Array;//原数组 
        for (var j = 0; j < MOVE; j++) {
            for (var i=0;i<count;i++){ 
                originalArray[i]=i+1; 
            } 
            originalArray.sort(function(){ return 0.5 - Math.random(); });
            for (var i = 0; i < 15; i++) {
                command(originalArray[i]);
            }            
        }
    };
    // 重新开始
    function restart() {
        stopCount(); 
        var i = 0;
        $("input.block").each(function() {
        	$(this).id = "block" + (i+1);
        	$(".tag"+(i+1))[0].id = "pos"+(i+1);
        	i++;
        });      
        $("#para2").html("Click the button \"Start Game\" to start again!");
        flag = false;
        pause = 0;
        clicks = 0;        
    };

    function getblockidnum(block_id) { //取id block最后的数字
     		var check = "";
            if (block_id.length > 6) {
                check = block_id[5] + block_id[6];
            } else {
                check = block_id[5];
            }
            parseInt(check); 
            return check;   	
    }
    function getposidnum(m_id) { // 取pos之后的数字
            var pos = "";
             if (m_id.length > 4) {
                pos = m_id[3]+m_id[4];
            } else {
                pos = m_id[3];
            }
            parseInt(pos);
            return pos;
    }
    function iswin() {// 判断胜利
    	var i = 0;
    	var watch = true;
    	$("input.block").each(function() {
    		var check = getblockidnum($(this).attr('id'));
            var pos = getposidnum($("." + "tag"+(i+1)).attr('id'));
            if (check!==pos) watch = false;
            i++;
    	});
    	if (watch)return true;
    	else return false;
    };
    function moveDiv(name1, name2) {// 移动位置
        name1 = "tag"+name1;
        var t1 = $("."+name1);
        var t2 = $("."+name2);
        var a = t2[0].id;
        t2[0].id = t1[0].id;
        t1[0].id = a;
        if (flag === true) {
            clicks += 1;
            $("#clicks").html(clicks);           
        }
    };
    function move() {// 点击监听，若可移动则交换
        $("#main")[0].addEventListener('click', function(e) {
            if (listen === true) {
                var i = e.target.name-1;
                command(i);
                if (iswin()) {
                    alert("You Win!"+"\n"+"Clicks: "+ clicks+"\n" + "Time: " + Math.round(10*total)/10 + "s\n");
                    restart();
                }
            }     
        }, false); 
    };
function initialize() {
    prepStage();
    renderStage();
    var again = document.getElementById('restart');
    again.onclick=function() {
    restart();}
    startlistener();
};
$(document).ready(function() {
    initialize();
});