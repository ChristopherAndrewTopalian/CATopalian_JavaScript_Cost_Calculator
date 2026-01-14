// makeCalculator.js

function makeCalculator(whichElement, whichPrice)
{
    if (ge('mainDiv'))
    {
        ge('mainDiv').remove();
    }

    // container
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    // container
    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    subDiv.style.width = '370px';
    subDiv.style.border = 'solid 1px rgb(200, 200, 200)';
    subDiv.style.padding = 10 + 'px';
    subDiv.style.borderRadius = 8 + 'px';
    mainDiv.append(subDiv);

    //-//

    // itemName
    let itemName = ce('div');
    itemName.id = 'itemName';
    itemName.textContent = whichElement;
    itemName.style.fontSize = '24px';
    itemName.style.fontWeight = 'bold';
    subDiv.append(itemName);

    //-//

    // hr
    subDiv.append(ce('hr'));

    //-//

    // itemAmountLabel
    let itemAmountLabel = ce('label');
    itemAmountLabel.textContent = ' Amount (oz): ';
    subDiv.append(itemAmountLabel);

    //-//

    // itemAmountInput
    let itemAmountInput = ce('input');
    itemAmountInput.id = 'itemAmountInput';
    itemAmountInput.type = 'number';
    itemAmountInput.step = '0.01';
    itemAmountInput.min = 0;
    // itemAmountInput.max = 100;
    itemAmountInput.value = 170;
    itemAmountInput.oninput = function()
    {
        inputSound();

        ge('totalCostOuput').value = formatNumber((itemAmountInput.value * itemPriceInput.value).toFixed(2));
    };
    itemAmountInput.onkeyup = function()
    {
        ge('totalCostOuput').value = formatNumber((itemAmountInput.value * itemPriceInput.value).toFixed(2));
    };
    subDiv.append(itemAmountInput);

    //-//

    // hr
    subDiv.append(ce('hr'));

    //-//

    // itemPriceLabel
    let itemPriceLabel = ce('label');
    itemPriceLabel.textContent = 'Price Per (oz): ';
    subDiv.append(itemPriceLabel);

    //-//

    // itemPriceInput
    let itemPriceInput = ce('input');
    itemPriceInput.id = 'itemPriceInput';
    itemPriceInput.type = 'number';
    itemPriceInput.step = '0.01';
    itemPriceInput.min = 0;
    // itemPriceInput.max = 100;
    itemPriceInput.value = whichPrice;
    itemPriceInput.oninput = function()
    {
        inputSound();

        ge('totalCostOuput').value = formatNumber((itemAmountInput.value * itemPriceInput.value).toFixed(2));
    };
    itemPriceInput.onkeyup = function()
    {
        ge('totalCostOuput').value = formatNumber((itemAmountInput.value * itemPriceInput.value).toFixed(2));
    };
    subDiv.append(itemPriceInput);

    //-//

    // hr
    subDiv.append(ce('hr'));

    //-//

    // totalCostLabel
    let totalCostLabel = ce('label');
    totalCostLabel.textContent = 'Total Price: ';
    subDiv.append(totalCostLabel);

    //-//

    // totalCostOuput
    let totalCostOuput = ce('input');
    totalCostOuput.type = 'text';
    totalCostOuput.id = 'totalCostOuput';
    subDiv.append(totalCostOuput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

