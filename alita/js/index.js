function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/640;
    if(width<=640){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};

$(function(){
    var swiper = new Swiper('.page_2 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop : true,
        spaceBetween:0,
		
    });

    var swiper = new Swiper('.page_3 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop : true,
        spaceBetween:0,
    });

    var swiper = new Swiper('.page_4 .swiper-container', {
		//autoplay:3000,
        effect: 'fade',
        paginationClickable: true,
        loop : true,
        spaceBetween:0,
        prevButton:'.lef',
        nextButton:'.rig'
    });

    var swiper = new Swiper('.page_5 .swiper-container', {
      //pagination: '.swiper-pagination',
	    effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop : true,
        initialSlide :0
    });
	
	$("#list_wx").click(function(){
        $(".mainShow").children(".list_wx").show();
    });
	$(".closebtn2").click(function(){
        $(".list_wx").hide();
    });
	
	$(function(){  
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  });
})



	
});

$(function () {
    $("#playbtn").click(function () {
        $("#bg").show();
        $("#mp_play").show();
		//$("#iframe")[0].src="https://v.qq.com/iframe/player.html?vid=i0530szu3jz&tiny=0&auto=1";
		$("#iframe")[0].src="https://v.qq.com/txp/iframe/player.html?vid=x0760htp3kp";
    });
    $("#bg,#closebtn").click(function () {
        initClose();
    });
});
function initClose() {
    $("#bg").hide();
    $("#mp_play").hide();
	$("#iframe")[0].src="";
}


