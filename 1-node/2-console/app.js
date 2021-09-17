// Ctrl + Enter로 console API 확인 가능
console.log('logging....');

// 이전의 로그 지우기
console.clear();

// log level
// 서버에 배포했을 때 중요한 warning이나 error는 로그로 남길 수 있는데, 
// 이때 심각한 에러 알아차리기 쉽고, 수정하기도 쉬워짐
// 배포 할 때 로그 레벨별로 출력 유무 지정할 수 있음
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
// 첫 번째 인자가 참이 아닌 경우에만 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'Heeney', age: 20, company: { name: 'AAA' } };
console.log(student);
console.table(student);
// dir 옵션에 따라 showHidden, depth, colors
console.dir(student, { showHidden: true, colors: false, depth: 2 });
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting 함수 호출 횟수 확인
function a() {
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();