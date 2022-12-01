

//input: array of strings
//output: longest prefix, if not empty strings
//['st', 'str', 'string'] => 'st'

//result string variable = first letter of first word
//curr letter variable = 0

//while curr letter < first word length

    //loop through array of strings
        //if word[curr letter] is undefined
            //return result string
        //if word[curr letter] = resultstring[curr letter]
            //continue
        //if curr letter = 0
            //return empty string
        //else
            //return result string

    //add curr letter to result string
    //increment curr letter variable

//add edge case for empty arr and arr of one
function findCommonPrefix (words:string[]):string { //['string', 'str', 'st']
    let commonPrefix:string = ''; // ''
    let currLetterIdx:number = 0; // 1

    while(currLetterIdx < words[0].length) { // 2 < 6
        let currLetter:string = words[0][currLetterIdx]; //r

        for (let word of words) { // 'st'
            if(!word[currLetterIdx] && currLetterIdx === 0) { // r
                return '';
            } else if (!word[currLetterIdx] && currLetterIdx !== 0) {
                return commonPrefix;
            }

            if(word[currLetterIdx] !== currLetter && currLetterIdx === 0){ //r = r
                return '';
            } else if (word[currLetterIdx] !== currLetter && currLetterIdx !== 0) {
                return commonPrefix;
            }
        }
        commonPrefix = commonPrefix + currLetter; // st
        currLetterIdx++; // 2
    }

    //can return slice
    return commonPrefix; //st
}