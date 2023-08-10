
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

document.getElementById("navbar").innerHTML=mainNavbar();

var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
document.querySelector("#span_signIn").innerHTML="Hi!" +" "+store;
 
var box= document.getElementById("blackBox");
let display= ()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    box.append(number);
}
let displayDetails= ()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;

    box.append(name,number,company,email);
}

let displayProducts=()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;
    let products= document.createElement("p");
    products.innerText= "Products/services: " +document.getElementById("prod").value;

    let price= document.createElement("p");
    price.innerText= "Price: " +document.getElementById("price").value;
    box.append(name,number,company,email,products,price);
}

let displayAddress=()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;
    let products= document.createElement("p");
    products.innerText= "Products/services: " +document.getElementById("prod").value;
   
    let pincode= document.createElement("p");
    pincode.innerText= "PINCode: " +document.getElementById("pincode").value;
    
    let city= document.createElement("p");
    city.innerText= "City: " +document.getElementById("city").value;
    
    let state= document.createElement("p");
    state.innerText= "State: " +document.getElementById("state").value;
    
    let address= document.createElement("p");
    address.innerText= "Address: " + document.getElementById("locality").value+", " + document.getElementById("address").value ;

    let message= document.createElement("h4");
    message.innerHTML= "Yay! Your products got listed on the Indiamart."
    message.style.color="green";
    box.append(name,number,company,email,products,pincode,city,state,address,message);
}




display();

    let postData= async()=>{
        let body= {
            Name: document.getElementById("name").value,
            Company: document.getElementById("company").value,
            Email:document.getElementById("email").value,
          
            Image: document.getElementById("image").value,
            Product:document.getElementById("prod").value,
            Price:document.getElementById("price").value,
            sell_address: document.getElementById("address").value,
            PinCode: document.getElementById("pincode").value,
            City: document.getElementById("city").value,
            State: document.getElementById("state").value,
            PhoneNo: JSON.parse(localStorage.getItem("mobile")),
            HouseNo:document.getElementById("address").value,
            Locality:document.getElementById("locality").value
      }

        let response = await fetch(`https://long-red-ant-coat.cyclic.app/seller`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        
    }
    document.getElementById("submit1").addEventListener("click",()=>{
        document.getElementById("products").style.display="flex";
         displayDetails();
    });
    
       document.getElementById("submit2").addEventListener("click",()=>{
        document.getElementById("addressBox").style.display="flex";
        displayProducts();
       });
    document.getElementById("submit3").addEventListener("click",()=>{
        postData();
        displayAddress();
    });

