var loader = 'loader.gif';
var urlRoot = '';

function genSurface(id, txt, img)
{
    
	$("#surfaceid_fab").val(id);
	$("#title_surface").html(txt);
	// $("#genSurface").css("background", "url("+urlRoot + img+")"); 
	$("#genSurface img").attr("src",  loader); 
	$("#genSurface img").attr("src",  urlRoot + img); 
	//document.getElementById('rightTitle').innerHTML = txt;
	// fetchImg();
}

function genPaint(id, txt, img)
{
	$("#paintid_fab").val(id);
	$("#title_paint").html(txt);
	// $("#genPaint").css("background", "url("+urlRoot + img+")");  
	$("#genPaint img").attr("src",  loader);  
	$("#genPaint img").attr("src",  urlRoot + img);  
	//document.getElementById('middleTitle').innerHTML = "|&nbsp;"+txt+"&nbsp;|";
	// fetchImg();
}

function genFabric(id, txt, img)
{
	$("#fabricid_fab").val(id);
	$("#title_fabric").html(txt);
	// $("#genFabric").css("background", "url("+urlRoot + img+")");  
	$("#genFabric img").attr("src",  loader);  
	$("#genFabric img").attr("src",  urlRoot + img);   
	//document.getElementById('leftTitle').innerHTML = txt;
	// fetchImg();
}

function get_h4(id, txt, img)
{
    
	$("#fab_h4_id").val(id);
	$("#h4_title").html(txt);
	// $("#genFabric").css("background", "url("+urlRoot + img+")");  
	$("#gen_h4 img").attr("src",  loader);  
	$("#gen_h4 img").attr("src", img);   
	//document.getElementById('leftTitle').innerHTML = txt;
	// fetchImg();
}

function get_h5(id, txt, img)
{
	$("#fab_h5_id").val(id);
	$("#h5_title").html(txt);
	// $("#genFabric").css("background", "url("+urlRoot + img+")");  
	$("#gen_h5 img").attr("src",  loader);  
	$("#gen_h5 img").attr("src",  img);   
	//document.getElementById('leftTitle').innerHTML = txt;
	// fetchImg();
}

function get_h6(id, txt, img)
{
    $("#fab_h6_id").val(id);
	$("#h6_title").html(txt);
	// $("#genFabric").css("background", "url("+urlRoot + img+")");  
	$("#gen_h6 img").attr("src",  loader);  
	$("#gen_h6 img").attr("src", img);   
	//document.getElementById('leftTitle').innerHTML = txt;
	// fetchImg();ss
}

function geth1(id, txt, img)
{
    $("#surfaceid_fab").val(id);
	$("#title_surface").html(txt);
	// $("#genSurface").css("background", "url("+urlRoot + img+")"); 
	$("#genSurface img").attr("src",  loader); 
	$("#genSurface img").attr("src",  urlRoot + img); 
	//document.getElementById('rightTitle').innerHTML = txt;
	// fetchImg();
}
function geth2(id, txt, img)
{
   $("#paintid_fab").val(id);
	$("#title_paint").html(txt);
	// $("#genPaint").css("background", "url("+urlRoot + img+")");  
	$("#genPaint img").attr("src",  loader);  
	$("#genPaint img").attr("src",  urlRoot + img);  
	//document.getElementById('middleTitle').innerHTML = "|&nbsp;"+txt+"&nbsp;|";
	// fetchImg();
}
function geth3(id, txt, img)
{
	$("#fabricid_fab").val(id);
	$("#title_fabric").html(txt);
	// $("#genFabric").css("background", "url("+urlRoot + img+")");  
	$("#genFabric img").attr("src",  loader);  
	$("#genFabric img").attr("src",  urlRoot + img);   
	//document.getElementById('leftTitle').innerHTML = txt;
	// fetchImg();
}



function download()
{
	var surfid = $("#surfaceid_fab").val();
	var paintid = $("#paintid_fab").val();
	var fabricid = $("#fabricid_fab").val();
    var fab_h4_id = $("#fab_h4_id").val();
    var fab_h5_id = $("#fab_h5_id").val();
    var fab_h6_id = $("#fab_h6_id").val();
    var table_name = $("#table_name").val();
    var url = link = data = '';
   
          link = 'tool/download';
		  url  = base_url+link;
          data = {dld:1,fab_h1_id:surfid,fab_h2_id:paintid,fab_h3_id:fabricid,fab_h4_id:fab_h4_id,fab_h5_id:fab_h5_id,fab_h6_id:fab_h6_id,table_name:table_name};
          
		
			$.post(url,data,function(rdata){
				 if(rdata=='success'){
				    alert("Re-ordered Successfully");
				 }	
                else
                 {
                    alert("Error Occurred in Re-order!");
                 }	
            });
            
}

function symmetry_download()
{
	var fab_h1_id = $("#fab_h1_id").val();
	var fab_h2_id = $("#fab_h2_id").val();
	var fab_h3_id = $("#fab_h3_id").val();
    var fab_h4_id = $("#fab_h4_id").val();
    var fab_h5_id = $("#fab_h5_id").val();
    var fab_h6_id = $("#fab_h6_id").val();

	var url=urlRoot+'getsymmetrypic.php'+"?fab_h1_id="+ fab_h1_id +"&fab_h2_id=" +fab_h2_id +"&fab_h3_id="+fab_h3_id +"&dld=1"+"&fab_h4_id="+fab_h4_id+"&fab_h5_id="+fab_h5_id+"&fab_h6_id="+fab_h6_id;
		
		window.location = url;
}
