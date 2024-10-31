$(document).ready(function() {

if(document.getElementById("FrontPage_Form1")) {
    document.getElementById("FrontPage_Form1").reset();
 }
 
//Bind keyup and focus events to all space calculator inputs
	$("#spaceCalculator input").keyup(function() {
		//To calculate square footage, take the ceiling function of the quantity. If you need 1.5 offices, 1 wont' cut it, you need 2
		var sqft = Math.ceil($(this).val()) * parseInt($(this).attr("class"));
		//Make sure sqft is a number and is greater than 0
		if (isNaN(sqft) || sqft < 0)
			sqft=0;
		$(this).parent().siblings(".rowResult").html(sqft);
		calculateTotal();
	
	});
	
	//fire the keyup method in case any values were saved in the form.
	$("#spaceCalculator input").keyup();
	
});

function calculateTotal(){
	var newTotal=0;
	$("td.rowResult").each(function(){
		newTotal+=parseInt($(this).html());
	});
	$("#circulation").html(Math.ceil(newTotal*.65));
	$("#columnTotal").html(Math.ceil(newTotal*1.65));
	$("#sqftInput").val(Math.ceil(newTotal*1.65));
	//validateCalc("sqftInput");
}

function ChangePath(imgsrc3d,id,cnt)
{
	document.getElementById('hdn3D').value=imgsrc3d;
	
	for(var i=0;i<cnt;i++)
    {
    	if(i==id) 
         {
    	     document.getElementById('roomtype'+i).style.color="#EE7C33"; 
           }
    	else 
         {
    	   document.getElementById('roomtype'+i).style.color="#000";
        }
	}
	
	document.getElementById('roomtype'+id).style.color="#EE7C33";
	//document.getElementById('view_image').innerHTML='<img src='+static_folder_path+'/tools/calculators/'+imgsrc3d+' width="301" height="401" alt="" />';
	document.getElementById('view_image').innerHTML='<img src='+static_folder_path+'uploads/officespacecalculator/large_image/'+imgsrc3d+' width="301" height="401" alt="" />';

}

function ChangePath3D()
{
	
	imgsrc3d = document.getElementById('hdn3D').value;
	document.getElementById('view_image').innerHTML='<img src="'+static_folder_path+'"uploads/officespacecalculator/large_image/'+imgsrc3d+'" width="301" height="401" alt="" />';

}


// Square Foot Calculator

function calc_square (height, width) {
		var h = parseFloat (height);
		var w = parseFloat (width);
		//return Math.ceil (h * w);
		//return Math.round((h * w), 2);
		var res = (h * w);
		
		var res1 = res.toFixed(1);
		var ind = res1.indexOf(".");
		
		//if(res1.charAt(4) =='0'){
			//res1 = res.toFixed(1);
			if(res1.charAt((parseInt(ind) +1)) =='0'){
			res1 = res.toFixed(0);
			}
			
		//}		
		
		return res1;
		
		
	}
	function calc_circle (diam) {
		var d = parseFloat (diam);
		var r = d * 0.5;
		//return Math.ceil ((r * r) * 3.1452);
		
		var res = ((r * r) * 3.1452);
		
		var res1 = res.toFixed(1);
		var ind = res1.indexOf(".");
		
		//if(res1.charAt(4) =='0'){
			//res1 = res.toFixed(1);
			if(res1.charAt((parseInt(ind) +1)) =='0'){
			res1 = res.toFixed(0);
			}
			
		//}		
		
		return res1;
		
		
	}
	function calc_tri (base, height) {
		var b = parseFloat (base);
		var h = parseFloat (height);
		//return Math.ceil (b * h * 0.5);
		
		var res = (b * h * 0.5);
		
		var res1 = res.toFixed(1);
		var ind = res1.indexOf(".");
		
		//if(res1.charAt(4) =='0'){
			//res1 = res.toFixed(1);
			if(res1.charAt((parseInt(ind) +1)) =='0'){
			res1 = res.toFixed(0);
			}
			
		//}		
		
		return res1;
		
		
	}
	function do_square () { 
		var h = document.area_form.height.value;
		var w = document.area_form.width.value;
        if(h=='' && w == ''){
            alert("Enter Length and Width");
            return false;
        }
		var app = document.area_form.square_area.value = calc_square (h, w);
		$("#square_1").html(app);
		return false;
	}
	function do_circle () {
		var d = document.area_form.diam.value;
        if(d ==''){
            alert("Enter Diameter");
            return false;
        }
		var app1 = document.area_form.circle_area.value = calc_circle (d);
		$("#square_2").html(app1);
		return false;
	}
	function do_triangle () {
		var b = document.area_form.base.value;
		var h = document.area_form.theight.value;
         if(b=='' && h == ''){
            alert("Enter side one and side two");
            return false;
        }
        
		var app2 = document.area_form.triangle_area.value = calc_tri (b, h);
		$("#square_3").html(app2);
		return false;
	}
    
    // Begin Yardage Calculator

//Area 1
function a1_times_b1(form) {
a1=eval(form.a1.value)
b1=eval(form.b1.value)
//alert(a1);
//alert(document.FrontPage_Form1.a1.value);

if((document.FrontPage_Form1.a1.value == ''&& document.FrontPage_Form1.b1.value == '' ) && (document.FrontPage_Form1.a2.value == ''&& document.FrontPage_Form1.b2.value == '' ) && (document.FrontPage_Form1.a3.value == ''&& document.FrontPage_Form1.b3.value == '' ) && (document.FrontPage_Form1.a4.value == ''&& document.FrontPage_Form1.b4.value == '' ) && (document.FrontPage_Form1.a5.value == ''&& document.FrontPage_Form1.b5.value == '' ) && (document.FrontPage_Form1.a6.value == ''&& document.FrontPage_Form1.b6.value == '' ) && (document.FrontPage_Form1.a7.value == ''&& document.FrontPage_Form1.b7.value == '' ) && (document.FrontPage_Form1.a8.value == ''&& document.FrontPage_Form1.b8.value == '' ) && (document.FrontPage_Form1.a9.value == ''&& document.FrontPage_Form1.b9.value == '' ) && (document.FrontPage_Form1.a10.value == ''&& document.FrontPage_Form1.b10.value == '' )  && (document.FrontPage_Form1.a12.value == ''&& document.FrontPage_Form1.b12.value == '' ) && (document.FrontPage_Form1.a13.value == ''&& document.FrontPage_Form1.b13.value == '' ) && (document.FrontPage_Form1.a14.value == ''&& document.FrontPage_Form1.b14.value == '' )){ 
	alert("Please enter value");
	return false;
	
}
	if(document.FrontPage_Form1.a1.value == ''){
		
		a1=0
		b1=0
		
	}
	c1=a1*b1
	c1=c1
	d1=a1*b1/9
	d1=d1
	subFT=c1
	subYD=d1
	TotFT=c1
	TotYD=d1
	
	$("#carpet_1").html(c1.toFixed(2));
	$("#carpet_2").html(d1.toFixed(2));
	
	//form.width1.value=c1
	//form.length1.value=d1
   form.subFT.value=subFT
   form.subYD.value=subYD 
   
   
//  Area 2   
a2=eval(form.a2.value)
b2=eval(form.b2.value)
if(document.FrontPage_Form1.a2.value == ''){ 
		
		a2=0
		b2=0
		
	}
	c2=a2*b2
	d2=a2*b2/9
	subFT=c1+c2
	subYD=d1+d2
	TotFT=c1+c2
	TotYD=d1+d2

	$("#carpet_3").html(c2.toFixed(2));
	$("#carpet_4").html(d2.toFixed(2));

	//form.width2.value=c2
	//form.length2.value=d2
   form.subFT.value=subFT
   form.subYD.value=subYD 

//  Area 3
a3=eval(form.a3.value)
b3=eval(form.b3.value)
if(document.FrontPage_Form1.a3.value == ''){
		
		a3=0
		b3=0
		
	}
	c3=a3*b3
	d3=a3*b3/9
	subFT=c1+c2+c3
	subYD=d1+d2+d3
	TotFT=c1+c2+c3
	TotYD=d1+d2+d3

	$("#carpet_5").html(c3.toFixed(2));
	$("#carpet_6").html(d3.toFixed(2));
	
	//form.width3.value=c3
	//form.length3.value=d3
   form.subFT.value=subFT
   form.subYD.value=subYD 


// Area 4
a4=eval(form.a4.value)
b4=eval(form.b4.value)
if(document.FrontPage_Form1.a4.value == ''){
		
		a4=0
		b4=0
		
	}
	c4=a4*b4
	d4=a4*b4/9
	subFT=c1+c2+c3+c4
	subYD=d1+d2+d3+d4
	TotFT=c1+c2+c3+c4
	TotYD=d1+d2+d3+d4

	$("#carpet_7").html(c4.toFixed(2));
	$("#carpet_8").html(d4.toFixed(2));

	//form.width4.value=c4
	//form.length4.value=d4
   form.subFT.value=subFT
   form.subYD.value=subYD 
   

//  Area5
a5=eval(form.a5.value)
b5=eval(form.b5.value)
if(document.FrontPage_Form1.a5.value == ''){
		
		a5=0
		b5=0
		
	}
	c5=a5*b5
	d5=a5*b5/9
	subFT=c1+c2+c3+c4+c5
	subYD=d1+d2+d3+d4+d5
	TotFT=c1+c2+c3+c4+c5
	TotYD=d1+d2+d3+d4+d5

	$("#carpet_9").html(c5.toFixed(2));
	$("#carpet_10").html(d5.toFixed(2));

	//form.width5.value=c5
	//form.length5.value=d5
   form.subFT.value=subFT
   form.subYD.value=subYD 

// Area 6
a6=eval(form.a6.value)
b6=eval(form.b6.value)
if(document.FrontPage_Form1.a6.value == ''){
		
		a6=0
		b6=0
		
	}
	c6=a6*b6
	d6=a6*b6/9
	subFT=c1+c2+c3+c4+c5+c6
	subYD=d1+d2+d3+d4+d5+d6
	TotFT=c1+c2+c3+c4+c5+c6
	TotYD=d1+d2+d3+d4+d5+d6
	
	$("#carpet_11").html(c6.toFixed(2));
	$("#carpet_12").html(d6.toFixed(2));

	//form.width6.value=c6
	//form.length6.value=d6
   form.subFT.value=subFT
   form.subYD.value=subYD 

// Area 7
a7=eval(form.a7.value)
b7=eval(form.b7.value)
if(document.FrontPage_Form1.a7.value == ''){
		
		a7=0
		b7=0
		
	}
	c7=a7*b7
	d7=a7*b7/9
	subFT=c1+c2+c3+c4+c5+c6+c7
	subYD=d1+d2+d3+d4+d5+d6+d7
	TotFT=c1+c2+c3+c4+c5+c6+c7
	TotYD=d1+d2+d3+d4+d5+d6+d7

	$("#carpet_13").html(c7.toFixed(2));
	$("#carpet_14").html(d7.toFixed(2));

	//form.width7.value=c7
	//form.length7.value=d7
   form.subFT.value=subFT
   form.subYD.value=subYD 


// Area 8
a8=eval(form.a8.value)
b8=eval(form.b8.value)
if(document.FrontPage_Form1.a8.value == ''){
		
		a8=0
		b8=0
		
	}
	c8=a8*b8
	d8=a8*b8/9
	subFT=c1+c2+c3+c4+c5+c6+c7+c8
	subYD=d1+d2+d3+d4+d5+d6+d7+d8
	TotFT=c1+c2+c3+c4+c5+c6+c7+c8
	TotYD=d1+d2+d3+d4+d5+d6+d7+d8
	
	$("#carpet_15").html(c8.toFixed(2));
	$("#carpet_16").html(d8.toFixed(2));

	//form.width8.value=c8
	//form.length8.value=d8
	form.subFT.value=subFT
   form.subYD.value=subYD 
 
	

// Area 9
a9=eval(form.a9.value)
b9=eval(form.b9.value)
if(document.FrontPage_Form1.a9.value == ''){
		
		a9=0
		b9=0
		
	}
	c9=a9*b9
	d9=a9*b9/9
	subFT=c1+c2+c3+c4+c5+c6+c7+c8+c9
	subYD=d1+d2+d3+d4+d5+d6+d7+d8+d9
	TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9
	TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9

	$("#carpet_17").html(c9.toFixed(2));
	$("#carpet_18").html(d9.toFixed(2));

	//form.width9.value=c9
	//form.length9.value=d9
   form.subFT.value=subFT
   form.subYD.value=subYD 


// Area 10
a10=eval(form.a10.value)
b10=eval(form.b10.value)
if(document.FrontPage_Form1.a10.value == ''){
		
		a10=0
		b10=0
		
	}
	c10=a10*b10
	d10=a10*b10/9
	subFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10
	subYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10
	TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10
	TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10

	$("#carpet_19").html(c10.toFixed(2));
	$("#carpet_20").html(d10.toFixed(2));

	//form.width10.value=c10
	//form.length10.value=d10
   //form.subFT.value=subFT
   //form.subYD.value=subYD 

	$("#carpet_27").html(subFT.toFixed(2));
	$("#carpet_28").html(subYD.toFixed(2));

//  Yardage Subtotal

   c11=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10  
   d11=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10
   




// Calculating Steps (Steps 1)


a12=eval(form.a12.value)   //  # of steps
b12=eval(form.b12.value)   //  Width
c12=eval(form.c12.value)   //  Height
if(document.FrontPage_Form1.a12.value == ''){
		
		a12=0
		b12=0
		c12=0
		
	}
  
	//d12 = $("#carpet_21").html(a12*b12*c12);
	//e12 = $("#carpet_22").html(a12*b12*c12/9);
  
	d12=a12*b12*c12         //  Sq Ft
	e12=a12*b12*c12/9       //  Sq Yds
   TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+d12
   TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+e12

	$("#carpet_21").html(d12.toFixed(2));
	$("#carpet_22").html(e12.toFixed(2));
	
   //form.width12.value=d12
   //form.height12.value=e12


// Calculating Steps (Steps 2)


a13=eval(form.a13.value)   //  # of steps
b13=eval(form.b13.value)   //  Width
c13=eval(form.c13.value)   //  Height
if(document.FrontPage_Form1.a13.value == ''){
		
		a13=0
		b13=0
		c13=0
		
	}
  
   d13=a13*b13*c13         //  Sq Ft
   e13=a13*b13*c13/9       //  Sq Yds
   TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+d12+d13
   TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+e12+e13
	
	$("#carpet_23").html(d13.toFixed(2));
	$("#carpet_24").html(e13.toFixed(2));

   //form.width13.value=d13
   //form.height13.value=e13



// Calculating Steps (Steps 3)


a14=eval(form.a14.value)   //  # of steps
b14=eval(form.b14.value)   //  Width
c14=eval(form.c14.value)   //  Height
if(document.FrontPage_Form1.a14.value == ''){
		
		a14=0
		b14=0
		c14=0
		
	}
  
   d14=a14*b14*c14         //  Sq Ft
   e14=a14*b14*c14/9       //  Sq Yds
   TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+d12+d13+d14
   TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+e12+e13+e14
	
	$("#carpet_25").html(d14.toFixed(2));
	$("#carpet_26").html(e14.toFixed(2));

   //form.width14.value=d14
   //form.height14.value=e14




// Total Footage & Yardage (Net)



   
   //form.TotFT.value=TotFT
   //form.TotYD.value=TotYD
   $("#carpet_29").html(TotFT.toFixed(2));
	$("#carpet_30").html(TotYD.toFixed(2));
   
   TotYd = Math.round(TotYD);
   
   
   function format (expr, decplaces) {
      var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
      while (str.length <= decplaces ){
         str = "0" + str;
      }
      var decpoint = str.length - decplaces;
      return str.substring(0,decpoint) + "." + str.substring(decpoint
   ,str.length);
   }    
    
   
   TotFT=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+d12+d13+d14
   TotYD=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+e12+e13+e14

// Total Footage & Yardage (With Normal 5% Waste)

   d15=TotFT*1.05  
   e15=TotYD*1.05
    
   WasSF=d15
   WasSY=e15 

   //form.WasSF.value=WasSF
   //form.WasSY.value=WasSY
   
   $("#carpet_31").html(WasSF.toFixed(2));
	$("#carpet_32").html(WasSY.toFixed(2));
   
   WasSF=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+d12)*1.05
   WasSY=(d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+e12)*1.05

   }

//


function update_interest_list(int_id,id)
{
	formx = document.form11;
	desc_id = 'InterestDesc'+id;
	prior_id = 'Priority'+id;
	
	if(document.getElementById(desc_id).value == '')
	{
		alert("Description should not be empty");
		return false;
	}
	else
	{
		var conf=confirm("Are you sure you want to update?");
		if(conf==true)
		{
			formx.hdnValue.value = "update_list";
			formx.hdnPrior.value = int_id;
			formx.hdnInterestDesc.value     = document.getElementById(desc_id).value;
			formx.hdnInterestPriority.value = document.getElementById(prior_id).value;
			//document.form11.submit();
		}
		else
		{
		 return false;
		}
	}
}

function delete_interest_list(int_id)
{
	formx = document.form11;
	var conf=confirm("Are you sure you want to delete?");
	if(conf==true)
	{

		formx.hdnValue.value = "delete_list";
		formx.hdnPrior.value = int_id;
		document.form11.submit();
	}
	else
	{
		return false;
	}
}

function clear_all_fields(){
document.elbform.elb1.value='N/A';
document.elbform.elb2.value='N/A';
document.elbform.elb3.value='N/A';
document.elbform.elb4.value='N/A';
document.elbform.elb5.value='N/A';
document.elbform.elb6.value='N/A';
document.elbform.elb7.value='N/A';
document.elbform.elb8.value='N/A';
document.elbform.elb9.value='N/A';
document.elbform.elb10.value='N/A';
document.elbform.elb11.value='N/A';
document.elbform.elb12.value='N/A';
}
function LOADcalculate(){
	var calc_amt=document.elbform.calc_lease_amount.value;
	if(calc_amt=="$0.00" || calc_amt=="0.00" || calc_amt==""){
		return false;
	}else{
		calculate();
	}
}

function cal_sub()
{
	if(document.getElementById('Company Name').value=="")
	{
		alert('Company Name is required to process a quote.');
		document.getElementById('Company Name').focus();
		return false;
	}
	else if(document.getElementById('Contact Name').value=="")
	{
		alert('Contact Name is required to process a quote.');
		document.getElementById('Contact Name').focus();
		return false;
	}
	else if(document.getElementById('Phone').value=="")
	{
		alert('Phone is required to process a quote.');
		document.getElementById('Phone').focus();
		return false;
	}
	else if(document.getElementById('E-mail').value=="")
	{
		alert('E-mail is required to process a quote.');
		document.getElementById('E-mail').focus();
		return false;
	}
	var calc_amt=document.getElementById('calc_lease_amount').value;
	if(calc_amt=="$0.00" || calc_amt=="0.00" || calc_amt==""){
		alert('Amount is required to process a quote.');
		document.getElementById('calc_lease_amount').focus();
		return false;
	}
	
	if(calculate())
	{
		var calc_lease_amount=toFloat(document.elbform.calc_lease_amount,2);
		calculatePayment(calc_lease_amount);
		return false;
	}
}
function save_cal_pay(str)
{
if (str=="")
{
// document.getElementById("txtHint").innerHTML="";
return;
}
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		//console.log(xmlhttp.responseText);
	}
}
xmlhttp.open("GET", base_url+"/tool/save_cal_pay_ajax?querystring="+str,true);
xmlhttp.send();
}

function cal_sub_pdf()
{

	if(!validateREQ()){
		return false;
		}
		 else
		  {
		document.elbform.method='post';
		document.elbform.action= '/tool/letter';
		document.elbform.target='_blank';		
		document.elbform.submit();
		 return true;}
}

function calculate(){

	var frm=document.elbform;

			if(!validateREQ()){
			return false;
		}

	var calc_lease_amount=toFloat(frm.calc_lease_amount,2);


	if(calc_lease_amount!=''){ 
		if(calc_lease_amount < 1000.00 || calc_lease_amount > 150000.00){ 
			if(calc_lease_amount>150000) {
				alert('Please call us at  888-442-8242  and ask about our preferred rates for amounts over $150,001\n');
				return false;
			}else if(calc_lease_amount<1000) {
				alert('Our minimum dollar amount is $1,000');
				return false;
			}			
			frm.calc_lease_amount.value="";
			frm.calc_lease_amount.select();
			frm.calc_lease_amount.focus();
			clear_all_fields();
			return false;
		}
	}
	return true;
}

function validateREQ(){
	
	if(document.getElementById('Company Name').value=="")
	{
		alert('Company Name is required to process a quote.');
		document.getElementById('Company Name').focus();
		return false;
	}
	else if(document.getElementById('Contact Name').value=="")
	{
		alert('Contact Name is required to process a quote.');
		document.getElementById('Contact Name').focus();
		return false;
	}
	else if(document.getElementById('Phone').value=="")
	{
		alert('Phone is required to process a quote.');
		document.getElementById('Phone').focus();
		return false;
	}
	else if(document.getElementById('E-mail').value=="")
	{
		alert('E-mail is required to process a quote.');
		document.getElementById('E-mail').focus();
		return false;
	}
	var calc_amt=document.getElementById('calc_lease_amount').value;
	if(calc_amt=="$0.00" || calc_amt=="0.00" || calc_amt==""){
		alert('Amount is required to process a quote.');
		document.getElementById('calc_lease_amount').focus();
		return false;
	}
	return true;

}

function validateApp(){
	if(!validateREQ()){
		return false;
	}
	if(document.elbform.calc_lease_payment.value!=""){
		return true;
	}
	alert("You must specify a valid dollar amount before proceeding to the Application.");
	document.elbform.calc_lease_amount.focus();
	return false;
}

function min_max(fld){
	if(fld.value<1000 || fld.value>50000){
		if(fld.value>50000) {
			alert('Please call us at000-000-0000 and ask about our preferred rates for amounts over $50,000.00.\n');
		}else if(fld.value<1000) {
			alert('Our minimum dollar amount is $1,000.00.');
		}
		fld.value.value="";
		fld.value.select();
		fld.value.focus();
		clear_all_fields();
		return false;
	}
	return true;
}

function validateQL(){
	if(!validateREQ()){
		return false;
	}

	var amount_fld=document.elbform.calc_lease_amount;

	if(!min_max(amount_fld)){
		return false;
	}

	isPrice=/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/;
	if(amount_fld.value!="" && isPrice.test(amount_fld.value)){
		return true;
	}
	alert("You must specify a valid dollar amount before preparing a Quote Letter.");
	amount_fld.focus();
	return false;
}

function tocur(arg)
{
	alert(arg);
}

function applynow(arg)
{
	var cp = arg.substr(0,5);
	if(cp=='$0.00'){alert('Please At First calculate payment !');return false;}		
	
	
	document.elbform.action='<?=$config_site_path?>furniture-leasing/lease-application/index.php'+'?arg='+arg;
	document.elbform.target='_blank';	
	//document.elbform.action='thank_you.php'+'?arg='+arg;
	//url = '<?=$config_site_path?>furniture-leasing/lease-application/index.php'+'?arg='+arg;
	//window.open(url,'lease_app', 'status=no,width=400,height=500, status=no, scrollbars=yes,toolbar=no');
	document.elbform.submit();
	
}
function frm_reset()
{
document.getElementById('Company Name').value="";
document.getElementById('Contact Name').value="";
document.getElementById('Phone').value="";
document.getElementById('E-mail').value="";
document.getElementById('calc_lease_amount').value="";

document.getElementById('calc_lease_address_1_1').value="";
document.getElementById('calc_lease_city_1_1').value="";
document.getElementById('select').value="";
document.getElementById('textfield6').value="";
document.getElementById('textfield2').value="";
return false;
}

 /*$(function() {
  $('.bg_hover').hover( function(){
      $(this).css('background-color', 'gray');
   }, 
   function(){
      $(this).css('background-color', '#000');
   });
});
*/



function d_sel_default()
{
	MM_preloadImages('<?=$config_site_path?><?= $root_dir ?>/images/cal_hov.jpg','<?=$config_site_path?><?= $root_dir ?>/images/pdf_hov.jpg','<?=$config_site_path?><?= $root_dir ?>/images/apply_hov.jpg');
}

function removeComma(str){
			str = str.replace(/\s+/g, '-').toLowerCase();
			//str = str.replace(/[^a-z0-9-./]/g,"").toLowerCase();
			str = str.replace(/[^0-9.$]/g,"").toLowerCase();
			return str;
		}

function calculatePayment(str)
{
if (str=="")
  {
//	document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    
    	var arr = xmlhttp.responseText;
		var arr=arr.split("-");
	
		var comma_calc_lease_amt = removeComma(document.getElementById('calc_lease_amount').value);

    	var arrcalpay = new Array('',		
		document.getElementById('Company Name').value,
		document.getElementById('Contact Name').value,
		document.getElementById('Phone').value,
		document.getElementById('E-mail').value,
		comma_calc_lease_amt,

		document.getElementById('calc_lease_address_1_1').value,
		document.getElementById('calc_lease_city_1_1').value,
		document.getElementById('select').value,
		document.getElementById('textfield6').value,
		document.getElementById('textfield2').value,
		
		removeComma(arr['0']),removeComma(arr['1']),removeComma(arr['2']),removeComma(arr['3']),
		removeComma(arr['4']),removeComma(arr['5']),removeComma(arr['6']),removeComma(arr['7']),
		removeComma(arr['8']),removeComma(arr['9']),removeComma(arr['10']),removeComma(arr['11']));

		//alert(arrcalpay);
		save_cal_pay(arrcalpay);
		//alert('after');

	    for(var i=1; i<=12; i++){
	        var i_str= i.toString();
	        if($("#elb"+i_str).length > 0) {
	            $("#elb"+i_str).val(arr[i - 1]);
	        }
	    }
	
    }
  }
xmlhttp.open("GET", base_url + "tool/lease_calculator?querystring="+str,true);
xmlhttp.send();
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	//return x1 + x2;
	var resFormatAmount = x1 + x2;
	
	if(resFormatAmount.indexOf('.') < 0) { resFormatAmount += '.00'; }
	
	if(resFormatAmount.indexOf('$') < 0) { resFormatAmount = '$' + resFormatAmount; }
	
	document.getElementById('calc_lease_amount').value = resFormatAmount;
}


// Functions for alaQuote

function OpenCertDetails(){
alert('ur in OpenCertDetails sec_functtion.js');//	thewindow = window.open('https://www.thawte.com/cgi/server/certdetails.exe?code=USELBT1-1', 'anew', config='height=400,width=450,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=yes');
}

function trim(fld){ //trim spaces from beginning and end of string
	trimstr=new String(fld.value);
	while(''+trimstr.charAt(0)==' ')
		trimstr=trimstr.substring(1,trimstr.length);
	while(''+trimstr.charAt(trimstr.length-1)==' ')
		trimstr=trimstr.substring(0,trimstr.length-1);
	fld.value=trimstr;
}

function toPhone(fld){
	var tmpfld=fld.value;
	var tf=true;
	tmpfld=tmpfld.replace(/[^0-9]/g,"");
	if(tmpfld.length==0){
		//empty of numbers
	}else if(tmpfld.length==7){
		alert("Please include the area code for "+tmpfld+".\n\n###-###-####");
		tmpfld=tmpfld.replace(/(\d{3})(\d{4})/, "-$1-$2");
		setTimeout("document.forms['"+fld.form.name+"'].elements['"+fld.name+"'].select()", 5);
		setTimeout("document.forms['"+fld.form.name+"'].elements['"+fld.name+"'].focus()", 5);
		tf=false;
	}else if(tmpfld.length==10){
		tmpfld=tmpfld.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	}else{
		alert("Please specify the phone number in the following format.\n\n###-###-####");
		setTimeout("document.forms['"+fld.form.name+"'].elements['"+fld.name+"'].select()", 5);
		setTimeout("document.forms['"+fld.form.name+"'].elements['"+fld.name+"'].focus()", 5);
		tf=false;
	}
	fld.value=tmpfld;
	return tf;
}

function toSSN(fld){
	var tmpfld=fld.value;
	tmpfld=tmpfld.replace(/[^0-9]/g,"");
	if(tmpfld.length==0){
		//empty
	}else if(tmpfld.length==9){
		tmpfld=tmpfld.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
	}else{
		alert("Please specify the SSN in the following format.\n\n###-##-####'");
		setTimeout("doSelection(document.forms['"+fld.form.name+"'].elements['"+fld.name+"'])", 0)
	}
	fld.value=tmpfld;
}

function toSSN_old(fld){
	var err_msg;
	var p;
	trim(fld);
	if(fld.value.length==0){return true;}
	for(p=0;p<fld.value.length;p++){
		if(isNaN(fld.value.substring(p,p+1)) && (fld.value.substring(p,p+1)!='-') || (fld.value.substring(p,p+1)==' ')){
			fld.select();
			err_msg='Please specify the SSN in the following format.\n\n###-##-####';
			alert(err_msg);
			fld.focus();
			return false;
		}
	}
	if(fld.value.length==9 && !isNaN(fld.value)){
		fld.value=fld.value.substring(0,3)+'-'+fld.value.substring(3,5)+'-'+fld.value.substring(5,9);
		return true;
	}
	if(fld.value.length==11){
		if(!isNaN(fld.value.substring(0,3)) && fld.value.substring(3,4)=='-' && !isNaN(fld.value.substring(4,6)) && fld.value.substring(6,7)=='-' && !isNaN(fld.value.substring(7,11))){
			return true;
		}
		if(!isNaN(fld.value.substring(0,2)) && fld.value.substring(2,3)=='-' && !isNaN(fld.value.substring(3,6)) && fld.value.substring(6,7)=='-' && !isNaN(fld.value.substring(7,11))){
			return true;
		}
	}
	fld.select();
	if(err_msg==null){err_msg='Please specify the SSN in the following format.\n\n###-##-####';}
	alert(err_msg);
	fld.focus();
	return false;
}

function toUpper(fld){
	trim(fld);
	fld.value=fld.value.toUpperCase();
	return;
}

function toLower(fld){
	trim(fld);
	fld.value=fld.value.toLowerCase();
	return;
}

function toDate(fld){
	trim(fld);
	if(fld.value==""){return}
	if(fld.value.length!=10){
		fld.select();
		fld.focus();
		alert('Please enter date in the following format:\n\nmm/dd/yyyy (i.e. 06/04/1964)');
		return false;
	}
	mm=fld.value.substr(0,2);
	sep1=fld.value.substr(2,1);
	dd=fld.value.substr(3,2);
	sep2=fld.value.substr(5,1);
	yyyy=fld.value.substr(6,4);
	if(!isNaN(mm) && !isNaN(dd) && !isNaN(yyyy) && (sep1=="-" || sep1=="/") && (sep2=="-" || sep2=="/")){
		mm--;
		test=new Date(yyyy,mm,dd);
		if (test.getFullYear() !=yyyy || test.getMonth() != mm || test.getDate() != dd) {
			fld.select();
			alert('The date entered is not valid.\nPlease enter date in the following format:\n\nmm/dd/yyyy (i.e. 06/04/1964)');
			fld.focus();
			return false;
		}
		if(yyyy<1900 || yyyy>2099){
			fld.select();
			alert('The date entered is not within a valid range.\nPlease enter years in the following range:\n\n1900-2099');
			fld.focus();
			return false;
		}
		return true;
	}
	alert('Please enter date in the following format:\n\nmm/dd/yyyy (i.e. 06/04/1964)');
	fld.select();
	fld.focus();
	return;
}

function toTime(fld){
	trim(fld);
	if(fld.value==""){return}
	var timePat=/^(\d{1,2}):(\d{2})?$/;
	var matchArray=fld.value.match(timePat);
	if (matchArray==null) {
		fld.select();
		alert('Please enter time in the following military (24 hour) format:\n\nhh:mm (i.e. 3:22pm = 15:22)');
		fld.focus();
		return false;
	}

	hour=matchArray[1];
	minute=matchArray[2];

	if ((hour<0 || hour>23) || (minute<0 || minute>59)) {
		fld.select();
		fld.focus();
		alert('Please enter time in the following military (24 hour) format:\n\nhh:mm (i.e. 3:22pm = 15:22)');
		return false;
	}
	return true;
}

function toFloat(fld,precision){
	var num=Number(fld.value.replace(/[^0-9.]/g,''));
	return num.toFixed(precision);
}

function toCurrency(fld){
	var num=Number(fld.value.replace(/[^0-9.]/g,''));
	if(isNaN(num)){
		num="0";
	}
	sign=(num==(num=Math.abs(num)));
	num=Math.floor(num*100+0.50000000001);
	cents=num%100;
	num=Math.floor(num/100).toString();
	if(cents<10){
		cents="0"+cents;
	}
	for(var i=0;i<Math.floor((num.length-(1+i))/3);i++){
		num=num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	}
	fld.value=(((sign)?'':'-')+'$'+num+'.'+cents);
}

function toDollarCent(fld){
	trim(fld);
	if(fld.value==""){return true;}

	fld.value=fld.value.replace(/[^0-9]\../g,"");
	var NumericRegExp=/^\d+(\.[0]{0,2})?$/;
	var regex=new RegExp(NumericRegExp);
	if(!regex.test(fld.value)){
		alert(fld.value + " is not valid for this field.");
		setTimeout("doSelection(document.forms['"+fld.form.name+"'].elements['"+fld.name+"'])", 0)
		return false;
	}else{
		return true;
	}
}

function toEmail(fld){
	trim(fld);
	if(fld.value==""){return true;}
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fld.value)){ return true; }
	fld.select();
	alert('Please enter a valid e-mail address in the following format.\n\nyourname@domain.com');
	fld.focus();
	return false;
}

function toNumber(fld){
	trim(fld);
	if(fld.value==""){return true;}
	if(parseInt(fld.value)){
		fld.value=parseInt(fld.value)
		return true;
	}else{
		fld.value="";
		alert('Please enter only numbers in this field.');
		fld.focus();
		return false;
	}
}

function toPercent(fld){
	var low_pct=1;
	var high_pct=100;
	trim(fld);
	if(fld.value==""){return true;}
	if(parseInt(fld.value)){
		fld.value=parseInt(fld.value)
		if(fld.value<low_pct || fld.value>high_pct){
			alert('Please enter only whole percent numbers in the range of '+low_pct+' to '+high_pct+' in this field.');
			fld.focus();
			return false;
		}
		return true;
	}else{
		fld.value="";
		alert('Please enter only whole percent numbers in this field.\n\ne.g. 75 percent = 75, NOT .75 or 75%');
		fld.focus();
		return false;
	}
}

function round(n,d){
	n=n-0;
	d=d||2;
	var f=Math.pow(10,d);
	n=Math.round(n * f)/f;
	n+=Math.pow(10,-(d+1));
	n+='';
	return d==0?n.substring(0,n.indexOf('.')):n.substring(0,n.indexOf('.')+d+1);
}

function format1000(n,d){
	n=round(n,d);
	for(var i=n.indexOf('.')-3;i>0;i-=3){
		n=n.substring(0, i)+','+n.substring(i);
	}
	return n;
}

function toUpperLower(fld){
	var arrStr=fld.value.split(" ");
	var strOut="";
	var i=0;
	while(i<arrStr.length){
		firstChar  = arrStr[i].substring(0,1);
		remainChar = arrStr[i].substring(1);
		firstChar  = firstChar.toUpperCase();
		remainChar = remainChar.toLowerCase();
		strOut += firstChar + remainChar + ' ';
		i++;
	}
	fld.value=strOut.substring(0,strOut.length-1);
}

function doSelection(fld){
    fld.focus()
    fld.select()
}

// Lease application script
// function checkSubmit(){
$(function(){
	$(document).on('click', '#btnSubmitLeaseApp', function(e) {
		_error_message = '';
		_is_error = false;
		e.preventDefault();

		if (grecaptcha.getResponse(LeaseApre) == ""){
			$('#apply_recaptcha_error').text('Please confirm that you are human by clicking the check above!');
			e.preventDefault();
			return false;
		}
		
		_val_res = validateRequiredFields();
		if(!_val_res.validation){
			e.preventDefault();
			_error_message = "A required field is not populated!";
			_st_el = _val_res.scroll_to_field;
			_is_error = true;
		}

		_val_res = validateEmailFields();
		if(!_val_res.validation){
			e.preventDefault();
			_error_message = "You must provide a valid email address!";
			_st_el = _val_res.scroll_to_field;
			_is_error = true;
		}
		
		if (!$("input[type='checkbox'][name='authorization']").prop('checked'))
		{
			// alert("To submit form please check Authorization !");
			_error_message = "To submit form please check Authorization box!";
			_st_el = $('.custom-checkbox');
			e.preventDefault();
			_is_error = true;
		}


		// if error has happened disyplay an error message
		if(_is_error) {
			swal("Error:", _error_message, "error");
			if(typeof(_st_el) != 'undefined' || _st_el != null) {
				scrollToElement($(_st_el));
				_st_el.focus();
			}
			return; 
		}
		
		// display loader
		$('.application-loader').show();
		
		// everything is fine submit the form
		document.leaseApplication.submit();
		
	});
});
function scrollToElement(_el)	{
	$('html, body').animate({
		scrollTop: _el.offset().top - 160
	 }, 800);
}
/*########### Captcha Validation Part [ END ] ###############*/

function calpay(str) {
if (str=="")
  {
 // document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","leaseapplicationajax.php?querystring="+str,true);
xmlhttp.send();
}

function validate_rquire_form()
{
	return true;
}
 
function show_block(sct,block){
	document.getElementById(block+'0'+sct+'1').style.display='';
	document.getElementById(block+'0'+sct+'1').style.visibility='visible';
	document.getElementById('add0'+(sct-1)+'1_'+block).style.visibility='hidden';
	document.getElementById('val0'+sct+'1'+block).value = 1;
	return true;
}

function validateRequiredFields(){
	var flag=true;
	_st_el = null;
    $('#btnSubmitLeaseApp').parents('form').find(':input').each(function(i) {
		if( $('#fb_' + $(this).attr('blockfield')).length !== 0 
			&& $('#fb_' + $(this).attr('blockfield'))[0].files !== null
			&& $('#fb_' + $(this).attr('blockfield'))[0].files !== undefined
			&& $('#fb_' + $(this).attr('blockfield'))[0].files.length !== 0 ) {
				// do nothing, 
		} else {
			// check if the field is required
			if($(this).attr('rel')) {
				if($(this).val() == ""){
					if(typeof(_st_el) == 'undefined' || _st_el == null) {
						console.log('######FOUND REQUIRED FIELD THAT I WILL SCROLL TO!', $(this));
						_st_el = $(this);
					}
					flag = false;
				}
			}
		}
	});
	
	// return false;

    return {'validation': flag, 'scroll_to_field': _st_el };
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateEmailFields(){
	var flag=true; 
	_st_el = null;
    $('#btnSubmitLeaseApp').parents('form').find(':input').each(function(i) {
		if( $('#fb_' + $(this).attr('blockfield')).length !== 0 
			&& $('#fb_' + $(this).attr('blockfield'))[0].files !== null
			&& $('#fb_' + $(this).attr('blockfield'))[0].files !== undefined
			&& $('#fb_' + $(this).attr('blockfield'))[0].files.length !== 0 ) {
				// do nothing, 
		} else {
			// check if the field is email
			if($(this).hasClass('email')) {
				if($(this).val() == "" || !validateEmail($(this).val())){
					if(typeof(_st_el) == 'undefined' || _st_el == null) {
						// console.log('######FOUND EMAIL FIELD THAT I WILL SCROLL TO!', $(this));
						_st_el = $(this);
					}
					flag = false;
				}
			}
		}
	});
	
	// return false;

    return {'validation': flag, 'scroll_to_field': _st_el };
}

// depercated/no longer in use
function repeatBlock(blockid){
    
    var block_counter = $('#blck_hdn_'+blockid).val();
    var block_txt = $('#blck_hdn_'+blockid+'_txt').val();
    
    var url = base_url+"tool/lease_principal";
    
    $.ajax({
          type: "POST",
          url: url+'?count='+block_counter+'&block_txt='+block_txt,
          data:'block_id='+blockid,
          dataType:'json',
          success: function(res){ 
		  console.log(res);
            var status = res.status;
            var output = res.output;
			
            if(status == 'success') {
               $('#blck_hdn_'+blockid).val(parseInt(block_counter)+1);
            var temp = '<tr><td colspan="4" height="7px"></td></tr><tr><td colspan="4" bgcolor="#2e2e2e" height="20px"><div style="float: left;"><span style=" font-family:\'verdana,arial\'; font-style:italic; font-size:13px; padding-top:5px; color:#FFF; padding-left:12px"> '+$('#blck_hdn_'+blockid+'_txt').val()+' '+$('#blck_hdn_'+blockid).val()+' </span></div></td></tr><tr><td colspan="4" height="7px"></td></tr>';
            $('#blck_'+blockid+' tr:last').after(temp+output); 
            }
          } 
    });
}

function repeatBlockUpdate(blockid){
    
    var block_counter = $('#blck_hdn_'+blockid).val();
    var block_txt = $('#blck_hdn_'+blockid+'_txt').val();
    
    var url = base_url+"tool/lease_principal";
    
    $.ajax({
          type: "POST",
          url: url+'?count='+block_counter+'&block_txt='+block_txt,
          data:'block_id='+blockid,
          dataType:'json',
          success: function(res){ 
		  console.log(res);
            var status = res.status;
            var output = res.output;
			
            if(status == 'success') {
                $('#blck_hdn_'+blockid).val(parseInt(block_counter)+1);
				var temp = '<tr class="removable-blck"><td colspan="4"><div style="background-color: #444444;"><div><span style=" font-family:\'verdana,arial\'; font-style:italic; font-size:13px; padding-top:5px; color:#FFF; padding-left:12px"> '+$("#blck_hdn_"+blockid+"_txt").val() +' '+ $("#blck_hdn_"+blockid).val() +'</span><a href="#" class="close-repeatable-section"><i class="fa fa-times fa-6"></i></a></div></div><table>'+ output +'</table></td></tr>';
				$('#blck_'+blockid+' tr:last').before(temp);				
            }
          } 
    });
}

function btnResetLeaseApp(e) {
	e.preventDefault();
	$('#btnSubmitLeaseApp').parents('form').find(':input').each(function(i) {
		$(this).val() == "";
	});
}

$(function(){
	$(document).on('click', '.close-repeatable-section', function(e){
		e.preventDefault();
		$(this).closest('.removable-blck').remove();
	});
	$(document).on('click', '.clear-file-selection', function(e){
		e.preventDefault();
		$("#fb_"+ $(this).attr('blockfield')).val('');
		alert('File selection has been cleared!');
	});
});
