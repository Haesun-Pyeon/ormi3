//논리 연산자//
//&&: 논리곱 and
console.log(true && true); // true
console.log(true && false); // false

//||: 논리합 or
console.log(true || false); // true
console.log(false || false); // false

//!: 논리부정
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!NaN); // false

//undefined : 변수가 값이 할당되지 않은 경우
let a;
console.log(a); // undefined
//undefined는 Falsy값으로 평가된다.
let y;
if (typeof y === "undefined") {
  // y가 정의되지 않은 경우에 실행
}
if (y){
	// 실행되지 않음
}

//null : 값이 없음 (의도적으로 비어있음을 명시적으로 표현)
let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); //null