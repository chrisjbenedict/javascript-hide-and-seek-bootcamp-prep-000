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
  let grandeNode = document.getElementById('grand-node')
  let deepestChild = grandeNode.children[0]
  while (deepestChild) {
    grandeNode = deepestChild
    deepestChild = grandeNode.children[0]
  }
  return grandeNode
}
