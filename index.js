function handleSubmit(event){
    event.preventDefault();
    let item_details={
        itemname:document.querySelector('#name').value,
        description:document.querySelector('#desc').value,
        price:document.querySelector('#price').value,
        quantity:document.querySelector('#quan').value
    }
    axios
    .post("https://crudcrud.com/api/26ba8db1a4c94200969a1728a1f37e55/inventory_data",item_details)
    .then((res)=>displayitem(res.data))
    .catch((err)=>console.log(err))
    document.querySelector('#name').value="";
    document.querySelector('#desc').value="";
    document.querySelector('#price').value="";
    document.querySelector('#quan').value="";
}
function displayitem(item){
    if(item.itemname){
        const list=document.querySelector('ul');
        const nli=document.createElement('li');
        nli.innerHTML=item.itemname+" "+item.description+" "+item.price+" "+item.quantity+
        '<button class="b1">Buy1 <button><button class="b2">Buy2 <button><button class="b3">Buy3<button>';
        list.appendChild(nli);
        const b1=nli.querySelector('.b1');
        b1.onclick=()=>{
            list.removeChild(nli);
            item.quantity=item.quantity-1;
            axios
            .put(`https://crudcrud.com/api/26ba8db1a4c94200969a1728a1f37e55/inventory_data/${item._id}`,{
                itemname:item.itemname,
                description:item.description,
                price:item.price,
                quantity:item.quantity
            })
            .then(()=>displayitem(item))
            .catch((err)=>console.log(err))
        }
        const b2=nli.querySelector('.b2');
        b2.onclick=()=>{
            list.removeChild(nli);
            item.quantity=item.quantity-2;
            axios
            .put(`https://crudcrud.com/api/26ba8db1a4c94200969a1728a1f37e55/inventory_data/${item._id}`,{
                itemname:item.itemname,
                description:item.description,
                price:item.price,
                quantity:item.quantity
            })
            .then(()=>displayitem(item))
            .catch((err)=>console.log(err))
        }
        const b3=nli.querySelector('.b3');
        b3.onclick=()=>{
            list.removeChild(nli);
            item.quantity=item.quantity-3;
            axios
            .put(`https://crudcrud.com/api/26ba8db1a4c94200969a1728a1f37e55/inventory_data/${item._id}`,{
                itemname:item.itemname,
                description:item.description,
                price:item.price,
                quantity:item.quantity
            })
            .then(()=>displayitem(item))
            .catch((err)=>console.log(err))
        }
    }
}
