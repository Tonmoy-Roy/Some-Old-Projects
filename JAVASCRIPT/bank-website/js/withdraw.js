// subtracting value from total
document.getElementById('withdraw1').addEventListener('click', function () {
    const get_withdraw = document.getElementById('get-with');
    const get_withdraw1 = get_withdraw.value;
    const get_withdraw2 = parseFloat(get_withdraw1);
    if(isNaN(get_withdraw2)){
        alert('please give a number value');
        get_withdraw.value = '';
        return;
    }

    const get_total_balance = document.getElementById('Balance');
    const get_total_balance1 = get_total_balance.innerText;
    const get_total_balance2 = parseFloat(get_total_balance1);

    if (get_withdraw2 > get_total_balance2){
        alert('do not have enough money to withdraw');
        get_withdraw.value = '';
        return;
    }
    //adding withdraw value to withdraw
    const withdraw = document.getElementById('Withdraw');
    const withdraw_1 = withdraw.innerText;
    const withdraw_2 = parseFloat(withdraw_1);
    const total_withdraw = get_withdraw2 + withdraw_2;
    withdraw.innerText = total_withdraw;

    // subtracting withdraw value from total balance
    const get_total_deposit = document.getElementById('deposit-total');
    const get_total_deposit1 = get_total_deposit.innerText;
    const get_total_deposit2 = parseFloat(get_total_deposit1);
    const subtract = get_total_deposit2 - total_withdraw;
    get_total_balance.innerText = subtract;

    get_withdraw.value = '';
})
