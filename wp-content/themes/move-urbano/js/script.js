var $nav;

$( document ).ready(function() {

	$nav = $(".nav-filter");

	// Controle as expansão do menu lateral
	$('.nav-toggle a').click(function(event) {
		$('.nav-main').toggleClass('open');
	});

	// Show/Hide responsive category
	$('.menu-toggle a').click(function(event) {
		$(this).parent().toggleClass('ativo').siblings('.menu').toggleClass('open');
	});

	// Controla o componente de cadastro de email	
	// cadastro
	$('.cadastro .toggle').click(function(event) {
		toggleCadastro($(this));
	});
	if($(window).width() < 1024) 
		toggleCadastro($('.cadastro .toggle'), 500);

	// Make search on key press after 0.5 second
	var searchEventContainer=null;
	$(".search-input").keyup(function(){
		if(searchEventContainer!=null) clearTimeout(searchEventContainer);

		searchEventContainer=setTimeout(function() {
			$(".cardboard").idecCardBoard().filterByContent($(".search-input").val());
		}, 500);
	});
});	

$(window).scroll(function() {

	// fixar o menu no topo
	if($(window).scrollTop() > $('.header .title').innerHeight() && $(window).width() > 480) {
		$nav.parent().addClass('nav-fixed');
		$('.nav-main').addClass('ajustar');
	} else {
		$nav.parent().removeClass('nav-fixed');
		$('.nav-main').removeClass('ajustar');
	}

	// fechar cadastro
	if(!$('.cadastro .toggle').hasClass('ativo')) toggleCadastro($('.cadastro .toggle'));
}); 

function getUrlParameter() {
	var url=document.URL;
	if(url.indexOf("#") != -1)
	return url.substring(url.indexOf("#")+1, url.length-1);
}

function toggleCadastro($this, duration = 300) {
	$('.cadastro .form-wrapper').animate({
		opacity: "toggle",
		height: "toggle",
		width: "toggle",
	}, duration);
	$this.toggleClass('ativo').find('i').toggleClass('fa-times');
}
function toggleCadastro($this, duration = 300) {
	$('.cadastro .form-wrapper').animate({
		opacity: "toggle",
		height: "toggle",
		width: "toggle",
	}, duration);
	$this.toggleClass('ativo').find('i').toggleClass('fa-times');
}