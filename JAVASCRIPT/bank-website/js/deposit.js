document.getElementById('deposit').addEventListener('click',function(){
    // taking input value
    const dep=document.getElementById('get-dep');
    const dep_1=dep.value;
    const dep_2=parseFloat(dep_1);
    if(isNaN(dep_2)){
        alert('please give a number value');
        return;
    }
// adding deposit value to deposit
    const store=document.getElementById('deposit-total');
    const store_1=store.innerText;
    const store_2=parseFloat(store_1);
    const sum=dep_2+store_2;
    store.innerText=sum;

    // adding deposit value to total
    const balance=document.getElementById('Balance');
    const balance_1=balance.innerText;
    const balance_2=parseFloat(balance_1);
    const sum1=balance_2+dep_2;
    balance.innerText=sum1;

    dep.value='';
})