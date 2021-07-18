$(document).ready (function (){
	 
 
 
	$("#submit-popup").click(function (e){
 
		e.preventDefault();
		e.stopImmediatePropagation();
		var form = $("#header-form").closest("form");
		var formData = new FormData(form[0]);
		var popupname = $("#popupname").val();
		var popupemail = $("#popupemail").val();
		var popuptel = $("#popuptel").val();
		var emailvalidate = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
		var phonevalidate = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
		var failname = "";
		var failemail="";
		var failephone="";
		

	 class EmaiValidate {
	  
	 	  email() {
	 	 		$('.popup-input-email').addClass('errorinput-mail');
				$("#errormail").html(failemail);
				$('#errormail').show();
				$('.popup-input-email').removeClass('popup-success-input');
  }	;	 
 };
  class NameValidate {
	 	name() {
 				$("#errorname").html(failname);
				$('#errorname').show();
				$('.popup-input-name').addClass('errorinput');
				$('.popup-input-name').removeClass('popup-success-input');
				};	 
 };
 class PhoneValidate {
	 		phone() {
 				$("#errorphone").html(failephone);
				$('#errorphone').show();
				$('.popup-input-phone').addClass('errorinput');
				$('.popup-input-phone').removeClass('popup-success-input');
				};	 
 };
  				 
			if(popupname.length < 1)
				{
					failname = 'Поле не может быть пустым';

				}
			if(popupname.length > 25)
				{
					failname =  'Поле не может быть больше 25 символов';  
				}
			if(popupemail.length < 1)
				{
					failemail = 'Поле не может быть пустым';
				}
			if(emailvalidate.test(popupemail) == false)
				{
					failemail =  'Введите корректно Email'; 
				}
			if(popupemail.length > 45)
				{
					failemail = 'Поле не может быть больше 45 символов';
				}
				if(popuptel.length < 1)
				{
					failephone = 'Поле не может быть пустым';
				}
				if(popuptel.length > 13)
				{
					failephone = 'Поле не может быть больше 13 символов';
				}
			if(failname != "")
			{
				new NameValidate().name();
				return false;
			}
		else
			{
				$('#errorname').hide();
				$('.popup-input-name').removeClass('errorinput');
				$('.popup-input-name').addClass('popup-success-input');
			}
			
		if(failemail != "")
			{
				new EmaiValidate().email();
				return false;	
		}
		else
			{
				$('#errormail').hide();
				$('.popup-input-email').removeClass('errorinput-mail');
				$('.popup-input-email').addClass('popup-success-input');		 
			}
		if(failephone != "")
			{
				new PhoneValidate().phone();
				return false;
			}
		else
			{
				$('#errorphone').hide();
				$('.popup-input-phone').removeClass('errorinput');
				$('.popup-input-phone').addClass('popup-success-input');
			}	


		
if( failname == "" && failemail == "" && failephone == ""){
					$('.popup-input-name').removeClass('popup-success-input');
					$('.popup-input-email').removeClass('popup-success-input');
					$('.popup-input-phone').removeClass('popup-success-input');
					$('.success-popup').addClass('success-enter');
					$('.bg-modal').removeClass('bg-modal-enter');
					$('.popup-input-name').removeClass('popup-success-input');
					$('.popup-input-email').removeClass('popup-success-input');
					$('.popup-input-phone').removeClass('popup-success-input');				 	 
					$("form")[0].reset();                
			   }; 
	 	
});
 });
	 
 
 