/**
 * @type {HTMLCanvasElement} 定义一个类型为HTMLCanvasElement的变量
 * */
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 5;
const enemiesArray = [];
let gameFrame = 0;

class Enemy {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = `assets/enemy1.png`
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
        this.x += this.speed;
        this.y += this.speed;
        if(gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for(let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT))
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++
    requestAnimationFrame(animate);
}
animate()