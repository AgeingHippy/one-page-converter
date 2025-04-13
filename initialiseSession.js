//initialise session storage with required values

function ConversionFunctionElement(
  category,
  functionName,
  converseFunctionName,
  sourceUnit,
  targetUnit,
  formula
) {
  this.category = category;
  this.functionName = functionName;
  this.converseFunctionName = converseFunctionName;
  this.sourceUnit = sourceUnit;
  this.targetUnit = targetUnit;
  this.formula = formula;
}

let functionMap = new Map();

//map data is key == 'functionName' + an object of 'category', 'functionName', 'converseFunctionName', 'sourceUnit','targetUnit', 'formula'
functionMap.set(
  "tempFToC",
  new ConversionFunctionElement(
    "Temperature",
    "tempFToC",
    "tempCToF",
    "Farenheit",
    "Celcius",
    "c = (f - 32) / 1.8"
  )
);
functionMap.set(
  "tempCToF",
  new ConversionFunctionElement(
    "Temperature",
    "tempCToF",
    "tempFToC",
    "Celcius",
    "Farenheit",
    "f = c * 1.8 + 32"
  )
);
functionMap.set(
  "tempCToK",
  new ConversionFunctionElement(
    "Temperature",
    "tempCToK",
    "tempKToC",
    "Celcius",
    "Kelvin",
    "k = c + 273.15"
  )
);
functionMap.set(
  "tempKToC",
  new ConversionFunctionElement(
    "Temperature",
    "tempKToC",
    "tempCToK",
    "Kelvin",
    "Celcius",
    "c = k - 273.15"
  )
);
functionMap.set(
  "tempFToK",
  new ConversionFunctionElement(
    "Temperature",
    "tempFToK",
    "tempKToF",
    "Farenheit",
    "Kelvin",
    "k = (f - 32) / 1.8 + 273.15"
  )
);
functionMap.set(
  "tempKToF",
  new ConversionFunctionElement(
    "Temperature",
    "tempKToF",
    "tempFToK",
    "Kelvin",
    "Farenheit",
    "f = (k - 273.15) * 1.8 + 32"
  )
);

functionMap.set(
  "distCmToInch",
  new ConversionFunctionElement(
    "Distance",
    "distCmToInch",
    "distInchToCm",
    "Centimeters",
    "Inches",
    "i = cm / 2.54"
  )
);

functionMap.set(
  "distInchToCm",
  new ConversionFunctionElement(
    "Distance",
    "distInchToCm",
    "distCmToInch",
    "Inches",
    "Centimeters",
    "cm = i / 2.54"
  )
);

functionMap.set(
  "distMileToKm",
  new ConversionFunctionElement(
    "Distance",
    "distMileToKm",
    "distKmToMile",
    "Miles",
    "Kilometers",
    "km = m * 1.60934"
  )
);

functionMap.set(
  "distKmToMile",
  new ConversionFunctionElement(
    "Distance",
    "distKmToMile",
    "distMileToKm",
    "Kilometers",
    "Miles",
    "m = km / 1.60934"
  )
);



sessionStorage.setItem(
  "functionMap",
  JSON.stringify(Object.fromEntries(functionMap))
);

function buildConversionSelectionHTML(functionMap) {
  let categoryMap = new Map();

  functionMap.forEach((element, key) => {
    let categoryElement;
    let categorySelector;
    let categorySelectorList;

    //get / create category element
    if (categoryMap.has(element.category)) {
      categoryElement = categoryMap.get(element.category);
      categorySelector = categoryElement.querySelector(
        `#${element.category.toLowerCase()}-selector`
      );
      categorySelectorList = categoryElement.querySelector(
        `#${element.category.toLowerCase()}-selector-list`
      );
    } else {
      categoryElement = document.createElement("li");
      categorySelector = document.createElement("a");
      categorySelectorList = document.createElement("ul");

      categorySelector.id = `${element.category.toLowerCase()}-selector`;
      categorySelector.classList.add("unit-selector");
      categorySelector.setAttribute("href", "#");
      categorySelector.innerText = `${element.category}`;

      categorySelectorList.id = `${element.category.toLowerCase()}-selector-list`;
      categorySelectorList.classList.add("collapse");

      categoryElement.appendChild(categorySelector);
      categoryElement.appendChild(categorySelectorList);

      categoryMap.set(element.category, categoryElement);
    }

    //create selector element and add to category list
    let conversionFunctionListItem = document.createElement("li");
    let conversionFunctionSelector = document.createElement("a");
    conversionFunctionSelector.id = `${key}`;
    conversionFunctionSelector.classList.add("calc-selector");
    conversionFunctionSelector.setAttribute("href", "#");
    conversionFunctionSelector.innerText = `${element.sourceUnit} to ${element.targetUnit}`;
    conversionFunctionListItem.appendChild(conversionFunctionSelector);

    categorySelectorList.appendChild(conversionFunctionListItem);
  });

  //finally add each categoryElement contained in categoryMap to the "" ul in the sidebar
  let unitSelectorList = document.getElementById("conversion-selector-list");
  categoryMap.forEach((element) => unitSelectorList.appendChild(element));
}
