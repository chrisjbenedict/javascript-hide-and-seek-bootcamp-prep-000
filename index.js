function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('u1.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    return rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}
