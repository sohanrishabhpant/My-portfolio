const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controlls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');



function PageTransitions(){
    // console.log(sectBtn.length);
    for (let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
            // console.log("rishabh");
            this.className=this.className+' active-btn';
        })
    }
    allSections.addEventListener('click',(e)=>{
        // console.log(e.target);
        const id=e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            });
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active');
            })
        }
    });
}
PageTransitions();