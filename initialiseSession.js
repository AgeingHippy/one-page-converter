//initialise session storage with required values

function ConversionFunctionElement(functionName, converseFunctionName, sourceUnit,targetUnit, formula) {
    this.functionName = functionName;
    this.converseFunctionName = converseFunctionName;
    this.sourceUnit = sourceUnit;
    this.targetUnit = targetUnit;
    this.formula = formula;
}

//map data is an object of 'functionName', 'converseFunctionName', 'sourceUnit','targetUnit', 'formula'
sessionStorage.setItem('tempFToC', JSON.stringify(new ConversionFunctionElement("tempFToC","tempCToF","Farenheit","Celcius","c = (f - 32) / 1.8")));
sessionStorage.setItem('tempCToF', JSON.stringify(new ConversionFunctionElement("tempCToF","tempFToC","Celcius","Farenheit","f = c * 1.8 + 32")));
sessionStorage.setItem('tempCToK', JSON.stringify(new ConversionFunctionElement("tempCToK","tempKToC","Celcius","Kelvin","k = c + 273.15")));
sessionStorage.setItem('tempKToC', JSON.stringify(new ConversionFunctionElement("tempKToC","tempCToK","Kelvin","Celcius","c = k - 273.15")));

sessionStorage.setItem('tempFToK', JSON.stringify(new ConversionFunctionElement("tempFToK","tempKToF","Farenheit","Kelvin","k = (f - 32) / 1.8 + 273.15")));
sessionStorage.setItem('tempKToF', JSON.stringify(new ConversionFunctionElement("tempKToF","tempFToK","Kelvin","Farenheit","f = (k - 273.15) * 1.8 + 32")));

