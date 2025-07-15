export default function LoginForm() {
    return (
      <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded shadow">
        <h2 className="text-lg font-bold mb-4 text-center">로그인</h2>
        <div className="mb-4">
          <input className="w-full border p-2 rounded focus:outline-none" type="email" placeholder="이메일" />
        </div>
        <div className="mb-4">
          <input className="w-full border p-2 rounded focus:outline-none" type="password" placeholder="비밀번호" />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">로그인</button>
      </div>
    );
  }