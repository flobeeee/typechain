const name = "Nicolas",
age = 24,
gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {}; // 이 파일이 모듈이 된다는 걸 이해할 수 있도록 설정함. (이게 없으면 name 에 빨간줄)