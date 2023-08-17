

function footer(){
  return `<div id="footer">
  <div id="upper">
   <div> 
     <p>we are happy to help 
       you!</p>
   </div>
     
   <div id="gomobile">
         <div>
           Go Mbbile : <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-android"></i><i class="fa-solid fa-mobile-screen-button"></i>
         </div>
         <div>
           follow us on : <span id="face"><i class="fa-brands fa-facebook"></i></span>
           <span id="twit"><i class="fa-brands fa-square-twitter"></i></span> 
           <span id="link"><i class="fa-brands fa-linkedin"></i></span>
         </div>
    </div>
 </div>
 
  <div id="middle">
   <div>

     <ul  style="list-style-type:none">
      <li>
       <a href="https://corporate.indiamart.com/about-us/">About Us</a> <br>
       <a href="https://corporate.indiamart.com/partner-with-us/">Join Sales</a><br>
       <a href="https://corporate.indiamart.com/category/success-stories/">Success Stories</a><br>
       <a href="https://corporate.indiamart.com/category/indiamart-in-news/press-releases/">Press Section</a><br>
       <a href="https://corporate.indiamart.com/advertise-with-indiamart/">Advertise with Us</a><br>
       <a href="https://investor.indiamart.com/index.htm">Investor Section</a>
      </li>

   </ul >
   </div>
   <div>
     <ul  style="list-style-type:none">
       <li>
         <a href="https://help.indiamart.com/">Help</a> <br>
         <a href="https://help.indiamart.com/user-feedback/">Feedback</a> <br>
         <a href="https://help.indiamart.com/complaint-registration/">Complaints</a> <br>
         <a href="https://corporate.indiamart.com/customer-care-services/">Customer Care</a> <br>
         <a href="https://corporate.indiamart.com/careers-at-im/">Jobs & Careers</a> <br>
         <a href="https://corporate.indiamart.com/branch-offices/">Contact Us</a>
       </li>
     </ul>
     
   </div>
  
   <div id="supplies">
     
     <ul  style="list-style-type:none">
       <p>Suppliers Tool Kit<p>
       <li >
         <a href="https://seller.indiamart.com/">Sell on IndiaMART</a> <br>
         <a href="https://seller.indiamart.com/#succ_url=aHR0cHM6Ly9zZWxsZXIuaW5kaWFtYXJ0LmNvbS9ibHR4bi8/cHJlZj1yZWNlbnQ=">Latest BuyLeadFeedback</a> <br>
         <a href="https://corporate.indiamart.com/quick-learn/">Learning Centre</a> <br>
         <a href="https://shipwith.indiamart.com/book/part-load">Ship With IndiaMART</a> <br>
       </li>
     </ul>
     
   
   </div>
  
   <div>
    
     <ul  style="list-style-type:none">
       <p>Buyers Tool Kit</p>
       <li>
         <a href="https://my.indiamart.com/buyertools/postbl?modid=MY">Post Your Requirement</a> <br>
         <a href="https://my.indiamart.com/buyertools/myproductbuy/?modid=MY">Products You Buy</a> <br>
         <a href="https://www.indiamart.com/search.html">Search Products & Suppliers</a> <br>
         <a href="https://my.indiamart.com/buyertools/payments/?bannerid=cntrlfooter"> Pay With IndiaMART</a> <br>
       </li>
     </ul>
   </div>
  
   <div>
     
       <ul  style="list-style-type:none">
         <p>Accounting Solutions</p>
         <li>
           <a href="https://busy.in/">Accounting Software</a> <br>
           <a href="https://www.livekeeping.com/">Tally on Mobile</a> <br>
           <a href="https://busy.in/e-invoice-software">GST e-Invoice</a> <br>
          
         </li>
       </ul>
       
   </div>
  </div>
  <hr>
  <div id="lower">
         <span>Copyright © 1996-2022 IndiaMART InterMESH Ltd. All rights reserved.</span>
         <span>Terms of Use - Privacy Policy - Link to Us</span>
  </div>
</div>`
}


document.querySelector("#footer").innerHTML = footer();

document.querySelector('#sell').addEventListener('click',()=>{
  console.log('shivam')
  !store ? window.location="./html/sellerPage.html" : window.location="./html/seller_account.html"
      
})
let show= () =>{
    

  var elec=document.querySelector("#ele_show");
   elec.setAttribute("style","display:none");

   var pharma=document.querySelector("#pharma_show");
   pharma.setAttribute("style","display:none");

   var ind_M=document.querySelector("#ind_M_show");
   ind_M.setAttribute("style","display:none");

   var ind_s=document.querySelector("#ind_S_show");
   ind_s.setAttribute("style","display:none");

   var food=document.querySelector("#food_show");
   food.setAttribute("style","display:none");

   var build=document.querySelector("#build_show");
   build.setAttribute("style","display:none");
  
   var pura=document.querySelector("#pura");
   pura.setAttribute("style","background-color:rgb(241, 239, 239);")
}

let structureBox = (modalId, modalLabelId, modalTitle, inputType, inputID, placeholder, submitBtnID, nextModalID, btnName) => {
  let modal;
  modal = `<div id="${modalId}" tabindex="-1">
            <h2 class="modal-title" id="${modalLabelId}">${modalTitle}</h2>
            </div>
              <div id="input">
              ${inputType === 'phoneNumber' ? '<div class="col-2"><button id="cCode">+91</button></div>' : ''}
                
                  <input type="mobile"  minlength="10" id="${inputID}" placeholder="${placeholder}" required>
              
            </div>
            <div class="d-flex my-3">
              <button data-bs-dismiss="modal" data-bs-target="#${nextModalID ? nextModalID : modalId}" data-bs-toggle="modal" id="${submitBtnID}">${btnName}</button>
            </div>
    </div>`;
  return modal;
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
 console.log(store)
 
 document.querySelector('#i-bestprice').addEventListener('click',()=>{
    store ? window.location.href = './html/product.html' : alert('SigIn First');
 })
 if(store!=undefined){
    var hid=document.querySelector("#user");
    hid.setAttribute("style","display:block");
    
    hid.setAttribute("style","display:flex");

    var le=document.querySelector("#user_show");
    le.innerHTML=store;

    le.setAttribute("style","display:block");
    console.log(store);
    document.querySelector("#span_signIn").innerHTML="Hi!" +" "+store;
    document.querySelector("body").setAttribute("style","background:none")
    
 }else{
    var hide=document.querySelector("#signIn_hide");
    hide.setAttribute("style","display:block");

    document.querySelector("#logout").setAttribute("style","display:none");
   
 }
  var logout=document.querySelector("#logout");
  logout.addEventListener("click",log);

  function log(){
   localStorage.clear();
   window.location.href="index.html"
  }

document.querySelector("#login_image").addEventListener("mouseover",show_ele);

document.querySelector("#signIn").addEventListener("mouseover",show_ele);
function show_ele(){
    var ele=document.querySelector("#signIn");
    ele.setAttribute("style","display:block");
}

document.querySelector("#signIn").addEventListener("mouseout",hide_e);
document.querySelector("#backin").addEventListener("mouseout",hide_e);
function hide_e(){
    var ele=document.querySelector("#signIn");
    ele.setAttribute("style","display:none");
}




let generateOTP = (otpVerify) => {
    if (otpVerify.length > 0) {
      otpVerify = '';
    }
    for (let i = 0; i < 4; i++) {
      let num = Math.round(Math.random() * 10);
      if (num === 10) {
        num--;
      }
      otpVerify += num;
    }
    return otpVerify;
  }
  // console.log(createModal);
  let loginModalSection = document.getElementById('loginModalSection');
  loginModalSection.innerHTML = structureBox('loginModal', 'loginModalLabel', 'Sign In', 'phoneNumber', 'mobileInput', 'Enter Your Mobile Number', 'loginToOTPBtn', 'otpModal','Verify OTP <i class="fa-solid fa-arrow-right"></i>');
  let loginToOTPBtn = document.getElementById('loginToOTPBtn');
  let contact;
  let otpVerify = ''
  loginToOTPBtn.addEventListener('click', () => {
    // console.log('Hi');
    contact = document.getElementById('mobileInput').value;
    // console.log(contact);
    otpVerify = generateOTP(otpVerify);
    console.log('otpVerify:', otpVerify);
    alert("otp:"+otpVerify);
    let otpModalSection = document.getElementById('otpModalSection');
    otpModalSection.style.display="block";

    let otpModalSectio = document.getElementById('loginModalSection');
    otpModalSectio.style.display="none";
  
  otpModalSection.innerHTML = structureBox('otpModal', 'otpModalLabel', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInput', 'X-X-X-X', 'otpModalButton', '','Verify OTP');
  let otpModalButton = document.getElementById('otpModalButton');
  otpModalButton.addEventListener('click', () => {
    let otp = document.getElementById('otpInput').value;
    // console.log(otp);
    if (otp === otpVerify) {
     alert("OTP verified successfully");

     localStorage.setItem("mobile",JSON.stringify(contact));
     window.location.href="index.html";
    
    }
    else {
      alert('Invalid OTP');
      document.querySelector("body").setAttribute("style","background:none")
    }
    otpModalSection.style.display="none";
  });
  });




 

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// build and construction
document.querySelector("#build_img").addEventListener("mouseover",display_build);
document.querySelector("#build_P").addEventListener("mouseover",display_build);
document.querySelector("#build_show").addEventListener("mouseover",display_build);
function display_build(){
    show();
   
    var bui=document.querySelector("#build_show");
    bui.setAttribute("style","display:block");

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:rgb(241, 239, 239);");

   
}


document.querySelector("#pura").addEventListener("mouseout",hide_build);
document.querySelector("#back").addEventListener("mouseover",hide_build);
document.querySelector("#ele_img").addEventListener("mouseover",hide_build);
function hide_build(){
    var bui=document.querySelector("#build_show");
    bui.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:none;");
}



// electronics and electrical
document.querySelector("#ele_img").addEventListener("mouseover",display_ele);
document.querySelector("#ele_P").addEventListener("mouseover",display_ele);
 document.querySelector("#ele_show").addEventListener("mouseover",display_ele);

function display_ele(){

    show();
    
    var ele=document.querySelector("#ele_show");
    ele.setAttribute("style","display:block");

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_ele);
document.querySelector("#back").addEventListener("mouseover",hide_ele);
document.querySelector("#pharma_img").addEventListener("mouseover",hide_ele);
document.querySelector("#build_class").addEventListener("mouseover",hide_el);
function hide_el(){
    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:none;");
}

function hide_ele(){
    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:none;");
}


// pharma and medical

document.querySelector("#pharma_img").addEventListener("mouseover",display_pharma);
document.querySelector("#pharma_P").addEventListener("mouseover",display_pharma);
document.querySelector("#pharma_show").addEventListener("mouseover",display_pharma);

function display_pharma(){
    show();

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:block");

    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:rgb(241, 239, 239);");

  }


document.querySelector("#pura").addEventListener("mouseout",hide_pharma);
document.querySelector("#back").addEventListener("mouseover",hide_pharma);
document.querySelector("#ele_class").addEventListener("mouseover",hide_pharm);
document.querySelector("#ind_M_img").addEventListener("mouseover",hide_pharm);
function hide_pharm(){
    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:none;");
}

function hide_pharma(){
    var pharma=document.querySelector("#pharma_show");
      pharma.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:none;");
}


// industries machineries

document.querySelector("#ind_M_img").addEventListener("mouseover",display_ind_M);
document.querySelector("#ind_M_P").addEventListener("mouseover",display_ind_M);
document.querySelector("#ind_M_show").addEventListener("mouseover",display_ind_M);
function display_ind_M(){
    
    show();

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:block");

    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_ind_m);
document.querySelector("#back").addEventListener("mouseover",hide_ind_m);
document.querySelector("#ind_S_img").addEventListener("mouseover",hide_ind_m);
document.querySelector("#pharma_class").addEventListener("mouseover",hid_ind_m);

function hid_ind_m(){
   
    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:none;");
}

function hide_ind_m(){
    var ind_m=document.querySelector("#ind_M_show");
      ind_m.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:none;");
}

// industries & supplies


document.querySelector("#ind_S_P").addEventListener("mouseover",display_ind_s);
document.querySelector("#ind_S_img").addEventListener("mouseover",display_ind_s);
document.querySelector("#ind_S_show").addEventListener("mouseover",display_ind_s);
function display_ind_s(){

    show();

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:block");

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}

document.querySelector("#pura").addEventListener("mouseout",hide_ind_s);
document.querySelector("#back").addEventListener("mouseover",hide_ind_s);
document.querySelector("#food_img").addEventListener("mouseover",hide_ind_s);
document.querySelector("#indus_M_class").addEventListener("mouseover",hid_ind_s);

function hid_ind_s(){
   

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:none;");
}

function hide_ind_s(){
    var ind_s=document.querySelector("#ind_S_show");
      ind_s.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:none;");
}

 // food


document.querySelector("#food_img").addEventListener("mouseover",display_food);
document.querySelector("#food_P").addEventListener("mouseover",display_food);
document.querySelector("#food_show").addEventListener("mouseover",display_food);
function display_food(){

    show();

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:block");
     
    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_food);
document.querySelector("#back").addEventListener("mouseover",hide_food);

document.querySelector("#indus_S_class").addEventListener("mouseover",hid_food);
function hid_food(){
  
    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:none;");
}

function hide_food(){
    var food=document.querySelector("#food_show");
      food.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:none;");
}

// sliding image

var image=document.getElementById("img");
var Arr=["https://hm.imimg.com/imhome_gifs/indiamart-aur-kya-bnr.jpg","https://hm.imimg.com/imhome_gifs/home-banner-4.jpg"];
var ind=0;
var interval=3000;

setInterval(() => {
    document.querySelector("#slideshow").innerHTML=""
    image.src=Arr[ind];
   
    ind++;
    if(ind>=Arr.length)
    {
        ind=0;
    }    
    var images=document.createElement("img");
    images.setAttribute("class","slideimg");
    images.setAttribute("src",image.src);
    document.querySelector("#slideshow").append(images);
}, interval);


//  sign in 

document.querySelector("#signIn_btn").addEventListener("click",call);
function call(){
    var number= document.querySelector("#loginModalSection");
    number.setAttribute("style","display:block")

    var signIn=document.querySelector("#signIn");
    signIn.setAttribute("style","display:none");

    var stati = document.querySelector("body");
    stati.setAttribute("style","background:rgba(0, 0, 0, 0.352)");
   
}

