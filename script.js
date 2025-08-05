function animateClick(button) {
  button.classList.remove("animate");
  void button.offsetWidth; // Force reflow
  button.classList.add("animate");
}

function showSurprise(id) {
  const body = document.body;
  const surpriseBox = document.getElementById("surpriseBox");
  const surpriseImg = document.getElementById("surpriseImg");
  const messageText = document.getElementById("surpriseText");

  const data = {
    1: {
      img: "https://images.indianexpress.com/2019/08/raksha-bandhan_759.jpg?w=414",
      message: "💖 You are the sweetest brother/sister! On this Rakhi, I wish you happiness and success always. 🎁",
      background: "bg-one"
    },
    2: {
      img: "https://media.istockphoto.com/id/1403408349/vector/happy-raksha-bandhan-cartoon-illustration-with-sister-tying-rakhi-on-her-brothers-wrist-to.jpg?s=612x612&w=0&k=20&c=x5jGaeKS6b5ZKUZRDmB2HOno4_NNDACWuW8dBOZXGpo=",
      message: "🌟 May the sacred thread of love always bind us with happiness and joy. Happy Rakhi! 🎉",
      background: "bg-two"
    },
    3: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9YwgNIfEjC0U6s3I7nhVhT7QxBSqosszLLL5YrtG-alaW6JQ0AQlg1E&s",
      message: "❤️ Through every fight, every prank, and every smile — I'm blessed to have you. Happy Raksha Bandhan! ❤️",
      background: "bg-three"
    },
    4: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGVppNbRvN_V66Nz_NjDKklgm2rLQzv2RWw&s",
      message: "🌸 Distance means nothing when hearts are tied with love. Sending warm wishes this Raksha Bandhan! 🌸",
      background: "bg-four"
    }
  };

  if (data[id]) {
   
    body.className = "";
    body.classList.add(data[id].background);

  
    surpriseImg.src = data[id].img;
    messageText.innerHTML = data[id].message;

    
    surpriseBox.classList.remove("animate");
    void surpriseBox.offsetWidth;
    surpriseBox.classList.add("animate");

    surpriseBox.style.display = "block";

    launchConfetti();
  }
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 150;
  const confetti = [];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCount,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    });

    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.x += Math.sin(c.d);
      c.tilt = Math.sin(c.y / 10) * 10;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  loop();
}
