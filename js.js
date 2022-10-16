$(document).ready (function (){
    

})

// <!-- ************************************************
// ***********************On click Languages********************
// ************************************************ -->

$(document).on('click', '.arabic', function(){

    displayAr()

})


$(document).on('click', '.français', function(){

    displayFr()

})

// <!-- ************************************************
// ***********************Display calculation box and overly********************
// ************************************************ -->

$(document).on('click', '#overly, #return', function(){
  
    $('.calculation-box').fadeOut()
    $('#overly').fadeOut()
    

})
// <!-- ************************************************
// ***********************On click calculation button********************
// ************************************************ -->

$(document).on('click', '.button', function (){
    $('.calculation-box').css('display','grid')
    $('#overly').fadeIn()
    // $('#total').fadeIn()
    // $('#tva').fadeIn()
    // $('#prixhtdzd').fadeIn()
    // $('#return').fadeIn()


    maFonction()
        
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
            <div id="total" class="grid center text-center text-white p10"><span>Total (Frais de transport en bateau inclus) (500 euros) = </span><span class='bold big-text'> ${total} dzd </span></div>
    `    
    $(".calculation-box-body").html(html)
    }

    function displayAr () {

          var html

          html =`
          

          <nav class="grid navbar p10 vw100" >
          <div class="grid header p10 ">
              <div class="grid p10">
                  <div class="grid   big-title  text-red  ">احسب سعر سيارتك المستقبلية</div>
                  <div class="grid  small-title   text-gray">قم بمحاكاة سعر السيارة التي تنوي شرائها</div>
              </div>
          </div>
          <div class="grid langue center p10 ">
                  <button class="grid center pointer français"><h4>Fr</h4></button>
                  <button class="grid center pointer arabic"><h4>ع</h4></button></i>
                  
  
          </div>
      </nav>
      <div class="grid container vw100">
          <div class="grid main-container p10 gap30">
              <img src="./img/img.png" alt="image">
  
              <div class="grid box p10">
                              <!-- ************************************************
                  ***********************Français********************
                  ************************************************ -->
                  <div class="text-blue bold p10">
    
                      <div id="prix-voiture" class="grid p10 text-gray"أضف سعر السيارة
                      </div>
                      <div class="grid p10">
                          <form>
                              <input id="prixV" type="number" class="input-item" placeholder="مثال: 18000يورو">
                              <input class="input-item reset pointer text-white" type="reset">
                          </form>    
                      </div>  
                      <div id="prix-changeP" class="grid p10 text-gray">ف سعر الصرف في السوق الموازية (مثال: 1 يورو = 215 دج)
  
                      </div>
                      <div class="grid p10">
                          <form>
                              <input id="changeP" type="number" class="input-item" placeholder="(مثال: 1 يورو = 215 دج)"  class="input-item">  
                              <input class="input-item reset pointer text-white" type="reset">
                          </form>
                      </div>
   
                  </div>  
  
                  <!-- ************************************************
                  ***********************CALCULATION-BOX********************
                  ************************************************ -->
                  <div class="calculation-box grid p10  shadow text-gray">
                      <div class="grid calculation-box-body ">
                          <div id="" class='inline-block p10'> تفاصيل الحساب : <span class="material-symbols-outlined text-white">restart_alt</span></div>
                          <div id="prixhtdzd" class="grid w100 p10"></div> 
                          <div id="taxe" class="grid w100 p10"></div>
                          <div id="tva" class="grid w100 p10"></div>
                          <div id="total" class="grid center text-red p10 text-center">
                              <div id="calculation-box-footer" class=" grid pointer p10 bold ">
                              </div>
                          </div>
                      </div>
                      
   
                  </div>
  
                  <div class="grid total p10">
                      <div class="grid p10">
  
                          <button class="button pointer p10 text-white ">احسب السعر</button> 
                      </div>
                  </div>
              </div>     
          </div>
      </div>
              
                  <!-- ************************************************
                  ***********************FOOTER********************
                  ************************************************ -->

                  <div class="grid  p10 footer vw100">
                  <div class="grid  p10 text-gray"> شارك هذا الموقع
                  </div>
                  <div class="grid  p10 footer-links center gap20">
                      <i class="fa-brands fa-facebook text-black pointer very-big-text"></i>
                      <i class="fa-brands fa-square-instagram text-black pointer very-big-text"></i>
                  </div>
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
   
<nav class="grid navbar p10 vw100" >
<div class="grid header p10 ">
    <div class="grid p10">
        <div class="grid   big-title  text-red  ">Calculez le prix de votre future voiture</div>
        <div class="grid  small-title   text-gray">Simuler le prix de la voiture que vous allez acheter</div>
    </div>
</div>
<div class="grid langue center p10 ">
        <button class="grid center pointer français"><h4>Fr</h4></button>
        <button class="grid center pointer arabic"><h4>ع</h4></button></i>
        

</div>
</nav>
<div class="grid container vw100">
<div class="grid main-container p10 gap30">
    <img src="./img/img.png" alt="image">

    <div class="grid box p10">
                    <!-- ************************************************
        ***********************Français********************
        ************************************************ -->
        <div class="text-blue bold p10">

            <div id="prix-voiture" class="grid p10 text-gray">Ajouter le prix de la voiture
            </div>
            <div class="grid p10">
                <form>
                    <input id="prixV" type="number" class="input-item" placeholder="exemple : 18000 euros">
                    <input class="input-item reset pointer text-white" type="reset">
                </form>    
            </div>  
            <div id="prix-changeP" class="grid p10 text-gray">Ajouter le prix de change du marché parallèle (exemple : 1 euro = 215 dzd)

            </div>
            <div class="grid p10">
                <form>
                    <input id="changeP" type="number" class="input-item" placeholder="exemple : 215 dzd"  class="input-item">  
                    <input class="input-item reset pointer text-white" type="reset">
                </form>
            </div>

        </div>  

        <!-- ************************************************
        ***********************CALCULATION-BOX********************
        ************************************************ -->
        <div class="calculation-box grid p10  shadow text-gray">
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

        <div class="grid total p10">
            <div class="grid p10">

                <button class="button pointer p10 text-white ">Calculez le prix</button> 
            </div>
        </div>
    </div>     
</div>
</div>
    
        <!-- ************************************************
        ***********************FOOTER********************
        ************************************************ -->
<div class="grid  p10 footer vw100">
<div class="grid  p10 text-gray"> Share this website
</div>
<div class="grid  p10 footer-links center gap20">
    <i class="fa-brands fa-facebook text-black pointer very-big-text"></i>
    <i class="fa-brands fa-square-instagram text-black pointer very-big-text"></i>
</div>
</div>



<div id="overly">

</div>

</div>

    `

    $("body").html(html)

}
    



    

