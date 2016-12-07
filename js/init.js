window.onload = function(){
    //获取背景dom
    var obg = document.getElementById('bg');
    //获取滑动dom
    var oSlide = document.getElementById('slide');

    //添加滑动事件
    oSlide.onmousedown = function(e){
        var e = e || event;
        var x = e.clientX;
        var _this = this;
        var timer = null;

        document.onmousemove = function(e){
            var e = e || event;
            oSlide.style.left = 5 + e.clientX - x + 'px';
            if (parseInt(oSlide.style.left)<5) {
                oSlide.style.left = 5 + 'px';

            }
            if (parseInt(oSlide.style.left)>245) {
                oSlide.style.left = 245 + 'px';
                document.onmousemove = null;
                document.onmouseup = null;
                clearInterval(timer);
                hadSlide();
            }
        }

        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
            if (!oSlide.style.left) {return};
            clearInterval(timer);
            timer = setInterval(function(){
                var x = parseInt(oSlide.style.left);
                oSlide.style.left = (x -= 10) + 'px';
                if (parseInt(oSlide.style.left)<5) {
                    oSlide.style.left = 5 + 'px';
                    clearInterval(timer);
                }
            }, 30)
        }
    }


    //解锁成功后调用方法
    function hadSlide(){
        //获取可视屏幕宽高
        obg.style.background = '#000';
        obg.innerHTML = '';
        var width = document.body.offsetWidth;
        var height = document.body.offsetHeight;

        //定义行数和列数
        var row = 25;
        var col = 20;
        for(var i=0;i<500;i++){
            var aspan = document.createElement('span');
            var x = i%row * (width/row);
            var y = parseInt(i/row) * (height/col);
            aspan.style.left = x + 'px';
            aspan.style.top = y + 'px';

            aspan.style.backgroundPosition = -x + 'px '+ -y +'px';


            obg.appendChild(aspan);


        }

        //进行span处理
        var aspan = obg.getElementsByTagName('span');

        for(var i=0;i<aspan.length;i++){
            var l = aspan[i].offsetLeft;
            var t = aspan[i].offsetTop;

            var left = (l+(width/25)-(width/2))*rnd(2,3)+(width/2)-(width/25);
            var top  = (t+(height/20)-(height/2))*rnd(2,3)+(height/2)-(height/20);



            setTimeout((function(i,left,top){
                aspan[i].style.left = left + 'px';
                aspan[i].style.top = top + 'px';
                aspan[i].style.opacity = 0;
                aspan[i].style.transform = 'rotateX('+ rnd(-180,180) +'deg) rotateY('+ rnd(-180,180) +'deg) rotateZ('+ rnd(-180,180) +'deg) scale('+rnd(1.5,3)+','+rnd(1.5,3)+')'
            })(i,left,top),rnd(0,500));

            setTimeout(function(){
                document.location.href = 'C:/Users/admin/Desktop/bx/html/content.html';
            },700)
        }

    }

    function rnd(min,max){
        return parseInt(Math.random()*(max-min)+min);
    }


}
