# 1. HTTP
## 개념
- **HTTP**는 **HyperText Transfer Protocol**의 약자이다.

- 그렇다면 **HyperText**와**Transfer Protocol** 은 무엇일까?

---------------------------------------
>### 1.HyperText
>- 직역: **초월적인 텍스트**
>- 의역: **텍스트 간 이동** 할 때, 순차적|접근 방식이 아닌 **비순차적(초월적)접근 방식**을 따르는 텍스트를 의미한다. 쉽게 하이퍼링크를 생각하자. 
>(참고) **하이퍼링크**(Hyper Link): 페이지에서 다른 페이지 혹은 문서 내부에서 다른 문서로 연결되는 참조를 하이퍼링크라고 한다. 

>### 2. Transfer protocol
>통신 장비 간 **데이터 교환 방식에 대해 합의한 내용**이다. 
>통신을 원하는 두 개체가 **무엇을, 어떻게 통신할 것인가**에 대해 **약속**하고 이를 **규칙**으로 정해 놓은 것이라 보면 된다. 데이터의 형식(아날로그 or 디지털), 부호화(Unicode,ASCII), 신호 순서, 인증, 오류 수정 등을 포함한다. 

- 결국, **HTTP**는 **HyperText를 전송하기 위한 통신 규악**을 의미한다. 

- (참고) 하이퍼텍스트는 HTML 에서도 사용된다. 

>**HTML**(HyperText Markup Language)
>- HyperText의 의미는 위와 동일하다. 
>- **Markup은 표시하다**는 뜻으로, 제목, 단락, 목록 등 태그를 사용해 구조적 의미를 표현한다. 또한 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 
>- (예) 특정 상품 표기를 [Appele, iPhone 12]로 할 수 있지만, [**Company**:Apple, **Model**: iPhone 12]로 할 수도 있다.Mark Up은 간단히 태그를 달아 놓는 방식이라 할 수 있다. 
>- 결론적으로 **태그**를 이용해 정보와 문서를 **구조적으로 표현**하는 웹 문서 작성 기술을 의미한다. 

## 특징

1. HTTP는 **웹에서 이루어지는 모든 데이터 교환의 기초**이다. (HTTP는 웹의 중요한 구성 요소이다.)

2. HTTP는 **클라이언트-서버 프로토콜**이다.

>- **클라이언트-서버 프로토콜**:(보통 웹브라우저인)클라이언트 **요청을 생성하기 위해 연결을 연 다음 응답을 받을때 까지 기다리는 모델**, 각각의 요청은 클라이언트에 의해 초기화된다. 
>- 이 둘은 데이터 스트림이 아닌 **개별적인 메세지 교환**을 통해 통신한다. 
>- 클라이언트에 의해 전송되는 메세지를  **요청(requests)** 이라 하고, 요청에 대해 서버에서 응답으로 전송하는 메세지를  **응답(responses)** 이라고 한다. 

3. HTTP는 **상태가 없고, 세션이 있다.**
- HTTP는 **상태를 저장하지 않는다.**(Stateless)
- 예를 들어 `www.sample.com/page1` 요청 후 `www.sample.com/page2`를 요청하는 경우, **이 둘의 요청은 서로 연관성을 가지지 않고 독립적** 이다. 
- 이는 e-커머스 장바구니처럼, 사용자가 일관된 방식으로 페이지와 상호작용하길 원할 때 문제가 된다. 하지만, HTTP는 상태가 없음에도 **HTTP 쿠키**를 사용하면 상태를 저장하는 세션을 사용할 수 있다. 

 >HTTP 쿠키: 서버가 웹 브라우저에 전송하는 작은 데이터 조각이다. 브라우저는 데이터 조각들을 저장해 놓았다가, 동일한 서버에 재요청 시 저장된 데이터를 함께 전송한다. 쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 떄 주로 사용하며, 이를 통해 사용자의 로그인 상태를 유지할 수 있다. 

 4.  HTTP는 **확장 가능**하다. 
- HTTP 헤더를 사용하면 HTTP를 확장하기 쉽다. 클라이언트와 서버가 새로운 헤더에 대해 합의한다면, 새로운 기능을 언제든지 추가할 수 있다. 

## HTTP의 흐름
- 클라이언트가 서버와 통신하고자 할 떄, 최종 서버가 됐든 중간 프록시가 됐든, 다음 단계의 과정을 수행한다. 

1. **TCP 연결**을 연다: TCP 연결은 (단일 또는 여러 개의) **요청을 보내거나 응답을 받는 데 사용** 된다. 클라이언트는 새 연결을 열거나, 기존 연결을 재사용하거나, 서버로 가는 여러 개의 TCP 연결을 열 수 있다. 

> **TCP**(전송 제어 프로토콜)
> - **두 개의 호스트를 연결**하고 **데이터를 교환**하게 해주는 중요한 네트워크 프로토콜이다. 
>- TCP 통신을 할 때 **서버가 통신할 준비가 되어 있는지**, 서로 연결해서 **데이터를 주고 받을 수 있는지** 확인한다. 여기서 준비가 안되었다면 통신을 하게 되고, 준비가 안 되어있따면 서버가 준비가 안 됐다는 메세지 혹은 에러를 사용자에게 보여줄 수 있다. 
>- TCP는 데이터와 패킷이 보내진 **순서대로 전달되는 것을 보장**해준다. TCP의 역할은 에러가 없이 패킷이 **신뢰할 수 있게 전달**되었는지 보중해 주는 것이다. 

![이미지1](https://velog.velcdn.com/images%2Fbky373%2Fpost%2F71087631-74e0-450d-afee-7cc46610706c%2Fimage.png)
![이미지2](https://velog.velcdn.com/images%2Fbky373%2Fpost%2Fee09eac0-a44c-4086-ab40-b7d5c7de4248%2Fimage.png)

2. **HTTP 메세지를 전송**한다.**(요청)**: 전송되는 HTTP 메세지 형태는 아래와 같다. 
> GET / HTTP/1.1 <br />
> Host: developer.mozilla.org<br />
> Accept-Language: fr

3. 요청에 맞게 **서버가 보내준 응답을 읽는다.**
>HTTP/1.1 200 OK <br />
>Date: Sat, 09 Oct 2010 14:28:02 GMT<br />
>Server: Apache<br />
>Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT<br />
>ETag: "51142bc1-7449-479b075b2891b"
>Accept-Ranges: bytes
>Content-Length: 29769
>Content-Type: text/html<br />
>`<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)`

4. 연결을 **닫거나** 다른 요청을 위해 연결을 **재사용**한다.
<br />
<br />
# 2. HTTP 메세지
## 개념
![이미지3](https://t1.daumcdn.net/cfile/tistory/21282E3B554A0A1B2C)
- HTTP 메세지는 **서버와 클라이언트 간에 데이터가 교환되는 방식**을 말한다. **ASCII로 인코딩된 텍스트 정보**이며 여러 줄로 되어 있다. 
- **요청(request)** 과 **응답(response)** 두 가지 타입이 존재하며, 각각 특정한 포맷을 가지고 있다. 아래에서 각각의 내용을 살펴 볼 수 있다. 
- 개발자가 HTTP 메세지를 텍스트로 작성하는 경우는 잘 없다. 대신 **소프트웨어, 브라우저, 프록시, 또는 웹 서버가 그 일을 대신**한다. 
- HTTP 메세지는 설정 파일(프록시 혹은 서버의 경우), API(브라우저의 경우), 혹은 다른 인터페이스를 통해 제공된다. 
- **단순한 메세지 구조**를 이루고 있고, **확장성이 좋다**는 특징이 있다. 

## 공통 구조
- HTTP 요청과 응답의 구조는 서로 유사한 면이 있는데, 구체적으로는 아래와 같다. 

![이미지4](https://user-images.githubusercontent.com/49539592/135721043-123ddb7e-507d-4b43-8bdc-e91679e64621.png)
1. **시작 줄**(start-line):**HTTP 요청** / 또는 요청에 대한 **성공 또는 실패**가 기록된다. 항상 한 줄로 끝난다. 
2. **HTTP 헤더**: 시작 줄 다음으로 **요청에 대한 설명** / 또는 **메세지 본문에 대한 설명**이 들어간다. 
3. **빈 줄**: 요청에 대한 모든 메타 정보가 전송되었음을 알리는 빈 줄이 삽입된다. (헤드와 본문 사이)
4. **본문**(optional): **요청과 관련된 데이터**(HTML form 콘텐츠 등) / 또는 **응답과 관련된 문서**(document)가 **선택적**으로 들어간다. 본문의 존재와 크기는 시작 줄 및 HTTP 헤더에 명시된다. 

- HTTP 메세지의 시작 줄과 HTTP 헤더를 묶어서 **요청 헤드(head)**라고 부르며, 이와 반대로 HTTP 메세지의 페이로드는 **본문(body)** 이라고 한다. 
<br /><br />
# 3. Request
- **요청(request)** 은 클라이언트가 **서버로 전달하는 메세지로, 서버 측 애션을 유도**한다. 
![이미지5](https://user-images.githubusercontent.com/49539592/135721729-ada35ee3-0d72-4b6d-a846-49338737c89e.png)

## 시작 줄 
- 시작 줄 (start-line, Request-line)은 아래 세 가지 요소로 이루어져 있다. 
> **HTTP 메소드 + URI + HTTP버전**
