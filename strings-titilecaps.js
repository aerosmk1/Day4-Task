// const expections = ['of','the','and'];
// function convertToTitleCase(str){
//     if(!str){
//         return ""
//     }


// return str.toLowerCase().split('').map((word,i) => {
//      return  expections.includes(word) && i != 0 ? word : word.chartAt(0).toUpperCase().concat(word.substr(1));
// }).join('');
// }

// console.log(convertToTitleCase('lord OF the rings'));
// console.log(convertToTitleCase('people AND people'));
// console.log(convertToTitleCase('HEllo'));
// console.log(convertToTitleCase('someTHING THE article'));


function convertToTitleCase(str) {
    if (!str) {
        return ""
    }


    return str.toLowerCase().split('').map(function (word){
        return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join('');
}
console.log(convertToTitleCase('how are you '));
console.log(convertToTitleCase('Welcome to the InternNet'));