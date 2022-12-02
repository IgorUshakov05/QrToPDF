
const textarea = document.getElementById('textarea')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  text = textarea.value
  // text = text.replace(/\s/g, '')


  while (text.includes('/') || text.includes('<') || text.includes('>') || text.includes(':') || text.includes('"') || text.includes("|") || text.includes('?')) {
    text = text.replace('/', '').replace('<', '').replace('>', '').replace(':', '').replace('"', '').replace('|', '').replace('?', '');
  }
  if (text != '') {

    fetch('http://localhost:3000/postText', {
      method: "POST",
      body: JSON.stringify({ content: text }),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch((err) => {
      console.log("Немного где-то ошибочек")
    })
    button.innerText = 'Обработка'
    setTimeout(() => {
      window.location.href = 'http://localhost:3000/getfile'
      console.log(text)
    }, 3000);
    textarea.value = ''
    button.disabled = true;
    textarea.setAttribute('placeholder', 'Отправка...')

    setTimeout(() => {
      button.removeAttribute('disabled');
      button.innerText = "Скачать QR"
      textarea.setAttribute('placeholder', 'Введите текст...')
    }, 5000)
  }

  else {
    textarea.style.boxShadow = "0 0 20px rgba(252, 129, 60,1)"
    setTimeout(() => {
      textarea.style.boxShadow = "none"
    }, 1000)
    // alert("Строка пустая или состоит только из запрещеных символов")
    return false
  }
}) 