// makeButtonMenu.js

function makeButtonMenu(whichArray)
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.width = '300px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'row';
    buttonContainer.style.overflowX = 'scroll';
    subDiv.append(buttonContainer);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce('button');
        theButton.textContent = whichArray[x].name;
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();

            // name, price
            makeCalculator(whichArray[x].name, whichArray[x].price);

            // show result in totalCostOutput textbox
            ge('totalCostOuput').value = formatNumber((ge('itemAmountInput').value * ge('itemPriceInput').value).toFixed(2));
        };
        buttonContainer.append(theButton);
    }

    //-//

    let searchBox = ce('input');
    searchBox.type = 'text';
    searchBox.placeholder = 'Enter Name Here';
    searchBox.onkeyup = function()
    {
        let searchTerm = searchBox.value.trim();

        if (searchTerm)
        {
            let element = fibn(whichArray, searchTerm);

            if (element)
            {
                makeCalculator(element.name, element.price);

                // show result in totalCostOutput textbox
                ge('totalCostOuput').value = (ge('itemAmountInput').value * ge('itemPriceInput').value).toFixed(2);
            }
            else
            {
                console.log('Element not found');
            }
        }
    };
    subDiv.append(searchBox);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

