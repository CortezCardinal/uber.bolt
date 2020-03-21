$(document).ready (function (){ 	  
	$("#submit-popup").click (function (e){
		e.preventDefault();
		e.stopImmediatePropagation();
		var form = $("#header-form").closest("form");
		var formData = new FormData(form[0]);
		var popupname = $("#popupname").val();
		 // var popupname = document.getElementById('popupname').val();
		var popupemail = $("#popupemail").val();
		var popuptel = $("#popuptel").val();
		var emailvalidate = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
		var phonevalidate = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
		var failname = "";
		var failemail="";
		var failephone="";
	// var formData = new FormData(document.getElementById('popupname').val);
	  
	 class EmaiValidate {
	 	email() {
	 	 		$('.popup-input-email').addClass('errorinput-mail');
				$("#errormail").html(failemail);
				$('#errormail').show();
				$('.popup-input-email').removeClass('popup-success-input');
				document.getElementById("popupemail").value = "";
  }	;	 
 };
  class NameValidate {
	 	name() {
 				$("#errorname").html(failname);
				$('#errorname').show();
				$('.popup-input-name').addClass('errorinput');
				$('.popup-input-name').removeClass('popup-success-input');
				document.getElementById("popupname").value = "";
				}	;	 
 };
 class PhoneValidate {
	 	phone() {
 				$("#errorphone").html(failephone);
				$('#errorphone').show();
				$('.popup-input-phone').addClass('errorinput');
				$('.popup-input-phone').removeClass('popup-success-input');
				 
				};	 
 };
 
	 
		if(popupname.length <= 1)
			{
				failname = "Имя не может быть меньше 1-го символа";
			}	 
		if(popupname.length >= 25)
			{
				failname = "Имя не может быть больше 25-и символов"; 
			}
	 
		if(popupemail.length < 4)
			{
				failemail = "Email не может быть меньше 4-х символов";
			}
		else if(popupemail.length >= 40)
			{
				failemail = "Email не может быть больше 40-а символов";	 
			}
		if(popupemail == "")
			{
				failemail = "Это поле должно быть заполнено";
			}
		else if( emailvalidate.test(popupemail) == false)
			{
				failemail = "Введите корректно Email"; 
			}
		if(popuptel.length == "")
			{
				failephone = "Поле не может быть пустым"; 
			}
		else if( phonevalidate.test(popuptel) == false)
			{
				failephone = "Введите корректно телефон"; 
			}
		else if(popuptel.length > 13)
			{
				failephone = "Телефон не может быть больше 13-и символов"; 
			}	 	 	 
		if(failname != "")
			{
				new NameValidate().name();
				return false;
				// $("#errorname").html(failname);
				// $('#errorname').show();
				// $('.popup-input-name').addClass('errorinput');
				// $('.popup-input-name').removeClass('popup-success-input');
				// return false;
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
				// $('.popup-input-email').addClass('errorinput-mail');
				// $("#errormail").html(failemail);
				// $('#errormail').show();
				// $('.popup-input-email').removeClass('popup-success-input');
				// document.getElementById("popupemail").value = "";
				// return false;
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
				// $("#errorphone").html(failephone);
				// $('#errorphone').show();
				// $('.popup-input-phone').addClass('errorinput');
				// $('.popup-input-phone').removeClass('popup-success-input');
				// return false;
			}
		else
			{
				$('#errorphone').hide();
				$('.popup-input-phone').removeClass('errorinput');
				$('.popup-input-phone').addClass('popup-success-input');
			}
if(failname == "" && failemail == "" && failephone == "")
{
	 $('.success-popup').addClass('success-enter');
			 $('.bg-modal').removeClass('bg-modal-enter');
			 $('.popup-input-name').removeClass('popup-success-input');
			 $('.popup-input-email').removeClass('popup-success-input');
			 $('.popup-input-phone').removeClass('popup-success-input');	 
			 $("form")[0].reset();
}
			// $.ajax({
			//     type: "POST",
			//     url: 'mail.php',
			//     data: formData ,
			//     dataType: "html",
			 
			//     processData: false,
			//     contentType: false,
			//     success: function(data) {
			    	 
			//   if(data = true){		           
			//  $('.success-popup').addClass('success-enter');
			//  $('.bg-modal').removeClass('bg-modal-enter');
			//  $('.popup-input-name').removeClass('popup-success-input');
			//  $('.popup-input-email').removeClass('popup-success-input');
			//  $('.popup-input-phone').removeClass('popup-success-input');	 
			//  $("form")[0].reset();
			//           };
			//    }
			// });
	});
 
 });
 
	 
 
 