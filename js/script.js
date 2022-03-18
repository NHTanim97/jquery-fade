$(document).ready(function(){

    // fade In
   $(".btn_one").click(function(){
    $(".one_boxone").fadeIn();
    $(".one_boxtwo").fadeIn('slow');
    $(".one_boxthree").fadeIn(3000);
   });






//  fade Out
$(".btn_two").click(function(){
    $(".two_boxone").fadeOut();
    $(".two_boxtwo").fadeOut('slow');
    $(".two_boxthree").fadeOut(3000);
   });




//  fade toggle
$(".btn_three").click(function(){
    $(".three_boxone").fadeToggle();
    $(".three_boxtwo").fadeToggle('slow');
    $(".three_boxthree").fadeToggle(3000);
   });





// fade to
   $(".btn_four").click(function(){
    $(".four_boxone").fadeTo('slow',1);
    $(".four_boxtwo").fadeTo('slow',0.6);
    $(".four_boxthree").fadeTo('slow',0.9);
   });

});