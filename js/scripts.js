//Reserve modal
$('#reserve').on("click", function() {
    $('#reserveModal').modal();
});

$("#closeReserveModal").on("click", function() {
    $('#reserveModal').modal('toggle');
});

//Login modal
$('#login').on("click", function() {
    $('#loginModal').modal();
});

$("#closeLoginModal").on("click", function() {
    $('#loginModal').modal('toggle');
});

//Carousel
$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
      }
      else if ($('#carouselButton').children('span').hasClass('fa-play')) {
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
      }
    });
});