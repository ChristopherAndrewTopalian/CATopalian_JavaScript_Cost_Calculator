// whenLoaded.js

function whenLoaded()
{
    makeButtonMenu(elements);

    // name, price
    makeCalculator('Gold', 4014.00);

    // show result in totalCostOutput textbox
    ge('totalCostOuput').value = formatNumber((ge('itemAmountInput').value * ge('itemPriceInput').value).toFixed(2));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

