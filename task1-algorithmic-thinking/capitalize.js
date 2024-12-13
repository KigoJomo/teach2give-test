const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.length === 0) return word
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

readline.question('Enter a sentence: ', (str) => {
  console.log('Capitalized sentence: ')
  console.log(capitalizeWords(str));
  readline.close()
})