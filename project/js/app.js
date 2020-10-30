$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});

$(document).ready(function(){

    let screenHeight=$(window).height();

    $(window).scroll(function(){
        let currentPosition= $(this).scrollTop();

        if(currentPosition>screenHeight-100){
            $(".side-nav").addClass("site-nav-scroll");
        }
        else{
            $(".side-nav").removeClass("site-nav-scroll");
        }
    });

});


new WOW().init();

var waypoint=$('#home').waypoint(function(direction){
    $(".nav-link").removeClass("current-link");
    $(".nav-link[href='#home']").addClass("current-link");
},{
    offset:'-10%'
});

var waypoint=$('#about').waypoint(function(direction){
    $(".nav-link").removeClass("current-link");
    $(".nav-link[href='#about']").addClass("current-link");

},{
    offset:'25%'
});

var waypoint=$('#service').waypoint(function(direction){
    $(".nav-link").removeClass("current-link");
    $(".nav-link[href='#service']").addClass("current-link");
},{
    offset:'25%'
});

var waypoint=$('#pricing').waypoint(function(direction){
    $(".nav-link").removeClass("current-link");
    $(".nav-link[href='#pricing']").addClass("current-link");
},{
    offset:'25%'
});

var waypoint=$('#contant').waypoint(function(direction){
    $(".nav-link").removeClass("current-link");
    $(".nav-link[href='#contant']").addClass("current-link");
},{
    offset:'25%'
});

$('.pricing-slide').slick({
arrows: false,
dots: true,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 3,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

$(".fa-bars").click(function(){
    $(".nav-sign").removeClass("fa-bars");
    $(".nav-sign").addClass("fa-times");
    $(".navbar-nav").css('display','block');
});

$(".fa-times").click(function(){
    $(".nav-sign").removeClass("fa-times");
    $(".nav-sign").addClass("fa-bars");
    $(".navbar-nav").css('display','none');
});

