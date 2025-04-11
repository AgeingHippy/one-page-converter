function tempCToF(c) {
  return c * 1.8 + 32;
}

function tempFToC(f) {
  return (f - 32) / 1.8;
}

function tempCToK(c) {
  return Number(c) + 273.15;
}

function tempKToC(k) {
  return k - 273.15;
}

function tempFToK(f) {
  return (f - 32) / 1.8 + 273.15;
}

function tempKToF(k) {
  return (k - 273.15) * 1.8 + 32;
}



//=====================
//get the next sybling element of 'element' where tagName is 'tag'
function getElementSiblings(element, localName = "") {
  let list = [];
  let sibling = element.previousElementSibling;
  while (sibling) {
    if (localName == "" || localName == sibling.localName) {
      list.unshift(sibling); //add to front of list
    }
    sibling = sibling.previousElementSibling;
  }

  sibling = element.nextElementSibling;
  while (sibling) {
    if (localName == "" || localName == sibling.localName) {
      list.push(sibling); //add to back of list
    }
    sibling = sibling.nextElementSibling;
  }

  return list;
}
