const mobileSideBar = document.querySelector('[data-mobileSideBar]');
const showAndHideSideBar = document.querySelector('[data-showAndHideSideBar]');
showAndHideSideBar.addEventListener('click', (event)=>{
    if(mobileSideBar.style.visibility === 'hidden'){
        mobileSideBar.style.visibility = 'visible'
    }else{
        mobileSideBar.style.visibility = 'hidden'
    }
})

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        alert('Sunnyside is not a real brand. Its a demo project I worked on')
    })
})
document.querySelectorAll('li').forEach((list)=>{
    list.addEventListener('click', (event)=>{
        alert('Sunnyside is not a real brand. Its a demo project I worked onSunnyside is not a real brand. Its a demo project I worked on')
    })
})