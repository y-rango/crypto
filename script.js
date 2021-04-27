let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
     make_result();
});
select.addEventListener("change",()=>{
    make_result();
});
function make_result(){
    if(select.value == "decode"){
        result.value = atob (textarea.value) ;

    }else{
        result.value = btoa (textarea.value) ;
    }
}

let section_android = document.getElementById("android");
let user_device = navigator.userAgent.toLocaleLowerCase();

if(user_device.includes("android")){

    setTimeout(()=>{
        section_android.style.display = "flex";

    },3*1000)
    
    let app_ddl = document.getElementById("app_ddl"); 
    app_ddl.addEventListener("click", ()=>{
    window.open();
    });

} else{
    section_android.style.display = "none";
}

let  close = document.getElementById("close");
close.addEventListener("click", ()=>{
    section_android.style.display = "none";
});