const DB = [];

//회원가입 API 함수 
function register(user) {
    return saveDB(user, function(user) {
        return sendEmail(user, function(user) {
            return getResult(user);
        });
    });

}

//DB에 저장 후 콜백 형성
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

//이메일 발송 로그만 남기는 코드 실행 후 콜백 형성
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

//결과 반환하는 함수
function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({ email: "andy@test.com", password: "1234", name: "andy" });
console.log(result);
