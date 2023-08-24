const test=5;
if(test < 10){ //true
  //codes
  console.log("참입니까?");
}
if(test > 10){
  console.log("참입니까")
}else{
  console.log("거짓이군요");
}

const arr = [1,2,3];
function callbackfn(item){
  let result;
  if (item%2===1) {
    result = "홀수";
  } else {
    result = "짝수";
  }
  return result;
}
console.log(arr.map(callbackfn)); //['홀수','짝수','홀수'] 홀짝 구분해서 텍스트로 배열만들기

function callbackfn2(item){ //조건문에서 바로 리턴도 가능
  if (item%2===1) {
    return "홀수";
  } else {
    return "짝수";
  }
}

//과제: reduce를 이용해서 홀수만 누적하기
//선택과제: reduce 초기값이 없으면 에러가 날 수 있는 경우가 있으니 주의<<이런경우 찾아보기
const a = [1,2,3,4,5,6,7,8,9,10]
function reducer(x,y){
  if (y%2 === 0) {
    y = 0;
  }
  return x+y;
}
console.log(a.reduce(reducer,0));

/* 초기값이 없으면 첫 번째 누적값이 배열의 첫 번째 원소가 되는데 배열이 비어있으면 이 누적값도 없어서 연산을 못하기 때문에 타입에러가 난다.*/
a1 = [10]
a2 = []
console.log(a1.reduce((a, c)=> a+c)); //10
console.log(a2.reduce((a, c)=> a+c)); //TypeError