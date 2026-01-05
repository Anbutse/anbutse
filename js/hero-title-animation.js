document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('hero-title');
  if (!title) return;

  const text = title.textContent;
  title.textContent = '';

  const words = text.split(' '); // разбиваем по словам
  let charIndex = 0;

  words.forEach((word, i) => {
    // если слово "для", добавляем перенос строки перед ним
    if (word.toLowerCase() === 'для') {
      title.appendChild(document.createElement('br'));
    }

    // создаём спаны для каждой буквы
    word.split('').forEach(char => {
      const span = document.createElement('span');
      span.className = 'hero-char';
      span.textContent = char;
      span.style.animationDelay = `${charIndex * 0.02}s`;
      title.appendChild(span);
      charIndex++;
    });

    // добавляем пробел после слова (кроме последнего)
    if (i < words.length - 1) {
      const space = document.createTextNode(' ');
      title.appendChild(space);
      charIndex++;
    }
  });
});