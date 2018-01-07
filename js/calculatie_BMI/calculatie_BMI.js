$(function(){

  //////// BMI calculate page OPEN //////////////
    $("button#start").click(function(){
      $("div.mainPage").stop(true).fadeOut(1000);
      $("div.BMI_calculate").stop(true).fadeIn(1000);
    });
  
  /////////  BMI_calculate start & BMI_result OPEN & BMI calculate page close  //////////
    $("button#calculate").click(function(){
      var stature = parseFloat($("#stature").val());
      var weight = parseInt($("#weight").val());
      var BMI_RESULT = (weight/(stature*stature)).toFixed(2);
      var gender =$("[name=gender]:checked").val();
      $("div.BMI_calculate").fadeOut(1000);
      $("div.BMI_result").fadeIn(1000);
      $("p.result").text(BMI_RESULT);
      //console.log(gender,BMI_RESULT);
      
      //////////  BMI each condition open   /////////////////
        if(BMI_RESULT>=30 && gender==="man"){
          $("div#BMI_over30_man").fadeIn(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeOut(0);
        }else if(BMI_RESULT>=30 && gender==="woman"){
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeIn(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeOut(0);
        }else if(BMI_RESULT<30 && BMI_RESULT>18 && gender==="man"){
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeIn(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeOut(0);
        }else if(BMI_RESULT<30 && BMI_RESULT>18 && gender==="woman"){
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeIn(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeOut(0);
        }else if(BMI_RESULT<=18 && gender==="man"){
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeIn(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeOut(0);
        }else if(BMI_RESULT<=18 && gender==="woman"){
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeIn(0);
          $("div#BMI_otnher").fadeOut(0);
        }else{
          $("div#BMI_over30_man").fadeOut(0);
          $("div#BMI_over30_woman").fadeOut(0);
          $("div#BMI_18_30_man").fadeOut(0);
          $("div#BMI_18_30_woman").fadeOut(0);
          $("div#BMI_18downward_man").fadeOut(0);
          $("div#BMI_18downward_woman").fadeOut(0);
          $("div#BMI_otnher").fadeIn(0);
        }
    });
  //////// close_icon //////////////////////
      /////////// BMI_calculate /////////////////////
  $(".BMI_calculate .close_icon").click(function(){
    $("div.BMI_calculate").fadeOut(1000);
    $("div.mainPage").fadeIn(1000);
  });

      ///////// BMI_result /////////////////////////
  $(".BMI_result .close_icon,#BMI_otnher .result_comment p:last").click(function(){
    $("div.BMI_result").fadeOut(1000);
    $("div.BMI_calculate").fadeIn(1000);
  });
});
