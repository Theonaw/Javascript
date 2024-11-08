$('.accueil').click(function(e){
    $('.accueil').css('color','#FF0000')
});

$('.reservation').click(function(e){
    $('.reservation').hide()
});

$('.hotels').click(function(e){
    $('.texte').html('YAAAAA')
});

$('.contact').click(function(e){
    $('.texte').html('lol').fadeOut(20000)
});

$("#formulaire").submit(function(){
    var code = $("input:first").val()
    if(code == "xbqzs"){
        alert('Bonjour')
    }else{
        alert('prout')
    }
})