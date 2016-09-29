$(document).ready(function() {

  $("#portfolio_grid").mixItUp();

  $(".s_portfolio li").click(function() {
    $(".s_portfolio li").removeClass("active");
    $(this).addClass("active");
  });

  $(".popup").magnificPopup({type:"image"});
  $(".popup_content").magnificPopup({type:"inline"});

   $(".top_text h1").animated("fadeInDown","fadeOutUp");

  $(".animation_1").animated("flipInY","flipOutY");
  $(".animation_2").animated("fadeInLeft","fadeOutLeft");
  $(".animation_3").animated("fadeInRight","fadeOutRight");
  $(".left .summary_item").animated("fadeInLeft","fadeOutLeft");
  $(".right .summary_item").animated("fadeInRight","fadeOutRight");

  $(".top_text p,.section_header").animated("fadeInUp","fadeOutDown");

  function heightDetect() {
    $(".main_head").css('height',$(window).height());
  };

  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });

// plugin to sandwich menu

  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
  });
// when you click the menu link  menu dissapeared

  $(".top_mnu ul a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
  });

  // when you click the menu turns on the menu

  $(".toggle_mnu").click(function() {
    if ($(".top_mnu").is(":visible")) {
      $(".top_text").removeClass("h_opacify");
      $(".top_mnu").fadeOut(600);
      $(".top_mnu li a").removeClass("fadeInUp animated");
    } else {
      $(".top_text").addClass("h_opacify");
      $(".top_mnu").fadeIn(600);
      $(".top_mnu li a").addClass("fadeInUp animated");
    };
  });

$(".portfolio_item").each(function(i) {
    $(this).find("a").attr("href","#work_" + i);
    $(this).find(".port_descr").attr("id","work_" + i);
  });

  $(".top_mnu ul a").mPageScroll2id();
});

// plugin ti preloader

$(window).load(function() { 
  $(".loader_inner").fadeOut(); 
  $(".loader").delay(400).fadeOut("slow"); 
});