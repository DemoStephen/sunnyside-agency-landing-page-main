const mobileSideBar = document.querySelector('[data-mobileSideBar]');
const showAndHideSideBar = document.querySelector('[data-showAndHideSideBar]');
showAndHideSideBar.addEventListener('click', (event)=>{
    if(mobileSideBar.style.visibility === 'hidden'){
        mobileSideBar.style.visibility = 'visible'
    }else{
        mobileSideBar.style.visibility = 'hidden'
    }
})