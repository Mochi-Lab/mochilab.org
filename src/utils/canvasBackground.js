export default function canvasBackground(document) {
  var canvas = document.getElementById('bg-landing-page'),
    ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var stars = []; // Array that contains the stars
  // FPS = 60, // Frames per second
  var number = (canvas.width + canvas.height - 100) / 10; // Number of stars
  // var mouse = {
  //   x: 0,
  //   y: 0
  // }; // mouse location

  // Push stars to array
  for (var i = 0; i < number; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
      speed: Math.floor(Math.random() * 51) + 25,
    });
  }

  function drawStars() {
    stars.map((star) => {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fill();
      // ctx.fillStyle = 'red';
      // ctx.stroke();
    });
  }

  function drawLines() {
    stars.map((starI) => {
      ctx.moveTo(starI.x, starI.y);
      // distance can connect from mouse to dots
      // if (distance(mouse, starI) < 250) ctx.lineTo(mouse.x, mouse.y);

      stars.map((starII) => {
        // distance can connect between the dots
        if (distance(starI, starII) < 60) ctx.lineTo(starII.x, starII.y);
      });
    });
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.stroke();
  }

  // Draw the scene
  function draw() {
    // Draw background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = 'lighter';

    // Draw the stars
    drawStars();

    // Draw line connecting star and mouse
    ctx.beginPath();
    drawLines();
  }

  // Update star locations
  function update() {
    stars.map((star) => {
      // star.x += star.vx / FPS;
      // star.y += star.vy / FPS;
      star.x += star.vx / star.speed;
      star.y += star.vy / star.speed;

      if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
      if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
    });
  }

  // canvas.addEventListener('mousemove', function (e) {
  //   mouse.x = e.clientX;
  //   mouse.y = e.clientY;
  // });

  function distance(point1, point2) {
    var xs = 0,
      ys = 0;

    xs = (point2.x - point1.x) ** 2;
    ys = (point2.y - point1.y) ** 2;

    return Math.sqrt(xs + ys);
  }

  // Update and draw
  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }

  tick();
}
