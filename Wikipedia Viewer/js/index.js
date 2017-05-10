$(document).ready(function(){
  $('#cari').on('click', function(){
    var pencari= $('input').val();  
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+pencari+"&format=json&callback=?";   
			$.ajax({
				type:'GET',
				url:url,
				async:false,
				dataType:"json",
				success: function(data)
				{
					$('#hasil').html("");//supaya yang muncul hanya kata yang di cari
					for(var i=0;i<data[1].length;i++)
						{
							$('#hasil').prepend("<li> <a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
						}
					$('input').val('');
				},
				error:function(errorMessage)
				{
					alert("error");
				}
      
			});
    
	});
	$('#input').keypress(function(e){
		if(e.which==13)
		{
			$('#cari').click();
		}
	});
  
});