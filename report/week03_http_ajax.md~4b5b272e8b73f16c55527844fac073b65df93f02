# Week 3: HTTP & Ajax 학습 자료

## 1. HTTP의 Request/Response 구조

### HTTP (HyperText Transfer Protocol)
HTTP는 웹에서 클라이언트와 서버 간의 통신을 위한 프로토콜입니다. 클라이언트가 서버에 요청을 보내고, 서버가 응답을 반환하는 구조로 동작합니다.

### HTTP Request 구조

HTTP 요청은 다음과 같은 구조로 구성됩니다:

```
[HTTP Method] [URL] [HTTP Version]
[Header Fields]

[Request Body]
```

#### 1. Request Line
- **HTTP Method**: GET, POST, PUT, DELETE, PATCH 등
- **URL**: 요청하는 리소스의 경로
- **HTTP Version**: HTTP/1.1, HTTP/2.0 등

#### 2. Header Fields
- **Host**: 요청을 보내는 서버의 도메인
- **User-Agent**: 클라이언트 정보
- **Accept**: 클라이언트가 받을 수 있는 콘텐츠 타입
- **Content-Type**: 요청 본문의 데이터 타입
- **Authorization**: 인증 정보

#### 3. Request Body
- POST, PUT 등의 메서드에서 서버로 전송할 데이터
- GET 요청에서는 일반적으로 비어있음

### HTTP Response 구조

HTTP 응답은 다음과 같은 구조로 구성됩니다:

```
[HTTP Version] [Status Code] [Status Message]
[Header Fields]

[Response Body]
```

#### 1. Status Line
- **HTTP Version**: 사용된 HTTP 버전
- **Status Code**: 응답 상태 코드 (200, 404, 500 등)
- **Status Message**: 상태 코드에 대한 설명

#### 2. Header Fields
- **Content-Type**: 응답 본문의 데이터 타입
- **Content-Length**: 응답 본문의 길이
- **Set-Cookie**: 쿠키 설정
- **Cache-Control**: 캐시 제어

#### 3. Response Body
- 실제 응답 데이터 (HTML, JSON, 이미지 등)

### 주요 HTTP Status Code
- **2xx (성공)**: 200 OK, 201 Created, 204 No Content
- **3xx (리다이렉션)**: 301 Moved Permanently, 302 Found, 304 Not Modified
- **4xx (클라이언트 오류)**: 400 Bad Request, 401 Unauthorized, 404 Not Found
- **5xx (서버 오류)**: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

## 2. Ajax, Forward, Redirect 차이점

### Ajax (Asynchronous JavaScript and XML)

#### 특징
- **비동기 통신**: 페이지 새로고침 없이 서버와 데이터 교환
- **JavaScript 기반**: 클라이언트 측에서 실행
- **부분 업데이트**: 페이지의 일부분만 업데이트 가능

#### 동작 방식
1. JavaScript에서 XMLHttpRequest 또는 fetch API 사용
2. 서버에 비동기 요청 전송
3. 서버에서 응답 데이터 반환
4. JavaScript로 DOM 조작하여 페이지 업데이트

#### 예시 코드
```javascript
// XMLHttpRequest 사용
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.getElementById('result').innerHTML = data.message;
    }
};
xhr.send();

// fetch API 사용
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.message;
    });
```

#### 장점
- 사용자 경험 향상 (페이지 새로고침 없음)
- 서버 부하 감소 (필요한 데이터만 전송)
- 반응성 있는 웹 애플리케이션 구현

#### 단점
- SEO 문제 (검색 엔진 최적화 어려움)
- 브라우저 뒤로가기 버튼 문제
- JavaScript 비활성화 시 동작 불가

### Forward (포워드)

#### 특징
- **서버 측 처리**: 서버 내부에서 처리
- **URL 변경 없음**: 클라이언트 URL은 그대로 유지
- **Request 객체 공유**: 동일한 요청 객체 사용

#### 동작 방식
1. 클라이언트가 서버에 요청
2. 서버에서 다른 서블릿/JSP로 요청 전달
3. 전달받은 페이지에서 응답 생성
4. 클라이언트에게 응답 전송

#### 예시 (Java Servlet)
```java
// Servlet A에서 Servlet B로 포워드
RequestDispatcher dispatcher = request.getRequestDispatcher("/servletB");
dispatcher.forward(request, response);
```

#### 장점
- 서버 내부 처리로 빠름
- 데이터 공유 용이
- 클라이언트는 포워드 과정을 알 수 없음

#### 단점
- URL이 변경되지 않아 혼란 가능
- 새로고침 시 원래 요청 재실행

### Redirect (리다이렉트)

#### 특징
- **클라이언트 측 처리**: 클라이언트가 새로운 요청 생성
- **URL 변경**: 브라우저 주소창 URL 변경
- **새로운 Request**: 완전히 새로운 요청 생성

#### 동작 방식
1. 클라이언트가 서버에 요청
2. 서버에서 리다이렉트 응답 (3xx 상태코드)
3. 클라이언트가 새로운 URL로 재요청
4. 새로운 페이지에서 응답 생성

#### 예시 (Java Servlet)
```java
// 다른 페이지로 리다이렉트
response.sendRedirect("/newPage.jsp");
```

#### 장점
- URL이 변경되어 명확함
- 새로고침 시 리다이렉트된 페이지 요청
- 브라우저 히스토리에 기록

#### 단점
- 두 번의 HTTP 요청으로 인한 성능 저하
- 데이터 공유 어려움

## 3. 비교 정리

| 구분 | Ajax | Forward | Redirect |
|------|------|---------|----------|
| **처리 위치** | 클라이언트 (JavaScript) | 서버 내부 | 클라이언트 + 서버 |
| **URL 변경** | 없음 | 없음 | 있음 |
| **페이지 새로고침** | 없음 | 있음 | 있음 |
| **HTTP 요청 수** | 1회 | 1회 | 2회 |
| **데이터 공유** | JSON/XML | Request 객체 | 어려움 |
| **사용 예시** | 실시간 데이터 로드 | 내부 페이지 이동 | 로그인 후 메인 페이지 |

## 4. 실제 사용 사례

### Ajax 사용 사례
- 무한 스크롤 구현
- 실시간 검색 자동완성
- 댓글 작성/삭제
- 좋아요 버튼 기능
- 실시간 채팅

### Forward 사용 사례
- 로그인 처리 후 결과 페이지 표시
- 폼 데이터 검증 후 처리
- MVC 패턴에서 Controller → View 이동

### Redirect 사용 사례
- 로그인 성공 후 메인 페이지 이동
- 권한 없는 페이지 접근 시 로그인 페이지 이동
- POST 요청 후 중복 제출 방지 (PRG 패턴)
- 도메인 변경 또는 페이지 이동

## 5. 결론

각각의 방식은 고유한 특징과 사용 목적이 있습니다:

- **Ajax**: 사용자 경험을 향상시키고 싶을 때, 페이지의 일부만 업데이트하고 싶을 때
- **Forward**: 서버 내부에서 빠르게 페이지를 전환하고 데이터를 공유하고 싶을 때
- **Redirect**: 명확한 URL 변경이 필요하고, 브라우저 히스토리 관리가 중요할 때

웹 개발 시 상황에 맞는 적절한 방식을 선택하여 사용하는 것이 중요합니다.