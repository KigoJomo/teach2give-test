const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

function charCounter(word) {
  const charCounts = {}

  if(!word) return {};

  word = word.toLowerCase()

  for (const char of word) {
    if (charCounts[char]) {
      charCounts[char] += 1
    } else {
      charCounts[char] = 1
    }

    // charCounts[char] = (charCounts[char] ?? 0) + 1
  }

  return charCounts
}

readline.question('Enter a word: ', (word) => {
  console.log('Character count: ')
  console.log(charCounter(word))
  readline.close()
})
