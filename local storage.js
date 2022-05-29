
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
    displaydata(key);
    //getting the convered string from local storage and convert back to object
    //var obj=JSON.parse(localStorage.getItem('obj1')); 
    //printing the object sotred as string in local stoage
    //console.log(obj.fname);

    keynum++;

});


// testing local storage
//localStorage.setItem('name','jani');
//var item=localStorage.getItem('obj1');
//console.log(JSON.parse(item));

var body=document.getElementById('body');
var new_div=document.createElement('div');
new_div.className='new_div_class';
body.appendChild(new_div);

var header=document.createElement('h3');
header.style.textAlign='center';
var txt=document.createTextNode('The data stored is');
header.appendChild(txt);
new_div.appendChild(header);

var ul=document.createElement('ul');
var li=document.createElement('li');
var text=document.createTextNode("jani");
li.appendChild(text);
ul.appendChild(li);
new_div.appendChild(ul);



while(JSON.parse(localStorage.getItem('obj'+keynum)).fname!=='null'){
    var data=JSON.parse(localStorage.getItem('obj'+keynum));
    txt=data.fname+" "+data.lname+" "+data.mail;
    var li=document.createElement('li');
    var text=document.createTextNode(txt);
    li.appendChild(text);
    ul.appendChild(li);
    keynum++;
}

console.log(keynum);


function displaydata(key){
    var obj=JSON.parse(localStorage.getItem(key));
    var li_text=obj.fname+" "+obj.lname+"  "+obj.mail;

    var li=document.createElement('li');
    var text=document.createTextNode(li_text);

    li.appendChild(text);
    ul.appendChild(li);

    //console.log(li);
}
