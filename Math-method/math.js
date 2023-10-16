// 231016
// Q. 1~15 중 랜덤의 번호를 출력하려면 어떻게 해야할까?
// A. Math.random() 메서드를 활용한다

// Math.random() 메서드는 0~1 중 랜덤의 값을 뽑아주는 메서드이다.(1은 미포함)

// console.log(Math.random()); // 소숫점이 있는 랜덤 값이 출력됨을 확인

// Math.floor() 메서드로 소숫점 뒤를 버리면?
// console.log(Math.floor(Math.random())); // 0이 출력됨

// 10을 곱하고 함수화 한 뒤, 계속 찍어보면?
// function randomNum(){
//   console.log(Math.floor(Math.random()*10));
// }
// setInterval(randomNum, 100) // 0~9까지 출력됨을 확인

// 범위를 조정하려면?
// 새로운 배열을 선언하고 배열에 요소가 있는지 확인해보자.
function random(){
  const arr = [];
  const randomNum = Math.floor(Math.random()*10);
  // 조건식 작성: 배열 arr의 요소 중에 randomNum의 값이 없으면 arr.push() 메서드로 요소를 생성
  if(arr.indexOf(randomNum) === -1 ){
    arr.push(randomNum);
  }
  console.log(arr);
}
setInterval(random, 100);