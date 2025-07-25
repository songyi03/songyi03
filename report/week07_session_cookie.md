# 세션과 쿠키 기반 인증 흐름 이해

## ✅ 상태 유지 전략 (Session vs Cookie)

웹은 기본적으로 **무상태(stateless)** 프로토콜이기 때문에, 사용자가 로그인했는지 아닌지를 서버가 "기억"하려면 상태를 유지하는 전략이 필요하다.

### 🔒 1. Session 기반 인증

- **저장 위치**: 서버 메모리 / DB (서버 측)
- **동작 흐름**:
  1. 사용자가 로그인하면 서버에서 사용자 정보를 기반으로 **세션 ID**를 생성
  2. 이 세션 ID를 클라이언트(브라우저)에게 **쿠키 형태로 전달**
  3. 이후 요청마다 이 세션 ID가 쿠키로 함께 전달됨
  4. 서버는 세션 ID를 보고 저장된 유저 정보와 매칭해서 인증 상태 확인

- **장점**:
  - 보안성이 높음 (중요 정보가 서버에만 있음)
  - 클라이언트에서 데이터 조작 어려움

- **단점**:
  - 서버 리소스 소모 (사용자 수 많아지면 메모리 문제)
  - 로드 밸런싱 시 세션 공유(Sticky session 또는 Redis 같은 external store 필요)

---

### 🍪 2. Cookie 기반 인증 (토큰 방식: JWT 등)

- **저장 위치**: 클라이언트(브라우저)의 쿠키 또는 로컬스토리지
- **동작 흐름**:
  1. 사용자가 로그인하면 서버에서 **JWT 토큰**을 생성
  2. 이 토큰을 브라우저의 **쿠키에 저장하거나** 로컬스토리지에 저장
  3. 이후 요청마다 이 토큰을 **Authorization 헤더 또는 쿠키에 포함시켜** 서버로 전송
  4. 서버는 토큰을 검증하고, 유저 정보를 추출

- **장점**:
  - 서버 상태에 의존하지 않음 (Stateless)
  - 확장성 좋음 (서버 증설 쉬움)
  - 모바일 앱 등 다양한 클라이언트에서 사용 가능

- **단점**:
  - 토큰 탈취 위험 (XSS, CSRF 등)
  - 토큰이 유출되면 유저 정보를 보호할 수 없음
  - 토큰이 크면 요청마다 무거움

---

## 🔐 로그인 구조 적용 예시

### 1. Session 기반 로그인 흐름 예시 (서버: Express.js 기준)

\`\`\`ts
// 로그인 요청
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.findUser(username);
  if (user && user.password === password) {
    req.session.userId = user.id; // 세션에 저장
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// 인증 필요한 API
app.get('/dashboard', (req, res) => {
  if (req.session.userId) {
    res.send('Welcome!');
  } else {
    res.status(401).send('Not authenticated');
  }
});
\`\`\`

### 2. JWT 기반 로그인 흐름 예시

\`\`\`ts
// 로그인 요청
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.findUser(username);
  if (user && user.password === password) {
    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
    res.cookie('token', token); // 또는 로컬스토리지에 저장하게 할 수도 있음
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// 인증 미들웨어
function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('No token');

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
}
\`\`\`

---

## 🔄 정리 요약 비교표

| 항목 | 세션 기반 인증 | 쿠키(JWT) 기반 인증 |
|------|----------------|----------------------|
| 저장 위치 | 서버 | 클라이언트 |
| 상태 유지 | 유 | 무 (Stateless) |
| 보안 | 상대적으로 강함 | 토큰 탈취 위험 있음 |
| 확장성 | 낮음 (세션 공유 필요) | 높음 (서버 확장 쉬움) |
| 사용성 | 웹에서 주로 사용 | 웹 + 모바일 등 다양 |

---

## 📌 결론

- **소규모 서비스**: 세션 기반이 관리하기 쉬움
- **대규모 서비스 / SPA / 모바일 앱**: JWT 기반이 확장성, 유연성에서 유리
- **보안**: 둘 다 HTTPS 사용, 토큰 만료, 재발급 전략, XSS/CSRF 방어 필요