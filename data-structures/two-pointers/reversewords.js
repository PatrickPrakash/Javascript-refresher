// Given a sentence, reverse the order of its words without affecting the order of letters within the given word.
// Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, 
//should only have a single space separating each word. Do not include any extra spaces.

const reverseWords = (s) => {
    let reversedString = s.replace(/\s+/g, " ").trim();

    reversedString = reverseSubString(s, 0, s.length - 1);

    for(let start = 0, end = 0; end <= reversedString.length -1; end++)
    {
        if(reversedString[end] == " " || end == reversedString.length - 1)
        {
            console.log(reversedString);
            console.log(start, end);
            let endIndex = (end === s.length - 1) ? end: end - 1;
            console.log(endIndex)
            reversedString = reverseSubString(reversedString, start, endIndex);
            start = end + 1;
        }
    }
    return reversedString;
}   

const reverseSubString = (string, start, end) => {
    let stringArray = string.split("");
    while(start < end)
    {
        let temp = stringArray[start];
        stringArray[start] = stringArray[end];
        stringArray[end] = temp;
        start++;
        end--;
    }
    return stringArray.join("");
}

let reversedString = reverseWords("     trailing spaces")
console.log(reversedString)