function Loading (callBack){
    
    var self = this;
    this.interval = null;
    this.page =  $('#loadingPage');
    this.bar =  $('#loadingBar');
    this.numbox = $('#loadingNum');
    this.callBack = callBack || function(){return false;};
    this.progress = 0;
   
    this.run = function(timing,num,way){
       clearInterval(self.interval);
       self.interval = setInterval(function(){
           self.progress += num;
           if(self.progress>=100) self.progress = 100;
          // self.bar.css('width' , self.progress + "%" );
           self.numbox.text( self.progress + '%' );
           if(self.progress == 90 && !way){self.run(500,1,false);}
           if(self.progress == 99 && !way){clearInterval(self.interval);}
           if(self.progress == 100){
               clearInterval(self.interval);
               if(!!self.callBack){self.callBack();}
               setTimeout(function (){
                    self.page.animate({'opacity':'0'},400,function (){$(this).remove();});
               },400)
           }
       },timing); 
    }
    this.init = function (timing,num,way){this.run(timing,num,way);};
    $(window).on('load',function(){
    	if (self.progress >= 90) {
    		self.run(13,5,true)
    	} else {
    		setTimeout(function () {
    			self.run(13,5,true)
    		}, (90 -self.progress) * 40)
    	}
    	
    });
}