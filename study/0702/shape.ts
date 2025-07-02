class Person {
    name: string;
}

const jill: {name: string} = {name: 'jill'}; // '='는 답을 입력해주는 것이다.

const person: Person = jill; // person은 Person '타입'을 지정해준것이다.

console.log(person); 


//js파일을 만들면 error가 나는데 괜찮다. js파일 삭제하면 됨.

//pwd : 현재 경로에 대해 알수있다. 
//상위폴더로 가기 위한 것 : cd change directory
//cd.. : 상위폴더로 가기
//ls : 현재 폴더에 있는 파일을 보여준다.
//ls-a: 숨겨진 파일 보기
//cd: 하위폴더로 가기
//cat: 파일 내용 보고 싶을떄
//touch: 파일 생성
//rm: 파일 삭제
//rm -r: 폴더 삭제
//mkdir: 폴더 생성
//mv: 파일 이동
//cp: 파일 복사
//ln: 링크 생성
//chmod: 파일 권한 변경
//chown: 파일 소유자 변경
//vi: 텍스트 편집기
// 나갈때 : :q
//mkdir: 폴더 생성
//mkdir -p: 폴더 생성
//cp -r: 폴더 복사

