var captchaContainer = null;

$(document).ready(function(){
	//$("#ser_prior_id").val('');
	//$("#cus_prior_id").val('');
	
    $("#folding1").find("i").removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
   $( ".tool-table tbody" ).first(".custom-nav-open").toggle();
$(".tool-table tbody, .tool-table tfoot, .tool-table::before").on('click',function(event){
    event.stopPropagation();
});

$(".tool-table").on('click',function(){
    if($(this).find('tbody[class^="custom-nav-open"]').css('display') == "none") {
        $(this).find('tbody[class^="custom-nav-open"]').css('display','');
        $(this).find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
    }
    else
    {
        $(this).find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
        $(this).find('tbody[class^="custom-nav-open"]').css('display','none');
    }
});




});

function modal_close(modal)
{
    $("#"+modal).modal('hide'); 
 
}

    
   

function max_limit(e,lim){
    var tval = $(e).val(),
        tlength = tval.length,
        set = lim,
        remain = parseInt(set - tlength);
      
    //if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
//        
//    }
    if( tlength >= set){
        $(e).val((tval).substring(0, set));
        alert("You Should not exceed More than "+lim+" Characters.");
    }
    
}

function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }
      
function isUnitKey(evt)
{
 var charCode = (evt.which) ? evt.which : event.keyCode
 if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57 ))
    return false;

 return true;
}

function parse_int(val){
    if(isNaN(val)){
        return false;
    }
    else
    {
        return parseInt(val);
    }                                                           
}
function parse_float(val){
    if(isNaN(val)){
        return false;
    }
    else
    {
        return parseFloat(val);
    }
}
function budgetcalc(id,chk){
    
        var Qty = parse_int($("#qty_"+id).val());
        if(!Qty){
           Qty =0;
        }
        var sft_required = parse_float($("#sft_h_req_"+id).val());
        sft_required = (sft_required)?sft_required:0;
        
        var ec_val = parse_float($("#ec_"+id).val());
        ec_val = (ec_val)?ec_val:0;
        
        var mid_val = parse_float($("#mid_"+id).val());
        mid_val = (mid_val)?mid_val:0;
        
        var high_val = parse_float($("#high_"+id).val());
        high_val = (high_val)?high_val:0;
        
       
        if(Qty == 0){
            $("#sft_req_"+id).val(sft_required*1);
            $("#div_sft_req_"+id).html(sft_required*Qty);
        }
        else
        {
              $("#sft_req_"+id).val(sft_required * Qty);
              $("#div_sft_req_"+id).html(sft_required*Qty);
        }
        $("#div_sft_req_"+id).html(sft_required*Qty);
        $("#total_ec_"+id).html(ec_val*Qty);
        $("#total_h_ec_"+id).val(ec_val*Qty);
        $("#total_mid_"+id).html(mid_val*Qty);
        $("#total_h_mid_"+id).val(mid_val*Qty);
        $("#total_high_"+id).html(high_val*Qty);
        $("#total_h_high_"+id).val(high_val*Qty);
    
        categories_sub_total(chk);
       
        service_calculate();
        
    
}




function categories_sub_total(chk){
    var sum = 0;
   
        $(".total_h_ec_"+chk).each(function(){
              var val = parse_float($(this).val());
              val = (val)?val:0;
              sum =  sum + val;
        });
        
        $("#grand_total_eco"+chk).val(sum);
        $("#grand_total_h_eco"+chk).val("$"+(sum).toFixed(2));
        $("#grand_tot_eco"+chk).html("$"+(sum).toFixed(2));
        
        var sum = 0;
        $(".total_h_mid_"+chk).each(function(){
             var val = parse_float($(this).val());
             val = (val)?val:0;
             sum =  sum + val;     
        });
        
          $("#grand_total_mid"+chk).val(sum);
          $("#grand_total_h_mid"+chk).val("$"+(sum).toFixed(2));
          $("#grand_tot_mid"+chk).html("$"+(sum).toFixed(2));
        
        
        var sum = 0;
        $(".total_h_high_"+chk).each(function(){
              var val = parse_float($(this).val());
              val = (val)?val:0;
              sum =  sum + val;
        }); 
         $("#grand_total_high"+chk).val(sum);
           $("#grand_total_h_high"+chk).val("$"+(sum).toFixed(2));
         $("#grand_tot_high"+chk).html("$"+(sum).toFixed(2));
        
        var sum = 0;
        $(".sft_req_"+chk).each(function(){
            var ex_id = $(this).attr("name").substring(8);
            if($("#qty_"+ex_id).val() > 0){
                 var val = parse_float($(this).val());
                 val = (val)?val:0;
                 sum =  sum + val;
             }
        });
        
        $("#total_sft"+chk).val(sum);  
        $("#total_square_ft"+chk).html(sum);
        
        var cs_sqt = parse_float($("#cus_min_sqt_total").val());
       
       var sqt1 = parse_float($("#total_sft1").val());
       var sqt2 = parse_float($("#total_sft2").val());
       var sqt3 = parse_float($("#total_sft3").val());
       
       sqt1 = (sqt1)?sqt1:0;
       sqt2 = (sqt2)?sqt2:0;
       sqt3 = (sqt3)?sqt3:0;
       
        var total_sqt = sqt1 + sqt2 + sqt3;
      
        var tt = total_sqt + cs_sqt;
        
          $("#bc_sqt_tot").html(tt);
          $("#grand_total_sft").val(tt);
        
}

function service_calculate(){
     var sum = 0;
        $("input[name^='service_h_amount_']").each(function(){
             var val = parse_float($(this).val());
             val = (val)?val:0.00;
             sum =  sum + val;
      
        });
        $("#service_h_total").val(sum.toFixed(2));
        $("#service_tot").html(sum.toFixed(2));
        $("#service_total").val(sum.toFixed(2));
        
         
        cus_service_percent_cal();
        
}
function main_error(){
    
     var grand_cust_total = parse_float($("#grand_cust_total").val());
     grand_cust_total = (grand_cust_total)?grand_cust_total:0.00;
     
     
      var grand_total_eco1 = parse_float($("#grand_total_eco1").val());
       var grand_total_eco2 = parse_float($("#grand_total_eco2").val());
       var grand_total_eco3 = parse_float($("#grand_total_eco3").val());
       
       grand_total_eco1 = (grand_total_eco1)?grand_total_eco1:0;
       grand_total_eco2 = (grand_total_eco2)?grand_total_eco2:0;
       grand_total_eco3 = (grand_total_eco3)?grand_total_eco3:0;
       
        var grand_total_eco = grand_total_eco1 + grand_total_eco2 + grand_total_eco3;
        
      //  alert(grand_total_eco);
        
    // var grand_total_eco = parse_float($("#grand_total_eco").val());
//     grand_total_eco = (grand_total_eco)?grand_total_eco:0.00;
     
    if( (grand_total_eco == 0 || grand_total_eco == "")  && (grand_cust_total == 0 || grand_cust_total == "") ){
         alert("Please Enter atleast one Qty in any one of the Listed office furnitures.");
         document.getElementById("budget_pdf_form").reset();
         return false;
    }
    else
    {
        return true;
    }
    
}

function grand_total(){
    
    
     var service_total = parse_float($("#service_total").val());
     service_total = (service_total)?service_total:0.00;
     
     var grand_cust_total = parse_float($("#grand_cust_total").val());
     grand_cust_total = (grand_cust_total)?grand_cust_total:0.00;
     
    //var grand_total_eco = parse_float($("#grand_total_eco").val());
    //grand_total_eco = (grand_total_eco)?grand_total_eco:0.00;
    
       var grand_total_eco1 = parse_float($("#grand_total_eco1").val());
       var grand_total_eco2 = parse_float($("#grand_total_eco2").val());
       var grand_total_eco3 = parse_float($("#grand_total_eco3").val());
       
       grand_total_eco1 = (grand_total_eco1)?grand_total_eco1:0;
       grand_total_eco2 = (grand_total_eco2)?grand_total_eco2:0;
       grand_total_eco3 = (grand_total_eco3)?grand_total_eco3:0;
       
        var grand_total_eco = grand_total_eco1 + grand_total_eco2 + grand_total_eco3;
      
    var sales_tax_eco = parse_float($("#sales_tax_eco").val());
    sales_tax_eco = (sales_tax_eco)?sales_tax_eco:0.00;
 
    //var cus_service_eco_all = parse_float($("#cus_service_eco_all").val());
    //cus_service_eco_all = (cus_service_eco_all)?cus_service_eco_all:0.00;
   
    //var cus_service_mid_all = parse_float($("#cus_service_mid_all").val());
    //cus_service_mid_all = (cus_service_mid_all)?cus_service_mid_all:0.00;
    
    //var cus_service_high_all = parse_float($("#cus_service_high_all").val());
    //cus_service_high_all = (cus_service_high_all)?cus_service_high_all:0.00;
    
    var cus_service_all = parse_float($("#cus_service_all").val());
    cus_service_all = (cus_service_all)?cus_service_all:0.00;
    
    var total = grand_total_eco+grand_cust_total+sales_tax_eco+cus_service_all+service_total;
    
    $("#bc_total_eco").val((total).toFixed(2));
     $("#bc_total_h_eco").val("$"+(total).toFixed(2));
    $("#bc_tot_eco").html("$"+(total).toFixed(2));
    
     //var grand_total_mid = parse_float($("#grand_total_mid").val());
   // grand_total_mid = (grand_total_mid)?grand_total_mid:0.00;
    
       var grand_total_mid1 = parse_float($("#grand_total_mid1").val());
       var grand_total_mid2 = parse_float($("#grand_total_mid2").val());
       var grand_total_mid3 = parse_float($("#grand_total_mid3").val());
       
       grand_total_mid1 = (grand_total_mid1)?grand_total_mid1:0;
       grand_total_mid2 = (grand_total_mid2)?grand_total_mid2:0;
       grand_total_mid3 = (grand_total_mid3)?grand_total_mid3:0;
       
        var grand_total_mid = grand_total_mid1 + grand_total_mid2 + grand_total_mid3;
      
      
    
    var sales_tax_mid = parse_float($("#sales_tax_mid").val());
    sales_tax_mid = (sales_tax_mid)?sales_tax_mid:0.00;
    
    var total = grand_total_mid+grand_cust_total+sales_tax_mid+cus_service_all+service_total;
    $("#bc_total_mid").val((total).toFixed(2));
    $("#bc_total_h_mid").val("$"+(total).toFixed(2));
    $("#bc_tot_mid").html("$"+(total).toFixed(2));
    
    
    // var grand_total_high = parse_float($("#grand_total_high").val());
    //grand_total_high = (grand_total_high)?grand_total_high:0.00;
    
       var grand_total_high1 = parse_float($("#grand_total_high1").val());
       var grand_total_high2 = parse_float($("#grand_total_high2").val());
       var grand_total_high3 = parse_float($("#grand_total_high3").val());
       
       grand_total_high1 = (grand_total_high1)?grand_total_high1:0;
       grand_total_high2 = (grand_total_high2)?grand_total_high2:0;
       grand_total_high3 = (grand_total_high3)?grand_total_high3:0;
       
        var grand_total_high = grand_total_high1 + grand_total_high2 + grand_total_high3;
      
    
    var sales_tax_high = parse_float($("#sales_tax_high").val());
    sales_tax_high = (sales_tax_high)?sales_tax_high:0.00;
    
    var total = grand_total_high+grand_cust_total+sales_tax_high+cus_service_all+service_total;
    $("#bc_total_high").val((total).toFixed(2));
    $("#bc_total_h_high").val("$"+(total).toFixed(2));
    $("#bc_tot_high").html("$"+(total).toFixed(2));
}

function cus_reset(id){
   $("#cus_row_"+id+" input").val("");
    custom_calculation(id);
}

function cus_delete(id){
    
     var a = confirm("Are you Sure want to Delete?");
     if(!a)
    {
        return false;
    }     
    
    cus_reset(id);
    var prior = id - 1;
    $("#cus_prior_id").val(prior);
    $("#cus_row_"+id).remove();
    
    var custom_rows =$("table tbody tr[id^= 'cus_row_']").not("#cus_row_prior_id").length;
    
    if(custom_rows == 1){
        $("table tbody tr[id^= 'cus_row_']").not("#cus_row_prior_id").find(".but4").css("display","none");
    }
    
    
}
function cus_service_delete(id){
    
     var a = confirm("Are you Sure want to Delete?");
     if(!a)
    {
        return false;
    }     
    
    cus_reset(id);
    var prior = id - 1;
    $("#service_row_"+id).remove();
    $("#ser_prior_id").val(prior);
    var custom_rows =$("table tbody tr[id^= 'service_row_']").not("#service_row_prior_id").length;
    
    if(custom_rows == 1){
        $("table tbody tr[id^= 'service_row_']").not("#service_row_").find(".but4").css("display","none");
    }
    
    
}

function thick_box_open(url,title){
   
   tb_show(title,url,false);
        
}

function custom_service_add(type,id)
{

        if( !main_error()){
        return false;
      }
	    var service_qty =  $.trim($("#service_qty_"+id).val());


		//alert(id);
        var service_name =  $.trim($("#service_name_"+id).val());
        var service_up = $.trim($("#service_up_"+id).val());
        var str1 = "";
        var error = false;

     
     var cus_service_qty = parse_float($("#service_qty_"+id).val());
      cus_service_qty = (cus_service_qty)?cus_service_qty:0.00;
     
     
      var cus_service_up= parse_float($("#service_up_"+id).val());
      cus_service_up = (cus_service_up)?cus_service_up:0.00;
  
      var cus_amount = cus_service_qty*cus_service_up;
       
      $("#service_amount_"+id).val(cus_amount.toFixed(2));
      $("#service_h_amount_"+id).val(cus_amount.toFixed(2));
        
      service_calculate();
      
    if(type=="add_more"){
        
        
          var prirr =$("#ser_prior_id").val();
          prir = parseInt(prirr)+1;
                  
          var ne_row_content = $("#service_copy tbody").html();
          ne_row_content =   ne_row_content.replace(/prior_id/g,+prir); 
          var row_id = "service_row_"+prirr;
          $("#"+row_id).after(ne_row_content);
          $("#ser_prior_id").val(prir);
         
          $("table tbody tr[id^= 'service_row_']").not("#service_row_prior_id").find(".but4").css("display","inline");
    }
    
}
function custom_service_amount_cal(id){
     if( !main_error()){
        return false;
     }
     var cus_service_qty = parse_float($("#service_qty_"+id).val());
      cus_service_qty = (cus_service_qty)?cus_service_qty:0.00;
     
     
      var cus_service_up= parse_float($("#service_up_"+id).val());
      cus_service_up = (cus_service_up)?cus_service_up:0.00;
  
      var cus_amount = cus_service_qty*cus_service_up;
       
      $("#service_amount_"+id).val(cus_amount.toFixed(2));
      $("#service_tot").html(cus_amount.toFixed(2));
      $("#service_h_amount_"+id).val("$"+cus_amount.toFixed(2));
        
      service_calculate();
}

function cus_add(type,id){

       // alert(type);
        
        var cus_qty =  $.trim($("#cus_qty_"+id).val());
        var cus_sft =  $.trim($("#cus_sft_"+id).val());
        var cus_unit_price = $.trim($("#cus_unit_price_"+id).val());
        var cus_extended = $.trim($("#cus_extended_"+id).val());
        var str1 = "";
        var error = false


        //cut total calculate
        var cus_qty_val = parse_float(cus_qty);
        cus_qty_val     = (cus_qty_val)?cus_qty_val:0;
                
        var cus_unit_price_val = parse_float(cus_unit_price);
        cus_unit_price_val = (cus_unit_price_val)?cus_unit_price_val:0;
        
        var cus_extended_val = parse_float(cus_extended);
        cus_extended_val = (cus_extended_val)?cus_extended_val:0;
        
        var cusTotal = cus_qty_val*(cus_unit_price_val);
        $("#cus_total_"+id).val(cusTotal.toFixed(2));
        
        $("#cus_sub_total_"+id).val(cusTotal.toFixed(2));

    
     custom_calculation(id);
    
    if(type=="add_more"){
        
		  var cus_qty =  $.trim($("#cus_qty_"+id).val());
        
          var prirr = $("#cus_prior_id").val();
              prir  = parseInt(prirr)+1;
                    
          var ne_row_content = $("#customization_copy tbody").html();
          ne_row_content =   ne_row_content.replace(/prior_id/g,+prir); 
          var row_id = "cus_row_"+prirr;
          $("#"+row_id).after(ne_row_content);
          $("#cus_prior_id").val(prir);
          
          //delete button show
          $("table tbody tr[id^= 'cus_row_']").not("#cus_row_prior_id").find(".but4").css("display","inline");
    }
    
    
}

function cus_ser_add()
{
    var cus_qty =  $.trim($("#cus_qty_"+id).val());
        var cus_sft =  $.trim($("#cus_sft_"+id).val());
        var cus_unit_price = $.trim($("#cus_unit_price_"+id).val());
        var cus_extended = $.trim($("#cus_extended_"+id).val());
        var str1 = "";
        var error = false

        if(field_validate(cus_qty)){
            str1 += "Please Enter Quantity.\n";
            error = true;
        }

        
        if(field_validate(cus_unit_price)){
            str1 += "Please Enter Unit Price.\n";
            error = true;
        }
                   
        if(error){
            alert("Errors Occured!!\n\n"+str1)
            return false;
        }
}

function custom_sqt_cal()
{
    var sum = st =  0;
    $("input[name^='cus_sft']").each(function() {
            var val = parse_float($(this).val());
            val = (val)?val:0.00;
            sum =  sum + val;
    });
    
    $("#cus_min_sqt_total").val(sum.toFixed(2)); 
    $("#cus_min_sq_ft").html(sum.toFixed(2));
       
      
      var sqt1 = parse_float($("#total_sft1").val());
       var sqt2 = parse_float($("#total_sft2").val());
       var sqt3 = parse_float($("#total_sft3").val());
       
       sqt1 = (sqt1)?sqt1:0;
       sqt2 = (sqt2)?sqt2:0;
       sqt3 = (sqt3)?sqt3:0;
       
        var total_sqt = sqt1 + sqt2 + sqt3;
        
        var totsqt = total_sqt + sum;
        
    $("#bc_sqt_tot").html(totsqt);
    $("#grand_total_sft").val(totsqt);
}

function custom_calculation(id){
	 
	  categories_sub_total();    
	 var sum = 0,st =0;
        $("input[name^='cus_total_']").each(function(){
             var val = parse_float($(this).val());
             val = (val)?val:0.00;
             sum =  sum + val;
        });
        $("#grand_cust_total").val(sum.toFixed(2));
        $("#grand_cust_h_total").val(sum.toFixed(2));
        $("#cs_tot").html(sum.toFixed(2));
         
           
        $("#cus_submit_"+id).val('yes');
       /* var grand_cust_total = 0;
        
        $("table tr[id^=cus_row_]").each(function(){
            if($(this).find("input[id^='cus_submit_']").val() =='yes'){
            
                var cus_total = parse_float($(this).find("input[id^='cus_total_']").val());
                cus_total = (cus_total)?cus_total:0;
                
                grand_cust_total = grand_cust_total +cus_total;
             }    
        });
         $("#grand_cust_total").val(grand_cust_total);
         $("#grand_cust_h_total").val(grand_cust_total.toFixed(2));*/
       
        service_calculate();
    
}

function cus_service_percent_cal(){
   
    $loop_id = $("#cus_service_prior_id").val();
    
     var service_total = parse_float($("#service_total").val());
     service_total = (service_total)?service_total:0.00;
     
    var cus_service_all = 0;
    
    for(var i=1; i<=$loop_id; i++){
       var cus_service_percent = parse_float($("#cus_service_percent_"+i).val());
        cus_service_percent = (cus_service_percent)?cus_service_percent:0.00;
        
        if($("#cus_service_submit_"+i).val()== "yes"){
            
            var total = (cus_service_percent *service_total)/100;
           // alert(total);
            cus_service_all = cus_service_all+total;
            $("#cus_service_sub_"+i).val(total.toFixed(2));
            $("#cus_service_h_sub_"+i).val(("$")+total.toFixed(2));
        }
    }
    var serv_total  = parse_float($("#service_total").val());
    serv_total = (serv_total)?serv_total:0.00;
    cus_service_all = cus_service_all+serv_total;
    $("#cus_service_all").val(cus_service_all);
    $("#cus_service_h_all").val(("$")+cus_service_all.toFixed(2));
    
    sales_tax_calc();
    
}

function cus_service_percent_reset(id){
     
     if( !main_error()){
        return false;
     }
     $("#cus_service_percent_row_"+id+" input[type!='button']").val("");
     $("#cus_service_radio_"+id).attr("checked",false);
     cus_service_percent_cal();
    
}

function custom_service_percent_delete(id){
    
     var a = confirm("Are you Sure want to Delete?");
     if(!a)
        {
            return false;
        }    
     cus_service_percent_reset(id);
    
    $("#cus_service_percent_row_"+id).remove();
    
    var custom_rows =$("table tbody tr[id^= 'cus_service_percent_row_']").not("#cus_service_percent_row_prior_id").length;
    
    if(custom_rows == 1){
        $("table tbody tr[id^= 'cus_service_percent_row_']").not("#cus_service_percent_row_prior_id").find(".but4").css("display","none");
    }
    
    
}



function custom_service_percent_add(type,id){
      
        if( !main_error()){
        return false;
     }
      
       // var cus_service_radio = $("#cus_service_radio_"+id).is(":checked");
        var cus_service_name =  $.trim($("#cus_service_name_"+id).val());
        var cus_service_percent = $.trim($("#cus_service_percent_"+id).val());

        var str1 = "";
        var error = false
//
//        if(!cus_service_radio){
//            str1 += "Please Check the radio Button.\n";
//            error = true;
//        }
//        
//        
        if(field_validate(cus_service_name)){
            str1 += "Please Enter Service Name.\n";
            error = true;
        }
        
        
        if(field_validate(cus_service_percent)){
            str1 += "Please Enter Percentage value.\n";
            error = true;
        }
                
        if(error){
            alert("Errors Occured!!\n\n"+str1)
            return false;
        }
        
     var cust_msg = "";
     if($("#cus_service_submit_"+id).val() == 'yes'){
        cust_msg = "Updaed Successfully."
     }
     else
     {
          cust_msg = "Added Successfully."
     }
     $("#cus_service_submit_"+id).val('yes');
     cus_service_percent_cal(id);
    
    if(type=="add_more"){
          var prir =$("#cus_service_prior_id").val();
          prir = parseInt(prir)+1;
          var ne_row_content = $("#cus_service_percent_custom_copy tbody").html();
          ne_row_content =   ne_row_content.replace(/prior_id/g,+prir); 
          var row_id = "cus_service_percent_row_"+id;
          $("#"+row_id).after(ne_row_content);
          $("#cus_service_prior_id").val(prir);
          
          //delete button show
          $("table tbody tr[id^= 'cus_service_percent_row_']").not("#cus_service_percent_row_prior_id").find(".but4").css("display","inline");
    }
    alert(cust_msg);
}

function sales_tax_calc(){
    
    var sales_tax = parse_float($("#sales_tax").val());
        sales_tax = (sales_tax)?sales_tax:0.00;
        
   // var service_total = parse_float($("#service_total").val());
     //service_total = (service_total)?service_total:0.00;
            
   var cus_service_all = parse_float($("#cus_service_all").val());
     cus_service_all = (cus_service_all)?cus_service_all:0.00;
     
     
     var grand_cust_total = parse_float($("#grand_cust_total").val());
     grand_cust_total = (grand_cust_total)?grand_cust_total:0.00;
     
    var grand_total_eco = parse_float($("#grand_total_eco").val());
    grand_total_eco = (grand_total_eco)?grand_total_eco:0.00;
    
    var grand_total_mid = parse_float($("#grand_total_mid").val());
    grand_total_mid = (grand_total_mid)?grand_total_mid:0.00;
    
    var grand_total_high = parse_float($("#grand_total_high").val());
    grand_total_high = (grand_total_high)?grand_total_high:0.00;
   
    var total = (sales_tax *(grand_cust_total+grand_total_eco+cus_service_all))/100;
    $("#sales_tax_eco").val(total.toFixed(2));
    $("#sales_tax_h_eco").val(("$")+total.toFixed(2));
    
    var total = (sales_tax *(grand_cust_total+grand_total_mid+cus_service_all))/100;
    $("#sales_tax_mid").val(total.toFixed(2));
    $("#sales_tax_h_mid").val(("$")+total.toFixed(2));
    
    var total = (sales_tax *(grand_cust_total+grand_total_high+cus_service_all))/100;
    $("#sales_tax_high").val(total.toFixed(2));
    $("#sales_tax_h_high").val(("$")+total.toFixed(2));
    
    grand_total();
}
   function field_validate(val){
            
            if(val == "" || val == null || val == 0 || val =="0"){
                return true;
            }
            else
            {
                return false;
            }
            
   }
           
           function get_budget_html(page,modalId,id,page_type){
           
            var page = page;
          // alert(id);
             var modalId  = "#"+modalId;
             
            if( !main_error()){
                return false;
             }
                $(id).attr('data-toggle','modal');
                $(id).attr('data-target',modalId);
                
                $.ajax({
                        type: "POST",
                        url: base_url+"captcha/index",
                        data:'type='+page_type,
                        dataType: "json",
                        success: function(res) {
                            var status = res.status;   
                            var output = res.output;
                            $("#myModal .modal-body").html(output);
                            var loadCaptcha = function() {
                            captchaContainer = grecaptcha.render('RecaptchaFieldApply', {
                                'sitekey' : '6LdbwQ8UAAAAAFUZKMGAJQYR8LM36No2A0J5pnn4',
                                'callback' : function(response) {
                                console.log('captcha response: ', response);
                                }
                            });
                            };
                            loadCaptcha();
                     },
                    error: function(id) {
                	//called when there is an error
                	console.log(id.message);
                    //after_ajax(id);
                   }               
                }); 
           } 
         
         
         function checkemail(mail){
            var str=mail;
            var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                if (filter.test(str)){
                    return true;
                }
                else{
                   return false;
                }
                
            }
            


         function user_data_capture(){
            // first validate the reCapthca
            if (grecaptcha.getResponse(captchaContainer) == ""){
                console.log("You can't proceed!");
                $('#recaptcha_qsf_error').text('Please confirm that you are human by clicking the check above!');
                return;
            } else {
                console.log("Thank you");
                $('#recaptcha_qsf_error').text('');
                $('#grecaptcha').val(grecaptcha.getResponse(captchaContainer));
                // allow to continue
                // document.getElementById('QCform').submit();
            }
                        var user_name =  $.trim($("#user_name").val());
                        var email =  $.trim($("#user_email").val());
                        var message = $.trim($("#user_message").val());
                        
                        
                        var captcha = $.trim($("#captcha_value").val());
                        var cap_code = $.trim($("#cap_code").val());
                        var choose_type = $("input[name=ctype]:checked","#user_data_form").val();
                        //alert(choose_type);
                        
                        var str1 = "";
                        var error = false
                        
                        if(field_validate(user_name)){
                        str1 += "Please Enter Name.\n";
                        error = true;
                        }
                        
                        
                        if(field_validate(email)){
                        str1 += "Please Enter Email Id.\n";
                        error = true;
                        }
                        else
                        {
                            if(!checkemail(email)){
                                 str1 += "Please input a valid email address!.\n";
                        error = true;
                            };
                        }
                        
                        if(field_validate(message)){
                        str1 += "Please Type Message.\n";
                        error = true;
                        }
                        
                        
                        // if(field_validate(captcha)){
                        //     str1 += "Please Enter Captcha.\n";
                        //     error = true; 
                        // }
                        // else
                        // {
                        //     if(captcha != cap_code){
                        //         str1 += "Verification Code Mismatch.\n";
                        //         error = true;
                        //     }
                            
                        // }
         
                        if(error){
                             alert("Errors Occured!!\n\n"+str1)
                             return false;
                        }
                        else
                        {
                              $("#u_name").val(user_name);
                              $("#u_email").val(email);
  

                              $("#u_msg").val(message);
                            //alert($("#u_message").val());return;
                              $("#u_req").val($("#current_page").val());
                              $("#ctype").val(choose_type);
                              
                            var budget_form_data = $("#budget_pdf_form").serialize();
                            var user_data        = $("#user_data_form").serialize();
                            
                            var act = $("#current_page").val();
                            
                               page = base_url+"budget/email";
                            
                            $("#budget_pdf_form").attr("action",page);
                            $("#budget_pdf_form").removeAttr("target");

                            var con = confirm("Thank you for applying for Budget calculator with cubicles.com!");
                            if(con){
                                
                                $("#budget_pdf_form").submit();
                                document.getElementById("budget_pdf_form").reset();
                                document.getElementById("user_data_form").reset();
                                }
                            else
                            {
                                return false;
                            }
                        }
           }
           
            function print()
            {
                if( !main_error()){
                    return false;
                }
             
                var action = base_url+"budget/render_print";
                $("#budget_pdf_form").attr("action",action);
                $("#budget_pdf_form").attr("target","_blank");
                $("#budget_pdf_form").submit();
            } 
            
           function cus_service_perc_hide(e,id){

                if($(e).val() == "Hide"){
                     $("#cus_service_submit_"+id).val("");
                     $("#cus_service_submit_"+id).val('');
                     cus_service_percent_cal(id);
                     $("#cus_service_percent_row_"+id).find(".cus_sev_hide_button").hide();
                     $(e).val("Show");
                }
                else
                {
                     $("#cus_service_submit_"+id).val("yes");
                     cus_service_percent_cal(id);
                     $("#cus_service_percent_row_"+id).find(".cus_sev_hide_button").show();
                     $(e).val("Hide");
                }
            
            }   
            
            function categ_hide_line(e,id,color){

                if($(e).val() == "Hide"){
                     $("#catg_row_"+id).find(".div90").css("background",color);
                     $("#catg_row_"+id).find(".catg_hide_button").css("visibility","hidden")
                     $("#catg_row_"+id).addClass("catg_hide");
                     $("#catg_submit_"+id).val($("#qty_"+id).val());
                     $("#qty_"+id).val(0);
                     budgetcalc(id);
                     $(e).val("Show");
                }
                else
                {    
                     $("#catg_row_"+id).find(".catg_hide_button").css("visibility","visible");
                     $("#catg_row_"+id).removeClass("catg_hide");
                     $("#qty_"+id).val($("#catg_submit_"+id).val());
                     budgetcalc(id);
                     
                     $(e).val("Hide");
                }
            
            }        
                  
