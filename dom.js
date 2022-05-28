//console.dir(document)
////console.log(document.getElementById('header-title'))
//var header=document.getElementById('header-title');
//header.style.color='blue';
//console.log(header);
//
//var item=document.getElementsByClassName('list-group-item');
////console.log(item);
////item[1].textContent='Hello';
////item[1].style.fontWeight='bold';
////item[1].style.color='green';
////
////item[2].style.backgroundColor='green';
//item[1].style.backgroundColor='#90EE90';
//for(var x of item){
//    x.style.fontWeight='bold';
//}
//item[2].style.display='none';
//item[1].style.color='green';
//
////var ite=document.getElementsByTagName('li');
////ite[4].textContent='hello jani';
//
//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
//    odd[i].style.backgroundColor='green';
//}

//creating new div
var newdiv=document.createElement('div');
//add class
newdiv.className='hey';
//add id
newdiv.id='hey1';
//add attribute
newdiv.setAttribute('title', 'hello');
//create text node
var divtext=document.createTextNode('HELLo world');
//add text to div

newdiv.style.fontSize='30px';
newdiv.appendChild(divtext);
console.log(newdiv);

//push element to DOM 
var container=document.querySelector('header .container');
var before1=document.querySelector('header h1');
container.insertBefore(newdiv,before1);

//push element before item1
//var parnode=document.getelementById('items');
var chlnode=document.createElement('li');
chlnode.className='list-group-item';
var txt=document.createTextNode('hello world');
chlnode.appendChild(txt);
//console.log(chlnode);

var list=document.querySelector('#items');
list.appendChild(chlnode);

//parentnode.appendfirstChild(chlnode);


