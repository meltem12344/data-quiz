(function () {
  "use strict";

  const QUIZ_LENGTH = 3;
  const OPTION_LETTERS = ["A", "B", "C", "D"];
  const LEVEL_ORDER = ["easy", "medium", "hard"];
  const LEVEL_UI = [
    { short: "KOLAY", label: "● KOLAY", color: "#00e676" },
    { short: "ORTA", label: "● ORTA", color: "#ffc107" },
    { short: "ZOR", label: "● ZOR", color: "#ff3d71" },
  ];
  const CONFETTI_COLORS = ["#00e5ff", "#a259ff", "#ff3d71", "#00e676", "#ffc107"];

  const $ = (id) => document.getElementById(id);

  const bank = () => window.questionBank;
  let currentQuestions = [];
  let currentIndex = 0;
  let score = 0;

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function buildRound() {
    const pool = bank();
    return LEVEL_ORDER.map((level, i) => {
      const raw = pickRandom(pool[level]);
      const ui = LEVEL_UI[i];
      return {
        ...raw,
        level,
        levelLabel: ui.label,
        levelColor: ui.color,
        levelShort: ui.short,
      };
    });
  }

  function showScreen(screen) {
    $("start-screen").style.display = screen === "start" ? "block" : "none";
    $("quiz-screen").style.display = screen === "quiz" ? "block" : "none";
    $("result-screen").style.display = screen === "result" ? "block" : "none";
  }

  function startQuiz() {
    currentQuestions = buildRound();
    currentIndex = 0;
    score = 0;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const pct = (currentIndex / QUIZ_LENGTH) * 100;

    $("q-num").textContent = String(currentIndex + 1);
    $("progress-bar").style.width = pct + "%";

    const badge = $("diff-badge");
    badge.textContent = q.levelLabel;
    badge.style.color = q.levelColor;
    badge.style.background = q.levelColor + "20";
    badge.style.border = "1px solid " + q.levelColor + "50";

    $("q-label").textContent =
      "// SORU_" + (currentIndex + 1) + " — " + q.levelShort;
    $("question-text").textContent = q.q;

    const grid = $("options-grid");
    grid.innerHTML = "";

    q.opts.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML =
        '<span class="option-letter">' +
        OPTION_LETTERS[i] +
        "</span>" +
        opt;
      btn.addEventListener("click", () => selectAnswer(i));
      grid.appendChild(btn);
    });

    const fb = $("feedback-box");
    fb.className = "feedback-box";
    fb.innerHTML = "";

    const next = $("next-btn");
    next.className = "next-btn";
  }

  function selectAnswer(selected) {
    const q = currentQuestions[currentIndex];
    const btns = document.querySelectorAll(".option-btn");
    btns.forEach((b) => {
      b.disabled = true;
    });

    const isCorrect = selected === q.answer;
    if (isCorrect) score++;

    btns[selected].classList.add(isCorrect ? "correct" : "wrong");
    if (!isCorrect) {
      btns[q.answer].classList.add("reveal-correct");
    }

    const fb = $("feedback-box");
    fb.innerHTML =
      '<span class="icon">' +
      (isCorrect ? "✅" : "❌") +
      "</span>" +
      q.feedback;
    fb.className = "feedback-box show";

    const next = $("next-btn");
    next.className = "next-btn show";
    next.textContent =
      currentIndex < QUIZ_LENGTH - 1 ? "DEVAM ET →" : "SONUCU GÖR →";
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= QUIZ_LENGTH) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function couponHtml() {
    return (
      '<div class="coupon-box">' +
      '<div class="coupon-label">🎁 Ödül Kuponu</div>' +
      '<div class="coupon-text">Tebrikler! Standımıza gel<br>ve ödülünü al.</div>' +
      '<div class="coupon-code">DATASCI-WIN</div>' +
      "</div>"
    );
  }

  function showResult() {
    showScreen("result");

    const wrongCount = QUIZ_LENGTH - score;
    $("correct-count").textContent = String(score);
    $("wrong-count").textContent = String(wrongCount);

    const icon = $("result-icon");
    const title = $("result-title");
    const sub = $("result-sub");
    const couponSection = $("coupon-section");

    if (score === QUIZ_LENGTH) {
      icon.textContent = "🏆";
      title.textContent = "MÜKEMMEL!";
      title.className = "result-title win";
      sub.textContent =
        QUIZ_LENGTH +
        "/" +
        QUIZ_LENGTH +
        " soruyu doğru yanıtladın.\nKuponu almaya hak kazandın!";
      couponSection.innerHTML = couponHtml();
      launchConfetti();
    } else if (score === QUIZ_LENGTH - 1) {
      icon.textContent = "🎯";
      title.textContent = "İYİ DENEME!";
      title.className = "result-title partial";
      sub.textContent =
        score +
        "/" +
        QUIZ_LENGTH +
        " doğru. Neredeyse! Tekrar deneyebilirsin.";
      couponSection.innerHTML = "";
    } else {
      icon.textContent = "💡";
      title.textContent = "DEVAM ET!";
      title.className = "result-title lose";
      sub.textContent =
        score +
        "/" +
        QUIZ_LENGTH +
        " doğru. Veri bilimini öğrenme yolculuğun başlıyor!";
      couponSection.innerHTML = "";
    }
  }

  function resetQuiz() {
    showScreen("start");
    $("confetti").innerHTML = "";
  }

  function launchConfetti() {
    const wrap = $("confetti");
    wrap.innerHTML = "";
    for (let i = 0; i < 80; i++) {
      const p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-20px";
      p.style.background =
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      p.style.animationDuration = 1.5 + Math.random() * 2 + "s";
      p.style.animationDelay = Math.random() * 0.8 + "s";
      p.style.width = 6 + Math.random() * 8 + "px";
      p.style.height = 6 + Math.random() * 8 + "px";
      p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      wrap.appendChild(p);
    }
  }

  function syncStaticLabels() {
    const n = String(QUIZ_LENGTH);
    const el = $("info-question-count");
    if (el) el.textContent = n;
    const total = $("q-total");
    if (total) total.textContent = n;
  }

  function init() {
    syncStaticLabels();
    $("start-btn").addEventListener("click", startQuiz);
    $("next-btn").addEventListener("click", nextQuestion);
    $("retry-btn").addEventListener("click", resetQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
