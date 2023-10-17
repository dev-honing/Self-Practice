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


// 절차적 작성법과 선언적 작성법의 차이는 무엇인가?
// 절차형 프로그래밍 : 순서대로 구조화 해서 코드를 작성 // How에 집중 // 결과보단 과정에 중점
// 선언형 프로그래밍 : 생각 나는 대로 코드를 작성 // What에 집중 // 과정보단 결과에 중점