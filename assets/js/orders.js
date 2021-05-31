$(document).ready(function(){
    var date = new Date().toJSON().slice(0,10).replace();
    document.getElementById('orders_info').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('orders').doc('deliver_details').collection(date).get().then(function(querySnapshot){
        var i=0;
        var x='<table class="table table-condensed"><thead><tr class="orders_list"><td class="time">Time</td><td class="address">Ship To</td><td class="phone">Contact</td><td class="email">Mail ID</td><td></td><td></td></tr></thead>';
        querySnapshot.forEach(function (doc){
            i++;
            if(doc.data().status=="Pending")
                x+='<tbody id="orders"><tr><td class="order_time">'+doc.data().time+'</td><td class="order_address">'+doc.data().address+'</td><td class="contact">'+doc.data().phone+'</td><td class="order_mail">'+doc.data().email+'</td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\',\''+doc.data().email+'\');">Order Details</a></td><td class="delivered"><button type="button" id="delivered'+i+'" class="btn btn-success" onclick="delivered('+i+',\''+doc.data().normal_date+'\',\''+doc.id+'\',\''+doc.data().email+'\',\''+doc.data().time+'\')" enabled>Delivered</button></td></tr>';
            else
                x+='<tbody id="orders"><tr><td class="order_time">'+doc.data().time+'</td><td class="order_address">'+doc.data().address+'</td><td class="contact">'+doc.data().phone+'</td><td class="order_mail">'+doc.data().email+'</td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\',\''+doc.data().email+'\');">Order Details</a></td><td class="delivered"><button type="button" id="delivered'+i+'" class="btn btn-success" onclick="delivered('+i+',\''+doc.data().normal_date+'\',\''+doc.id+'\',\''+doc.data().email+'\',\''+doc.data().time+'\')" disabled>Delivered</button></td></tr>';
        });
        if(i==0){
            document.getElementById('orders_info').innerHTML='<div class="text-center"><img class="img-fluid" src="https://www.cloudconsult.ca/public/no-search-found.png"></div>';
        }
        else{
            x+='</tbody></table>';
            document.getElementById('orders_info').innerHTML=x;
        }
    });
});

function getDetails(date,time,email){       
    document.getElementById('details_body').innerHTML='';
    db.collection('details').doc(email).collection('order_details').doc(date).collection(time).get().then(function(querySnapshot){
        var x='';
        var sum=0;
        querySnapshot.forEach(function (doc){
            sum+=doc.data().cost;
			x+='<div class="row"><h5 class="details_item col-sm-8">'+doc.data().item+'</h5></td><td><span class="details_quantity col-sm-2">X&nbsp;'+doc.data().quantity+'</span></td><td><span class="details_cost col-sm-2">&#x20B9;&nbsp;'+doc.data().cost+'</span></td></div></tr>';
            document.getElementById('details_body').innerHTML=x;
        });
        x+='<div class="order_total">Total : &#x20B9; '+sum+'</div>';
        document.getElementById('details_body').innerHTML=x;
    });
}
function delivered(i,date,id,email,time){
    console.log('delivered'+i);
    document.getElementById('delivered'+i).disabled=true;
    db.collection("orders").doc('deliver_details').collection(date).doc(id).update({
        status: "delivered"
    });
    db.collection("details").doc(email).collection('orders').get().then(function(querySnapshot){
        querySnapshot.forEach(function (doc){
            if(doc.data().normal_date==date && doc.data().time==time){
                db.collection("details").doc(email).collection('orders').doc(doc.id).update({
                    status: "delivered"
                });
            }
        });
    }); 
}
document.getElementById('date').addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});
function search(){
    var date=document.getElementById('date').value;
    document.getElementById('orders_info').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('orders').doc('deliver_details').collection(date).get().then(function(querySnapshot){
        var i=0;
        var x='<table class="table table-condensed"><thead><tr class="orders_list"><td class="time">Time</td><td class="address">Ship To</td><td class="phone">Contact</td><td class="email">Mail ID</td><td></td><td></td></tr></thead>';
        querySnapshot.forEach(function (doc){
            i++;
            if(doc.data().status=="Pending")
                x+='<tbody id="orders"><tr><td class="order_time">'+doc.data().time+'</td><td class="order_address">'+doc.data().address+'</td><td class="contact">'+doc.data().phone+'</td><td class="order_mail">'+doc.data().email+'</td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\',\''+doc.data().email+'\');">Order Details</a></td><td class="delivered"><button type="button" id="delivered" class="btn btn-success" onclick="delivered(\''+doc.data().normal_date+'\',\''+doc.id+'\',\''+doc.data().email+'\',\''+doc.data().time+'\')" enabled>Delivered</button></td></tr>';
            else
                x+='<tbody id="orders"><tr><td class="order_time">'+doc.data().time+'</td><td class="order_address">'+doc.data().address+'</td><td class="contact">'+doc.data().phone+'</td><td class="order_mail">'+doc.data().email+'</td><td class="details"><a id="details" href="#detailsModal" data-toggle="modal" data-target="#detailsModal" onclick="getDetails(\''+doc.data().normal_date+'\',\''+doc.data().time+'\',\''+doc.data().email+'\');">Order Details</a></td><td class="delivered"><button type="button" id="delivered" class="btn btn-success" onclick="delivered()" disabled>Delivered</button></td></tr>';
        });
        console.log(i);
        if(i==0){
            document.getElementById('orders_info').innerHTML='<div class="text-center"><img src="https://lh3.googleusercontent.com/proxy/Q3E0cg9mz8eutc8wtifMvLhaxmrTuyL2h_LgEnamyoDyUKV0dRvD9z92uKbl7OhjmqbR277dhl5rBzcWlN0XWHCmY48-GKUXwnu3IxR8"></div>';
        }
        else{
            x+='</tbody></table>';
            document.getElementById('orders_info').innerHTML=x;
        }
    });
}
function logout(){
    sessionStorage.setItem("restaurant","");
    location.href="index1.html";
}