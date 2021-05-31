$(document).ready(function(){
    var date = new Date().toJSON().slice(0,10).replace();
    document.getElementById('bookings_info').innerHTML='<div class="text-center"><i class="fas fa-spinner fa-pulse loading"></i></div>';

    var x='<table class="table table-condensed"><thead><tr class="bookings_list"><td class="room">Room</td><td class="time">Time Slot</td><td class="name">Name</td><td class="email">Mail ID</td><td class="phone">Contact</td></tr></thead>';
    document.getElementById('bookings_info').innerHTML=x;

    db.collection('events').doc("bar").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tbody id="orders"><tr><td class="book_room">Bar Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("gratify").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Gratify Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("patio").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Patio Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("semi-private").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Semi-private Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    x+='</tbody></table>';
    document.getElementById('bookings_info').innerHTML=x;
});

function search(){
    var date=document.getElementById('date').value;
    document.getElementById('bookings_info').innerHTML='<div class="text-center"><i class="fas fa-spinner fa-pulse loading"></i></div>';
    var x='<table class="table table-condensed"><thead><tr class="bookings_list"><td class="room">Room</td><td class="time">Time Slot</td><td class="name">Name</td><td class="email">Mail ID</td><td class="phone">Contact</td></tr></thead>';
    document.getElementById('bookings_info').innerHTML=x;

    db.collection('events').doc("bar").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tbody id="orders"><tr><td class="book_room">Bar Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("gratify").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Gratify Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("patio").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Patio Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    db.collection('events').doc("semi-private").collection(date).get().then(function(querySnapshot){
        var x=document.getElementById('bookings_info').innerHTML;
        var len=x.length;
        x=x.slice(0,len-8);
        querySnapshot.forEach(function (doc){
            x+='<tr><td class="book_room">Semi-private Room</td><td class="book_time">'+doc.id+'</td><td class="book_name">'+doc.data().first_name+' '+doc.data().last_name+'</td><td class="book_mail">'+doc.data().email+'</td><td class="contact">'+doc.data().phone+'</td></tr>';
            document.getElementById('bookings_info').innerHTML=x;
        });
    });
    x+='</tbody></table>';
    document.getElementById('bookings_info').innerHTML=x;
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