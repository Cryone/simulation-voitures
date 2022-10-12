$(document).ready (function (){
    

})

// <!-- ************************************************
// ***********************On click Languages********************
// ************************************************ -->

$(document).on('click', '.arabic', function(){

    window.open('/arabic.html')
   

})
$(document).on('click', '.français', function(){

    window.open('/homepage.html')

})

// <!-- ************************************************
// ***********************Display calculation box and overly********************
// ************************************************ -->

$(document).on('click', '.left-arrow,#overly', function(){

    $('.calculation-box').fadeOut()
    $('#overly').fadeOut()
    

})
// <!-- ************************************************
// ***********************On click calculation button********************
// ************************************************ -->

$(document).on('click', '.button', function (){
    $('.calculation-box').fadeIn()
    $('#overly').fadeIn()



    

    maFonction()
    
    
        
})

// <!-- ************************************************
// ***********************Function********************
// ************************************************ -->
function maFonction (prixV, changeP) {
    $('.calculation-box').html('')
    var html
    var prixV = parseInt($('#prixV').val());
    var changeP = parseInt($('#changeP').val());
    var prixHt = parseInt(prixV*0.8);
    var prixHtdzd = parseInt(prixHt*136.6);
    var taxe = parseInt(prixHtdzd*0.32);
    var tva = parseInt(((taxe+(prixHtdzd))*0.19));
    var total = parseInt((prixHt*changeP)+taxe+tva+(500*changeP));
    
    $('.calculation-box').find("#prixhtdzd").html(prixHtdzd)
    $('.calculation-box').html("Total = "+ total + "  dzd (Frais de bateau inclus : 107 500 dzd)")
    
    }

// <!-- ************************************************
// ***********************Display Total Function********************
// ************************************************ -->

