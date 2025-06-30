window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('overlay').style.display = 'none';
  }, 2500);
});

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('calculator').classList.remove('hidden');
  document.getElementById('faq-section').classList.remove('hidden');
});

document.getElementById('themeToggle').addEventListener('change', (e) => {
  document.body.className = e.target.checked ? 'dark' : 'light';
});

function calculateCAGR() {
  const initial = parseFloat(document.getElementById('initial').value);
  const final = parseFloat(document.getElementById('final').value);
  const years = parseFloat(document.getElementById('years').value);
  const result = document.getElementById('result');
  const explanation = document.getElementById('explanation');

  if (initial > 0 && final > 0 && years > 0) {
    const cagr = ((final / initial) ** (1 / years) - 1) * 100;
    result.textContent = `CAGR: ${cagr.toFixed(2)}%`;

    if (cagr < 4) {
      explanation.textContent = 'This is a low return. Consider evaluating your investment strategy.';
    } else if (cagr >= 4 && cagr < 10) {
      explanation.textContent = 'This is a moderate return. It reflects stable but not aggressive growth.';
    } else {
      explanation.textContent = 'Great! This is a strong CAGR indicating high growth performance.';
    }
  } else {
    result.textContent = 'Please enter valid inputs.';
    explanation.textContent = '';
  }
}
