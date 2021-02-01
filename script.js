function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        console.log('shorter pin', pin);
        return getPin();
    }
}


function pinBtn() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

const digitsContainer = document.getElementById('digitsContainer');
digitsContainer.addEventListener('click', function (event) {
    console.log('digitsContainer clicked');
    const digit = event.target.innerText;
    console.log(digit);
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typeInput = document.getElementById('typeInput');
            typeInput.value = " ";
        }
    } else {
        console.log(digit);
        const typeInput = document.getElementById('typeInput');
        typeInput.value = typeInput.value + digit;
    }
})



function matchPin() {
    const pinInput = document.getElementById('pin').value;
    const typeInput = document.getElementById('typeInput').value;
    if (pinInput === typeInput) {
        matchResult('none', 'block')
    } else {
        matchResult('block', 'none');
    }

}

function matchResult(correct, incorrect) {
    document.getElementsByClassName('notify')[0].style.display = correct;
    document.getElementsByClassName('notify')[1].style.display = incorrect;
}