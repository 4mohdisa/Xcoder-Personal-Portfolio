$(document).ready(function () {
  $(".sidemenu-toggler").click(function () {
    $(".sidemenu").addClass("active");
    $(".line-top").addClass("active");
    $(".line-bottom").addClass("active");
    $(".close").addClass("active");
  });
  $(".close").click(function () {
    $(this).removeClass("active");
    $(".sidemenu").removeClass("active");
    $(".line-top").removeClass("active");
    $(".line-bottom").removeClass("active");
  });
  $(".nav_link").click(function () {
    $(this).removeClass("active");
    $(".sidemenu").removeClass("active");
    $(".line-top").removeClass("active");
    $(".line-bottom").removeClass("active");
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 0) {
      $(".header").addClass(".sticky");
    } else {
      $(".header").removeClass(".sticky");
    }
  });

  $(window).on("load", function () {
    var $container = $(".portfolioContainer");
    $container.isotope({
      filter: "*",
      animationOptions: {
        queue: true,
      },
    });
  });
});
