function clicks(){
    let qua=document.getElementsByName("food");
    let quantity=0;
    for(let i=0; i<qua.length; i++){
    if(qua[i].checked)
      quantity++;
    }
  
    if(quantity<2){
      document.getElementById("par").innerHTML="*Please check atleast 2 items in foods section";
    }
    if(quantity>=2){
        document.getElementById("par").innerHTML="";
    let fname=document.getElementById("form1").elements.namedItem("name").value;
    let lname=document.getElementById("form1").elements.namedItem("name2").value;
    let address=document.getElementById("form1").elements.namedItem("address1").value;
    let pincode=document.getElementById("form1").elements.namedItem("pin").value;
  
    let state=document.getElementById("form1").elements.namedItem("state").value;
    let country=document.getElementById("form1").elements.namedItem("country").value;
    let gender1="";
    let ele = document.getElementsByName("gender") 
   for(i = 0; i < ele.length; i++) {
       if(ele[i].checked)
       gender1=ele[i].value;
   }
    let food1=[];
    let food=document.getElementsByName("food")
    for(let i=0; i<food.length; i++){
      if(food[i].checked)
        food1.push(food[i].value);
    }
      
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    
    row.insertCell(0).innerHTML=fname;
    row.insertCell(1).innerHTML=lname;
    row.insertCell(2).innerHTML=address;
    row.insertCell(3).innerHTML=pincode;
    row.insertCell(4).innerHTML=gender1;
    row.insertCell(5).innerHTML=food1;
    row.insertCell(6).innerHTML=state;
    row.insertCell(7).innerHTML=country;
    
      document.getElementById("form1").reset();
    }
  
  }