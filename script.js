const friendlyAliens = new Array(10).fill('👽').map(function(alien){
  return `<div class="box">${alien}</div>`
}).join("")

document.getElementById('aliens').innerHTML = friendlyAliens
