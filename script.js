let dark=document.getElementById('dark')
let btn=document.getElementById('btn')


btn.addEventListener('click',togglebtn)
function togglebtn(){
    if(btn.textContent.includes('dark')){
        dark.style.backgroundColor="rgb(56, 50, 50)"
        dark.style.color="white"
        btn.innerHTML="light mode"
    }else{
        dark.style.backgroundColor="white"
        dark.style.color="black"
        btn.innerHTML="dark mode"
    }
}