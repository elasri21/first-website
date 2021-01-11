// show all global phone numbers
const globalNumbers = document.querySelector('.other-numbers a');
const showNumber = document.querySelector('.other-numbers');
const listOfNumbers = ['+2128976543675', '+2123456438907', '+2123465789076'];
globalNumbers.addEventListener('click', function(e){
    e.preventDefault();
    let msg = '';
    for(let i = 0; i< listOfNumbers.length; i++){
        msg += listOfNumbers[i] + '<br>'
    }
    showNumber.innerHTML = msg;
});
// task ended