// 1-masala:
// function sumDigitsInString(str) {             // bu declorion funksiya 
//   let sum = 0;                      // bu qator esa a1b2c3 ni natijalarni qushib boradigan qator 
//   for (let char of str) {        // bu yerda for of dan foydalanganman buni vazifasi aylanib beruvchi vazifani bajaradi.
//     if (!isNaN(char) && char !== ' ') {    //string ichidagi har bir belgini haqiqiy raqam ekanligini ishon xosil qilish uchun yordam beradi.
//       sum += Number(char);     // bu esa string ichidagi haqiqiy raqam bulsa sumga qushib boradi
//     }
//   }
//   return sum;     // bu yakuniy natijasi
// }

// console.log(sumDigitsInString("a1b2c3")); // Natija: 6

// 2-masala:
// function getWordLengths(str) {   // declorion funksiya 
//   return str.split(' ').map(function(word) {   // str.split-bu uzun bir matnni (stringni) har bir bo'sh joy (' ') bo'yicha qismlarga bo'lib, ularni massivga (array) yig'ib beruvchi. bu uzun bir matnni (stringni) har bir bo'sh joy (' ') bo'yicha qismlarga bo'lib, ularni massivga (array) yig'ib beruvchi. 
// // map esa massivdagi har bir elementni birma-bir olib, uni o'zgartirib, yangi massiv hosil qilishdir.
//     return word.length;    // har bir so'zning harflarini sanab, o'sha sonni javob sifatida ber
//   });
// }

// const gap = "salom hammaga nima gaplar qalay";
// console.log(getWordLengths(gap)); // Natijasi shunday chiqadi: [5, 7, 4, 6, 5]

//3-masala:
// function minSumPair(arr) {
//   // Sonlarni o'sish tartibida saralaymiz
//   let sortedArr = arr.sort((a, b) => a - b);   //sort() — bu massiv (array) ichidagi elementlarni ma'lum bir tartibda saralab (tartiblab) beruvchi metoddir.
//   // Eng kichik ikkita element yig'indisi
//   return sortedArr[0] + sortedArr[1];
// }

// console.log(minSumPair([3, 8, 5, 2, 7])); // Natija: 5 (2 + 3)

// 4-masala:
// 1. Avval funksiyani yaratib olamiz (E'lon qilamiz)
function findPairs(arr, k) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

// 2. Keyin natijani hisoblaymiz
const natija = findPairs([1, 2, 3, 4, 5], 5);

// 3. Va natijani arr ko'rinishda chiqaramiz
console.log(natija.map(function(j) { 
  return "[" + j + "]"; 
}).join(", "));

// 5-masala:
// function minMaxDifference(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   return max - min;
// }

// console.log(minMaxDifference([3, 1, 4, 1, 5, 9])); // Natija: 8 (9 - 1)