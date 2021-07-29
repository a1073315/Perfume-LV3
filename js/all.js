$(document).ready(function () {
    $('.showmenu').on('click',  function(e){
        e.preventDefault();
 
        $(".header").toggleClass("menu-show");
    });

});

