const roadmap = [
  {
    title: "Components",
    text: "A component is a reusable UI block. Example: Navbar, Button, Product Card, Footer."
  },
  {
    title: "JSX",
    text: "JSX lets us write HTML-like code inside JavaScript. It makes UI creation simple."
  },
  {
    title: "Props",
    text: "Props pass data from parent to child. Example: Product name and price sent to ProductCard."
  },
  {
    title: "useState",
    text: "useState stores changing data. Example: cart count, likes, dark mode, form input."
  },
  {
    title: "Events",
    text: "Events handle user actions. Example: clicking Add to Cart or typing in search."
  },
  {
    title: "Conditional Rendering",
    text: "Show UI based on condition. Example: if logged in show Dashboard, else show Login."
  },
  {
    title: "Lists & Keys",
    text: "Use map() to display many items. Example: product list, student list, employee table."
  },
  {
    title: "Forms",
    text: "Forms collect user input. Example: login, register, feedback and contact forms."
  },
  {
    title: "useEffect",
    text: "useEffect runs side effects. Example: fetch weather data when page loads."
  },
  {
    title: "API Calls",
    text: "API calls bring real data from backend. Example: products from server, movie search results."
  },
  {
    title: "Context API",
    text: "Context shares data globally. Example: theme, login user, language."
  },
  {
    title: "Redux Toolkit",
    text: "Redux manages big app state. Example: cart, wishlist, notifications and authentication."
  }
];

const roadmapCards = document.getElementById("roadmapCards");

roadmap.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "road-card";
  card.innerHTML = `
    <div class="step-num">${index + 1}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
  roadmapCards.appendChild(card);
});

const examples = {
  amazon: {
    title: "Amazon Cart Example",
    content: "ProductCard shows product data using props. When user clicks Add to Cart, state changes. Cart count in Navbar updates.",
    flow: "Product → Add to Cart Click → State/Redux Updates → Navbar Cart Count Changes"
  },
  weather: {
    title: "Weather App Example",
    content: "When the page loads, useEffect calls a weather API. The API response is stored in state and displayed on screen.",
    flow: "Page Load → useEffect Runs → API Call → State Updates → Weather UI Shows"
  },
  login: {
    title: "Login Page Example",
    content: "Form input is stored using useState. After login, conditional rendering shows Dashboard instead of Login page.",
    flow: "User Types → State Stores Input → Submit → Login Status Changes → Dashboard Shows"
  },
  dark: {
    title: "Dark Mode Example",
    content: "Theme value is stored in state. When user clicks toggle, class changes and the entire UI changes.",
    flow: "Click Toggle → Theme State Changes → CSS Class Changes → Page Mood Changes"
  }
};

function showExample(type) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const data = examples[type];
  document.getElementById("exampleBox").innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.content}</p>
    <div class="flow-line">${data.flow}</div>
  `;
}

showExample("amazon");

let likes = 0;
function increaseLike() {
  likes++;
  document.getElementById("likeCount").innerText = likes;
}

let loggedIn = false;
function toggleLogin() {
  loggedIn = !loggedIn;
  document.getElementById("loginBtn").innerText = loggedIn ? "Logout" : "Login";
  document.getElementById("loginStatus").innerText = loggedIn
    ? "Welcome student! Dashboard is visible."
    : "You are logged out.";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

const quiz = [
  {
    q: "Which hook is used to store changing data?",
    options: ["useEffect", "useState", "useMap"],
    answer: "useState"
  },
  {
    q: "Props are used to...",
    options: ["Pass data", "Delete components", "Style CSS"],
    answer: "Pass data"
  },
  {
    q: "Which concept is useful for API calls?",
    options: ["useEffect", "Props", "JSX only"],
    answer: "useEffect"
  },
  {
    q: "Which is best for large cart state?",
    options: ["Redux Toolkit", "Only CSS", "HTML table"],
    answer: "Redux Toolkit"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const item = quiz[currentQuestion];
  document.getElementById("quizQuestion").innerText = item.q;
  document.getElementById("quizResult").innerText = "";

  const optionsBox = document.getElementById("quizOptions");
  optionsBox.innerHTML = "";

  item.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quiz[currentQuestion].answer;
  document.getElementById("quizResult").innerText =
    selected === correct ? "Correct ✅" : `Not quite. Correct answer: ${correct}`;
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quiz.length;
  loadQuestion();
}

loadQuestion();
