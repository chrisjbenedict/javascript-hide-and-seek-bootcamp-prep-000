function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('u1.ranked-list li')
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandeNode = document.getElementById('grand-node')
  const deepestChild = grandeNode.children[0]
  while (deepestChild) {
    grandeNode = deepestChild
    deepestChild = grandeNode.children[0]
  }
  return grandeNode
}
