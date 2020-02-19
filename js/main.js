  //                    =====(POPUP-HEADER)=====
  document.getElementById('header-button').addEventListener('click',
    function(){
    //2-ой способ
		// document.querySelector('.bg-modal').style.display = 'flex';
		// $("html,body").css("overflow-y","hidden");
    //2-ой способ
	//1-ый способ
		// $('.bg-modal').fadeIn();
	//1-ый способ
	//3-ой способ
 		$('.bg-modal').addClass('bg-modal-enter');
 	//3-ой способ
            }); 	 
document.querySelector('.close-popup').addEventListener('click',
function(){
	//3-ый способ
	  		$('.bg-modal').removeClass('bg-modal-enter');
	//3-ый способ
  //1-ый способ
 		// $('.bg-modal').fadeOut();
 	//1-ый способ
  	//2-ой способ
        // document.querySelector('.bg-modal').style.display = 'none';
        //  $("html,body").css("overflow-y","visible");
    //2-ой способ
        });
//Если не попадаешь в зону popup окна - оно закрывается
const modal2 = document.getElementById('bg-modal2');
const modal = document.getElementById('bg-modal');
window.onclick = function(e)
{
  if(e.target == modal)
  {
      $('.bg-modal').removeClass('bg-modal-enter');
  }
  if(e.target == modal2)
  {
      $('.bg-modal2').removeClass('bg-modal2-enter');
  }
}
//Если не попадаешь в зону popup окна - оно закрывается
        //                    =====(POPUP-HEADER)=====   
        //                    =====(POPUP-Body)=====   
   document.getElementById('ordercall-button').addEventListener('click',
    function(){
    //2-ой способ
      // document.querySelector('.bg-modal2').style.display = 'flex';  
      // $('.bg-modal').fadeIn();
    //2-ой способ
    //3-ой способ
      $('.bg-modal2').addClass('bg-modal2-enter');
    //3-ой способ
    });
  document.querySelector('.close-popup2').addEventListener('click',
function(){
    //3-ой способ
  	 $('.bg-modal2').removeClass('bg-modal2-enter');
    //3-ой способ
  //2-ой способ
    // document.querySelector('.bg-modal2').style.display = 'none';
    //  $("html,body").css("overflow-y","visible");
  //2-ой способ
});
 
 //                      =====(POPUP-Body)===== 
 
  $(window).scroll(function(){
  $('div[id], h2[id],header[id],p[id],button[id]').each(function(){
    var id = $(this).attr('id');
    if($(this).offset().top-500< $(window).scrollTop())
    {
        $('a[href="#'+id+'"]').addClass('menu__link_active').siblings().removeClass('menu__link_active');
    }
    });
}); //  --(Burger Menu)--
     $('body').on('click', function(e) {
  if (!$(e.target).closest(".menu").length) {
    $('.navBurger').removeClass('active');
    $('.header__menu').removeClass('menu__active'); 
    //если не попадаешь по menu оно закрывается
  } 
});
    $('.navBurger').on('click', function(e) 
    {e.preventDefault();
    $('.header__menu').toggleClass('menu__active'); 
    });
    $('.menu__btn').on('click', function(e) {
    e.preventDefault;
        $(this).toggleClass('menu__btn_active');
    });
    $('a[href^="#"]').click(function () {
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
     $('html, body').animate({  
    scrollTop: $(target).offset().top - 50//можно вычесть высоту меню
    }, 500);
  // return false;
});
   //  --(Burger Menu)--
 //  --(Active Menu)--
 
//  --(Active Menu)--
 $("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
     
});
//     $(".menu__btn").click(function() {
//     $('.menu__active').toggle();
// });

    //  --(Scroll Top)--
    const buttonUP = $('.btn__up');
    $('body').append('<button class="btn__up" />');
    buttonUP.click(function(){
    $('body, html').animate({'scrollTop':0}, 1000);  
    });
    $(window).scroll(function(){
    if($(window).scrollTop() > 100)
    {
       buttonUP.addClass('btn__up-active');
    }
    else
    {
        buttonUP.removeClass('btn__up-active');
    }

   }); 
    function hideShow()
    {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 200 && !buttonUP.hasClass("btn__up-active"))
        {
            buttonUP.addClass("btn__up-active");
        }
        else
        {
            if(scrollTop < 200 && buttonUP.hasClass("btn__up-active"))
               {
                   buttonUP.removeClass("btn__up-active");
               }
        }
    }
    $(document).scroll(function(){
    hideShow();
    });
    hideShow();
    //  --(Scroll Top)--
// header patch of light for button
	$('.header-button').addClass('autoflash').append('<div class="flash lighting" ></div>');
// header patch of light for button

//ourcompany patch of light for button
	$('.ourcompany-button').addClass('autoflash').append('<div class="flash lighting" ></div>');
//ourcompany patch of light for button
//payments patch of light for button
	$('.payments-button').addClass('autoflash').append('<div class="flash lighting" ></div>');
//payments patch of light for button
//bonus patch of light for button
	$('.bonus-button').addClass('autoflash').append('<div class="flash lighting" ></div>');
//bonus patch of light for button
 function ready ()
 {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs,function(input)
     {
        var label = input.previousElementSibling,
        labelVal = label.innerHTML;

        input.addEventListener('change', function(e)
        {
          console.log(this.files);
          var fileName = '';
           
            fileName = this.files[0].name;
          if(fileName)
            label.querySelector('span').innerHTML = fileName;
          else
            label.innerHTML = labelVal;
        });
     });
 };
 document.addEventListener("DOMContentLoaded", ready);