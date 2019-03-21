var num = 1

function takeANumber(currentLine) {
  currentLine.push(num)
  num++
  return `Welcome, you are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${currentLine.shift()}.`
  }
}

function currentLine(currentLine) {
  var list = [], i = 1
  
   if (currentLine.length === 0) {
    return "The line is currently empty."
    
  } else {
    
    while (i <= currentLine.length) {
      list.push(` ${i}. ${currentLine[i-1]}`)
      i++
    }
      
    return `The line is currently:${list}` 
  }
}