function anagram(str) {

    //if(!str) {
    //    return []
    //}

    //if(str.length === 1) {
    //    return [str]
    //}

    //if(str.length === 2) {
    //return [str[0] + str[1], str[1] + str[0]]
    //}

    var result = [];

    for(var i=0; i<str.length; i++) {
        for(var j=0; j<2; j++) {
            result.push(str[i] + anagram(drop(str, i))[j]);
        }
    
        // result.push(str[0] + anagram(drop(str, 1))[0]);
        //result.push(str[1] + anagram(drop(str, 1))[1]);
    
        //result.push(str[0] + anagram(drop(str, 2))[0]);
        //result.push(str[1] + anagram(drop(str, 2))[1]);
    }

    return result

}

function drop(str, n) {
    var result = ""
}
module.exports = anagram