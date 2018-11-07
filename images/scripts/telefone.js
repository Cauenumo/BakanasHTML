function parenteses(o,f){
    v_obj=o
    v_fun=f
    setTimeout("cparenteses()",1)
}
function cparenteses(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");            
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d{5})(\d{4})$/,"$1-$2");    
    return v;
}
function id( el ){
    return document.getElementById( el );
}
window.onload = function(){
    id('telefone-f1').onkeypress = function(){
        parenteses( this, mtel );
    }
}

