  function fun(){
    location.href="#order";
  }
  function fun1(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-1">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-1v">2</a></li></ul>';
    document.getElementById('pagetab').innerHTML=z;
  }
  function fun2(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-2">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-2v">2</a></li></ul>';
      document.getElementById('pagetab').innerHTML=z;
  }
  function fun3(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-3">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-3v">2</a></li></ul>';
    document.getElementById('pagetab').innerHTML=z;
  }
  function fun4(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-4">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-4v">2</a></li></ul>';
    document.getElementById('pagetab').innerHTML=z;
  }
  function fun8(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-8">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-8v">2</a></li></ul>';
    document.getElementById('pagetab').innerHTML=z;
  }
  function fun9(){
    var z='<ul class="pagination nav nav-tabs col-12" onclick="fun()"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#tab-9">1</a></li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-9v">2</a></li></ul>';
    document.getElementById('pagetab').innerHTML=z;
  }
  function fun5(){
    document.getElementById('pagetab').innerHTML="";
  }
  function fun6(){
    document.getElementById('pagetab').innerHTML="";
  }
  function fun7(){
    document.getElementById('pagetab').innerHTML="";
  }
  function fun10(){
    document.getElementById('pagetab').innerHTML="";
  }
  function fun11(){
    document.getElementById('pagetab').innerHTML="";
  }

  $(window).on('load', function() {
    document.getElementById('tab-1').innerHTML='<div class="text-center"><i class="fa fa-spinner fa-pulse loading"></i></div>';
    db.collection('menu').doc('menus').collection('soups').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2 class="cost">&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-1v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2 class="cost">&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-1').innerHTML=x;
        }
      });
      $('#item1').click();
    });
    db.collection('menu').doc('menus').collection('extremets').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-2v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-2').innerHTML=x;
        }
      });
    });

    db.collection('menu').doc('menus').collection('sandwich').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-3v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-3').innerHTML=x;
        }
      });
    });
    db.collection('menu').doc('menus').collection('starters').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-4v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-4').innerHTML=x;
        }
      });
    });
    db.collection('menu').doc('menus').collection('rice').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
        document.getElementById('tab-5').innerHTML=x;
      });
    });
    db.collection('menu').doc('menus').collection('breads').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
        document.getElementById('tab-6').innerHTML=x;
      });
    });
    db.collection('menu').doc('menus').collection('grills-veg').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
        document.getElementById('tab-7').innerHTML=x;
      });
    });
    db.collection('menu').doc('menus').collection('grills-non-veg').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-8v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-8').innerHTML=x;
        }
      });
    });
    db.collection('menu').doc('menus').collection('desserts').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        i=i+1;
        if(i>9){
          y+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-9v').innerHTML=y;
        }
        else{
          x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
          document.getElementById('tab-9').innerHTML=x;
        }
      });
    });
    db.collection('menu').doc('menus').collection('smoothies').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart" onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
        document.getElementById('tab-10').innerHTML=x;
      });
    });
    db.collection('menu').doc('menus').collection('milkshake').get().then(function(querySnapshot){
      var x='',y='';
      var i=0;
      querySnapshot.forEach(function (doc){
        x+='<div class="col-sm-4"><div class="product-image-wrapper"><div class="productinfo text-center"><img class="img-fluid" src="'+doc.data().url+'" alt="" /><h2>&#8377 '+doc.data().cost+' </h2><p>'+doc.data().name+'</p><a href="#!" class="btn btn-default add-to-cart"  onclick="add_product(\''+doc.data().name+'\','+doc.data().cost+',\''+doc.data().url+'\');"><i class="fa fa-shopping-cart"></i>Add to cart</a></div></div></div>';
        document.getElementById('tab-11').innerHTML=x;
      });
    });
  });

function add_product(name,cost,url){
  let email=sessionStorage.getItem('mail');
  console.log(email);
  if(!email){
    $('.login').click();
    document.getElementById("fail").innerHTML="Please login to add items to cart";
  }
  else{
    var obj={
      item: name,
      cost: cost,
      url: url,
      price: cost,
      quantity: 1
    }
    console.log('hi');
    db.collection("details").doc(email).collection("cart").doc().set(obj);
    console.log(cost);
    console.log(url);
  }
}
function show_cart(){
  let email=sessionStorage.getItem("mail");
  if(!email){
    $('.login').click();
    document.getElementById("fail").innerHTML="Please login to view cart";
  }
  else{
    location.href='cart.html';
  }
}