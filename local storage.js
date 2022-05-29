
var submit=document.getElementById('submit');
//console.log(submit)
//creeating unique number for key to append new date into local storage
var keynum=0;
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');

    //getting all data from from
    var fname=document.getElementById('fname').value;   // first name
    var lname=document.getElementById('lname').value;   // last name
    var mail=document.getElementById('mail').value   // mail address
    
    
    let myobj={
        fname: fname,
        lname: lname,
        mail: mail
    }
    // converting object into string using JSON object format
    let obj_serialize=JSON.stringify(myobj);
    //console.log(obj_serialize);
    var key='obj'+keynum;

    //console.log(key);
    //pushint into local storage
    localStorage.setItem(key,obj_serialize);
    
    //getting the convered string from local storage and convert back to object
    //var obj=JSON.parse(localStorage.getItem('obj1')); 
    //printing the object sotred as string in local stoage
    //console.log(obj.fname);

   ////storing the data in local storage like key value par type
   //localStorage.setItem('first name', fname);
   //localStorage.setItem('last name', lname);
   //localStorage.setItem('email', mail);

    keynum++;

});




// testing local storage
//localStorage.setItem('name','jani');
//var item=localStorage.getItem('obj1');
//console.log(JSON.parse(item));
