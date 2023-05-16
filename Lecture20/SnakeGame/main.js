const canvas = document.getElementById("canvas");
 const pen = canvas.getContext("2d");
 pen.fillStyle="red";

 const cs = 67;
 const W = 1200;
 const H = 600;
 let food = null;
 let count = 0

 console.log(pen)
 



class Snake{

    constructor(){

        this.init_len = 5;
        this.direction="right";
        this.cells = [];
       
    }

    creatSnake(){

        for(let i = 0; i < this.init_len; i++){

            this.cells.push({

                x: i,
                y: 0
            })
        }
    }

    drawSnake(){



        for(let i = 0; i < this.cells.length; i++){

            const cell = this.cells[i];

            if( i === this.cells.length -1){

                pen.fillStyle = "yellow"
            }else{

                pen.fillStyle = "red"
            }

            pen.fillRect(cell.x*cs, cell.y*cs, cs-2,cs-2)


        }
    }

    updateSnake(){

        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;
        
        let nextX  = headX + 1;
        let nextY = headY;

        if(food.x === headX && food.y === headY){

            food = randomFood();
            count++
        }
        else{

            this.cells.shift()
        }

        // check lgao body ke sath collision

        for(let i = 0; i < this.cells.length -1; i++){

            const cell = this.cells[i];
             if( cell.x === headX &&  cell.y === headY){

                gameOver();
                return;
             }
        }

        
        if( this.direction  === "left"){

            nextX = headX - 1;
            nextY = headY;  
            if( nextX*cs < 0) {
                gameOver()
            }
        }

        else if( this.direction === "up"){

            nextX = headX;
            nextY = headY -1;

            if(nextY*cs < 0){

                gameOver()
            }
         
        }

        else if( this.direction === "down"){

            nextX = headX;
            nextY = headY  + 1;

            if(nextY*cs > H){

                gameOver()
            }
        }
        else if( this.direction === "right"){

            nextX = headX + 1;
            nextY = headY;

            if(nextX*cs > W){

                gameOver()
            }
        }



        this.cells.push({

            x: nextX,
            y: nextY
        });

    


    }

    changeDirection(direction){

        this.direction = direction;
    }


}

const snake = new Snake();







// The will intialise the game

function init(){

snake.creatSnake();
snake.drawSnake();
 food = randomFood();
 console.log(food);

function keypressed(e){

    if(e.key === "ArrowLeft"){

        snake.changeDirection("left")
    }
    else if( e.key === "ArrowRight"){

        snake.changeDirection("right")
    }
    else if( e.key === "ArrowUp"){

        snake.changeDirection("up")
    }

    else if( e.key === "ArrowDown"){

        snake.changeDirection("down")
    }


}




document.addEventListener("keydown", keypressed)



}



// this will draw the updated game

function draw(){
    
    pen.clearRect(0,0,W,H);

    pen.fillStyle = "red"
    pen.font = "40px sans-serif"
    pen.fillText (`Score : ${count}`, 30 , 30)
    pen.fillRect(food.x*cs, food.y*cs, cs, cs);
    pen.fillStyle = "yellow"
  
    snake.drawSnake();



    // pen.clearRect(0, 0, 1200, 600)
    // pen.fillRect(init_x,init_y, 20,20)

}

// this will update the values of the snake

function update(){

    snake.updateSnake()

    // init_x = init_x + 20;

}

// game loop

function gameLoop(){

    update();
    draw();


}


function randomFood(){

    const foodX = Math.floor(Math.random() * (W - cs)/cs )
    const foodY = Math.floor(Math.random() * (H - cs)/cs );

    const food = {

        x : foodX,
        y: foodY
    }

    return food;
 
}




init()

const id = setInterval(gameLoop, 200)

function gameOver(){

    clearInterval(id)
}




