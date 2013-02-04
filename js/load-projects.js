(function($) {

	$.getJSON("data/projects.json",function(result){
    	$.each(result.projects, function(i, field){
			$("#projects").append('<li class="alpha-ie"><a target="_blank" href="' + field.url + '">' + field.name + '</a></li>');
		});
	});

})(jQuery);