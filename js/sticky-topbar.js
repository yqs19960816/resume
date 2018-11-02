! function () {
        //页面滚动导航栏背景变色
  var vivw = document.querySelector('#topNavBar')
  var controller = {
    vivw: null,
    init: function (vivw) {
      this.vivw = vivw
      this.bindEvents()
      //this.bindEvent.call(this)
    },
    bindEvents: function () {
      var vivw = this.vivw
      window.addEventListener('scroll', () => {
        if (window.scrollY > 128) {
          this.active();
        } else {
          this.deactive();
        }
      })
      //箭头函数没有this,内外this一致
    },
    active: function(){
      this.vivw.classList.add('sticky');
    },
    deactive: function(){
      this.vivw.classList.remove('sticky');
    }
  }
  controller.init(vivw)
  //controller.init.call(controller,vivw)
}.call()