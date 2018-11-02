! function () {
  //延迟加载动画
  var bb = setTimeout(function () {
    siteWelcome.classList.remove("active");
    window.scrollTo(0, 0);
    clearTimeout(bb);
  }, 500);

  //两个滑动窗口隔行变色
  var vivw = document.getElementsByClassName('submenu')
  var controller = {
    vivw: null,
    item: null,
    items: null,
    init: function (vivw) {
      this.vivw = vivw
      this.bindEvents()
    },
    bindEvents: function(){
      items = this.vivw[0].getElementsByTagName('li')
      for (let i = 0; i < items.length; i++) {
        items[i].onmouseenter = (x)=> {
          x.currentTarget.style.backgroundColor = '#FFF';
        };
        items[i].onmouseleave = (x)=> {
          x.currentTarget.style.backgroundColor = '#EEE';
        };
      }
      item = this.vivw[1].getElementsByTagName('li')
      for (let i = 0; i < item.length; i++) {
        item[i].onmouseenter = (x)=> {
          x.currentTarget.style.backgroundColor = '#FFF';
        };
        item[i].onmouseleave = (x)=> {
          x.currentTarget.style.backgroundColor = '#EEE';
        };
      }
    }
  }
  controller.init(vivw)
}.call()