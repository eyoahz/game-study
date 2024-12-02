/**
 * @type {HTMLCanvasElement} 定义一个类型为HTMLCanvasElement的变量
 * */
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
/*
const enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}*/

class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    update() {
        this.x++;
        this.y++;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const enemy1 = new Enemy(10, 50, 100, 100);
const enemy2 = new Enemy(10, 850, 100, 100);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.update();
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}
animate()