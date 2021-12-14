$(document).ready(function () {
  // 슬라이드
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 슬라이드

  //애니메이션 이펙트
  var intro =  $(".intro").offset().top;  
  var swiperH =  $(".mySwiper").height();
  var introH =  $(".intro").height();
  var introBh = $(".intro_bottom").outerHeight();
  var introBhs = $(".intro_bottom").offset().top;
  var businessH = $(".business").offset().top;
  var board = $(".board").offset().top;
  var boardH = $(".board").outerHeight();
  var visual02 = $(".visual02").offset().top;

  $(window).scroll(function () { 
    var win = $(window).scrollTop(); 
    console.log("win "+win);
    console.log("board "+board);
    console.log("boardH "+boardH)
    console.log("visual02 "+visual02)

    if(win>=intro-(swiperH / 1.5) && win < introBhs -300){
      $(".intro .con_area").addClass("on");
      $(".intro .con_photo").addClass("on");
    }
    else{
      $(".intro .con_area").removeClass("on");
      $(".intro .con_photo").removeClass("on");
    }

    if(win>=introH &&  win < businessH){
      $(".intro_bottom .con>div").addClass("onTop");
    }
    else{   
      $(".intro_bottom .con>div").removeClass("onTop");
    }

    if(win>=introBh+500 && win<board + boardH){
      $(".business .line").addClass("left");
      $(".business h2").addClass("bottom");

    }
    else{
      $(".business .line").removeClass("left");
      $(".business h2").removeClass("bottom");
    }

    if(win>=businessH && win < board){
      $(".board .inner > div").addClass("motion");
    }
    else if(win >= 2698){
      $(".board .inner > div").addClass("motion");
    }
    else{
      $(".board .inner > div").removeClass("motion");
    }

    if(win>=visual02-boardH){
      $(".visual02 p").addClass("top");
      $(".visual02 h2").addClass("top");

      $(".visual02 .btn_box a:first-child").addClass("left");
      $(".visual02 .btn_box a:last-child").addClass("right");
    }
    else if(win>= businessH){
      $(".visual02 p").removeClass("top");
      $(".visual02 h2").removeClass("top");      
      $(".visual02 .btn_box a:first-child").removeClass("left");
      $(".visual02 .btn_box a:last-child").removeClass("right");
    }
  });
  //애니메이션 이펙트
  $(".more").click(function (e) { 
    e.preventDefault();
    $(".business ul").slideToggle(1000);
    $(".visual02 p").addClass("top");
    $(".visual02 h2").addClass("top");

    $(".visual02 .btn_box a:first-child").addClass("left");
    $(".visual02 .btn_box a:last-child").addClass("right");
  });

  $(".visual02 .question").click(function (e) { 
    e.preventDefault();
    $(".layer_bg").show();
  });

  $(".layer_bg .close").click(function (e) { 
    e.preventDefault();
    $(".layer_bg").hide();
    
  });
  
});