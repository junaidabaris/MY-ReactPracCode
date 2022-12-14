function First() {
    return (
        <div>
            dddddd
        </div>
    )
}
export default First
function A() {

    //udemy login
    //gmail = bewithshakir@gmail.com
    //password = shsamrin2_432014



    // const str = 'Junaid Akhtar'
    // const split = str.split(' ')
    // const revers = split.reverse()
    // console.log(revers);



    //...Play Remove Odd Number from Array with Modulus Operator and For Loops;

    // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 330, 23, 55]

    // for (let i = 0; i < num.length; i++) {
    //     const element = num[i];
    //     // console.log(element);
    //     if (element % 2 === 0) {
    //         console.log(element);
    //     }
    //     else {
    //         console.log('odd----', element);
    //     }
    // }

    // const numbers = [2, 4, 3, 7, 9, 8, 1]
    // numbers.filter((number)=>{
    //     return number % 2 === 0
    // })

    //.... Remove Odd Numbers from Array with Filter Method

    // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 330, 23, 55];
    // return num.filter((number)=>{
    //     return number % 2 === 0
    // })

    //Repeat a String with for loop

    // const str = 'car'
    // let num = 4;
    // let finalString = '';

    // for (var i = 1; i <= num; i++) {
    //     finalString += str;
    //     // console.log("value of finalString at loop", i + " " + finalString);
    // }
    // return finalString;

    //Repeat a String with while loop

    // while(num > 0){
    //     finalString += str
    //     num--
    //     // console.log(num);
    // }
    // console.log(finalString);
    // return (finalString)
}

// const val = A()
// console.log(val);

function longestWordLength(str) {

    // Challenge
    // Given a string of words return the length of the longest word(s)
    // Approach 1 - Using Built in Functions & Regular Expressions & For Loop

    // var stringWithoutSpecialCharacters = str.replace(/\W/g,' ');
    // // console.log(stringWithoutSpecialCharacters , 'stringWithoutSpecialCharacters');
    // var longestWord = 0;
    // var wordArray = stringWithoutSpecialCharacters.split(' ')
    // // console.log(wordArray,'wordArray');

    // for (var i = 0; i < wordArray.length; i++) {
    //     if (wordArray[i].length > longestWord) {
    //         // console.log(wordArray[i].length ,'wordArray[i].length');
    //         longestWord = wordArray[i].length;
    //         console.log('run');
    //         // console.log(longestWord ,'longestWord');
    //     }
    //     else {
    //         console.log('not run');
    //     }
    // }
    // return longestWord;


    //Given a string of words return the length of the longest word(s)
    // Approach 2 - for of loop

    // var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
    // var wordArray = stringWithoutSpecialCharacters.split(' ')
    // var longestWord = '';
    // for (const iterator of wordArray) {
    //     // console.log(iterator);
    //     if (iterator.length > longestWord.length) {
    //         longestWord = iterator
    //     }
    // }
    // return longestWord.length

}

// console.log(longestWordLength('Hi, where is the airport?'));

function FilterStrings(arr) {
    //Filter Strings from Array with typeof operator and Number.isInteger() method
    //Approach 1 - for loop

    // creat a blank array 
    // const newArr =[]
    // for (const iterator of arr) {
    //     // if (Number.isInteger(iterator)) {
    //     //     newArr.push(iterator)
    //     // }
    //     if (typeof iterator === 'number') {
    //         newArr.push(iterator)
    //     }
    // }
    // return newArr

    // return arr.filter((val)=>{
    //     // return typeof val === 'number'
    //     return Number.isInteger(val)
    // })

}
// console.log(FilterStrings([2, 'two', 4, 'four', 6, 'six']))

function AlphabetizeString(str) {

    //Alphabetize String with sort() method

    // const splitStr = str.split('')
    // const sortStr = splitStr.sort()
    // const joinStr = sortStr.join('')
    // return joinStr

    //also do this in single line

    //Alphabetize String with sort() method with spread syntax

    // const spreadArr = [...str]
    // const sortStr = spreadArr.sort()
    // const joinStr = sortStr.join('')
    // return joinStr

}

// console.log(AlphabetizeString('junaid'));

