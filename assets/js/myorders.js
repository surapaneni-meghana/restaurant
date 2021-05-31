$(document).ready(function(){
    let email=sessionStorage.getItem('mail');
    document.getElementById('orders_info').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('details').doc(email).collection("orders").get().then(function(querySnapshot){
        var x='<table class="table table-condensed"><thead><tr class="orders_list"><td class="date">Order Placed</td><td class="total">Total</td><td class="address">Ship To</td><td class="time">Time</td><td class="status">Status</td><td></td></tr></thead>';
        querySnapshot.forEach(function (doc){
            if(doc.data().status=="Pending")
                x+='<tbody id="orders_details"><tr><td class="order_date"><h5>'+doc.data().date+'</h5></td><td class="order_total">&#x20B9; '+doc.data().total+'</td><td class="order_address">'+doc.data().address+'</td><td class="order_time">'+doc.data().time+'</td><td class="order_status red"><h5>'+doc.data().status+'</h5></td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\');">Order Details</a></td></tr>';
            else
                x+='<tbody id="orders_details"><tr><td class="order_date"><h5>'+doc.data().date+'</h5></td><td class="order_total">&#x20B9; '+doc.data().total+'</td><td class="order_address">'+doc.data().address+'</td><td class="order_time">'+doc.data().time+'</td><td class="order_status green"><h5>'+doc.data().status+'</h5></td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\');">Order Details</a></td></tr>';
            document.getElementById('orders_info').innerHTML=x;
        });
        x+='</tbody></table>';
        document.getElementById('orders_info').innerHTML=x;
    });
});

function getDetails(date,time){
    let email=sessionStorage.getItem('mail');           
    document.getElementById('details_body').innerHTML='';
    db.collection('details').doc(email).collection('order_details').doc(date).collection(time).get().then(function(querySnapshot){
        var x='';
        querySnapshot.forEach(function (doc){
			x+='<div class="row"><h5 class="details_item col-sm-8">'+doc.data().item+'</h5></td><td><span class="details_quantity col-sm-2">X&nbsp;'+doc.data().quantity+'</span></td><td><span class="details_cost col-sm-2">&#x20B9;&nbsp;'+doc.data().cost+'</span></td></div></tr>';
            document.getElementById('details_body').innerHTML=x;
        });
    });
}