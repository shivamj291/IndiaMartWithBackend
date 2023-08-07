


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
document.getElementById('navbar').innerHTML = mainNavbar();

let id = JSON.parse(localStorage.getItem("ID")) || [];

 console.log(id);

 var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
 document.querySelector("#span_signIn").innerHTML="Hi!" +""+store;
 
 document.getElementById('i-searchbtn').addEventListener('click',() => {
     fetch();
 })
 
let fetch = async () => {
    
    let url = `https://long-red-ant-coat.cyclic.app/data?id=${id}`
    let data = await fetchData(url);
      console.log(data.data[0]);
    displayImage(data.data[0]);
    displayPrice(data.data[0]);
    displaySeller(data.data[0]);
    displayModal(data.data[0]);
}
fetch();

let displayImage = (data) => {

    let container = document.getElementById('sele-prod');

   

        let div = document.createElement('div');
            div.setAttribute("id","sel-div")

        let Image = document.createElement('img');
            Image.src = data.image;
            Image.setAttribute("id","sel-image")


            div.append(Image);
            container.append(div);
   
}


let displayPrice = (data) => {

    let container = document.getElementById('sele-price');

    let div = document.createElement('div');
        div.setAttribute("id","sel-div")

    let Name = document.createElement('h3');
        Name.textContent = data.name;
        Name.style.fontFamily = "Arial"

    let  Price = document.createElement('h3');
         Price.textContent = data.price;

    let Size = document.createElement('p')
        Size.textContent ="Packaging-Size : 5 kg or 25 kg"


       
    let color = document.createElement('p')
        color.textContent = "color  : Golden"


    let Self_life = document.createElement('p');
        Self_life.textContent = `shell-Life : ${data.self_life}`


    let Type = document.createElement('p')
        Type.textContent = "Packaging Type : P P Bags"



    let pride = document.createElement('p')
        pride.textContent = "We, Vision Agro Foods are the leading manufacturer and exporter of this product."
   
        
     
    let btn = document.createElement('button');
        btn.textContent = "Get Latest Price"
        btn.setAttribute("id","get-btn");
        btn.setAttribute("class","btn btn-primary");
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal");

    div.append(Name,Price,Size,color,Self_life,Type,pride,btn);
    container.append(div);

}


let displaySeller = (data) => {

    let container = document.getElementById('sele-seller');

    let div = document.createElement('div');
        div.setAttribute("id","sel-div")

    let Seller = document.createElement('h5');
         Seller.textContent =  data.seller_name;
         Seller.style.fontFamily = "arial";
         Seller.style.textDecoration = "underline";
         Seller.style.cursor ="Pointer"
 
    let  City = document.createElement('p');
         City.textContent = data.city + "," + data.state;

    let  GST = document.createElement('p');
         GST.textContent = "GST - 24AAOFV2019C1ZG";     

    let Call = document.createElement('p');
        Call.textContent = `Call / ${data.phone_num}`
        // Call.style.color = "black"
        Call.style.fontSize = "18px";
        Call.style.fontWeight = "700";

    let  type1 = document.createElement('p');
         type1.textContent = "Leading Supplier";     

    let  type2 = document.createElement('p');
         type2.textContent = "Manufacturer";     

    let  type3 = document.createElement('p');
         type3.textContent = "TrustSeal Verified";     

    
    let btn = document.createElement('button');
        btn.textContent = 'Contact Supplier'
        btn.setAttribute("id","suppy-btn")
        btn.setAttribute("class","btn btn-primary");
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal");
 
    div.append(Seller,City,GST,Call,type1,type2,type3,btn);
    container.append(div);


}



let displayModal = (data) => {

    let container = document.querySelector("#modal-left");

    let div = document.createElement('div');
        div.setAttribute("id","modal-div")

    let m_image = document.createElement('img');
        m_image.src = data.image;

    let m_name = document.createElement('h5');
        m_name.textContent = data.name;
    
    let m_price = document.createElement('h5');
        m_price.textContent = data.price;

    let m_seller = document.createElement('p');
        m_seller.textContent = data.seller_name;

    let m_city = document.createElement('p');
        m_city.textContent = data.city +","+data.state;
       

    let m_package = document.createElement('p');
        m_package.textContent = "Packaging Size : 5 kg to 25 kg"

    let m_color = document.createElement('p');
        m_color.textContent = data.variety;


    let m_type = document.createElement('p');
        m_type.textContent = "Packaging Type : PP Bags"

    // let m_life = document.createElement('p');
    //     m_life = 'shell-life' ; + data.self_life;

    
    div.append(m_image,m_name,m_price,m_seller,m_city,m_package,m_color,m_type);
    container.append(div);

}


let next_btn =document.querySelector("#next-btn");

next_btn.addEventListener('click',()=> {
    window.location.href = "thankyou.html";
})


document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetchApi();
})


let fetchApi= async () => {
     
    let query = document.getElementById('i-searchbar').value;

    // let url = `http://localhost:3000/Users/?q=${query}`
    let url = `https://long-red-ant-coat.cyclic.app/data?q=${query}`

    let data = await fetchData(url);
    console.log((data));
}


document.getElementById('i-searchbar').oninput = () => {
    debounce(fetchApi,1000); 
}

let timer;
let debounce = (func,delay) => {
    timer ? clearTimeout(timer) : null;

    timer = setTimeout(() => {
        func();
    },delay)
}