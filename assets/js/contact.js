function send(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var msg=document.getElementById("message").value;
    if(name && email && subject && msg){
        var url="mailto:delicious1res@gmail.com?subject="+subject+"!&body="+msg+".";
        window.open(url, "_blank"); 
        location.reload();
    }

}