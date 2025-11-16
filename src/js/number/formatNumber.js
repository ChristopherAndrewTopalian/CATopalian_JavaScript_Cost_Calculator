// formatNumber.js

// adds commas and keeps two decimals
function formatNumber(whichInput)
{
    let numberValue = parseFloat(whichInput);

    // handle invalid whichInput
    if (isNaN(numberValue))
    {
        return "";
    }

    // format number with commas and two decimals
    let result = numberValue.toLocaleString("en-US", 
    {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return result;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

