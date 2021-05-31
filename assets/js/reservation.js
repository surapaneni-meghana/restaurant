//name
function validate_table_name(){
    document.getElementById("t_name").innerHTML="";
    var name = document.getElementById("name").value;
    var re = /[^ ][a-zA-Z ]{1,35}$/;
    console.log(!name);
    if(!name){
        document.getElementById("t_name").innerHTML="Name required";
        return 1;
    }
    else if(!re.test(name)){
        document.getElementById("t_name").innerHTML="Invalid Name";
        return 1;
    }
    return 0;
}

//Email
function validate_table_mail() {
    document.getElementById("mail").innerHTML="";
    var email = document.getElementById("email").value;
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email){
        document.getElementById("mail").innerHTML="Mail Id required";
        return 1;
    }
    else if(!re.test(email)){
        document.getElementById("mail").innerHTML="Invalid Mail Id";
        return 1;
    }
    return 0;
}

//Phone
function validate_table_phone(){
    document.getElementById("contact").innerHTML="";
    var phone = document.getElementById("phone").value;
    var re = /^\d{10}$/;
    if(!phone){
        document.getElementById("contact").innerHTML="Phone number is required";
        return 1;
    }
    else if(!re.test(phone)){
        document.getElementById("contact").innerHTML="Invalid Phone Number";
        return 1;
    }
    return 0;
}

//Date
function validate_table_date(){
    document.getElementById("e_date").innerHTML="";
    var date = document.getElementById("date").value;
    var d=new Date();
    var dd=String(d.getDate());
    var mm=String(d.getMonth()+1);
    var yy=String(d.getFullYear());
    var today;
    if(dd<10)
        today=yy+'-'+mm+'-0'+dd;
    else
        today=yy+'-'+mm+'-'+dd;
    if(!date){
        document.getElementById("e_date").innerHTML="Date is Required";
        return 1;
    }  
    else if(date<=today){
        document.getElementById("e_date").innerHTML="Invalid Date";
        return 1;
    }
    return 0;
}

//num
function validate_table_num(){
    document.getElementById("num").innerHTML="";
    let num = document.getElementById("people").value;
    if(!num){
        document.getElementById("num").innerHTML="Number of people is required";
        return 1;
    }
    else if(num<=0)
    {
        document.getElementById("num").innerHTML="Invalid number";
        return 1;
    }
    return 0;
}

//time
function validate_table_time(){
    document.getElementById("e_time").innerHTML="";
    let time = document.getElementById("time").value;
    let hr=parseInt(time.slice(0,2));
    let mm=parseInt(time.slice(3,5));
    if(hr<10 || hr>23){
        document.getElementById("e_time").innerHTML="Time must be between 10 - 23";
        return 1;
    }
    if(!time){
        document.getElementById("e_time").innerHTML="Time is required";
        return 1;
    }
    return 0;
}

function validate_table(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let num = document.getElementById("people").value;
    let time = document.getElementById("time").value;
    
    var x=0;
    x=x+validate_table_name();
    x=x+validate_table_mail();
    x=x+validate_table_phone();
    x=x+validate_table_date();
    x=x+validate_table_time();
    x=x+validate_table_num();
    console.log(time);
    if(x==0){
        var obj=({
            name: name,
            phone: phone,
            num_people: num,
            email: email,
            time: time
        });
        db.collection('reserve').doc('table').collection(date).doc().set(obj);
        document.querySelector(".reserve-form").reset();
        document.getElementById('result').innerHTML="Reserved Successfully!";
        
        var body= "Hi "+name+",<br>The table has been reserved successfully for "+num+" people on "+date+" at "+time+".<br>For any other information, please contact us.<br>Thanks,<br> Team Delicious.";
        Email.send({
            Host: "smtp.gmail.com",
            Username : "delicious1res@gmail.com",
            Password : "delicious54*",
            port: 587,
            To : email,
            From : "delicious1res@gmail.com",
            Subject : "Table reserved successfully",
            Body : body,
        })
        .then(function(message){
            document.getElementById('result').innerHTML="";
            document.querySelector(".cl").click();
        });
    }
}

$('.close').click(function(){
    document.querySelector(".reserve-form").reset();
    document.getElementById("t_name").innerHTML="";
    document.getElementById("e_time").innerHTML="";
    document.getElementById("mail").innerHTML="";
    document.getElementById("e_date").innerHTML="";
    document.getElementById("num").innerHTML="";
    document.getElementById("contact").innerHTML=""; 
});