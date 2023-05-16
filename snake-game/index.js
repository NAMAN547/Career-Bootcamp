const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class SnakeGame {
    constructor(ctx, width, height, noOfColumns, noOfRows) {
        this.ctx = ctx;
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;
        this.noOfColumns = noOfColumns;
        this.noOfRows = noOfRows;
        this.columnSize = width/noOfColumns;
        this.rowSize = height/noOfRows;
        this.direction = "left";
        this.foodAvailable = undefined;
        this.snakeCoordinates = [{x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5}, {x: 1, y: 6}]
    }

    drawBackground(color="yellow") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    drawBlock(x, y, color="red") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.columnSize, y * this.rowSize, x+1 * this.columnSize, y+1 * this.rowSize);
    }

    drawSnake() {
        for(const coordinate of this.snakeCoordinates) {
            this.drawBlock(coordinate.x, coordinate.y)
        }
    }

    moveSnake() {
        const head = Object.assign({}, this.snakeCoordinates[this.snakeCoordinates.length-1]);
        if(this.foodAvailable && this.foodAvailable.x === head.x && head.y == this.foodAvailable.y) {
            this.foodAvailable = undefined;
        } else {
            this.snakeCoordinates.shift();
        }
        if(this.direction === "bottom") {
            head.y += 1;
            head.y %= this.noOfRows;
        }
        if(this.direction === "right") {
            head.x += 1;
            head.x %= this.noOfColumns;
        }
        if(this.direction === "top") {
            head.y -= 1;
            if(head.y === -1) {
                head.y = this.noOfRows -1;
            }
        }
        if(this.direction === "left") {
            head.x -= 1;
            if(head.x === -1 ) {
                head.x = this.noOfColumns - 1;
            }
        }
        this.snakeCoordinates.push(head);
    }
    getRandomCoordinates(min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    generateFood() {
        this.foodAvailable = {
            x: this.getRandomCoordinates(0, this.noOfRows -1),
            y: this.getRandomCoordinates(0, this.noOfColumns -1),
        }
    }

    start() {
        const interval = setInterval(() => {
            this.drawBackground();
            this.drawSnake();
            this.moveSnake();
            if(!this.foodAvailable) {
                this.generateFood();
            }
            this.drawBlock(this.foodAvailable.x, this.foodAvailable.y, "green")
        }, 500);
    }
}

const snakeGame = new SnakeGame(ctx, 600, 600, 20, 20);
snakeGame.start();

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 39) {
        snakeGame.direction="right";
    }
    if(e.keyCode === 40) {
        snakeGame.direction="bottom";
    }
    if(e.keyCode === 38) {
        snakeGame.direction="top";
    }
    if(e.keyCode === 37) {
        snakeGame.direction="left";
    }
})