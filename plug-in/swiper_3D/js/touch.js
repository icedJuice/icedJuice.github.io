var TouchTool = function(param) {
    var self = this;
    this.dh = document.documentElement.clientHeight;
    this.direction = param.direction || 'vertical';
    this.device = /android|iphone|ipad|ipod|webos|iemobile|opear mini|linux/i.test(navigator.userAgent.toLowerCase());
    this.sx = this.sy = this.ex = this.ey = this.mx = this.my = this.speedx = this.speedy = this.st = this.et = 0;
    this.obj = param.obj;
    this.len = this.obj.length;
    this.vert = false;
    this.isMoving = false;
    this.startEvtName = this.device ? "touchstart" : "mousedown";
    this.moveEvtName = this.device ? "touchmove" : "mousemove";
    this.endEvtName = this.device ? "touchend" : "mouseup";
    this.touchStart = function(e) {
        var e = e || event;
        self.isMoving = false;
        self.vert = false;
        self.st = new Date().getTime();
        self.sx = self.device ? e.touches[0].clientX : e.clientX;
        self.sy = self.device ? e.touches[0].clientY : e.clientY;
        self.ex = self.ey = 0
        self.obj.addEventListener(self.moveEvtName, self.touchMove);
        self.obj.addEventListener(self.endEvtName, self.touchEnd);
    }
    this.touchMove = function(e) {
        var e = e || event;
        self.ex = self.device ? e.touches[0].clientX : e.clientX;
        self.ey = self.device ? e.touches[0].clientY : e.clientY;
        if(self.direction == 'vertical'){
            if(!self.isMoving && Math.abs(self.ex-self.sx)>Math.abs(self.ey-self.sy)){ self.vert = true}
            self.isMoving = true;
            if( self.vert && self.isMoving){e.preventDefault()};
        }
        if(self.direction == 'horizontal'){
            if(!self.isMoving && Math.abs(self.ex-self.sx)<Math.abs(self.ey-self.sy)){ self.vert = true}
            self.isMoving = true;
            if(self.vert && self.isMoving){e.preventDefault()};
        }
    }
    this.touchEnd = function(e) {
        var e = e || event;
        self.et = new Date().getTime();
        self.obj.removeEventListener(self.moveEvtName, self.touchMove);
        self.obj.removeEventListener(self.endEvtName, self.touchEnd);  
        if(self.ex==0)self.ex = self.sx;
        if(self.ey==0)self.ey = self.sy;
        self.mx = self.ex - self.sx;
        self.my = self.ey - self.sy;
        self.speedx = Math.abs(self.mx / (self.et - self.st));
        self.speedy = Math.abs(self.my / (self.et - self.st));
        
        if(self.direction == 'horizontal') {
            if((self.speedx > 1 || (self.speedx > 0.5 && Math.abs(self.mx) > 50)) && self.mx > 0) {
                if(typeof param.slideRight != 'undefined') {            
                    param.slideRight();
                }
            };
            if((self.speedx > 1 || (self.speedx > 0.5 && Math.abs(self.mx) > 50)) && self.mx < 0) {
                if(typeof param.slideLeft != 'undefined') { 
                    param.slideLeft();
                }
            };
        }
        if(self.direction == 'vertical') {
            if((self.speedy > 1 || (self.speedy > 0.5 && Math.abs(self.my) > 50)) && self.my > 0) {
                if(typeof param.slideDown != 'undefined') {
                    param.slideDown();
                }
            };
            if((self.speedy > 1 || (self.speedy > 0.5 && Math.abs(self.my) > 50)) && self.my < 0) {
                if(typeof param.slideUp != 'undefined') {
                    param.slideUp();
                }
            }
        }
    }
    this.obj.addEventListener(this.startEvtName, this.touchStart);
}
/*
AUTHOR:果汁 GZ_H
 
USE：
 
 new TouchTool({
   'obj': document.getElementsByTagName('body')[0],
   'direction': 'vertical', //horizontal vertical水平垂直
   'slideUp': function() {
       console.log('u')
   },
   'slideDown': function() {
       console.log('d')
   },
   'slideLeft': function() {
       console.log('l')
   },
   'slideRight': function() {
       console.log('r')
   }
})
----------Dragon be here!----------
　　　┏┓　　　┏┓
　　┏┛┻━━━┛┻┓
　　┃　　　　　　　┃
　　┃　　　━　　　┃
　　┃　┳┛　┗┳　┃
　　┃　　　　　　　┃
　　┃　　　┻　　　┃
　　┃　　　　　　　┃
　　┗━┓　　　┏━┛
　　　　┃　　　┃神兽保佑
　　　　┃　　　┃永无BUG！
　　　　┃　　　┗━━━┓
　　　　┃　　　　　　　┣┓
　　　　┃　　　　　　　┏┛
　　　　┗┓┓┏━┳┓┏┛
　　　　　┃┫┫　┃┫┫
　　　　　┗┻┛　┗┻┛
 ━━━━━━神兽出没━━━━━━
 */