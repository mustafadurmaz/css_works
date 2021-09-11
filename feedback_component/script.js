let list=document.querySelectorAll('.component-feedback .labels li');

list.forEach(li=>li.addEventListener('click',evt=>{
    if(evt.currentTarget.parentNode.nextElementSibling.className==='labels-text'){
       evt.currentTarget.parentNode.nextElementSibling=evt.currentTarget.parentNode.nextElementSibling.nextElementSibling;
    }
    if(evt.currentTarget.classList.contains('active')){
       evt.currentTarget.classList.remove('active');
       evt.currentTarget.parentNode.nextElementSibling.classList.remove('active');
       evt.currentTarget.querySelector('input').checked=false;
    }

    else{
       evt.currentTarget.querySelector('input').checked=true;
       list.forEach(li=>li.classList.remove('active'));
       evt.currentTarget.classList.add('active');
       evt.currentTarget.parentNode.nextElementSibling.classList.add('active');
    }

}))

document.querySelectorAll('.close-btn').forEach(btn=>btn.addEventListener('click',e=>{
    let parent=e.currentTarget.parentNode;
    parent.parentNode.removeChild(parent);
    e.preventDefault();
}));