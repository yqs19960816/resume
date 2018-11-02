! function () {
  //页面当前Y轴位置
  var lead = 0;
  //页面每次滚动都会找到最近的元素并清除offset类
  window.addEventListener('scroll', function (x) {
    ///每当页面滚动记录其滚动距离顶部的距离,起始位置Y值,兼容写法
    lead = document.body.scrollTop || window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  })

  //点击顶部导航栏页面滚动到指定位置
  var vivw = document.getElementById('item')
  var controller = {   //控制器
    vivw: null,
    aTags: null,
    init: function (vivw) {    //页面初始化动画和绑定事件
          this.vivw = vivw
          this.initAnimate()
          this.bindEvents()
        },
    initAnimate: function(){    //动画函数
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element){    //页面滚动函数，须传入目标元素
      let top = document.querySelectorAll('.' + element)[0].offsetTop;      //页面中获取对应元素offsetTop值
      let targetTop = top - 75;      //目标位置Y值
      //获取步长
      // let sped = (targetTop - lead) > 0 ? Math.ceil((targetTop - lead) / 15) :
      let t = Math.abs(targetTop - lead) / 100; // 路程
      let s = t * 300 // 时间
      if (s > 500) { s = 700 }
      var coords = {
        y: lead //起始位置
      };
      var tween = new TWEEN.Tween(coords)
        .to({
          y: targetTop
        }, s)
        .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
        .onUpdate(function () {
          window.scrollTo(0, coords.y); //如何滚动页面
        })
        .start(); //开始缓动
    },
    bindEvents: function(){    //绑定事件函数
      aTags = this.vivw.getElementsByTagName('a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x)=> {        //绑定事件，需修改内部的this值，使用箭头函数
          x.preventDefault();
          let element = aTags[i].getAttribute('href');          //获取点击元素的href值
          this.scrollToElement(element)          //调用页面滚动函数
        }
      }
    }
  }
controller.init(vivw)
}.call()