generateFiveUnique();



function generateFiveUnique(){
    let arrayNum = [];

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
    const cont = document.querySelector('.container');
    const newBox = document.createElement('div');
    newBox.classList.add('border', 'w-25', 'p-2', 'm-2', 'text-center');
    newBox.innerHTML = num;
    cont.appendChild(newBox);
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}