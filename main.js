// 1 . დაწერეთ ფუნქცია რომელიც დააბრუნებს ციფრის ფაქტორიალს
// მაგალითად თუ გადავცემთ 4-ს ფუნქციამ უნდა დააბრუნოს 24
// ანუ - 1 * 2 * 3 * 4 = 24

// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// console.log(factorialize(6));
// 2.
// დაწერეთ ფუნქცია რომელიც გადაუვლის ციფრებს 1 დან 100 მდე
// თუ ციფრი არის 3 ის და 5 ის ჯერადი დააკონსოლეთ "ორივეს ჯერადია"
// თუ მხოლოდ 3 -ის ჯერადია დააკონსოლეთ "სამის ჯერადია"
// თუ მხოლოდ 5 - ის ჯერადია დააკონსოლეთ "ხუთის ჯერადია"
// თუ არცერთის არ არის, არაფერი არ მინდა : )


// for (let index = 1; index < 100; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//         console.log("ორივეს ჯერადია");
//     } else if (index % 3 === 0) {
//         console.log("სამის ჯერადია");
//     } else if (index % 5 === 0) {
//         console.log("ხუთის ჯერადია");
//     } else console.log("არაფერი არ მინდა : )");
// }


// 3. დაწერეთ ფუნქცია რომელსაც გადავცემთ წინადადებას
// ფუნქციამ უნდა დაგვიბრუნოს წინადადებიდან ყველაზე დიდი სიტყვა
// მაგალითად თუ გადავცემთ "თორნიკე, გილოცავ დაბადების დღეს!"
// უნდა დაგვიბრუნოს - "დაბადების"
// function LongestWord(str) {
//     let words = str.split(' ');
//     let longestLength = 0;
//     let longestWord;
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestLength) {
//             longestLength = words[i].length;
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(LongestWord("თორნიკე, გილოცავ დაბადების დღეს!"));
//4. დაწერეთ ფუნქცია რომელიც კონსოლში ფიფქებით დახატავს ასეთ რამეს
/*



*
**
***
****
*****
****
***
**
*


*/

function Snowflake(SnowflakesNum) {
    for (let index = 0; index <= SnowflakesNum; index++) {
        let DrawWithSnowFlake = '*'.repeat(index);
        console.log(DrawWithSnowFlake);
    }
    for (let index = SnowflakesNum - 1; index >= 1; index--) {
        let DrawWithSnowFlake = '*'.repeat(index);
        console.log(DrawWithSnowFlake);
    }
}

(Snowflake(5))
