import utils from "./utils";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const renderingContext = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Object {
  x: number;
  y: number;
  radius: number;
  color: string;
  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    renderingContext.beginPath();
    renderingContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    renderingContext.fillStyle = this.color;
    renderingContext.fill();
    renderingContext.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let objects;
function init() {
  objects = [];

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  renderingContext.clearRect(0, 0, canvas.width, canvas.height);

  renderingContext.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();
