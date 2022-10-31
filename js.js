$(document).ready (function (){
    

})

// <!-- ************************************************
// ***********************On click Languages********************
// ************************************************ -->

$(document).on('click', '.ar', function(){

    displayAr()
    $(".ar").css({"background-color":"rgb(239, 79, 79)","border-radius":"10px"})
    $(".fr").css("background-color","transparent")
    
})


$(document).on('click', '.fr', function(){

    displayFr()

})

// <!-- ************************************************
// ***********************Display calculation box and overly********************
// ************************************************ -->

$(document).on('click', '#overly, #return', function(){
  
    $('.calculation-box').fadeOut()
    $('#overly').fadeOut()
    $('#container-img').fadeIn()
    $('.box-container').fadeIn()
    $('.total').fadeIn()
    

})
// <!-- ************************************************
// ***********************On click calculation button********************
// ************************************************ -->

$(document).on('click', '.total', function (){
    $('.calculation-box').css('display','grid')
    $('#overly').fadeIn()
    $('#container-img').fadeOut()
    $('.box-container').fadeOut()
    $('.total').fadeOut()
    // $('#total').fadeIn()
    // $('#tva').fadeIn()
    // $('#prixhtdzd').fadeIn()
    // $('#return').fadeIn()


    maFonction()
    commafy()
    
        
})


$(document).on('click', '.button-reset', function (){

    $(".reset").get(0).reset()
})




// <!-- ************************************************
// ***********************Function********************
// ************************************************ -->
function maFonction (prixV, changeP) {
    
    var html
    var prixV = parseInt($('#prixV').val());
    var changeP = parseInt($('#changeP').val());
    var prixHt = parseInt(prixV*0.8);
    var prixHtdzd = parseInt(prixHt*136.6);
    var taxe = parseInt(prixHtdzd*0.32);
    var tva = parseInt(((taxe+(prixHtdzd))*0.19));
    var total = parseInt((prixHt*changeP)+taxe+tva+(500*changeP));
    
   
    html =`
    
            <div class='flex  space-between bold big-text'><span> Détails de calcul :</span><span id='return' class="material-symbols-outlined pointer">close</span></div>
            <div id="prixhtdzd" class="grid  inline-block p10">Prix hors taxe de la voiture en dzd = <span class='bold'> ${prixHtdzd} dzd </span>. (- TVA de 20%)</div> 
            <div id="taxe" class="grid  inline-block p10">Taxe douanière appliquée (32%) = <span class='bold'> ${taxe} dzd </span> </div>
            <div id="tva" class="grid  inline-block p10">TVA appliquée = <span class='bold'> ${tva} dzd </span></div>
            <div id="total" class="grid center text-center text-white p10"><span>Total (Frais de transport en bateau inclus) (500 euros) = </span><span class='bold very-big-text'> ${total} dzd </span></div>
    `    
    $(".calculation-box-body").html(html)
    }
    function commafy(num) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }
    function displayAr () {

          var html

          html =`
          <div class="grid container">
          <nav class="grid navbar" >
              <div class="grid header p10 ">
                  <div class="grid p10">
                  <div class="grid   big-title  text-red  ">احسب سعر سيارتك المستقبلية</div>
                  <div class="grid  small-title   text-gray">قم بمحاكاة سعر السيارة التي تنوي شرائها</div>
                  </div>
              </div>
              <div class="grid langue center p10 ">
                  <div class="grid center fr p10">
                      <button class="p10 big-text pointer text-black"><h4>Fr</h4></button>
                  </div>
                  <div class="grid center pointer ar p10">
                      <button class="p10 big-text pointer text-white"><h4>ع</h4></button>
                  </div>
                    
                      
      
              </div>
          </nav>
      
              <div class="grid main-container center p10 gap30">
              
                  <img id="container-img" src="./img/img.png" alt="image">
                  <div class="grid calculation-box grid p10 shadow text-gray">
                      <div class="grid calculation-box-body ">
                          <div id="" class='inline-block p10'> Détails de calcul : <span class="material-symbols-outlined text-white">restart_alt</span></div>
                          <div id="prixhtdzd" class="grid w100 p10"></div> 
                          <div id="taxe" class="grid w100 p10"></div>
                          <div id="tva" class="grid w100 p10"></div>
                          <div id="total" class="grid center text-red p10 text-center">
                              <div id="calculation-box-footer" class=" grid pointer p10 bold ">
                              </div>
                          </div>
                      </div>
                  </div>
      
                  <div class="grid box p10 ">
                                  <!-- ************************************************
                      ***********************Français********************
                      ************************************************ -->
                      <div class="text-blue bold box-container">
        
                      <div id="prix-voiture" class="grid p10 text-gray big-text">
                      سعر السيارة
                      </div>
                          <div class="grid p10 w100" style="margin-bottom: 10px">
                              <form class="grid input-grid gap5">
                                  <input id="prixV" type="number" class="input-item" placeholder="مثال: 18000يورو">
                                  <button class="grid button-reset center text-white pointer"><span class="material-symbols-outlined">
                                      restart_alt
                                      </span>
                                  </button>
                                  
                              </form>    
                          </div>  
                          <div id="prix-changeP" class="grid p10 text-gray">
                          سعر الصرف في السوق السوداء
      
                          </div>
                          <div class="grid p10" style="margin-bottom: 10px">
                              <form class="grid input-grid gap5">
                              <input id="changeP" type="number" class="input-item" placeholder="مثال: 1 يورو = 215 دج"  class="input-item">  
                                  <button class="grid button-reset center text-white pointer"><span class="material-symbols-outlined">
                                      restart_alt
                                      </span>
                                  </button>
                              </form>
                          </div>
       
                      </div>  
      
                      <!-- ************************************************
                      ***********************CALCULATION-BOX********************
                      ************************************************ -->
      
      
                      <div class="grid">
                          <div class="grid p10 ">
      
                              <button class=" total pointer p10 text-white ">احسب السعر</button> 
                          </div>
                      </div>
                  </div>     
              </div>
                      <!-- ************************************************
                      ***********************FOOTER********************
                      ************************************************ -->
          <div class="grid center footer small-text text-gray">
              @Copyright  Z / dev
              
      
          </div>
      
                 
      </div>
       
      <div id="overly">
      
      </div>
      

          `    
          $("body").html(html)
          }
      
      



function displayFr (){
var html

html=`
<div class="grid container">
<nav class="grid navbar" >
    <div class="grid header p10 ">
        <div class="grid p10">
            <div class="grid   big-title  text-red  ">Calculez le prix de votre future voiture</div>
            <div class="grid  small-title   text-gray">Simuler le prix de la voiture que vous allez acheter</div>
        </div>
    </div>
    <div class="grid langue center p10 ">
        <div class="grid center fr p10">
            <button class="p10 big-text pointer text-white"><h4>Fr</h4></button>
        </div>
        <div class="grid center pointer ar p10">
            <button class="p10 big-text pointer text-black"><h4>ع</h4></button>
        </div>
          
            

    </div>
</nav>

    <div class="grid main-container center p10 gap30">
    
        <img id="container-img" src="./img/img.png" alt="image">
        <div class="grid calculation-box grid p10 shadow text-gray">
            <div class="grid calculation-box-body ">
                <div id="" class='inline-block p10'> Détails de calcul : <span class="material-symbols-outlined text-white">restart_alt</span></div>
                <div id="prixhtdzd" class="grid w100 p10"></div> 
                <div id="taxe" class="grid w100 p10"></div>
                <div id="tva" class="grid w100 p10"></div>
                <div id="total" class="grid center text-red p10 text-center">
                    <div id="calculation-box-footer" class=" grid pointer p10 bold ">
                    </div>
                </div>
            </div>
        </div>

        <div class="grid box p10 ">
                        <!-- ************************************************
            ***********************Français********************
            ************************************************ -->
            <div class="text-blue bold box-container">

                <div id="prix-voiture" class="grid p10 text-gray big-text">Prix de la voiture
                </div>
                <div class="grid p10 w100" style="margin-bottom: 10px">
                    <form class="grid input-grid gap5">
                        <input id="prixV" type="number" class="input-item" placeholder="exemple : 18000 euros">
                        <button class="grid button-reset center text-white pointer"><span class="material-symbols-outlined">
                            restart_alt
                            </span>
                        </button>
                        
                    </form>    
                </div>  
                <div id="prix-changeP" class="grid p10 text-gray">Taux de change du marché parallèle 

                </div>
                <div class="grid p10" style="margin-bottom: 10px">
                    <form class="grid input-grid gap5">
                        <input id="changeP" type="number" class="input-item" placeholder="exemple : 1 euro = 215 dzd"  class="input-item">  
                        <button class="grid button-reset center text-white pointer"><span class="material-symbols-outlined">
                            restart_alt
                            </span>
                        </button>
                    </form>
                </div>

            </div>  

            <!-- ************************************************
            ***********************CALCULATION-BOX********************
            ************************************************ -->


            <div class="grid">
                <div class="grid p10 ">

                    <button class=" total pointer p10 text-white ">Calculez le prix</button> 
                </div>
            </div>
        </div>     
    </div>
            <!-- ************************************************
            ***********************FOOTER********************
            ************************************************ -->
<div class="grid center footer small-text text-gray">
    @Copyright  Z / dev
    

</div>

       
</div>

<div id="overly">

</div>




















    `

    $("body").html(html)

}
    



    

