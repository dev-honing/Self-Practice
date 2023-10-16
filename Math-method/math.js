// 231016
// Q. 1~15 중 랜덤의 번호를 출력하려면 어떻게 해야할까?
// A. Math.random() 메서드를 활용한다

// 배열을 변수 선언
const arr = [1, 2, 3, 4, 5];
// Math.random() 메서드는 0~1 중 랜덤의 값을 뽑아주는 메서드이다.(1은 미포함)

console.log(Math.random()); // 소숫점이 있는 랜덤 값이 출력됨을 확인

// Math.floor() 메서드로 소숫점 뒤를 버리면?
console.log(Math.floor(Math.random())); // 0이 출력됨