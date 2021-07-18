 $(document).ready (function (){
// ========================={Ready}=============================
 function ready ()
  	{
      var inputs = document.querySelectorAll('.inputfile');
      Array.prototype.forEach.call(inputs,function(input)
       {
          var label = input.previousElementSibling,
          labelVal = label.innerHTML;
          input.addEventListener('change', function(e)
	          {
	            var fileName = '';
	              fileName = this.files[0].name;
	              filelength = this.files[0].length;
	            if(fileName)
		            {
		              label.querySelector('span').innerHTML = fileName;
		            }
	           else 
		           	{
		              label.innerHTML = labelVal;	  
		            }
	          
	          });
       });
     };
     ready();
   // ========================={Ready}============================= 
     document.addEventListener("DOMContentLoaded", ready);  
	$("#submit-registration").click (function (e){
		e.preventDefault();
		e.stopImmediatePropagation();
		var form = $("#registrationform").closest("form");
		var formData = new FormData(form[0]);
		var bodypname = $("#registration-label-name").val();
		var bodymail = $("#registration-label-email").val();
		var bodytel = $("#registration-label-tel").val();
		var bodycity = $("#registration-label-city").val();
		var bodypassport = $("#registration-label-passport").val();
		var bodydriverlicense = $("#registration-label-driverlicense").val();
		var bodybrendofacar = $("#registration-label-brandofacar").val();
		var bodycarmodel = $("#registration-label-carmodel").val();
		var bodycarcolor = $("#registration-label-colorcar").val();
		var bodyregistrationnumbercar = $("#registration-label-registrationnumbercar").val();
		var bodyyearcar = $("#registration-label-yearcar").val();
		var file1 = $("#fileid1");
		var file2 = $("#fileid2");
		var file3 = $("#fileid3");
		var file4 = $("#fileid4");
		var file5 = $("#fileid5");
		var file6 = $("#fileid6");
		var file7 = $("#fileid7");
		var file8 = $("#fileid8");
//==================={VAR FILES}======================
//====================={File1}========================
	var failfile1 = "";
	class FileValidate1 {
		file1() {
		        $("#errorfile1").html(failfile1);
		        $('#errorfile1').show();
		        $(file1).focus();
		        $(".title-button-registration1").removeClass('title-button-registration');
		        $('.title-button-registration1').addClass('error-input-file');
		        $('.title-button-registration1').removeClass('success-input-file');
		        }; 
    		};
    		 
//====================={File1}========================
//====================={File2}========================
	var failfile2 = "";
	class FileValidate2 {
		file2() {
		        $("#errorfile2").html(failfile2);
		        $('#errorfile2').show();
		        $(file2).focus();
		        $(".title-button-registration2").removeClass('title-button-registration');
		        $('.title-button-registration2').addClass('error-input-file');
		        $('.title-button-registration2').removeClass('success-input-file');
		        }; 
    		};		 
//====================={File2}========================
//====================={File3}========================
	var failfile3 = "";
	class FileValidate3 {
		file3() {
		        $("#errorfile3").html(failfile3);
		        $('#errorfile3').show();
		        $(file3).focus();
		        $(".title-button-registration3").removeClass('title-button-registration');
		        $('.title-button-registration3').addClass('error-input-file');
		        $('.title-button-registration3').removeClass('success-input-file');
		        }; 
    		};	 
//====================={File3}========================
//====================={File4}========================
	var failfile4 = "";
	class FileValidate4 {
		file4() {
		        $("#errorfile4").html(failfile4);
		        $('#errorfile4').show();
		        $(file4).focus();
		        $(".title-button-registration4").removeClass('title-button-registration');
		        $('.title-button-registration4').addClass('error-input-file');
		        $('.title-button-registration4').removeClass('success-input-file');
		        }; 
    		};		 
//====================={File4}========================
//====================={File5}========================
	var failfile5 = "";
	class FileValidate5 {
		file5() {
		        $("#errorfile5").html(failfile5);
		        $('#errorfile5').show();
		        $(file5).focus();
		        $(".title-button-registration5").removeClass('title-button-registration');
		        $('.title-button-registration5').addClass('error-input-file');
		        $('.title-button-registration5').removeClass('success-input-file');
		        }; 
    		};   		 
//====================={File5}========================
//====================={File6}========================
	var failfile6 = "";
	class FileValidate6 {
		file6() {
		        $("#errorfile6").html(failfile6);
		        $('#errorfile6').show();
		        $(file6).focus();
		        $(".title-button-registration6").removeClass('title-button-registration');
		        $('.title-button-registration6').addClass('error-input-file');
		        $('.title-button-registration6').removeClass('success-input-file');
		        }; 
    		};
    		 
//====================={File6}========================
//====================={File7}========================
	var failfile7 = "";
	class FileValidate7 {
		file7() {
		        $("#errorfile7").html(failfile7);
		        $('#errorfile7').show();
		        $(file7).focus();
		        $(".title-button-registration7").removeClass('title-button-registration');
		        $('.title-button-registration7').addClass('error-input-file');
		        $('.title-button-registration7').removeClass('success-input-file');
		        }; 
    		};  		 
//====================={File7}========================
//====================={File8}========================
	var failfile8 = "";
	class FileValidate8 {
		file8() {
		        $("#errorfile8").html(failfile8);
		        $('#errorfile8').show();
		        $(file8).focus();
		        $(".title-button-registration8").removeClass('title-button-registration');
		        $('.title-button-registration8').addClass('error-input-file');
		        $('.title-button-registration8').removeClass('success-input-file');
		        }; 
    		};
    		 
//====================={File8}========================
//==================={VAR FILES}======================
	var emailvalidate = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
	var phonevalidate = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
	var failnamebody = "";
	var failemailbody=""; 
	var failephonebody="";
	var failcitybody="";
	var failpassportbody="";
	var faildriverlicensebody="";
	var failbrendofcar="";
	var failcarmodal="";
	var failcolorcar="";
	var failregistrationnumbercar="";
	var failyearcar = "";

	class EmailBodyValidate {
	 	email() 
		 	{
		 	 	$('.inp-body-mail').addClass('errorinput-mail');
				$("#errorbodymail").html(failemailbody);
				$('#errorbodymail').show();
				$('.inp-body-mail').focus();
				$('.inp-body-mail').removeClass('popup-success-input');
	  		};	 
 		};
  	class NameBodyValidate {
	 	name() 
		 	{
	 			$("#errorbodyname").html(failnamebody);
				$('#errorbodyname').show();
				$('.inp-body-name').focus();
				$('.inp-body-name').addClass('errorinput');
				$('.inp-body-name').removeClass('popup-success-input');
			};	 
 };
 	class PhoneBodyValidate {
	 	phone() 
	 	{
 			$("#errorbodyphone").html(failephonebody);
			$('#errorbodyphone').show();
			$('.inp-body-phone').focus();
			$('.inp-body-phone').addClass('errorinput');
			$('.inp-body-phone').removeClass('popup-success-input');
		};	 
 };
  	class CityBodyValidate {
	 	city() 
	 	{
	 	 	$('.inp-body-city').addClass('errorinput');
			$("#errorbodycity").html(failcitybody);
			$('#errorbodycity').show();
			$('.inp-body-city').focus();
			$('.inp-body-city').removeClass('popup-success-input');
  		}	;	 
 };
  	class PassportBodyValidate {
	 	passport() 
	 	{
	 	 	$('.inp-body-passport').addClass('errorinput');
			$("#errorbodypassport").html(failpassportbody);
			$('#errorbodypassport').show();
			$('.inp-body-passport').focus();
			$('.inp-body-passport').removeClass('popup-success-input');
				
  		};	 
 };
 	class DriverlicenseBodyValidate {
	 	driverlicense() 
	 	{
	 	 	$('.inp-body-driverlicense').addClass('errorinput');
			$("#errorbodydriverlicense").html(faildriverlicensebody);
			$('#errorbodydriverlicense').show();
			$('.inp-body-driverlicense').focus();
			$('.inp-body-driverlicense').removeClass('popup-success-input');
				
  		};	 
 };
 	class BrendlicenseBodyValidate {
	 	brend() 
	 	{
	 	 	$('.inp-body-brandofacar').addClass('errorinput');
			$("#errorbodybrandofacar").html(failbrendofcar);
			$('#errorbodybrandofacar').show();
			$('.inp-body-brandofacar').focus();
			$('.inp-body-brandofacar').removeClass('popup-success-input');
		};	 
 };
 class ModellicenseBodyValidate {
	 	model() 
	 	{
	 	 	$('.inp-body-carmodel').addClass('errorinput');
			$("#errorbodycarmodal").html(failcarmodal);
			$('#errorbodycarmodal').show();
			$('.inp-body-carmodel').focus();
			$('.inp-body-carmodel').removeClass('popup-success-input');			
  		};	 
 };
 	class ColorCarlicenseBodyValidate {
	 	colorcar() 
	 	{
	 	 	$('.inp-body-colorcar').addClass('errorinput');
			$("#errorbodycolorcar").html(failcolorcar);
			$('#errorbodycolorcar').show();
			$('.inp-body-colorcar').focus();
			$('.inp-body-colorcar').removeClass('popup-success-input');			
  		};	 
 };
 	class RegistrationlicenseBodyValidate {
	 	registration() 
	 	{
	 	 	$('.inp-body-registrationnumbercar').addClass('errorinput');
			$("#errorbodyregistrationnumbercar").html(failregistrationnumbercar);
			$('#errorbodyregistrationnumbercar').show();
			$('.inp-body-registrationnumbercar').focus();
			$('.inp-body-registrationnumbercar').removeClass('popup-success-input');
  		};	 
 };
 	class YearcarlicenseBodyValidate {
	 	yearcar() 
	 	{
	 	 	$('.inp-body-yearcar').addClass('errorinput');
			$("#errorbodyyearcar").html(failyearcar);
			$('#errorbodyyearcar').show();
			$('.inp-body-yearcar').focus();
			$('.inp-body-yearcar').removeClass('popup-success-input');			
  		};	 
 };
 	 
 function initialFileName (){
 	var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs,function(input)
       {
        	var label = input.previousElementSibling,
        	labelVal = label.innerHTML;
			label.querySelector('span').innerHTML ="Добавить файл";
		});
};
 // Функция проверяет количество МБ в файле
 function validateSize(fileInput,size) 
 {
    var fileObj, oSize;
    if ( typeof ActiveXObject == "function" ) 
	    { // IE
	        fileObj = (new ActiveXObject("Scripting.FileSystemObject")).getFile(fileInput.value);
	    }
    else 
	    {
	        fileObj = fileInput.get(0).files[0];
	    }
    oSize = fileObj.size; // Size returned in bytes.
    if(oSize > size * 1024 * 1024)
	    {
	        return false
	    } 
    //если файл превышает указанное чисто в функции - возвращает false
    return true;;
}
// Функция проверяет количество МБ в файле
  
 
				 
  
//================={FILES}====================
//================{Проверяет расширение файла '.jpg', '.png', '.gif','.bmp'}====================
 	 $.fn.hasExtension = function(exts) 
        {
        	return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test($(this).val());
        }
//================{Проверяет расширение файла '.jpg', '.png', '.gif','.bmp'}====================
 	//====================={File1}========================

  		if (file1.val().length == 0)
        	{
              	failfile1 = 'Поле не может быть пустым';
      		}
      else	if (!(file1).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile1 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file1,10))
	     	{
	        	failfile1 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File1}========================
 	//====================={File2}========================
  		if (file2.val().length == 0)
        	{
              	failfile2 = 'Поле не может быть пустым';
      		}
      else 	if (!(file2).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile2 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file2,10))
	     	{
	        	failfile2 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File2}========================
 	//====================={File3}========================
  		if (file3.val().length == 0)
        	{
              	failfile3 = 'Поле не может быть пустым';
      		}
      else	if (!(file3).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile3 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file3,10))
	     	{
	        	failfile3 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File3}========================
 	//====================={File4}========================
  		if (file4.val().length == 0)
        	{
              	failfile4 = 'Поле не может быть пустым';      
      		}
     else 	if (!(file4).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile4 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file4,10))
	     	{
	        	failfile4 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File4}========================
 	//====================={File5}========================
  		if (file5.val().length == 0)
        	{
              	failfile5 = 'Поле не может быть пустым';
      		}
    else  	if (!(file5).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile5 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file5,10))
	     	{
	        	failfile5 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File5}========================
 	//====================={File6}========================
  		if (file6.val().length == 0)
        	{
              	failfile6 = 'Поле не может быть пустым';
      		}
     else 	if (!(file6).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile6 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file6,10))
	     	{
	        	failfile6 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File6}========================
 	//====================={File7}========================
  		if (file7.val().length == 0)
        	{
              	failfile7 = 'Поле не может быть пустым';
      		}
     else 	if (!(file7).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile7 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file7,10))
	     	{
	        	failfile7 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File7}========================
 	//====================={File8}========================
 	  
  		if (file8.val().length == 0)
        	{
              	failfile8 = 'Поле не может быть пустым';
      		}
    else  	if (!(file8).hasExtension(['.jpg', '.png', '.gif','.bmp'])) 
      		{
        		failfile8 =  'Данный тип файла не поддерживается';
     		}
     else if(!validateSize(file8,10))
	     	{
	        	failfile8 = 'Размер файла не должен превышать 10 МБ';
	   		}
 	//====================={File8}========================	  
    			 
			if(bodypname.length < 1)
				{
					failnamebody = 'Поле не может быть пустым';
				}
			if(bodypname.length > 50)
				{
					failnamebody =  'Поле не может быть больше 50 символов';
				}
			if(bodymail.length < 1)
				{
					failemailbody = 'Поле не может быть пустым';
				}
			if(emailvalidate.test(bodymail) == false)
				{
					failemailbody =  'Введите корректно Email';  
				}
			if(popupemail.length > 45)
				{
					failemailbody = 'Поле не может быть больше 45 символов';
				}
			if(bodytel.length < 1)
				{
					failephonebody = 'Поле не может быть пустым';
				}
			if(bodytel.length > 13)
				{
					failephonebody = 'Поле не может быть больше 13 символов';	
				}
			if(bodycity.length < 1)
				{
					failcitybody = 'Поле не может быть пустым';
				 
				}
			if(bodycity.length > 35)
				{
					failcitybody = 'Поле не может быть больше 35 символов';
				}
			if(bodypassport.length < 1)
				{
					failpassportbody = 'Поле не может быть пустым';
				 
				}
			if(bodypassport.length > 15)
				{
					failpassportbody = 'Поле не может быть больше 15 символов';
				}
			if(bodydriverlicense.length < 1)
				{
					faildriverlicensebody = 'Поле не может быть пустым';
				 
				}
			if(bodydriverlicense.length > 15)
				{
					faildriverlicensebody = 'Поле не может быть больше 15 символов';
				}
			if(bodybrendofacar.length < 1)
				{
					failbrendofcar =  'Поле не может быть пустым';	
				 
				}
			if(bodybrendofacar.length > 30)
				{
					failbrendofcar =  'Поле не может быть больше 30 символов';
				}
			if(bodycarcolor.length < 1)
				{
					failcolorcar =  'Поле не может быть пустым';
				 
				}
			if(bodycarcolor.length > 30)
				{
					failcolorcar =  'Поле не может быть больше 30 символов';
				}
			if(bodycarmodel.length < 1)
				{
					failcarmodal =  'Поле не может быть пустым';
				 
				}
			if(bodycarmodel.length > 30)
				{
					failcarmodal =  'Поле не может быть больше 30 символов';	
				}
				 
		 
			if(bodyregistrationnumbercar.length < 1)
				{
					failregistrationnumbercar =  'Поле не может быть пустым';
				 
				}
			if(bodyregistrationnumbercar.length > 30)
				{
					failregistrationnumbercar =  'Поле не может быть больше 30 символов';	
				}
			if(bodyyearcar.length < 1)
				{
					failyearcar =  'Поле не может быть пустым';
				 
				}
			if(bodyyearcar.length > 30)
				{
					failyearcar =  'Поле не может быть больше 30 символов';	
				}
		if(failnamebody != "")
			{ 
				new NameBodyValidate().name();
				return false; 
			}
			  
		 else
			{
				$('#errorbodyname').hide();
				$('.inp-body-name').removeClass('errorinput');
				$('.inp-body-name').addClass('popup-success-input');
			}
		 
		if(failemailbody != "")
			{
				new EmailBodyValidate().email();
				return false;	
			}
		else
			{
				$('#errorbodymail').hide();
				$('.inp-body-mail').removeClass('errorinput-mail');
				$('.inp-body-mail').addClass('popup-success-input');		 
			}
		if(failephonebody != "")
			{
				new PhoneBodyValidate().phone();
				return false;
			}
		else
			{
				$('#errorbodyphone').hide();
				$('.inp-body-phone').removeClass('errorinput');
				$('.inp-body-phone').addClass('popup-success-input');
			}
		if(failcitybody != "")
			{
				new CityBodyValidate().city();
				return false;
			 
			}
		else
			{
				$('#errorbodycity').hide();
				$('.inp-body-city').removeClass('errorinput');
				$('.inp-body-city').addClass('popup-success-input'); 
			}
		if(failpassportbody != "")
			{
				new PassportBodyValidate().passport();
				return false;
			 
			}
		else
			{
				$('#errorbodypassport').hide();
				$('.inp-body-passport').removeClass('errorinput');
				$('.inp-body-passport').addClass('popup-success-input'); 
			}
		if(faildriverlicensebody != "")
			{
				new DriverlicenseBodyValidate().driverlicense();
				return false;
			 
			}
		else
			{
				$('#errorbodydriverlicense').hide();
				$('.inp-body-driverlicense').removeClass('errorinput');
				$('.inp-body-driverlicense').addClass('popup-success-input'); 
			}			

		if(failfile1 != "")
	        {
	            new FileValidate1().file1();
	            return false;
	        }
        else
	        {
	        	$("#errorfile1").hide();
	        	$(".title-button-registration1").removeClass('error-input-file');
				$('.title-button-registration1').addClass('success-input-file');    
	        }
	    if(failfile2 != "")
	        {
	            new FileValidate2().file2();
	            return false;
	        }
        else
	        {
	        	$("#errorfile2").hide();
	        	$(".title-button-registration2").removeClass('error-input-file');
				$('.title-button-registration2').addClass('success-input-file');    
	        }
	    if(failfile3 != "")
	        {
	            new FileValidate3().file3();
	            return false;
	        }
        else
	        {
	        	$("#errorfile3").hide();
	        	$(".title-button-registration3").removeClass('error-input-file');
				$('.title-button-registration3').addClass('success-input-file');    
	        }
	    if(failfile4 != "")
	        {
	            new FileValidate4().file4();
	            return false;
	        }
        else
	        {
	        	$("#errorfile4").hide();
	        	$(".title-button-registration4").removeClass('error-input-file');
				$('.title-button-registration4').addClass('success-input-file');    
	        }
	    if(failfile5 != "")
	        {
	            new FileValidate5().file5();
	            return false;
	        }
        else
	        {
	        	$("#errorfile5").hide();
	        	$(".title-button-registration5").removeClass('error-input-file');
				$('.title-button-registration5').addClass('success-input-file');    
	        }
	    if(failfile6 != "")
	        {
	            new FileValidate6().file6();
	            return false;
	        }
        else
	        {
	        	$("#errorfile6").hide();
	        	$(".title-button-registration6").removeClass('error-input-file');
				$('.title-button-registration6').addClass('success-input-file');    
	        }
	    if(failfile7 != "")
	        {
	            new FileValidate7().file7();
	            return false;
	        }
        else
	        {
	        	$("#errorfile7").hide();
	        	$(".title-button-registration7").removeClass('error-input-file');
				$('.title-button-registration7').addClass('success-input-file');    
	        }

	    if(failbrendofcar != "")
			{
				new BrendlicenseBodyValidate().brend();
				return false;
			 
			}
		else
			{
				$('#errorbodybrandofacar').hide();
				$('.inp-body-brandofacar').removeClass('errorinput');
				$('.inp-body-brandofacar').addClass('popup-success-input'); 
			}
		if(failcarmodal != "")
			{
				new ModellicenseBodyValidate().model();
				return false;
			 
			}
		else
			{
				$('#errorbodycarmodal').hide();
				$('.inp-body-carmodel').removeClass('errorinput');
				$('.inp-body-carmodel').addClass('popup-success-input'); 
			}
		if(failcolorcar != "")
			{
				new ColorCarlicenseBodyValidate().colorcar();
				return false;
			 
			}
		else
			{
				$('#errorbodycolorcar').hide();
				$('.inp-body-colorcar').removeClass('errorinput');
				$('.inp-body-colorcar').addClass('popup-success-input'); 
			}
		if(failregistrationnumbercar != "")
			{
				new RegistrationlicenseBodyValidate().registration();
				return false;
			 
			}
		else
			{
				$('#errorbodyregistrationnumbercar').hide();
				$('.inp-body-registrationnumbercar').removeClass('errorinput');
				$('.inp-body-registrationnumbercar').addClass('popup-success-input'); 
			}
		if(failyearcar != "")
			{
				new YearcarlicenseBodyValidate().yearcar();
				return false;
			 
			}
		else
			{
				$('#errorbodyyearcar').hide();
				$('.inp-body-yearcar').removeClass('errorinput');
				$('.inp-body-yearcar').addClass('popup-success-input'); 
			}
		if(failfile8 != "")
	        {
	            new FileValidate8().file8();
	            return false;
	        }
        else
	        {
	        	$("#errorfile8").hide();
	        	$(".title-button-registration8").removeClass('error-input-file');
				$('.title-button-registration8').addClass('success-input-file');    
	        }
		 
	
if(failnamebody == "" 
	&& failemailbody == "" 
	&& failephonebody == ""
	&& failcitybody == ""
	&& failpassportbody == ""
	&& faildriverlicensebody == ""
	&& failcarmodal == ""
	&& failcolorcar == ""
	&& failregistrationnumbercar == ""
	&& failyearcar == ""
	&& failfile1 == ""
	&& failfile2 == ""
	&& failfile3 == ""
	&& failfile4 == ""
	&& failfile5 == ""
	&& failfile6 == ""
	&& failfile7 == ""
	&& failfile8 == ""
	)
		{
				 $('.success-popup').addClass('success-enter');
//Confirmation window for sending a message to mail(Окно подтверждения отправки сообщения на почту)
					$("#errorfile1").hide();
					$("#errorfile2").hide();
					$("#errorfile3").hide();
					$("#errorfile4").hide();
					$("#errorfile5").hide();
					$("#errorfile6").hide();
					$("#errorfile7").hide();
					$("#errorfile8").hide();					 
					initialFileName();

					var timerForReset = setTimeout(function()
					{
					  $("#registrationform")[0].reset();
					}, 2000);
				}
		});

 });
	 
  
  