// global 객체가 노드 객체라는 걸 확인시켜주기 위해 추가
// Ctrl + Enter로 노드 모듈의 global 객체 확인 가능
const fs = require('fs');

// global 오브젝트
console.log(global);

global.hello = () => {
    global.console.log('hello');
}

hello();
global.hello();