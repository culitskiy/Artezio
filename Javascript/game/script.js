window.onload = function () {

    let counter = [];
    let field = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
                19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,];
    let playerNumber = 2;
    let player1Point = 0;
    let player2Point = 0;

    

    function playerChange(){
        const player = document.querySelector(".player");
        
        player.innerHTML = `Player${playerNumber} ходи`;
        if(playerNumber == 1){
            playerNumber = 2
        }else {
            playerNumber = 1
        }
    }

    function counterPoint(){
        const player1Line = document.querySelector(".playerPoint1");
        const player2Line = document.querySelector(".playerPoint2");
        
        if (playerNumber == 2){
            player1Point += 1;
            player1Line.innerHTML = `Player1: ${player1Point}`;
        }else{
            player2Point += 1;
            player2Line.innerHTML = `Player2: ${player2Point}`;
        }
    }

    function checkWin(){
        if(player1Point + player2Point == 36){
            
            alert(`Победил ${player1Point>player2Point ? '1': "2"} игрок!
             Его результат ${player1Point>player2Point ? player1Point : player2Point}`);
             }
        
    }

    function checkShow(){
        
        let img = document.querySelectorAll('img');
        
        if (counter.length >= 2 && counter.some((el) => counter[1] !== el)){
            setTimeout(() => {
                
                for (let i = 0; i < img.length-1; i++){
                    if(img[i].attributes.src.nodeValue !== 'img/cross.png'){
                    img[i].setAttribute('src', `img/mops.jpg`);
                    
                    }
                }
                counter = [];
                playerChange();
               
            }, 2000);
        }
        console.log(counter);
        
        }

    function checkRepeat(){
        let img = document.querySelectorAll('img');
       
        if(counter.length >=2 && ((counter[counter.length - 1] - counter[0] == 18) ) || 
            counter[0] - counter[counter.length - 1] === 18){
            for(let i = 0; i < img.length; i++){
                if (img[i].attributes.src.nodeValue == `img/${counter[0]}.png`
                    || img[i].attributes.src.nodeValue == `img/${counter[counter.length - 1]}.png`){
                    img[i].setAttribute('src', 'img/cross.png');
                    counterPoint();
                    
                    
                }
            }
            counter = [];
        }else{checkShow()};
    }


   
    
    function drow(){
        for( let i = 0; i < 36; i++){
        
        const table = document.querySelector(".table");
        const image = document.createElement('img');
        image.setAttribute('src', `img/mops.jpg`);
        
        
        image.onclick = function showCard(){
            if(counter.length < 2 && counter[0] !== field[i]){
            image.setAttribute('src', `img/${field[i]}.png`);
            counter.push(field[i]);
            // checkShow();
            checkRepeat();
            checkWin();
            
            }
        };
        table.appendChild(image);
    
    }}
    drow();
    
    function reset(){
        const table = document.querySelector(".table");
        table.innerHTML='';
        for (let i = field.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = field[i];
            field[i] = field[j];
            field[j] = temp;
            field[i][1] = 0;
        }
        console.log(field);
        playerNumber = 2;
        player1Point = 0;
        player2Point = 0;

        const player1Line = document.querySelector(".playerPoint1");
        const player2Line = document.querySelector(".playerPoint2");
        const player = document.querySelector(".player");

        player.innerHTML = "Player1 ходи";
        player1Line.innerHTML = "Player1: 0";
        player2Line.innerHTML = "Player2: 0"

        drow();
    }
    const resetBtn = document.querySelector("button");
    resetBtn.addEventListener('click' , reset);

};