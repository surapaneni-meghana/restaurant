$(document).ready(function(){
    var date = new Date().toJSON().slice(0,10).replace();
    document.getElementById('reserve_info').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('reserve').doc("table").collection(date).get().then(function(querySnapshot){
        var i=0;
        var x='<table class="table table-condensed"><thead><tr class="reserve_list"><td class="time">Time</td><td class="name">Name</td><td class="email">Mail ID</td><td class="phone">Contact</td><td class="people">No. of seats</td></tr></thead>';
        querySnapshot.forEach(function (doc){
            i++;
            x+='<tbody><tr><td class="reserve_time">'+doc.data().time+'</td><td class="book_name">'+doc.data().name+'</td><td class="reserve_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td><td class="reserve_people">'+doc.data().num_people+'</td></tr>';
        });
        if(i==0){
            document.getElementById('reserve_info').innerHTML='<div class="text-center"><img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGOnjPqcHwRSYnVpomYUqPLbufNQF3rz7SQ&usqp=CAU"></div>';
        }
        else{
            x+='</tbody></table>';
            document.getElementById('reserve_info').innerHTML=x;
        }
    });  
});

function search(){
    var date=document.getElementById('date').value;
    document.getElementById('reserve_info').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('reserve').doc("table").collection(date).get().then(function(querySnapshot){
        var i=0;
        var x='<table class="table table-condensed"><thead><tr class="reserve_list"><td class="time">Time</td><td class="name">Name</td><td class="email">Mail ID</td><td class="phone">Contact</td><td class="people">No. of seats</td></tr></thead>';
        querySnapshot.forEach(function (doc){
            i++;
            x+='<tbody><tr><td class="reserve_time">'+doc.data().time+'</td><td class="book_name">'+doc.data().name+'</td><td class="reserve_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td><td class="reserve_people">'+doc.data().num_people+'</td></tr>';
        });
        if(i==0){
            document.getElementById('reserve_info').innerHTML='<div class="text-center"><img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGOnjPqcHwRSYnVpomYUqPLbufNQF3rz7SQ&usqp=CAU"></div>';
        }
        else{
            x+='</tbody></table>';
            document.getElementById('reserve_info').innerHTML=x;
        }
    });  
}
function logout(){
    sessionStorage.setItem("restaurant","");
    location.href="index1.html";
}
document.getElementById('date').addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});