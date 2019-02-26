var loading_container = $('#preload-container');
var loaded = false;
var ta = $('#ta-wrapper');
var bg = $(".bg-wrapper");

var harf_screen_width = document.documentElement.clientWidth / 2;
var harf_screen_height = document.documentElement.clientHeight / 2;
window.onresize = function (){
	harf_screen_width = document.documentElement.clientWidth / 2;
	harf_screen_height = document.documentElement.clientHeight / 2;
}
var SCALE_REAT = {
	ta: {
		x: -10,
		y: -3,
		z: -0.6
	},
	month: {
		x: 10,
		y: 4
	},
	stone: {
		x: 4,
		y: 2
	}
}
window.onmousemove = function (e) {

	var e = e || event;
	
	var rate_x = (e.screenX - harf_screen_width) / harf_screen_width;
	var rate_y = (e.screenY - harf_screen_height) / harf_screen_height

	/* month.css({
		
	 	'transform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)',
	 	'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)'
	 })
	
	stone.css({
		
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.stone.x +'px,'+ rate_y * SCALE_REAT.stone.y +'px, 0)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.stone.x +'px,'+ rate_y * SCALE_REAT.stone.y +'px, 0)'
	})*/
	bg.css({
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)'
	})
	
	ta.css({
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.ta.x +'px,'+ rate_y * SCALE_REAT.ta.y +'px, 0) rotateZ('+ (rate_x * 0.3 + rate_y * 0.2) * SCALE_REAT.ta.z +'deg)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.ta.x +'px,'+ rate_y * SCALE_REAT.ta.y +'px, 0) rotateZ('+ (rate_x * 0.3 + rate_y * 0.2) * SCALE_REAT.ta.z +'deg)',
		
	})
}

function initPage () {
	
	loaded = true;
	
}
function insertTaFrames() {
	
	var taImgnames = [
		'aaa_00100.png',
		'aaa_00102.png',
		'aaa_00104.png',
		'aaa_00106.png',
		'aaa_00108.png',
		'aaa_00110.png',
		'aaa_00112.png',
		'aaa_00114.png',
		'aaa_00116.png',
		'aaa_00118.png',
		'aaa_00120.png',
		'aaa_00122.png',
		'aaa_00124.png',
		'aaa_00126.png',
		'aaa_00128.png',
		'aaa_00130.png',
		'aaa_00132.png',
		'aaa_00134.png',
		'aaa_00136.png',
		'aaa_00138.png',
		'aaa_00140.png',
		'aaa_00142.png',
		'aaa_00144.png',
		'aaa_00146.png',
		'aaa_00148.png',
		'aaa_00150.png',
		'aaa_00152.png',
		'aaa_00154.png',
		'aaa_00156.png',
		'aaa_00158.png',
		'aaa_00160.png',
		'aaa_00162.png',
		'aaa_00164.png',
		'aaa_00166.png',
		'aaa_00168.png',
		'aaa_00170.png',
		'aaa_00172.png',
		'aaa_00174.png',
		'aaa_00176.png',
		'aaa_00178.png',
		'aaa_00180.png',
		'aaa_00182.png',
		'aaa_00184.png',
		'aaa_00186.png',
		'aaa_00188.png',
		'aaa_00190.png',
		'aaa_00192.png',
		'aaa_00194.png',
		'aaa_00196.png',
		'aaa_00198.png'
	];
	var imgBaseUrl = 'images/ta/';
	var arr = [];
	for (var i = 0; i < taImgnames.length; i ++) {
		arr.push('<img src="'+ imgBaseUrl + taImgnames[i] +'"  class="frame-img '+ (i === 0 ? 'show' : '') +'">')
	}
	$('#ta-wrapper').append( arr.join('') );
}

function initTaFrames() {
	var step = 100;
	var taFrames = $('#ta-wrapper').find('.frame-img');
	var length = taFrames.length;
	var i = 0;
	setInterval(function () {
		
		taFrames.eq(i).addClass('show').siblings().removeClass('show');
		i ++;
		if (i == length) i = 0;
	}, step)
	
}


$(document).ready(function (){

    new Loading(function(){
    	
    	initTaFrames();
    	
		loading_container.addClass('fade-out');
		
		setTimeout(function () {
			loading_container.remove();
			initPage();
		}, 1000);
		
　　}).init(40,1,false);
	
	insertTaFrames();

})



//微博、公众号、qq群显示隐藏
//点击其他区域显示隐藏
jQuery(document.body).on('click',function(e) {
	if(e.target==$('.btn-weibo')[0]){
		$('.btn-weibo').hide();
		$('.weibo-box .weibo-content').show();
	}else{
		$('.weibo-box .weibo-content').hide();
		$('.btn-weibo').show();
	}
	if(e.target==$('.btn-gzh')[0]){
		$('.btn-gzh').hide();
		$('.gzh-box .gzh-content').show();
	}else{
		$('.gzh-box .gzh-content').hide();
		$('.btn-gzh').show();
	}
	if(e.target==$('.btn-qq')[0]){
		$('.btn-qq').hide();
		$('.qq-box .qq-content').show();
	}else{
		$('.qq-box .qq-content').hide();
		$('.btn-qq').show();
	}
})

var _tanCe = $('.tan_ce');
$('.btn-play').click(function(){
	_tanCe.show();
	
})

_tanCe.find('.close').click(function(){
	_tanCe.hide();
	
})



	


//动图 
/*makeGifGetStart = false;
makeGifIsmoving = false;

function makeGif (flag){
    
    var timer,len = 38,count = 0,loaded=0,st=0,allTime = 2,
        imgbox = $('.ta-container').find('div').eq(0);
        
    for (var i = 0;i<len;i++) {
    	imgbox.append('<img src="http://static.kunlun.com/web/tx/170224/gif'+i+'.png"/>');
    }
    
    if(flag && !makeGifIsmoving){
        
        makeGifIsmoving =true;
       
        setTimeout(function (){
          var imgs = imgbox.find('img');
          
              timer = setInterval(function(){
              
                  imgs.eq(count).addClass('imgshow').siblings().removeClass('imgshow');  
                  count++;
                  if(count==len){
                      count=0;
                      st++;
                      if(st==allTime){
                          makeGifIsmoving = false;
                          clearInterval(timer);
                      }
                  }
              },110);
           
           $('.face').animate({'opacity':'0'},300);
          
        },50)
    }  
}*/
/*function getViewportOffset(){
	if(window.innerWidth){
		return {
			w:window.innerWidth,
			h:window.innerHeight
		}
	}else{
		if(document.compatMode==='BackCompat'){
			return{
				w:document.body.clientWidth,
				h:document.body.clientHeight
			}
		}else{
			return{
				w:document.documentElement.clientWidth,
				h:document.documentElement.clientHeight
			}
		}
	}
}*/