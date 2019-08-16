
//Model 
//for storing array data
var storeNum = new Array();
var storeBingo =new Array();
var currentWin = new Array();
var winConfirmed = new Array(); // to hide boxes which have won

var x = 0;
var y= 0;

//for win condition
var currentBingo = new Array();


//View - change display, more graphics, timer
function confirmWin(){
    var i = 0;
    for (i=0; i <= winConfirmed.length; i++){
    if (currBox == winConfirmed[i]){ continue;
    }
        
else if (currBox == currentWin[0]){
    document.getElementById(currBox).id = "winCon";
    winConfirmed[i] = currBox;
    
    currentWin.shift();
                    }
    }
}

//Control - game rules, win / lose conditions, space bar
//Check win

function checkWin(){
    var thisBox = 0; // identify all boxes in question
    //identify if box in question matches current displayed bingo list.
    
do{ //runs through till all 25 cells have been cleared
    var i=0;
   
  for (i=0; i< 5;i++){
     var cb = currentBingo[i];//runs through all currently displayed bingo
     var sn = storeNum[thisBox];// gets single cell in bingo card
     
      //stores all currently correct answers
      if(sn == cb){
    var currBox = "Box"+thisBox;
      currentWin[i] = currBox;
          // if not true continue, but if true cut.
    }
      else
      {continue;
      }
  }
    thisBox ++;
}while(thisBox<25)   
    
}



 //Bingo Caller

//Model

var usedBingos = new Array(78);
var usedNums = new Array(78);
    
//control
function changeBingo() {
      
      newBingo();
      newCard();
     
      setInterval(newBingo, 5000); // resets Bingo at 10 secs interval
      setInterval(checkWin, 1500); // checks if win condition available
    setInterval(confirmWin, 1500);
}

// sets out 5 numbers in order 
function newBingo() {
	for(var i=0; i < 5; i++) {
		assignBingo(i);
	}
}

//assigns a randomized number per box
function assignBingo(thisBox) {
	var currBox = "bingo"+thisBox;

	var bingoSpace =new Array(0,1,2,3,4);
	var newBingoNum;
	do {
        
		newBingoNum =(bingoSpace[thisBox]) + getRandom();
	}
	while (usedBingos[newBingoNum]);
	//view
	usedBingos[newBingoNum] = true;
	document.getElementById(currBox).innerHTML = newBingoNum;
   
    //arry storeBingo
    
    storeBingo[y] = newBingoNum;
    var i = 0;
    currentBingo[i] = newBingoNum;
    i++;
    y++;
  
}

function anotherBingo() {
	for(var i=1; i<usedBingos.length; i++) {
	usedBingos[i] = false;
	}
	
	newBingo();
}    


//Card Caller
function newCard() {
	
	for(var i=0; i < 24; i++) {  
		assignBoxes(i);
	}
}

function getRandom() {
	return Math.floor((Math.random() * 78) + 1);
	
}


function assignBoxes(thisBox) {
	var currBox = "Box"+thisBox;
    var newNum;
var colSpace =new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
	
	do {
		newNum =(colSpace[thisBox]) + getRandom();
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currBox).innerHTML = newNum;
    //arrayStoreNum
    
    storeNum[x] = newNum;
    x++;
    
    
}


