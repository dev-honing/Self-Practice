// 두 가지 배열을 변수 선언
const arrayA = [];
const arrayB = ["피카츄", "라이츄", "파이리"];

// 절차 방식
for(i=0; i < arrayB.length; i++){
  arrayA[i] = arrayB[i];
}
// console.log(arrayA); // [ '피카츄', '라이츄', '파이리' ]
// console.log(arrayB); // [ '피카츄', '라이츄', '파이리' ]

// 선언 방식 - array.map() 메서드 활용
const arrayC = arrayA.map(data => data);
console.log(arrayC); // [ '피카츄', '라이츄', '파이리' ]