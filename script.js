const input1 = document.getElementById('inputCalculo');
const input2 = document.getElementById('inputCalculo2');
const btn = document.getElementById('button-primary');
const result = document.getElementById('result');


btn.addEventListener('click', btnClick);

function btnClick() {
    console.log('clic on the button')
    let res = (input1.value + input2.value);
    result.innerHTML = 'Resultado: ' + res;
    
}


