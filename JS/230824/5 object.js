const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
	askingHim: function(){
		console.log("Yeah, I'm thinking I'm back!");
	}
};
console.log(babaYaga.name, babaYaga.age);
console.log(babaYaga.askingHim())

babaYaga.job = "Killer";
console.log(babaYaga.job);

delete babaYaga.job;
console.log(babaYaga.job); //undefined

console.log('age' in babaYaga); //true
console.log('mercy' in babaYaga); //false

//키값은 문자열이 가능하지만 숫자로 하면 [1] 이런식으로만 호출해야함 (baba.1 이건 안됨)
let key = "name"
console.log(babaYaga[key]); //이렇게도 가능하다!

//hasOwnProperty(): 그 객체가 특정 프로퍼티가 있는지
const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
	sing: function(){
		return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
	}
};

console.log(aespa.hasOwnProperty('itzy')); //false
console.log(aespa.hasOwnProperty('from')); //true

//keys(), values() Object는 내장객체
console.log(Object.keys(aespa));
console.log(Object.values(aespa));
console.log(Object.keys(babaYaga));
console.log(Object.values(babaYaga));
