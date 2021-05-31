if(sessionStorage.getItem('total')==0){
    location.href="online.html";
}
//first name
function validate_fname(){
    document.getElementById("e_fname").innerHTML="";
    var fname = document.getElementById("fname").value;
    var re = /[^ ][a-zA-Z ]{1,35}$/;
    if(!fname){
        document.getElementById("e_fname").innerHTML="First name required";
        return 1;
    }
    else if(!re.test(fname)){
        document.getElementById("e_fname").innerHTML="Invalid First Name";
        return 1;
    }
    return 0;
}

//last name
function validate_lname(){
    document.getElementById("e_lname").innerHTML="";
    var lname = document.getElementById("lname").value;
    re = /^[a-zA-Z ]{1,35}$/;
    if(!lname){
        document.getElementById("e_lname").innerHTML="Last name required";
        return 1;
    }
    else if(!re.test(lname)){
        document.getElementById("e_lname").innerHTML="Invalid Last Name";
        return 1;
    }
    return 0;
}

//Email
function validate_mail() {
    document.getElementById("e_mail").innerHTML="";
    var email = document.getElementById("email").value;
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email){
        document.getElementById("e_mail").innerHTML="Mail Id required";
        return 1;
    }
    else if(!re.test(email)){
        document.getElementById("e_mail").innerHTML="Invalid Mail Id";
        return 1;
    }
    return 0;
}

//Phone
function validate_phone(){
    document.getElementById("e_phone").innerHTML="";
    var phone = document.getElementById("phone").value;
    var re = /^\d{10}$/;
    if(!phone){
        document.getElementById("e_phone").innerHTML="Phone number required";
        return 1;
    }
    else if(!re.test(phone)){
        document.getElementById("e_phone").innerHTML="Invalid Phone Number";
        return 1;
    }
    return 0;
}

//Address
function validate_address(){
    document.getElementById("e_address").innerHTML="";
    var address= document.getElementById("address").value;
    var re = /^[a-zA-Z,./0-9- ]{1,100}$/;
    if(address.length == 0){
        document.getElementById("e_address").innerHTML="Address required";
        return 1;
    }
    else if(!re.test(address)){
        document.getElementById("e_address").innerHTML="Invalid Address";
        return 1;
    }
    return 0;
}

//Country
function validate_area(){
    document.getElementById("e_area").innerHTML="";
    var area= document.getElementById("area").value;
    console.log(area);
    var re = /[a-zA-Z ]{1,50}$/;
    if(!area){
        document.getElementById("e_area").innerHTML="Area required";
        return 1;
    }
    else if(!re.test(area)){
        document.getElementById("e_area").innerHTML="Invalid Area";
        return 1;
    }
    return 0;
}
//state
function validate_city(){
    document.getElementById("e_city").innerHTML="";
    var city= document.getElementById("city").value;
    console.log(city);
    if(!city){
        document.getElementById("e_city").innerHTML="City required";
        return 1;
    }
    return 0;
}
//zip
function validate_zip(){
    document.getElementById("e_zip").innerHTML="";
    var zip = document.getElementById("zip").value;
    var re = /^\d{6}$/;
    if(!zip){
        document.getElementById("e_zip").innerHTML="Zip code required";
        return 1;
    }
    else if(!re.test(zip)){
        document.getElementById("e_zip").innerHTML="Invalid Zip code";
        return 1;
    }
    return 0;
}
//same address
function validate_same(){
    var check=document.getElementById("same-address").checked;
    var check_cash=document.getElementById("cash-on-delivery").checked;
    if(check && check_cash){
        document.getElementById("place_order").disabled=false;
    }
    else{
        document.getElementById("place_order").disabled=true;
    }
}

//cash on delivery
function validate_delivery(){
    var check=document.getElementById("same-address").checked;
    var check_cash=document.getElementById("cash-on-delivery").checked;
    if(check && check_cash){
        document.getElementById("place_order").disabled=false;
    }
    else{
        document.getElementById("place_order").disabled=true;
    }
}

function checkout(){
    var x=0;
    x=x+validate_fname();
    x=x+validate_lname();
    x=x+validate_mail();
    x=x+validate_phone();
    x=x+validate_address();
    x=x+validate_area();
    x=x+validate_city();
    x=x+validate_zip();
    if(x==0){
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let fname = document.getElementById("fname").value;
        let area= document.getElementById("area").value;
        let city= document.getElementById("city").value;
        let zip= document.getElementById("zip").value;
        var normal_date = new Date().toJSON().slice(0,10).replace();
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        const d = new Date();
        var mm=monthNames[d.getMonth()];
        var yy=d.getFullYear();
        var dd=d.getDate();
        var date=mm+" "+dd+","+yy;
        var time=new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        var total=sessionStorage.getItem("total");
        
        var mail=sessionStorage.getItem("mail");
        db.collection('details').doc(mail).collection("cart").get().then(function(querySnapshot){
            querySnapshot.forEach(function (doc){
                var order_details={
                    item: doc.data().item,
                    cost: doc.data().cost,
                    quantity: doc.data().quantity
                }
                db.collection("details").doc(mail).collection('order_details').doc(normal_date).collection(time).doc().set(order_details);
            });
        });
        sessionStorage.setItem('time',time);
        sessionStorage.setItem('date',normal_date);
        var obj={
            first_name:fname,
            Last_name:lname,
            phone: phone,
            address: address,
            area: area,
            city: city,
            zip: zip,
            status: "Pending",
            date: date,
            time: time,
            total: total,
            normal_date: normal_date,
            email: email
        }
        db.collection('details').doc(mail).collection("orders").doc().set(obj);
        document.querySelector(".checkout-form").reset();
        db.collection('orders').doc('deliver_details').collection(normal_date).doc().set(obj);
        //db.collection('order_details').doc().collection(normal_date).doc(email).collection(time).doc().set('order_details');
        //alert("Order Placed!!");
        
        sessionStorage.setItem("total",0);
        console.log(sessionStorage.getItem("total"));
        var body= "Hi "+fname+",<br>The order has been placed successfully on "+date+" at "+time+". Expect delivery within 1 hour.<br>For any other information, please contact us.<br>Thanks,<br> Team Delicious.";
        
        Email.send({
            Host: "smtp.gmail.com",
            Username : "delicious1res@gmail.com",
            Password : "delicious54*",
            port: 587,
            To : email,
            From : "delicious1res@gmail.com",
            Subject : "Food Ordered successfully",
            Body : body,
        })
        .then(function(message){
            db.collection('details').doc(mail).collection("cart").get().then(function(querySnapshot){
                querySnapshot.forEach(function (doc){
                    doc.ref.delete();
                });
                db.collection('cart').doc(mail).delete();
                location.href="checked.html";
            });
        });
    }
}