
function mainNavbar() {

  return `<div id="navbar">
  <div id="logo-div">
       <div>
          <a href="../index.html"><img id="i-logo" src="../logos/indiamart.png" alt="logo" style="height:40px;"></a> 
       </div>
       <div>
           <a href="../index.html"><h2 id="i-name">indiamart</h2></a>
       </div>
       <div>
           <select name="All India" id="i-location">
               <option value="Pune">Pune</option>
               <option value="Mumbai">Mumbai</option>
             </select>
       </div>

       <div>
           <input type="text" id="i-searchbar" placeholder="Enter Product / Service to Search">
       </div>

        <div> <button id="i-searchbtn">Search</button></div>


        <div> <button id="i-bestprice"> Get Best Price </button></div>

        <div id="icons">
         <!-- <div>
                <img style="width:24px; margin-bottom: 16x;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAfAB4DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUGAAP/xAAqEAABBAECAwcFAAAAAAAAAAABAgMEBQAREiFBgQYTIjFCYXEUMlFS0f/EABcBAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAbEQADAAMBAQAAAAAAAAAAAAAAAQIDESESQf/aAAwDAQACEQMRAD8AgsZ19BZWDHfxmAWtdApbiUAn23Ea9ML7PUJmsPWc1LgrY3FwoHFenpH9xhV2UW3t1if3bUdpoiJGU4UNg6jQE/GudFeR98/COiesamdWbfrY6mwr7VeYPUcMCy1uBGco7lEN1TsZiQ2tslW4JJIBCT+OJyKxx26XQZY9lbRT8NivZeSxOjFRjbz4HgoklCvnUjrnCVSsWNsVRm1wWEp3TA6NEsHnoeevLJZKilQUkkEcQRyxjOvrSfFTGlS1LaHpCUp3fJA1PXMvG1W5HYRfW7T7SK6sQWq1k+EHzdP7K98S5s2VmVK0gP/Z" alt=""> <br>
              <span>shopping</span>
         </div> -->
        <div>
           <img src="https://img.icons8.com/ios-glyphs/30/ffffff/small-business--v1.png"/> <br>
           <span>Sell</span>
       </div>

       <div>
           <img  src="https://img.icons8.com/material-outlined/24/ffffff/help.png" /> <br>
           <span>Help</span>
       </div>

       <div>
           <img  src="https://img.icons8.com/material-outlined/24/ffffff/create-new-child-post.png"/>
         <br>  <span>Messages</span>
       </div>

       <div>
           <img  src="https://img.icons8.com/windows/32/ffffff/user.png" /> <br>
           <span id="span_signIn">Sign in</span>
       </div>
     </div>
   </div>  

</div>`
}

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


document.getElementById("navbar").innerHTML=mainNavbar();
document.getElementById("footer").innerHTML=footer();
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
var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
document.querySelector("#span_signIn").innerHTML="Hi!" +" "+store;
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

let loginModalSection = document.getElementById('loginModalSection');
loginModalSection.innerHTML = structureBox('loginModal', 'loginModalLabel', 'Free Registration/Sign In', 'phoneNumber', 'mobileInput', 'Enter Your Mobile Number', 'loginToOTPBtn', 'otpModal','Start Selling <i class="fa-solid fa-arrow-right"></i>');
let loginToOTPBtn = document.getElementById('loginToOTPBtn');
let contact;
let otpVerify = ''
loginToOTPBtn.addEventListener('click', () => {

  otpVerify = generateOTP(otpVerify);
  console.log('otpVerify:', otpVerify);
  alert("otp:"+otpVerify);
  let otpModalSection = document.getElementById('otpModalSection');
  otpModalSection.style.display="block";
  //  document.querySelector("body").style.backgroundColor="rgba(0,0,0,0.4)";

otpModalSection.innerHTML = structureBox('otpModal', 'otpModalLabel', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInput', 'X-X-X-X', 'otpModalButton', '','Verify OTP');
let otpModalButton = document.getElementById('otpModalButton');
otpModalButton.addEventListener('click', () => {
  let otp = document.getElementById('otpInput').value;
  // console.log(otp);
  if (otp === otpVerify) {
   alert("OTP verified successfully");
   contact = document.getElementById('mobileInput').value;
   console.log(contact);
   localStorage.setItem("mobile",JSON.stringify(contact));
   window.location.href="seller_account.html";

  }
  else {
    alert('Invalid OTP');
  }
  otpModalSection.style.display="none";
});
});

