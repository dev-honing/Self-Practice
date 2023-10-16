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
  // 3개씩 뽑기 위해 for문에 넣음
  for(i=0; i<3; i++){
    const randomNum = Math.floor(Math.random()*10);
    // 조건식 작성: 배열 arr의 요소 중에 randomNum의 값이 없으면 arr.push() 메서드로 요소를 생성
    if(arr.indexOf(randomNum) === -1 ){
      arr.push(randomNum);
    } else {
      i--;
    }
  }
  console.log(arr);
}
setInterval(random, 100);
// ! 중복된 수가 출력되면 2가지만 뽑는 경우가 발생했다.
// ? 중복을 없애면서 별개의 3가지 수를 뽑으려면 어떻게 해야할까?
// * else 식에서 감소식으로 뒤로 다시 돌아가게 하면 된다!