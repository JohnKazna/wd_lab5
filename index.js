document.addEventListener('DOMContentLoaded', function() {
    var block3Element = document.getElementById('block3');
    var block6Element = document.getElementById('block6');

    var block3HTML = block3Element.innerHTML;
    var block6HTML = block6Element.innerHTML;

    block3Element.innerHTML = block6HTML;
    block6Element.innerHTML = block3HTML;
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

function deleteCookies(){
    document.cookie = 'maxDigit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    location.reload(); 
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

window.onload = function() {
    //task3
    const cookies = document.cookie;
    if(cookies.includes('maxDigit')) {
        const maxDigitCookie = parseInt(cookies.split('; ').find(row => row.startsWith('maxDigit')).split('=')[1]);

        if(maxDigitCookie){
            alert(`Збережене значення в cookies: Максимальна цифра - ${maxDigitCookie}`);

            if(confirm('Натисніть "OK", щоб видалити cookies')){
                document.cookie = 'maxDigit=0';
                location.reload();
            }
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
