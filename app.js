const board = document.querySelector('#board');
const result = document.querySelector('#result');
const o = document.querySelector('#o');
const x = document.querySelector('#x');
const positions = document.querySelectorAll('.position');
const modal = document.querySelector('.modal');

var clicked = []
var term = 1; // if odd then X term else O tern 
var image = '';
var map = [['', '', ''],['', '', ''],['', '', '']];
var winner = undefined;

o.addEventListener('click', () => {
    term = 12;
    result.innerHTML = "O's Term";
    modal.style.display = "none";
});

x.addEventListener('click', () => {
    term = 1;
    result.innerHTML = "X's Term";
    modal.style.display = "none";
});


board.addEventListener('click', (e) => {
    if(!winner){
        const target =  e.target.id;
        switch(target){

            case 'pos1':
                setPosition({ position : "pos1", index : 0, row : 0, col : 0, });
                break;

            case 'pos2':
                setPosition({ position : "pos2", index : 1, row : 0, col : 1, });
                break;

            case 'pos3':
                setPosition({ position : "pos3", index : 2, row : 0, col : 2, });
                break;

            case 'pos4':
                setPosition({ position : "pos4", index : 3, row : 1, col : 0, });
                break;

            case 'pos5':
                setPosition({ position : "pos5", index : 4, row : 1, col : 1, });
                break;

            case 'pos6':
                setPosition({ position : "pos6", index : 5, row : 1, col : 2, });
                break;

            case 'pos7':
                setPosition({ position : "pos7", index : 6, row : 2, col : 0, });
                break;

            case 'pos8':
                setPosition({ position : "pos8", index : 7, row : 2, col : 1, });
                break;

            case 'pos9':
                setPosition({ position : "pos9", index : 8, row : 2, col : 2, });
                break;
        }
    }
    check();
    if(term == 10 || term == 21){
        result.innerHTML = "";
    }
    if(winner){
        result.innerHTML = winner + " Won The Game";
        document.querySelector('small').style.display = 'block';
    }
    
});


function setPosition(pos){
    if(!clicked.includes(pos.position)){
        clicked.push(pos.position);
        if(term%2 == 0){
            image = 'o.png';
            map[pos.row][pos.col] = 'O';
            result.innerHTML = "X's Term";
        }else{
            image = 'x.png';
            map[pos.row][pos.col] = 'X';
            result.innerHTML = "O's Term";
        }
        term++;
        positions[pos.index].style.backgroundImage = "url('" + image + "')";
    }      
}


function check(){
    if(map[0][0] && map[1][1] && map[2][2] && map[0][0] == map[1][1] && map[1][1] == map[2][2]){
        winner = map[0][0];
    }else if(map[0][2] && map[1][1] && map[2][0] && map[0][2] == map[1][1] && map[1][1] == map[2][0]){
        winner = map[0][2];
    }else if(map[0][0] && map[1][0] && map[2][0] && map[0][0] == map[1][0] && map[1][0] == map[2][0]){
        winner = map[0][0];
    }else if(map[0][1] && map[1][1] && map[2][1] && map[0][1] == map[1][1] && map[1][1] == map[2][1]){
        winner = map[0][1];
    }else if(map[0][2] && map[1][2] && map[2][2] && map[0][2] == map[1][2] && map[1][2] == map[2][2]){
        winner = map[0][2];
    }else if(map[0][0] && map[0][1] && map[0][2] && map[0][0] == map[0][1] && map[0][1] == map[0][2]){
        winner = map[0][0];
    }else if(map[1][0] && map[1][1] && map[1][2] && map[1][0] == map[1][1] && map[1][1] == map[1][2]){
        winner = map[1][0];
    }else if(map[2][0] && map[2][1] && map[2][2] && map[2][0] == map[2][1] && map[2][1] == map[2][2]){
        winner = map[2][0];
    }
}