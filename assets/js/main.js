$(document).ready(function () {
    $(".home-col-1, .home-col-2, .home-col-3").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    $( "#add-brand-button" ).click(function() {
       $( "#wrapper-for-form" ).show( "slow" );
       $('body').scrollTo('#wrapper-for-form');
    });
    $( "#close-for-form" ).click(function() {
       $( "#wrapper-for-form" ).hide( "slow" );
    });
});