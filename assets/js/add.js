function add(){
    document.getElementById("e_name").innerHTML="";
    document.getElementById("e_url").innerHTML="";
    document.getElementById("e_cost").innerHTML="";
    document.getElementById("e_category").innerHTML="";
    var name=document.getElementById("name").value;
    var category=document.getElementById("category").value;
    var url=document.getElementById("url").value;
    var cost=document.getElementById("cost").value;
    var x=0;
    if(!name){
        document.getElementById("e_name").innerHTML="Name required";
        x++;
    }
    if(!url){
        document.getElementById("e_url").innerHTML="URL required";
        x++;
    }
    if(!cost){
        document.getElementById("e_cost").innerHTML="Cost required";
        x++;
    }
    if(!category){
        document.getElementById("e_category").innerHTML="Category required";
        x++;
    }
    if(x==0){
        var obj={
            name: name,
            url: url,
            cost: cost
        }
        db.collection('menu').doc('menus').collection(category).doc().set(obj);
        document.querySelector(".add-form").reset();
    }
}
function logout(){
    sessionStorage.setItem("restaurant","");
    location.href="index1.html";
}