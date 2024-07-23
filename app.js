const inps=document.querySelectorAll("input");
const img=document.querySelector("img");
inps.forEach((item)=>{
item.addEventlistener("change",()=>{
    console.log(item);
    let i=item.dataset.val;
    if(i=='erkak'){
        img.src='./rasm2/man.jpg';
    }else{
        img.src='./rasm2/ayol.jpg';
    }
       
    
})
})