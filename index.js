function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy() {
  const rankedList = document.querySelectorAll('ranked-list')
  for (let i = 0; i < rankedList.length; i++) {
    return rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}
