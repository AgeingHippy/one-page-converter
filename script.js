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

function distCmToInch(cm) {
  return cm / 2.54;
}

function distInchToCm(inch) {
  return inch * 2.54;
}

function distMileToKm(mile) {
  return mile * 1.60934;
}

function distKmToMile(km) {
  return km / 1.60934;
}



//=====================
//get an array of siblings of element where tagName == localName
//siblings are listed in the order in which they appear in the DOM
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

//limit the content of an element based on the permitted pattern
//disable event default action if pattern is not matched
//todo - strip leading zero if relevant
//todo - manage cut and paste
function limitContentOnKeypress(event) {
  
  const pattern = /^-{0,1}\d*\.{0,1}\d*$/;
  let start = event.target.selectionStart;
  let end = event.target.selectionEnd;
  let text = event.target.value;
  let startText = text.substr(0, start);
  let selectedText = text.substr(start, end - start);
  let endText = text.substr(end);

  if (!pattern.test(startText + event.key + endText)) {
    event.preventDefault();
  }
}