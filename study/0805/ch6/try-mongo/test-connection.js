const { MongoClient } =require('mongodb'); // 몽고디비 패키지를 임포트

//MongoDB 연결 정보

const uri = "mongodb+srv://mymongo:thddl123@cluster0.8dfkots.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri); //MongoDB 클라이언트 객체 새성

// client.connect(err => { //몽고디비에에 접속
//     const collection = client.db("test").collection("devices"); //디비 컬렉션에 접속
//     //perform actions on toe collection object
//     client.close(); //연결끊기기
// });

async function run() { //async가 있으므로 비동기 처리 함수
    await client.connect();
    const adminDB = client.db('test').admin();
    const listDatabases = await adminDB.listDatabases();
    console.log(listDatabases);
    return "OK";    
}

run()
.then(console.log)
.catch(console.error)
.finally(()=> client.close());