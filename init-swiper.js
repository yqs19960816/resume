! function () {
  var vivw = document.querySelector('#mySlides')
  var controller = {
    vivw: null,
    swiper: null,
    swiperOptions: {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      pagination: {        //分页器
        el: '.swiper-pagination',
      },
      navigation: {     //后退按钮
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // scrollbar: { //滚动条
      //   el: '.swiper-scrollbar',
    },
    init: function (vivw) {
      this.vivw = vivw
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(
        this.vivw.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  }
  controller.init(vivw)
}.call()