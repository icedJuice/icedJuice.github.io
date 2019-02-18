function Swiper3D (param){
    if(! 'transition' in document.documentElement.style && ! '-webkit-transition' in document.documentElement.style) return console.log('Not Support Css3')
    var self = this;
    this.slideContainer = $(param.slideContainer);
    this.slideWarpper = $(param.slideWarpper);
    this.slide = this.slideWarpper.find( param.slide ) ;
    this.leftBtn = $(param.leftBtn);
    this.rightBtn = $(param.rightBtn);
    this.autoPlay = param.autoPlay || false;
    this.autoTime = param.autoTime || 4000 ;
    this.durTime = param.durTime || 300;
    this.active = param .activeIndex || 0;
    this.left = this.left_href = this.right_href = this.right = 0;
    this.isMoving = false;
    this.interval = null;
    this.viewType = param.viewType || 5;
    if(this.slide.length < this.viewType){var i = Math.ceil( this.viewType/this.slide.length)-1;for (var j = 0 ; j < i;j++) {self.slide.each(function (){var _this = $(this).clone(true);self.slide.parent().append(_this);})}}
    this.slide = this.slideWarpper.find( param.slide )
    this.length = this.slide.length;
    this.sortIndex = function( active ){
        this.left_harf = active-1;
        this.active = active ;
        this.right_harf = active + 1;
        if(this.left_harf < 0) this.left_harf = this.length + this.left_harf;
        if(this.right_harf > this.length - 1) this.right_harf = this.right_harf - this.length;
        this.left = active-2;
        this.right = active + 2;
        if(this.left < 0) this.left = this.length + this.left;
        if(this.right > this.length - 1 ) this.right = this.right - this.length;
    }
    this.move = function (fix){
        this.isMoving = true;
        this.sortIndex( fix );

        this.slide.eq(this.left_harf).removeClass( 'left front right right-harf back').addClass('left-harf');
        this.slide.eq(this.active).removeClass( 'left-harf left right right-harf back ').addClass('front');
        this.slide.eq(this.right_harf).removeClass( 'left left-harf front right back').addClass('right-harf');
        if(this.viewType === 5){
            this.slide.eq(this.left).removeClass( 'left-harf front right right-harf back').addClass('left');
            this.slide.eq(this.right).removeClass( 'left left-harf front right-harf back').addClass('right');
            for (var i=0;i<this.length;i++) {
                if(i != this.left && i != this.left_harf && i != this.right_harf && i != this.right && i != this.active){
                    this.slide.eq(i).removeClass( 'left left-harf front right-harf right').addClass('back');
                }
            }
        }else{
            for (var i=0;i<this.length;i++) {
                if( i != this.left_harf && i != this.right_harf && i != this.active){
                    this.slide.eq(i).removeClass( 'left-harf front right-harf').addClass('back');
                }
            }
        }
        setTimeout(function (){
            self.isMoving = false
        }, self.durTime )      
    }
    this.slideLeft = function (){ 
        if( self.isMoving ) return ;   
        clearInterval(self.interval);   
        self.active -- ;  
        if( self.active < 0 ) self.active = self.length - 1;
        self.move( self.active );
    }
    this.slideRight = function (){
        if( self.isMoving ) return ;
        clearInterval(self.interval);
        self.active ++ ;
        if( self.active > self.length - 1 ) self.active = 0;
        self.move( self.active );
    }
    this._autoPlay = function (){
        if(! this.autoPlay) return false ;
        this.interval = setInterval(function (){ 
            self.active++;
            if( self.active > self.length - 1 ) self.active = 0;
            self.move( self.active );
        }, self.autoTime )
    }
    this.initBtn = function (){
        if(this.leftBtn.length !== 0)
        this.leftBtn.on( 'click' , self.slideLeft );
        if(this.rightBtn.length !== 0)
        this.rightBtn.on( 'click' , self.slideRight );
    }
    this.slide.on('click',function (){
        var _index = $(this).index();
        if(_index == self.active || self.isMoving) return;
        clearInterval(self.interval);
        self.active = _index ;
        self.move(self.active);
        self._autoPlay();  
    });
    this.init = function (){
        this.sortIndex( this.active );
        this.move(this.active);
        this.initBtn();
        this._autoPlay();
    }
    this.init();       
} 

/*
 USE：
 var swiper_3D = new Swiper3D ({
       'slideContainer':'.swiper3D', // 必填 
       'slideWarpper':'.swiper-wrapper', // 必填
       'slide':'.swiper-slide', // 必填 
       'leftBtn':'.swiper3D-leftbtn', // 左按钮
       'rightBtn':'.swiper3D-rightbtn', // 右按钮
       'activeIndex':0, //初始化展示的第几个 slide
       'viewType': 5, // 3 展示 3张 ，5 展示 5张
       'durTime':200, // 切换过场时间，选填，默认400
       'autoPlay':true, //是否自动播放  false 不自动播放， true 自动播放 ，默认false
       'autoTime':3000 //自动播放事件 选填， 默认 4000，且只在自动播放开启时有效
    });

示例：
 var swiper_3D = new Swiper3D ({
       'slideContainer':'.swiper3D', // 必填 
       'slideWarpper':'.swiper-wrapper', // 必填
       'slide':'.swiper-slide', // 必填 
       'rightBtn':'.swiper3D-rightbtn', // 右按钮
       'activeIndex':0, //初始化展示的第几个 slide 默认 0
       'viewType': 5, // 3 展示 3张 ，5 展示 5张 ,默认 5
    });

 */