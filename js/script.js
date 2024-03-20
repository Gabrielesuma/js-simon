let arrayNum = [];
let newInputs;
const button = document.getElementById('button');

generateFiveUnique();

setTimeout(genInput, 5000);

button.addEventListener('click', function(){
    equal(newInputs);
});



function equal(newInputs){
    let arrayEqual = [];
    if(arrayNum.includes(newInputs.innerHTML)){
        arrayEqual.push(newInputs.innerHTML);
    }

    return arrayEqual;
}


function generateFiveUnique(){

    while(arrayNum.length < 5){
        let numRandom = getRandomInt(1, 100);
        
        if(!arrayNum.includes(numRandom)){
            arrayNum.push(numRandom);
            genBox(numRandom);
        }
    }
    return genBox;
}

function genBox(num){
    const cont = document.getElementById('boxes');
    const newBox = document.createElement('div');
    newBox.classList.add('border', 'w-25', 'p-2', 'm-2', 'text-center');
    newBox.innerHTML = num;
    cont.appendChild(newBox);
}

function genInput(cont2){
    const cont = document.getElementById('boxes');
    cont.classList.add('d-none');
    for(i = 0; i < 5; i++){
        const cont2 = document.getElementById('inputs');
        newInputs = document.createElement('input');
        newInputs.classList.add('form-control', 'm-2');
        cont2.appendChild(newInputs);
    }
    return cont2;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}