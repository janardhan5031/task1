var submit=document.getElementById('submit');
//console.log(submit)

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');

    //getting all data from from
    var fname=document.getElementById('fname').value;   // first name
    var lname=document.getElementById('lname').value;   // last name
    var mail=document.getElementById('mail').vafname   // mail address
    
    //storing the data in local storage
    localStorage.setItem('first name', fname);
    localStorage.setItem('last name', lname);
    localStorage.setItem('email', mail);
    
});


// testing local storage
//localStorage.setItem('name','jani');