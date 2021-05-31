$(document).ready(function(){
    let email=sessionStorage.getItem('mail');
    
    document.getElementById('cart_items').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('details').doc(email).collection("cart").get().then(function(querySnapshot){
        var x='<div class="row"><div class="col-lg-8"><div class="card wish-list mb-3"><div class="card-body"><h5 id="count" class="mb-4"></h5>';
        var i=0,sum=0;
        querySnapshot.forEach(function (doc){
            i=i+1;
            sum+=doc.data().cost;
            sessionStorage.setItem('total',sum);
            if(i==1)
            x+='<div class="row mb-4"><div class="col-md-5 col-lg-3 col-xl-3"><div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0"><img class="img-fluid" src="'+doc.data().url+'" alt="Sample"></a></div></div><div class="col-md-7 col-lg-9 col-xl-9 item"><div class="d-flex justify-content-between"><div><h5>'+doc.data().item+'</h5></div><div><div class="def-number-input number-input safari_only mb-0 w-100"><button onclick="minus(\''+doc.data().item+'\','+doc.data().price+','+i+')" class="minus"></button><input id="quantity'+i+'" class="quantity" min="0" name="quantity" value="'+doc.data().quantity+'" type="number"><button onclick="plus(\''+doc.data().item+'\','+doc.data().price+','+i+')" class="plus"></button></div></div></div><div class="delete_space d-flex justify-content-between align-items-center"><a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3" onclick="remove(\''+doc.id+'\','+doc.data().price+','+i+');"><i class="fa fa-trash-alt mr-1"></i> Remove item </a><p class="mb-0"><span id="cost'+i+'"><strong>&#8377 '+doc.data().cost+'</strong></span></p></div></div></div>';
            else
            x+='<hr class="mb-4"><div class="row mb-4"><div class="col-md-5 col-lg-3 col-xl-3"><div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0"><img class="img-fluid" src="'+doc.data().url+'" alt="Sample"></a></div></div><div class="col-md-7 col-lg-9 col-xl-9 item"><div class="d-flex justify-content-between"><div><h5>'+doc.data().item+'</h5></div><div><div class="def-number-input number-input safari_only mb-0 w-100"><button onclick="minus(\''+doc.data().item+'\','+doc.data().price+','+i+')" class="minus"></button><input id="quantity'+i+'" class="quantity" min="0" name="quantity" value="'+doc.data().quantity+'" type="number"><button onclick="plus(\''+doc.data().item+'\','+doc.data().price+','+i+')" class="plus"></button></div></div></div><div class="delete_space d-flex justify-content-between align-items-center"><a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3" onclick="remove(\''+doc.id+'\','+doc.data().price+','+i+');"><i class="fa fa-trash-alt mr-1"></i> Remove item </a><p class="mb-0"><span id="cost'+i+'"><strong>&#8377 '+doc.data().cost+'</strong></span></p></div></div></div>';
            document.getElementById('cart_items').innerHTML=x;
        });
        sum=sessionStorage.getItem('total');
        db.collection("cart").doc(email).set({
            total: parseInt(sum)
        });
        x+='</div></div></div><div class="col-lg-4"><div class="card mb-3"><div class="card-body"><h5 class="title mb-3">The total amount</h5><ul class="list-group list-group-flush"><li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">Amount<span id="total">&#8377 '+sum+'</span></li><li class="list-group-item d-flex justify-content-between align-items-center px-0">Shipping<span>0</span></li><li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"><div><strong>The total amount of</strong><strong><p class="mb-0">(including VAT)</p></strong></div><span id="ttotal"><strong>&#8377 '+sum+'</strong></span></li></ul><button type="button" class="btn checkout btn-block waves-effect waves-light" onclick="checkout();">checkout</button></div></div><div class="card mt-3"><div class="card-body"><button type="button" class="btn btn-primary continue btn-block waves-effect waves-light" onclick="back();">Add More Items</button></div></div></div></div></section>';
        document.getElementById('cart_items').innerHTML=x;
        if(sum==0 || sum==null){
            document.getElementById('cart_items').innerHTML='<div class="text-center empty"><img class="img-fluid no-item" src="https://www.razencustoms.com/includes/img/empty-cart.png" alt=""><center><h3 class="text">Looks Like you haven\'t added anything to your cart yet</h3> <button type="button" class="col-sm-4 col-md-3 btn add btn-block waves-effect waves-light" onclick="back();">Add Items</button></center></div>';
        }
    }).catch(function(error){
        document.getElementById('cart_items').innerHTML='<div class="text-center empty"><img class="img-fluid no-item" src="https://www.razencustoms.com/includes/img/empty-cart.png" alt=""></div>';
    });
});
function minus(item,price,i){
    var total=sessionStorage.getItem('total');
    quantity = parseInt($("#quantity"+i).val());
    if(quantity>1){
        quantity= quantity-1;
        $('#quantity'+i).val(quantity);
        total-=price;
        sessionStorage.setItem('total',total);
        document.getElementById('total').innerHTML="&#8377 "+total;
        document.getElementById('ttotal').innerHTML="<strong>&#8377 "+total+"</strong>";
        db.collection("cart").doc(email).update({
            total: total
        });
        db.collection('details').doc(email).collection("cart").get().then(function(querySnapshot){
            querySnapshot.forEach(function (doc){
                var str=doc.data().item;
                if(str==item){
                    var cost=doc.data().cost;
                    cost-=price;
                    document.getElementById('cost'+i).innerHTML="<strong>&#8377 "+cost+"</strong>";
                    db.collection('details').doc(email).collection("cart").doc(doc.id).update({
                        cost: cost,
                        quantity: quantity,
                    });
                }
            });
        });
    }
    
};
function plus(item,price,i){
    quantity = parseInt($("#quantity"+i).val());
    quantity= quantity+1;
    var total=parseInt(sessionStorage.getItem('total'));
    $('#quantity'+i).val(quantity);
    total=total+parseInt(price);
    sessionStorage.setItem('total',total);
    document.getElementById('total').innerHTML="&#8377 "+total;
    document.getElementById('ttotal').innerHTML="<strong>&#8377 "+total+"</strong>";
    db.collection("cart").doc(email).update({
        total: total
    });
    db.collection('details').doc(email).collection("cart").get().then(function(querySnapshot){
        querySnapshot.forEach(function (doc){
            var str=doc.data().item;
            if(str==item){
                var cost=doc.data().cost;
                cost+=price;
                document.getElementById('cost'+i).innerHTML="<strong>&#8377 "+cost+"</strong>";
                db.collection('details').doc(email).collection('cart').doc(doc.id).update({
                    cost: cost,
                    quantity: quantity
                });
            }
        });
    });
};

function remove(id,price,i){
    quantity = parseInt($("#quantity"+i).val());
    var cost=quantity*price;
    var total=parseInt(sessionStorage.getItem('total'));
    total-=cost;
    sessionStorage.setItem('total',total);
    console.log(sessionStorage.getItem('total'));
    db.collection('details').doc(email).collection('cart').doc(id).delete().then(function() {
        db.collection("cart").doc(email).update({
            total: total
        });
        location. reload();
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

function back(){
    location.href="online.html";
}
function checkout(){
    location.href="checkout.html";
}