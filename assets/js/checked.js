
$(window).on('load', function() {
    db.collection("details").doc(sessionStorage.getItem('mail')).collection('order_details').doc(sessionStorage.getItem('date')).collection(sessionStorage.getItem('time')).get().then(function(querySnapshot){
        var x='';
        querySnapshot.forEach(function (doc){
            x+='<p>'+doc.data().item +'('+doc.data().quantity+')</p>';
        });
        document.getElementById('items').innerHTML=x;
    });
});

function back(){
    sessionStorage.removeItem('date');
    sessionStorage.removeItem('time');
    location.href="online.html";
}