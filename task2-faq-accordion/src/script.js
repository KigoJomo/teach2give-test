const faqQuestions = document.querySelectorAll('.faq-question')

faqQuestions.forEach((question) => {
  const answer = question.nextElementSibling
  const toggleIcon = question.querySelector('span')

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open')

    document
      .querySelectorAll('.faq-answer')
      .forEach((a) => a.classList.remove('open'))

    document.querySelectorAll('.toggle-icon').forEach((i) => {
      i.textContent = '+'
      i.style.backgroundColor = 'rgb(175, 28, 175)'
    })

    if (!isOpen) {
      answer.classList.add('open')
      toggleIcon.textContent = '-'
      toggleIcon.style.backgroundColor = '#121212'
    }
  })
})
