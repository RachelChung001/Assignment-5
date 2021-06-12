let answer = 0
let answer2 = 0
let d = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {

  d = document.getElementById('d').value

  d = parseInt(d)

  answer = Math.PI * d

  answer2 = d / 2 * d / 2 * Math.PI

  document.getElementById('answer').innerHTML = answer

  document.getElementById('answer2').innerHTML = answer2
}
