// makeButtonMenu.js

function makeButtonMenu(whichArray)
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Cost_Calculator';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Cost Calculator';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';
    titleAndLink.style.lineHeight = '12px';
    subDiv.append(titleAndLink);

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
                ge('totalCostOuput').value = formatNumber((ge('itemAmountInput').value * ge('itemPriceInput').value).toFixed(2));
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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

