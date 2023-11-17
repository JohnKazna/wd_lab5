document.addEventListener('DOMContentLoaded', function() {
    var block3 = document.getElementById('block3');
    var block6 = document.getElementById('block6');

    var block3 = block3.inner;
    var block6 = block6.inner;

    block3.inner = block6;
    block6.inner = block3;
});
  
//task2
function calculateParallelogramArea(width, height) {
    var area = width * height;
    return area;
}

const areaButtonClick = () => {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const areaResult = document.getElementById('areaResult');

    if (!isNaN(width) && !isNaN(height) && height > 0 && width > 0) {
        const area = calculateParallelogramArea(width, height);
        areaResult.textContent = `Area: ${area.toFixed(2)}`;
    } else {
        areaResult.textContent = 'Please enter valid width and height.';
    }
};

//task3
const findMaxDigitHandler = () => {
    const inputValue = document.getElementById('numberInput').value;
    
    const maxDigit = Math.max(...Array.from(inputValue.toString()).map(Number));

    document.cookie = `maxDigit=${maxDigit}`;
    
    alert(`Максимальна цифра у числі ${inputValue} - ${maxDigit}`);
}

//task4
function setAlignment(value) {
    var blocksToAlign = [document.getElementById('block2'), document.getElementById('block4'), document.getElementById('block5')];
    blocksToAlign.forEach(function(block) {
        block.style.justifyItems = value;
    });
}

function handleMouseOut() {
    var radios = document.getElementsByName('alignment');
    var selectedAlignment = '';
    radios.forEach(function(radio) {
        if (radio.checked) {
            selectedAlignment = radio.value;
        }
    });

    localStorage.setItem('selectedAlignment', selectedAlignment);

    setAlignment(selectedAlignment);
}

function deleteCookies(){
    document.cookie = 'maxDigit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    location.reload(); // Перезавантажуємо сторінку
}

window.onload = function() {
    //task3
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const maxDigitCookie = cookies.find(cookie => cookie.startsWith('maxDigit='));

    if (maxDigitCookie) {
        const maxDigit = maxDigitCookie.split('=')[1];
        alert(`Збережене значення в cookies: Максимальна цифра - ${maxDigit}`);

        if (confirm('Натисніть "OK", щоб видалити cookies')) {
            deleteCookies();
        } else {
            window.onbeforeunload = null;
        }
    }

    //task4
    var savedAlignment = localStorage.getItem('selectedAlignment');

    if (savedAlignment) {
        var radios = document.getElementsByName('alignment');
        radios.forEach(function(radio) {
            if (radio.value === savedAlignment) {
                radio.checked = true;
            }
        });
        setAlignment(savedAlignment);
    }
}


  
