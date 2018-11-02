!function () {  
    //顶部导航栏鼠标切换变色
  let vivw = document.getElementById('item')
  var controller = {
    vivw: null,
    lis: null,
    init: function (vivw) {
      this.vivw = vivw
      this.bindEvents()
      //this.bindEvent.call(this)
    },
    bindEvents: function(){
      lis = this.vivw.children
      for (let i = 0; i < lis.length; i++) {
        let a;
        lis[i].onmouseenter = (x) =>{
          a = x.currentTarget.style.color;
          x.currentTarget.style.color = '#F00';
          x.currentTarget.classList.add('active');
        };
        lis[i].onmouseleave = (x) =>{
          x.currentTarget.style.color = a;
          x.currentTarget.classList.remove('active');
        };
      }
    }
}
controller.init(vivw)
}.call()