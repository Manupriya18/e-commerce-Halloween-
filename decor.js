let boxes=document.getElementById('boxes');

boxes.addEventListener('click',(event)=>{
    let item=event.target;
    let data=event.target.innerText;
    let yesno=prompt('do you wanna add this item to cart(y/n)');
    if(yesno=='y'){
        alert('added');
    }
    else{
        console.log('not added');
    }
})

let dingbox1=document.getElementById('dingbox1');

dingbox1.addEventListener('click',(event)=>{
    let item=event.target;
    let data=event.target.innerText;
    let yesno=prompt('do you wanna add this item to cart(y/n)');
    if(yesno=='y'){
        alert('added');
    }
    else{
        console.log('not added');
    }
})

let dingbox2=document.getElementById('dingbox2');

dingbox2.addEventListener('click',(event)=>{
    let item=event.target;
    let data=event.target.innerText;
    let yesno=prompt('do you wanna add this item to cart(y/n)');
    if(yesno=='y'){
        alert('added');
    }
    else{
        console.log('not added');
    }
})
