window.onload = function() {
   var jump_url_id  =  window.location.hash.substring(1);
    if(jump_url_id !=""){
	   $(window).scrollTop($('#'+jump_url_id).offset().top - $('header').height()); 
	}
};

$(document).ready(function () {
    
   $(".scrolltop").on('click',function(){
     var jump_id       =  $(this).attr('id'),
         offset        = $("#"+jump_id).offset().top,
         header_height = $("header.sample_parent_nav_div_class").height();
         
        $('html,body').animate({
           scrollTop: (offset-header_height)},'slow');
         return false;
    });
    
    $(document).on('click', 'a', function(e){ 
    	if ($(this).attr('href').indexOf('#') !== -1 && $(this).closest('.tabs').length === 0 ) {
			hrefParts = $(this).attr('href').split('#');
			console.log('hrefparts', hrefParts[0], 'location pathname', window.location.pathname);
			if (hrefParts[0] === window.location.pathname) {
				e.preventDefault();
				header_height = $("header.sample_parent_nav_div_class").height();
				/*alert($('.hidden-header').offset().top);
				alert($('#' + hrefParts[1]).offset().top + (header_height + 10));*/
				scrollToElement($('#' + hrefParts[1]), header_height + 10);	
				/*$('html, body').animate({
		          scrollTop: ( $('#' + hrefParts[1]).offset().top + (header_height + 10) )
		        }, 1100);*/
			}
		}
    });
    
    function scrollToElement(_el, hh = 0)	{
      $('html, body').animate({
          scrollTop: ( _el.offset().top - hh )
        }, 1100);
    
	}
    
    /* COOKIE CONSENT */
    $(document).on('click', '.cookie-disclaimer .cookie-consent', function(){
        $(".cookie-disclaimer").fadeOut(450);
        // we don't actually need to use ajax call
        // as all we need to do is close the message
        $.ajax({
            url: "/cookie/grantConsent",
            cache: false,
            success: function(html) {
                console.log(html);
                $(".cookie-disclaimer").fadeOut(450);
            }
        });
    });
              
});


function activaTab(tab){
        //$('.nav-tabs a[href="#' + tab + '"]').tab('show');
        $("#"+tab).show();
    };
            
function subscription()
{
    var email = $("#nemail").val();
    var name = $("#name").val();
  
	if(name == '' && email == '') {
      $(".subscribe_send").html('Name and Email Cannot be empty');
      return false;  
    }
   else if(email == '') {
      $(".subscribe_send").html('Email Cannot be empty');
      return false;  
    }
    else if(!isValidEmailAddress(email))
    {
        $(".subscribe_send").html('Invalid Email Address');
         return false;  
    }
    else if(name == '') {
      $(".subscribe_send").html('Name Cannot be empty');
      return false;  
    }
    
    
    $.ajax({
          type: "POST",
          url: base_url+"home/newsletter",
          data: "email="+email+"&name="+name,
          success: function(res){
            $(".subscribe_send").html(res);
            $("#nemail").val('');
            $("#name").val('');
			ga('send','pageview', '/office-furniture-deals-subscribe/thankyou.htm');
          },
          error: function(e) {
        	console.log(e.message);
         }
    });    
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function goBack(divid)
{
    window.location.replace(base_url+divid);  
}

jQuery(document).ready(function($){
   $(".accordion_example").smk_Accordion();			
});

$(document).ready(function() {
   
   //Show More links add more section
    var wrapper         = $(".show_links_fields"); 
    var add_button      = $(".show_link_add_more"); 
   
    $(".add_more").on("click",".show_link_add_more", function(e){ 
       
        e.preventDefault();
            $(wrapper).append('<div style="margin-top:14px; padding-left:5px; clear:both;"><input type="file" class="col-lg-4" name="file1[]" accept=".pdf, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"/><a class="show_remove_field" style="margin-bottom:10px; font-size:12px; font-weight:bold;" name="show_remove-field" href="#"><i class="fa fa-times fa-6"></i></a></div>'); 
    });
   
    $(wrapper).on("click",".show_remove_field", function(e){ 
        e.preventDefault(); 
        $(this).parent('div').remove(); 
    })

   //Show More Inventory links add more section
    var wrapper_i         = $(".show_links_fields_inventory"); 
    var add_button_i      = $(".show_link_add_more_inventory"); 
   
    $(".add_more_inventory").on("click",".show_link_add_more_inventory", function(e){ 
       
        e.preventDefault();
            $(wrapper_i).append('<div style="margin-top:14px; padding-left:5px; clear:both;"><input type="file" class="col-lg-4" name="inventory_file[]" accept=".jpg,.jpeg,.xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf, application/pdf, .dwg, application/acad, image/vnd.dwg, image/x-dwg, .doc, application/msword, .vsd, application/x-visio, application/vnd.openxmlformats-officedocument.wordprocessingml.document"><a class="show_remove_field" style="margin-bottom:10px; font-size:12px; font-weight:bold;" name="show_remove-field" href="#"><i class="fa fa-times fa-6"></i></a></div>'); 
    });
   
    $(wrapper_i).on("click",".show_remove_field_inventory", function(e){ 
        e.preventDefault(); 
        $(this).parent('div').remove(); 
    })
    
    //Show More Glass Partition walls links add more section
    var wrapper_i         = $(".show_links_fields_gpw"); 
    var add_button_i      = $(".show_link_add_more_gpw"); 
   
    $(".add_more_gpw").on("click",".show_link_add_more_gpw", function(e){ 
       
        e.preventDefault();
            $(wrapper_i).append('<div style="margin-top:14px; padding-left:5px; clear:both;"><input type="file" class="col-lg-4" name="file1[]" accept=".png,.jpg,.jpeg,.xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, .pdf, application/pdf, .dwg, application/acad, image/vnd.dwg, image/x-dwg, .doc, application/msword, .vsd, application/x-visio, application/vnd.openxmlformats-officedocument.wordprocessingml.document"><a class="show_remove_field" style="margin-bottom:10px; font-size:12px; font-weight:bold;" name="show_remove-field" href="#"><i class="fa fa-times fa-6"></i></a></div>'); 
    });
   
    $(wrapper_i).on("click",".show_remove_field_gpw", function(e){ 
        e.preventDefault(); 
        $(this).parent('div').remove(); 
    })
    
    //alert-success 
    //$(".alert-success").click(function(){
//      $(this).remove();
//    });
    
   
});


  function captcha_reload(){
             
                $("#captcha_img img").remove();
                $("#captcha_img").css("display","none");
                $('#captcha_img').load(base_url+"captcha/index",{image:'image'},function() {
                        captcha_va_get();
                });
                 
             }         
           
         function captcha_va_get(){
            $.post(base_url+"captcha/index",{image:'captcha'},function(data){
                    document.getElementById('cap_code').value = $.trim(data); 
                    $("#captcha_img").css("display","block");     
            });
         }
         
     
     
     function setAction(id)
     {
        
        
        $(".nav-pills").find(".highlight").removeClass();
        $("#"+id).addClass("highlight");
        $("#"+id).css("background","red");
        window.location.href = url;
     }


$(document).ready(function(){
   // $(".nav-pills").find("tab-1").addClass("active");
    $(".nav-pills li").click(function(){
        var clas = '<?php echo $uri ?>';
        $(".nav-pills").find(clas).addClass('active');
    })
  
});

//$("#imgspath").elevateZoom({zoomWindowPosition: 1});

function rollover(e){
    var img_src = $(e).attr("src");
    var img_title = $(e).attr("title");
    var img_alt = $(e).attr("alt");
    
    $("#imgspath").attr({"src":img_src,"title":img_title,"alt":img_alt});
    
}


/*bitsia*/
$(function(){
	$(window).on("load resize",function(e){
		var mh = $('#main-slide').height();
	    $('.carousel-inner .slider-content').each(function(){
			$(this).closest('.item').show();
			$(this).css('top', ((mh-$(this).height())/2) +"px");	
			//console.log('mh: '+ mh + ", th: "+ $(this).height());
			$(this).closest('.item').css('display', '');
		});
		//$('.carousel-inner .item.active').css('display', 'block');
		//
	});
});


/*var $carousel = $('#main-slide');
$carousel.bind('slide.bs.carousel', function (e) {
    //console.log('slide event!');
	$('.carousel-inner .slider-content').each(function(){
		$(this).css('top', (($('#main-slide').height()-$(this).height())/2) +"px");	
		console.log('mh: '+ $('#main-slide').height() + ", th: "+ $(this).height());
	});
});*/