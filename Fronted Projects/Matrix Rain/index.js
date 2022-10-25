function Matrix(canvasName) {
  const { floor: f, random: rand } = Math;
  let canvas = document.getElementById(canvasName);

  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.2, "yellow");
  gradient.addColorStop(0.4, "green");
  gradient.addColorStop(0.6, "cyan");
  gradient.addColorStop(0.8, "blue");
  gradient.addColorStop(1, "magenta");

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.font_size = this.fontSize;
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    draw(context) {
      this.text = this.characters.charAt(f(rand() * this.characters.length));
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && rand() > 0.95) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 20;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
    #initialize() {
      for (let i = 0; i < this.columns + 1; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    resize(width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
  }

  const effect = new Effect(canvas.width, canvas.height);

  let lastTime = 0;
  const FPS = 62;
  const nextFrame = 1000 / FPS;
  let timer = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    if (timer > nextFrame) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.textAlign = "center";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.fillStyle = "#0aff0a";
      ctx.fillStyle = gradient;
      ctx.font = effect.fontSize + "px monospace";
      effect.symbols.forEach((symbol) => symbol.draw(ctx));
      timer = 0;
    } else {
      timer += deltaTime;
    }

    requestAnimationFrame(animate);
  }

  animate(0);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.2, "yellow");
    gradient.addColorStop(0.4, "green");
    gradient.addColorStop(0.6, "cyan");
    gradient.addColorStop(0.8, "blue");
    gradient.addColorStop(1, "magenta");
    effect.resize(canvas.width, canvas.height);
  });
}

Matrix("canvas");
