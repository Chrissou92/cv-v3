var app ={
  init: function() {
    console.log('App : init');

$(window).scroll(function(){
  posScroll = $(document).scrollTop();
          if(posScroll >=69)
          $('.nav').slideDown(450);
          if(posScroll >=69){

            $(".fixe-nav").hide();
          }
        else
          $('.nav').slideUp(450)&&
            $(".fixe-nav").show(450)


});
}

};
// quand le DOM est prêt, on lance app.init
$(app.init);
