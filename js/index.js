//네비게이터


    var nav = $(".nav > li");
    var cont = $(".contents > div");
    var btn = $(".graph_on");
    
    nav.click(function(d){
        d.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = cont.eq(index);
        var ofset = section.offset().top;
        $("html,body").animate({scrollTop:ofset},600,"easeInOutExpo");
    });

$(document).ready(function(){

    nav.eq(0).find("a").addClass("active");
})

    
  
    
  $(window).scroll(function(){
        var winScroll = $(this).scrollTop();
        if(winScroll >= cont.eq(0).offset().top){
            nav.find("a").removeClass("active");
            nav.eq(0).find("a").addClass("active");
        }
      
        if(winScroll >= cont.eq(1).offset().top){
            nav.find("a").removeClass("active");
            nav.eq(1).find("a").addClass("active");
        }
      
        if(winScroll >= cont.eq(2).offset().top){
            nav.find("a").removeClass("active");
            nav.eq(2).find("a").addClass("active");
         }
      
        if(winScroll >= cont.eq(3).offset().top){
            nav.find("a").removeClass("active");
            nav.eq(3).find("a").addClass("active");
         }
    })
/////////////////////////////////////////////////////////////
//그래프
$(btn).on('click',function(){
    
      var graph_sel = document.getElementById("graph_sel");
    var graph_idx = graph_sel.options.selectedIndex;
    
    if(graph_idx == 0){
//막대그래프 - 한번에 나타나기
        $(".demo > div").hide();
        $(".op1").show();
        
        setTimeout(function(){
            $(".op1 > div").animate({bottom:"0"},800);
        },300);
        
        $(btn).on('click',function(){
            $(".op1 > div").stop().css({bottom:"-100%"});
            setTimeout(function(){
            $(".op1 > div").stop().animate({bottom:"0"},800);
        },200);
        })

        
    }
    
//막대그래프 - 하나씩 나타나기
    else if(graph_idx == 1){
        $(".demo > div").hide();
        $(".op2").show();
 
        
        [0,1,2,3,4].forEach(function(op2Idx){
            setTimeout(function(){
              $(".op2 > div").eq(op2Idx).stop().animate({bottom:"0"},"slow");  
            },600*op2Idx);
        });
       
       
        
        $(btn).on('click',function(){
            $(".op2 > div").stop().css({bottom:"-100%"});
           [0,1,2,3,4].forEach(function(op2Idx){
            setTimeout(function(){
              $(".op2 > div").eq(op2Idx).stop().animate({bottom:"0"},"slow");  
            },600*op2Idx);
        });
        })
          
}
    
//막대그래프 - 한번에 닦아내기
    else if(graph_idx == 2){
        $(".demo > div").hide();
        $(".op3").show();
        
        setTimeout(function(){
            $(".op3_wrap").stop().animate({height:"100%"},1000);
        },300);
        
        $(btn).on('click',function(){
            $(".op3_wrap").stop().css({height:0});
            $(".op3_wrap").stop().animate({height:"100%"},1000)
        })
        
        
    }
    
//막대그래프 - 하나씩 닦아내기
    else if(graph_idx == 3){
        $(".demo > div").hide();
        $(".op4").show();
        
        
         setTimeout(function(){
        $(".op4_1").stop().animate({height:"140px"},600);
    },200);
    setTimeout(function(){
        $(".op4_2").stop().animate({height:"100px"},600);
    },600);
    setTimeout(function(){
        $(".op4_3").stop().animate({height:"270px"},600);
    },1000);
    setTimeout(function(){
        $(".op4_4").stop().animate({height:"290px"},600);
    },1400);
    setTimeout(function(){
        $(".op4_5").stop().animate({height:"220px"},600);
    },1800);
    
    
    $(btn).on('click',function(){
            $(".op4>div").stop().css({height:0});
            setTimeout(function(){
        $(".op4_1").stop().animate({height:"140px"},600);
    },200);
    setTimeout(function(){
        $(".op4_2").stop().animate({height:"100px"},600);
    },600);
    setTimeout(function(){
        $(".op4_3").stop().animate({height:"270px"},600);
    },1000);
    setTimeout(function(){
        $(".op4_4").stop().animate({height:"290px"},600);
    },1400);
    setTimeout(function(){
        $(".op4_5").stop().animate({height:"220px"},600);
    },1800);
        })
           
    }
//선형그래프 - 한번에 나타나기
    else if(graph_idx ==5){
        $(".demo > div").hide();
        $(".op5").show();
    
        setTimeout(function(){
            $(".op5 > div").stop().animate({width:"100%"},1000);
        },300)
        
        
        $(btn).on('click',function(){
            $(".op5 > div").stop().css({width:0});
            setTimeout(function(){
                $(".op5 > div").stop().animate({width:"100%"},1000);
            },300)
        })
    
    }
    
//선형그래프 - 하나씩 나타나기
    else if(graph_idx == 6){
        $(".demo > div").hide();
        $(".op6").show();
        
        setTimeout(function(){
            $(".op6_gray").stop().animate({width:"100%"},800);
        },300);
        setTimeout(function(){
            $(".op6_pink").stop().animate({width:"100%"},800);
        },1200);
        
        $(btn).on('click',function(){
            $(".op6 > div").stop().css({width:0});
            setTimeout(function(){
            $(".op6_gray").stop().animate({width:"100%"},800);
        },300);
        setTimeout(function(){
            $(".op6_pink").stop().animate({width:"100%"},800);
        },1200);
        })
           
    }
    
//선형그래프 - 누워있다 나타나기
    else if(graph_idx == 7){
        $(".demo > div").hide();
        $(".op7").show();
        
        
        setTimeout(function(){
            $(".op7_gray,.op7_pink").stop().addClass("active");
        },300)
        
        
        $(btn).on('click',function(){
            $(".op7_gray,.op7_pink").stop().removeClass("active");           
             setTimeout(function(){
            $(".op7_gray,.op7_pink").stop().addClass("active");
        },300);
        })
        
        
    }
    
    //막대그래프 - 움직이기
    else if(graph_idx == 4){
        $(".demo > div").hide();
        $(".op8").show();
        
        
        setTimeout(function(){
            $(".op8 > div").stop().animate({bottom:"0%"},800);
        },300);
        
       setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"20%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"60%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"90%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"30%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"100%"},800);
        },1400);
         setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"10%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"40%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"20%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"70%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"40%"},800);
        },2800);
         setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"50%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"30%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"80%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"95%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"65%"},800);
        },4200);
        
        $(btn).on('click',function(){
            
            $(".op8 > div").stop().css({bottom:"-100%"});
            
            setTimeout(function(){
            $(".op8 > div").stop().animate({bottom:"0%"},800);
        },300);
        
        setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"20%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"60%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"90%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"30%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"100%"},800);
        },1400);
         setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"10%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"40%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"20%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"70%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"40%"},800);
        },2800);
         setTimeout(function(){
            $(".op8 > div").eq(0).stop().animate({height:"50%"},800);
            $(".op8 > div").eq(1).stop().animate({height:"30%"},800);
            $(".op8 > div").eq(2).stop().animate({height:"80%"},800);
            $(".op8 > div").eq(3).stop().animate({height:"95%"},800);
            $(".op8 > div").eq(4).stop().animate({height:"65%"},800);
        },4200);
            
        })
        
        
    }
    //선형그래프 - 매끄럽게 선그리기
    
    else if(graph_idx == 8){
        $(".demo > div").hide();
         $(".op9").show();
      setTimeout(function(){
         $(".op9 > svg").show();
      },300);
        
        $(btn).on('click',function(){
            $(".op9 > svg").hide();
            setTimeout(function(){
                $(".op9 > svg").show();
            },200);
        })
        
        
    }
    
    
     //선형그래프 - 강조 선그리기
    
    else if(graph_idx == 9){
        $(".demo > div").hide();
         $(".op10").show();
      setTimeout(function(){
         $(".op10 > svg").show();
      },300);
        
        $(btn).on('click',function(){
            $(".op10 > svg").hide();
            setTimeout(function(){
                $(".op10 > svg").show();
            },200);
        })
        
        
    }
    
    
    //선형그래프 - 움직이기
    
    else if(graph_idx == 10){
        $(".demo > div").hide();
         $(".op11").show();
      setTimeout(function(){
         $(".op11 > svg").show();
      },300);
        
        $(btn).on('click',function(){
            $(".op11 > svg").hide();
            setTimeout(function(){
                $(".op11 > svg").show();
            },200);
        })
        
        
    }
    
    //도넛그래프 - 기본형
    
    else if(graph_idx == 11){
        $(".demo > div").hide();
        $(".op12").show();
    }

    
    //도넛그래프 - 퍼센트와 나타나기
    
    else if(graph_idx == 12){
        $(".demo > div").hide();
        $(".op13").show();
        
         $(btn).on('click',function(){
            $(".op13 svg").hide();
            setTimeout(function(){
                $(".op13 svg").show();
            },200)
        })
        
        $(".count span").each(function(){
           $(this).prop('Counter',0).animate({
               Counter:$(this).text()
           },{
               duration:3000,
               easing:'swing',
               step:function(now){
                   $(this).text(Math.ceil(now));
               }
           });
       });
    }
    //도넛그래프 - 분할과 강조
    else if(graph_idx == 13){
       
        $(".demo >div").hide();
        $(".op14").show();
        $(".op14 .nut").removeClass("on");
        $(".op14 .nut2").removeClass("on");
        $(".op14 .nut3").removeClass("on");
        $(".op14 .nut4").hide();
        $(".op14 .bigger").removeClass("active");
        $(".op14 .bigger").removeClass("freeze");

        var op14Timer1 = setTimeout(function(){
            $(".op14 .nut").addClass("on");
        },200)

      var op14Timer2 = setTimeout(function(){
             $(".op14 .nut2").addClass("on")
        },2500)
       
        var op14Timer3 = setTimeout(function(){
             $(".op14 .nut3").addClass("on")
        },4000)
        
        var op14Timer4 = setTimeout(function(){
            $(".op14 .nut4").fadeIn(1500);
        },6200)
        var op14Timer5 = setTimeout(function(){
            $(".op14 .bigger").addClass("active");
            $(".op14 .bigger").addClass("freeze");
        },7000);
        
        $(btn).on('click',function(){
            clearTimeout(op14Timer1);
        clearTimeout(op14Timer2);
        clearTimeout(op14Timer3);
        clearTimeout(op14Timer4);
        clearTimeout(op14Timer5);
        })
         
    }


});


/////////////////////////////////////////////////////////////
//텍스트

var btn2 = $(".txt_on");

$(btn2).on('click',function(){
    $(".demo2 > div").hide();
    var txt_sel = document.getElementById("txt_sel");
    var txt_idx = txt_sel.options.selectedIndex;
    //나타나기
    if(txt_idx == 0){
         $(".txt_js1").stop().fadeIn(500);  
    }
    
     //아래에서 위로
    else if(txt_idx == 1){
        $(".txt_js2 > p").css({"opacity":0,"margin-top":"30px"});
         $(".txt_js2").show();
        $(".txt_js2 > p").stop().animate({"opacity":1,"margin-top":"0px"});  
    }
    
    //가로로 색변화
    else if(txt_idx == 2){
        $(".txt_js3_p").css({"width":"0"});
       $(".txt_js3").show();
        setTimeout(function(){
            $(".txt_js3_p").stop().animate({"width":"50vw"},800);
        },100)
    }
    
    //가로로 색변화
    else if(txt_idx == 3){

         $(".txt_js4 p").hide();
        $(".txt_js4_6").css({"opacity":0,"left":"-50vw"});
         $(".txt_js4_7").css({"opacity":0,"left":"-50vw"});
        $(".txt_js4_8").css({"opacity":0,"left":"-50vw"});
        $(".txt_js4").stop().show();
       $(".txt_js4_1").stop().show();
     var timer = setTimeout(function(){
          $(".txt_js4_1").stop().hide();
          $(".txt_js4_2").stop().show();
      },300);
      var timer1 = setTimeout(function(){
          $(".txt_js4_2").stop().hide();
          $(".txt_js4_3").stop().show();
      },600);
      var timer2 = setTimeout(function(){
          $(".txt_js4_3").stop().hide();
          $(".txt_js4_1").stop().show();
      },900);
      var timer3 = setTimeout(function(){
          $(".txt_js4_1").stop().hide();
          $(".txt_js4_2").stop().show();
      },1200);
      var timer4 = setTimeout(function(){
          $(".txt_js4_2").stop().hide();
          $(".txt_js4_3").stop().show();
      },1500);

      var timer5 = setTimeout(function(){
          $(".txt_js4_3").stop().hide();
          $(".txt_js4_4").stop().fadeIn();
      },2000);
        
      var timer6 = setTimeout(function(){
          $(".txt_js4_4").stop().hide();
          $(".txt_js4_1").stop().show();
      },2800);
        
      var timer7 = setTimeout(function(){
          $(".txt_js4_1").stop().hide();
          $(".txt_js4_2").stop().show();
      },3100);
      var timer8 = setTimeout(function(){
          $(".txt_js4_2").stop().hide();
          $(".txt_js4_3").stop().show();
      },3400);
      var timer9 = setTimeout(function(){
          $(".txt_js4_3").stop().hide();
          $(".txt_js4_1").stop().show();
      },3700);
        var timer10 = setTimeout(function(){
          $(".txt_js4_1").stop().hide();
          $(".txt_js4_2").stop().show();
      },4000);
         var timer11 = setTimeout(function(){
          $(".txt_js4_2").stop().hide();
          $(".txt_js4_3").stop().show();
      },4300);

        var timer12 = setTimeout(function(){
          $(".txt_js4_3").stop().hide();
          $(".txt_js4_4").stop().fadeIn();
      },4800);
        
         var timer13 = setTimeout(function(){
          $(".txt_js4_4").stop().fadeOut();
          $(".txt_js4_5").stop().fadeIn();
      },5500);
        
        var timer14 = setTimeout(function(){
          $(".txt_js4_5").stop().fadeOut();
        $(".txt_js4_6").stop().show();
          $(".txt_js4_6").stop().animate({"opacity":1,"left":"80vw"},3000);
      },8000);
        
         var timer15 = setTimeout(function(){
          $(".txt_js4_6").stop().css({"opacity":0,"left":"-50vw"});
          $(".txt_js4_6").stop().hide();
          $(".txt_js4_7").stop().show();
          $(".txt_js4_7").stop().animate({"opacity":1,"left":"80vw"},3500);
      },10500);
        
         var timer16 = setTimeout(function(){
          $(".txt_js4_7").stop().css({"opacity":0,"left":"-50vw"});
          $(".txt_js4_7").stop().hide();
          $(".txt_js4_8").stop().show();
          $(".txt_js4_8").stop().animate({"opacity":1,"left":"80vw"},4000);
      },13500);
        
        var timer17 = setTimeout(function(){
          $(".txt_js4_8").stop().css({"opacity":0,"left":"0vw"});
          $(".txt_js4_8").stop().animate({"opacity":1},1000);
      },17700);
        
        
        $(btn2).on('click',function(){
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
            clearTimeout(timer8);
            clearTimeout(timer9);
            clearTimeout(timer10);
            clearTimeout(timer11);
            clearTimeout(timer12);
            clearTimeout(timer13);
            clearTimeout(timer14);
            clearTimeout(timer15);
            clearTimeout(timer16);
            clearTimeout(timer17);
            
        })
        
    }
    

    
})







    


