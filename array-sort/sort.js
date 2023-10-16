// 231016 알게된 사실
// array.sort() 메서드는 문자열을 정렬하는 메서드이다.
const arr = ['apple', 'telephone', 'question', 'banana', 'pear', 'answer'];
console.log(arr.sort()); // a-z까지 오름차순 정렬하는 메서드


const numArr = [1, 30, 1000, 800]; // 1-1000까지 오름차순으로 정렬될까?
// console.log(numArr.sort()); // [1, 1000, 30, 800]
// 괴상하게 정렬되는 것을 확인
// 자릿수에 관계없이 1부터 8까지 정렬된 것으로 추정된다.

// 문자열 정렬 방식인 arr.sort() 메서드를 활용해서 숫자 배열을 정렬하려면 어떻게 해야할까?
// ! 뺄셈식을 작성해서 해결할 수 있다
// 콜백함수 형식으로 arr.sort() 메서드를 작성해보자
numArr.sort(function(a,b){
  return a-b;
})
console.log(numArr); // 자릿수를 반영해서 숫자를 잘 처리한 모습을 확인!