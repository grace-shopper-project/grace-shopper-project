export function capitalize(str) {
  if (str.includes(' ')) {
    const arr = str.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    return arr.join(' ')
  }
  return str[0].toUpperCase() + str.slice(1)
}
