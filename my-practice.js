////
//var newele=document.createElement('li');
//newele.className='items';
//
//var txt =document.createTextNode('krish');
//newele.appendChild(txt);
//
////adding delete button
//var del=document.createElement('button');
//del.className='btn-del btn-dngr del-btn';
//del.textContent="X";
//
////console.log(del);
//
////console.log(newele);
//var list=document.getElementById('list');    // list access
////if we want to add new element before the first one
////list.insertBefore(newele,list.children[0]);
//
////if we want to add new element at end of list
//list.appendChild(newele);
//
////adding delte button to lastly created element
//newele.appendChild(del);


//////////////////////////////////////


//console.log(newinpt.value);

//adding element using add button
var form=document.getElementById('form');       //form access
var list=document.getElementById('list');       // list access
var filter=document.getElementById('filter');

form.addEventListener('submit',additem);
list.addEventListener('click',removeitem);
filter.addEventListener('keyup',sorting);

function additem(e){
    e.preventDefault();
    var newinpt=document.getElementById('add-input').value;

    var newele=document.createElement('li');
    newele.className='items';

    newele.appendChild(document.createTextNode(newinpt));

    var del=document.createElement('button');
    del.className='btn-del btn-dngr del-btn';
    del.appendChild(document.createTextNode('X'));

    newele.appendChild(del);
    console.log(newele);
    list.appendChild(newele);
}

function removeitem(e){
    if(e.target.classList.contains('btn-del')){     //checking wheather element class has '****' name at place of event happening element
        if(confirm('are you sure to delete ?')){
            var li=e.target.parentElement;
            list.removeChild(li);
        }
    }
}

function sorting(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
    

}