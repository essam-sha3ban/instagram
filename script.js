//----sidebar variable-----
let menuItems = document.querySelectorAll(".menu-item")
let notificationsIcon = document.querySelector(".notifications-icon")
let popupNotifications = document.querySelector(".notifications-popup")

//----messages variable-----
let messagesNotIcon = document.querySelector("#messages-noti")
let messageCount = document.querySelector("#messages-noti .noti-count")

let messagesBox = document.querySelector(".messages")
let allMessage = document.querySelectorAll(".message-chat")
let inputSearchMes = document.querySelector("#message-search")

//--------theme----------
let themeIcon = document.querySelector("#theme-icon")
let customizeTheme = document.querySelector(".customize-theme")

let fontSize = document.querySelectorAll(".choose-size span")
let root = document.querySelector(':root')

let colorModel = document.querySelectorAll(".choose-color span")

let backGd1 = document.querySelector(".bg-1")
let backGd2 = document.querySelector(".bg-2")
let backGd3 = document.querySelector(".bg-3")

//----------sidebar-----------------
function ChangeActiveItem(){
    menuItems.forEach(item=>{
        item.classList.remove("active")
        
    })
}

menuItems.forEach(item=>{
    item.addEventListener("click",()=>{  
    ChangeActiveItem()     
    item.classList.add("active") 

    //show sidebar item
  if(item.id !="notifications"){
        popupNotifications.style.display="none"
    }
    else{
       popupNotifications.style.display="block"
       document.querySelector(".noti-count").style.display="none"
    }
    })
})


//---show sidebar item----------
/*notificationsIcon.addEventListener("click",function(){
    popupNotifications.classList.toggle("active");
    document.querySelector(".noti-count").classList.toggle("active")
    
})*/
//=========---------end sidebar----------=======

//=========---------start messages----------=======
messagesNotIcon.addEventListener("click",function(){
    messageCount.style.display="none";
    messagesBox.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(function(){
        messagesBox.style.boxShadow = 'none'
    },2000)
    document.querySelector(".right").classList.toggle("active")
    
})
//=========---------end messages----------=======
//=========---------start search bar----------=======
let iconSearchBar = document.querySelector(".search-nav")
let SearchBar = document.querySelector(".search-bar input")
iconSearchBar.addEventListener("click",()=>{
    SearchBar.classList.toggle("active")
})
//=========---------end search bar----------=======

//=========---------start search message----------=======
const searchMessage = () =>{
    const val = inputSearchMes.value.toLowerCase();
    console.log(val)

    allMessage.forEach(chat => {
        let user = chat.querySelector('h6').innerHTML.toLowerCase();
        if(user.indexOf(val) != -1){
            chat.style.display = "flex"
        }
        else{
            chat.style.display = "none"
        }
        

    })   
}

inputSearchMes.addEventListener("keyup",searchMessage)
//=========---------end search messages----------=======

//=========---------start customize theme----------=======
let openTheme = function(){
    customizeTheme.style.display ="grid"
}
themeIcon.addEventListener("click", openTheme)

let closeTheme= function(e) {
    if(e.target.classList.contains("customize-theme")){
    customizeTheme.style.display="none"
    }
}
customizeTheme.addEventListener("click", closeTheme)

//-------change font size----

//remove active class from span
let removeSizeSelect= ()=>{
    fontSize.forEach(size=>{  
    size.classList.remove("active")
    })
}

fontSize.forEach(size =>{
    size.addEventListener("click", function(){
        removeSizeSelect();
        let fontSize;
        size.classList.toggle("active")
    if(size.classList.contains("font-size-1")){
        fontSize= '10px'
        root.style.setProperty('----sticky-top-left','5rem')
        root.style.setProperty('----sticky-top-right','5rem')
    }
    else if(size.classList.contains("font-size-2")){
        fontSize= '13px'
        root.style.setProperty('----sticky-top-left','5rem')
        root.style.setProperty('----sticky-top-right','-7rem')
    }
    else if(size.classList.contains("font-size-3")){
        fontSize= '16px'
        root.style.setProperty('----sticky-top-left','5.4rem')
        root.style.setProperty('----sticky-top-right','-17rem')
     
    }
    else if(size.classList.contains("font-size-4")){
        fontSize= '19px'
        root.style.setProperty('----sticky-top-left','-5rem')
        root.style.setProperty('----sticky-top-right','-25rem')
    
    }
    else if(size.classList.contains("font-size-5")){
        fontSize= '22px'
        root.style.setProperty('----sticky-top-left','-12rem')
        root.style.setProperty('----sticky-top-right','-35rem')
    
    }

    document.querySelector('html').style.fontSize = fontSize
    
    })
})

//--=---change color--=---

//remove classlist  active from
function removeActiveClass (){
    colorModel.forEach(color =>{
        color.classList.remove("active")
    })
} 
//chang color
colorModel.forEach(color =>{
    let primaryHue;
    color.addEventListener("click",function(){ 
        removeActiveClass()         
        if(color.classList.contains("color-1")){
            primaryHue=252;
        }
        else if(color.classList.contains("color-2")){
            primaryHue=52;
        }
        else if(color.classList.contains("color-3")){
            primaryHue=352;
        }
        else if(color.classList.contains("color-4")){
            primaryHue=152;
        }
        else if(color.classList.contains("color-5")){
            primaryHue=202;
        }
        color.classList.add("active")
        root.style.setProperty("--primary-color-hue",primaryHue)
    })
})


//====change background=======
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


let changeBG = ()=>{
    root.style.setProperty("--light-color-lightness",lightColorLightness)
    root.style.setProperty("--white-color-lightness",whiteColorLightness)
    root.style.setProperty("--dark-color-lightness",darkColorLightness)
}

backGd1.addEventListener("click",()=>{
    backGd1.classList.add("active")
    backGd2.classList.remove("active")
    backGd3.classList.remove("active")
    window.location.reload()
})

backGd2.addEventListener("click",()=>{
    darkColorLightness="95%"
    whiteColorLightness="20%"
    lightColorLightness ="15%"

    backGd2.classList.add("active")
    backGd1.classList.remove("active")
    backGd3.classList.remove("active")
    changeBG()
})

backGd3.addEventListener("click",()=>{

    darkColorLightness="95%"
    whiteColorLightness="10%"
    lightColorLightness ="0%"
    backGd3.classList.add("active")
    backGd2.classList.remove("active")
    backGd1.classList.remove("active")
    changeBG()
})

//=========---------end customize theme----------=======

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

