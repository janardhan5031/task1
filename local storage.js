var submit=document.getElementById('submit');
//console.log(submit)

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');

    //getting all data from from
    var fname=document.getElementById('fname').value;   // first name
    var lname=document.getElementById('lname').value;   // last name
    var mail=document.getElementById('mail').value   // mail address
    
    
    let myobj={
        fname: 'jani',
        lname: 'krish',
        mail: 'djhjhs'
    }
    // converting object into string using JSON object format
    let obj_serialize=JSON.stringify(myobj);
    //console.log(obj_serialize);
    

    //pushint into local storage
    localStorage.setItem('obj1',obj_serialize);
    
    var obj=JSON.parse(localStorage.getItem('obj1')); 
    
    console.log(obj.fname);





   ////storing the data in local storage
   //localStorage.setItem('first name', fname);
   //localStorage.setItem('last name', lname);
   //localStorage.setItem('email', mail);
    
});


// testing local storage
//localStorage.setItem('name','jani');
