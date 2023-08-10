




let fetchData = async (url) => {

        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    
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
 
document.querySelector("#footer").innerHTML=footer();
document.getElementById('navbar').innerHTML = mainNavbar();

var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
document.querySelector("#span_signIn").innerHTML="Hi!" +" "+store;

document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetchda();
})


let fetchda = async () => {
     
    let query = document.getElementById('i-searchbar').value;

   
    let url = `https://long-red-ant-coat.cyclic.app/data?q=${query}`

    let data = await fetchData(url);

    displayData(data.data);
}


let displayData = (data) => {

      let container = document.getElementById('products');
      container.innerHTML = "";
    data.map( (elem)=> {
        
        // container.innerHTML = "";
        let div = document.createElement('div');
            div.setAttribute("class","product-div")
        
        let Image = document.createElement('img');
            Image.src = elem.image;
            Image.setAttribute("id","prod-image")

        let Name = document.createElement('p');
            Name.textContent = elem.name;
            Name.style.color = "blue"
            Name.style.cursor = "pointer"
            Name.addEventListener('click',()=> {
                 saveStorage("ID", elem.id)
                window.location.href ="product-details.html"
            })
            // Name.href = name;
        let Price = document.createElement('h2');
            Price.textContent = elem.price;

            let Seller_type = document.createElement('p');
            Seller_type.textContent = elem.Seller_type;

        let Seller = document.createElement('p');
            Seller.textContent = elem.seller_name;

        let City = document.createElement('p');
            City.textContent = elem.city;
            City.style.color = "rgb(141,119,119)"

        let mob = document.createElement('h3');
             mob.textContent = ` Call / ${elem.phone_num}`;

        let btn = document.createElement('button');
            btn.textContent = "Contact Supplier"
            btn.setAttribute( "id","prod-btn")
            btn.addEventListener('click',async()=> {
                saveStorage("ID", elem.id)
                window.location.href = "product-details.html"
            })
        div.append(Image,Name,Price,Seller,City,mob,Seller_type,btn);
        container.append(div);
    })
}
// fetch();


document.getElementById('i-searchbar').oninput = () => {
    debounce(fetchda,1000); 
}

let timer;
let debounce = (func,delay) => {
    timer ? clearTimeout(timer) : null;

    timer = setTimeout(() => {
        func();
    },delay)
}


let saveStorage = (key,value) => {
 localStorage.setItem(key,JSON.stringify(value));
}

document.getElementById('nearme-btn').addEventListener('click',()=> {

    fetchCity();
})

let fetchCity = async ()=> {

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Pune`

    let data = await fetchData(url);
    displayData(data.data);
}



document.getElementById('pune').addEventListener('click',()=> {

    fetchCityPune();
})


let fetchCityPune = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?city=Pune&q=${query}`

    let data = await fetchData(url);

    displayData(data.data);
}


document.getElementById('indore').addEventListener('click',()=> {

    fetchCityindore();
})


let fetchCityindore = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Indore&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('delhi').addEventListener('click',()=> {

    fetchCitydelhi();
})


let fetchCitydelhi = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Delhi&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('agra').addEventListener('click',()=> {

    fetchCityagra();
})


let fetchCityagra = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Agra&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('rajkot').addEventListener('click',()=> {

    fetchCityRajkot();
})


let fetchCityRajkot = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Rajkot&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('bathinda').addEventListener('click',()=> {

    fetchCityBathinda();
})


let fetchCityBathinda = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Bathinda&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}


document.getElementById('madurai').addEventListener('click',()=> {

    fetchCityMadurai();
})


let fetchCityMadurai = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Madurai&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}


document.getElementById('banglore').addEventListener('click',()=> {

    fetchCityBanglore();
})


let fetchCityBanglore = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Banglore&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}




document.getElementById('chennai').addEventListener('click',()=> {

    fetchCityChennai();
})


let fetchCityChennai = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Chennai&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('hyderabad').addEventListener('click',()=> {

    fetchCityHyderabad();
})


let fetchCityHyderabad = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `https://long-red-ant-coat.cyclic.app/data?city=Hyderabad&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("manufacturer").addEventListener('click',()=> {
  
   fetchManufacturer();
})


let fetchManufacturer = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?Seller_type=Manufacturer&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("wholeSeller").addEventListener('click',()=> {
   
   fetchWholeSeller();
})


                        // <p id="exporter">Exporter</p>
                        // <p id="retailer">Retailer</p>

let fetchWholeSeller = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?Seller_type=Wholeseller&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("exporter").addEventListener('click',()=> {
  
   fetchExporter();
})


let fetchExporter = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?Seller_type=Exporter&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("retailer").addEventListener('click',()=> {
   
   fetchRetailer();
})


let fetchRetailer = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?Seller_type=Retailer&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}
document.getElementById("black_rice").addEventListener('click',()=> {
   
   fetchBlack_rice();
})


let fetchBlack_rice = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `https://long-red-ant-coat.cyclic.app/data?Color=Black&cat=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}
document.getElementById("golden_rice").addEventListener('click',()=> {
   
    fetchGolden_rice();
 })
 
 
 let fetchGolden_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `https://long-red-ant-coat.cyclic.app/data?Color=Golden&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }
 document.getElementById("brown_rice").addEventListener('click',()=> {
   
    fetchBrown_rice();
 })
 
 
 let fetchBrown_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `https://long-red-ant-coat.cyclic.app/data?Color=Brown&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }
 document.getElementById("white_rice").addEventListener('click',()=> {
   
    fetchWhite_rice();
 })
 
 
 let fetchWhite_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `https://long-red-ant-coat.cyclic.app/data?Color=White&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }

document.getElementById('body').onload('click',()=> {

    fetchDataRandom();
})


let fetchDataRandom = async ()=> {

    let url = `https://long-red-ant-coat.cyclic.app/data/`

    let data = await fetchData(url);
   console.log(data);
   displayData(data.data);
}
















