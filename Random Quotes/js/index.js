$(document).ready(function(){
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    getNewQuote();
		function getNewQuote(){
			$.ajax({
				url:'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
				success: function(data)
				{
					var post = data.shift();
					var quote = post.content;
					var tweetQuote = $(quote).text();
					$('#author').text('-'+post.title);
					$('#quote').html(tweetQuote);       
					$("#tweet").attr('href', 'https://twitter.com/intent/tweet?text=' + tweetQuote + " – " +post.title);
				},
				cache: false 
			});
			var color = Math.floor(Math.random() * colors.length);
			$("body").css({
				background: colors[color],
			});
		}
	$('#getQuote').on('click', function() {
		getNewQuote();
	});	
});