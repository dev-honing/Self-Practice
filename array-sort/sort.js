// 231016 알게된 사실
// array.sort() 메서드는 문자열을 정렬하는 메서드이다.
const arr = ['apple', 'telephone', 'question', 'banana', 'pear', 'answer'];
console.log(arr.sort()); // a-z까지 오름차순 정렬하는 메서드


const numArr = [1, 30, 1000, 800]; // 1-1000까지 오름차순으로 정렬될까?
console.log(numArr.sort()); // [1, 1000, 30, 800]
// 괴상하게 정렬되는 것을 확인