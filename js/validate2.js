$(document).ready (function (){ 
// $('.popup-input-name').removeClass('popup-success-input');
// 		$('.popup-input-email').removeClass('popup-success-input');
// 		$('.popup-input-phone').removeClass('popup-success-input');	  
	$("#submit-popup2").click (function (e){
		// $('.popup-input-name').removeClass('popup-success-input');
		// $('.popup-input-email').removeClass('popup-success-input');
		// $('.popup-input-phone').removeClass('popup-success-input');
		e.preventDefault();
		e.stopImmediatePropagation();
		var form2 = $("#header-form2").closest("form");
		var formData2 = new FormData(form2[0]);
		var popupname2 = $("#popupname2").val();
		var popupemail2 = $("#popupemail2").val();
		var popuptel2 = $("#popuptel2").val();
		var emailvalidate = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
		var phonevalidate = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
		var failname2 = "";
		var failemail2="";
		var failephone2="";
		 	  
	 class EmaiValidate2 {
	 	email2() {
	 	 		$('.popup-input-email2').addClass('errorinput-mail');
				$("#errormail2").html(failemail2);
				$('#errormail2').show();
				$('.popup-input-email2').removeClass('popup-success-input');
				// document.getElementById("popupemail2").value = "";
  }	;	 
 };
  class NameValidate2 {
	 	name2() {
 				$("#errorname2").html(failname2);
				$('#errorname2').show();
				$('.popup-input-name2').addClass('errorinput');
				$('.popup-input-name2').removeClass('popup-success-input');
				// document.getElementById("popupname").value = "";
				}	;	 
 };
 class PhoneValidate2 {
	 	phone2() {
 				$("#errorphone2").html(failephone2);
				$('#errorphone2').show();
				$('.popup-input-phone2').addClass('errorinput');
				$('.popup-input-phone2').removeClass('popup-success-input');
				};	 
 };
 

			if(popupname2.length <= 1)
			{
				failname2 = "Имя не может быть меньше 1-го символа";
			}	 
		if(popupname2.length >= 25)
			{
				failname2 = "Имя не может быть больше 25-и символов"; 
			}
	 
		if(popupemail2.length < 4)
			{
				failemail2 = "Email не может быть меньше 4-х символов";
			}
		else if(popupemail2.length >= 40)
			{
				failemail2 = "Email не может быть больше 40-а символов";	 
			}
		if(popupemail2 == "")
			{
				failemail2 = "Это поле должно быть заполнено";
			}
		else if( emailvalidate.test(popupemail2) == false)
			{
				failemail2 = "Введите корректно Email"; 
			}
		if(popuptel2.length == "")
			{
				failephone2 = "Поле не может быть пустым"; 
			}
		else if( phonevalidate.test(popuptel2) == false)
			{
				failephone2 = "Введите корректно телефон"; 
			}
		else if(popuptel2.length > 13)
			{
				failephone2 = "Телефон не может быть больше 13-и символов"; 
			}	 	 	 
			if(failname2 != "")
			{
				new NameValidate2().name2();
				return false;
			}
		else
			{
				$('#errorname2').hide();
				$('.popup-input-name2').removeClass('errorinput');
				$('.popup-input-name2').addClass('popup-success-input');
			}
			
		if(failemail2 != "")
			{
				new EmaiValidate2().email2();
				return false;	
		}
		else
			{
				$('#errormail2').hide();
				$('.popup-input-email2').removeClass('errorinput-mail');
				$('.popup-input-email2').addClass('popup-success-input');		 
			}
		if(failephone2 != "")
			{
				new PhoneValidate2().phone2();
				return false;
			}
		else
			{
				$('#errorphone2').hide();
				$('.popup-input-phone2').removeClass('errorinput');
				$('.popup-input-phone2').addClass('popup-success-input');
			}
			if(failname2 == "" && failemail2 == "" && failephone2 == "")
{
	 $('.success-popup').addClass('success-enter');
			 $('.bg-modal2').removeClass('bg-modal2-enter');
			 $('.popup-input-name2').removeClass('popup-success-input');
			 $('.popup-input-email2').removeClass('popup-success-input');
			 $('.popup-input-phone2').removeClass('popup-success-input');	 
			 $("#header-form2")[0].reset();
}	 
 	
});
 });
	 
 
 