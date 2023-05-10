$(function(){
    maskTelefone();
    
    function maskTelefone(){
        $('input[type=tel]').mask('(99) 9999-9999')
    }
})
$('nav.desktop a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
})
$('nav.menu-mobile h3').click(function(){
    $('ul').slideToggle()
})

