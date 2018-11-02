!function (){
      //页面当前Y轴位置
      var lead = 0;
      //给每个[data-x]元素添加offset类
      let specialTags = document.querySelectorAll('[data-x]');
      for (let i = 0; i < specialTags.length; i++) {
          specialTags[i].classList.add("offset");
      }
      //延迟500毫秒清除离浏览器窗口最近的元素的offset类
      setTimeout(function () {
          findClosestAndRemoveOffset();
      }, 500);

      function findClosestAndRemoveOffset() {
          //获取带有data-x的元素
          let specialTags = document.querySelectorAll('[data-x]');
          //获取添加data-x的元素的offsetTop值
          let minIndex = 0;
          for (let i = 0; i < specialTags.length; i++) {
              //页面滚动获取距离浏览器视口顶部最近的元素（元素距离文档顶部距离-当前文档距离顶部距离=元素距离视口的高度)
              if (Math.abs(specialTags[i].offsetTop - lead) < Math.abs(specialTags[minIndex].offsetTop - lead)) {
                  minIndex = i;
              }
          }
          //给距离浏览器窗口最近的元素移除offset类
          specialTags[minIndex].classList.remove("offset");
          //根据当前距离顶部最近的元素的ID名找到对应的a标签
          let id = specialTags[minIndex].id;
          let a = document.querySelector('a[href="' + id + '"]')
          //再找到该a标签的父亲的兄弟姐妹
          let li = a.parentNode;
          for (let i = 0; i < li.parentNode.children.length; i++) {
              li.parentNode.children[i].classList.remove('highlight');
          }
          li.classList.add('highlight');
      }
        //页面每次滚动都会找到最近的元素并清除offset类
      window.addEventListener('scroll',function (x) {
         ///每当页面滚动记录其滚动距离顶部的距离,起始位置Y值,兼容写法
         lead = document.body.scrollTop || window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        findClosestAndRemoveOffset();
      })
    }.call()