# 🎯 아키텍처 패턴 비교: MVC vs MVP vs MVVM

## 📝 개요

프로그래밍에서 아키텍처 패턴은 코드의 역할을 분리해 **유지보수**, **협업**, **테스트**를 더 쉽게 만들어주는 설계 전략이에요.  
그 중에서도 대표적인 세 가지 아키텍처 패턴인 **MVC**, **MVP**, **MVVM**은 UI 중심 애플리케이션에서 자주 사용돼요.

---

## 🧱 패턴별 구조와 구성 요소

### 1️⃣ MVC (Model - View - Controller)

- **Model**: 💾 데이터와 비즈니스 로직 담당 (예: DB에서 데이터 가져오기)
- **View**: 👀 사용자에게 보이는 UI (HTML, 버튼 등)
- **Controller**: 🎮 사용자 입력을 처리하고 Model ↔ View 연결

#### 📌 구조 흐름
```plaintext
사용자 입력 → Controller → Model → View
```

#### 📍 예시
- 유저가 로그인 버튼 클릭 → Controller가 ID/PW 전달 → Model에서 로그인 처리 → View에 로그인 성공 화면 출력

#### ✅ 특징
- 구조가 단순하고 초보자에게 익숙함
- 하지만 View와 Controller 간 **결합도가 높아서** 유지보수가 어려워질 수 있음

---

### 2️⃣ MVP (Model - View - Presenter)

- **Model**: 💾 데이터와 비즈니스 로직
- **View**: 👀 UI를 보여주고, 입력은 Presenter에 넘김
- **Presenter**: 🧠 UI 로직을 처리하고, View에 결과 전달 (View를 인터페이스로 바라봄)

#### 📌 구조 흐름
```plaintext
사용자 입력 → View → Presenter → Model
                      ↓
                View 업데이트
```

#### 📍 예시
- 안드로이드 앱에서 버튼을 클릭 → View가 클릭 이벤트를 Presenter에 넘김 → Presenter가 Model에 요청 → Presenter가 결과를 View에 전달

#### ✅ 특징
- View와 Presenter 간 **인터페이스 기반 분리** → 단위 테스트 쉬움
- View가 로직을 거의 안 가지므로 역할이 가벼움

---

### 3️⃣ MVVM (Model - View - ViewModel)

- **Model**: 💾 데이터와 비즈니스 로직
- **View**: 👀 사용자에게 보여지는 UI
- **ViewModel**: 🧠 View와 Model을 이어주는 중개자 역할.  
  View의 상태를 **데이터 바인딩**으로 자동 반영함

#### 📌 구조 흐름
```plaintext
View ↔ ViewModel ↔ Model
```

#### 📍 예시
- Vue.js나 React + MobX에서 input 값이 바뀌면 자동으로 ViewModel의 값이 바뀌고,  
  그 값이 다시 화면(View)에 반영됨 (양방향 바인딩)

#### ✅ 특징
- 데이터 바인딩으로 View와 ViewModel 연결 → 코드 간결
- 테스트 쉬움 + 유지보수 용이
- 단점: **초기 학습 난이도**가 다소 있음

---

## 🔍 세 가지 패턴 비교표

| 항목         | MVC                              | MVP                              | MVVM                              |
|--------------|-----------------------------------|-----------------------------------|-----------------------------------|
| 구성 요소    | Model, View, Controller          | Model, View, Presenter           | Model, View, ViewModel           |
| 주 역할 분리 | View와 Controller 간에 나눔       | Presenter가 모든 로직 담당       | ViewModel이 상태 바인딩 처리     |
| View의 역할  | 사용자 입력 처리 + 결과 보여줌    | 화면 출력만 담당 (거의 수동)     | UI에만 집중, 바인딩만 수행       |
| 테스트 용이성| 🔴 낮음                            | 🟢 높음                            | 🟢 높음                            |
| 바인딩 방식  | 수동으로 상태 갱신 필요            | 수동 갱신                          | 🔁 양방향 자동 바인딩             |
| 대표 예시    | Spring MVC, Django                | Android (초기 구조)               | Vue.js, React+MobX, WPF 등       |
| 결합도       | View-Controller 결합도 높음        | Presenter가 View 인터페이스 사용  | View와 ViewModel 느슨하게 연결   |

---

## ✅ 마무리 요약

| 패턴  | 장점                                                                 | 단점                                                         | 추천 상황                                         |
|-------|----------------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------|
| MVC   | - 구조 단순<br>- 빠른 구현 가능                                      | - View와 Controller 결합도 높음<br>- 대규모 프로젝트에 부적합 | 소규모 웹 프로젝트, 빠른 프로토타입               |
| MVP   | - UI 로직 분리<br>- 테스트 용이<br>- 명확한 역할 분담               | - View와 Presenter 간 인터페이스 정의 필요                   | Android, 테스트 중심 개발                         |
| MVVM  | - 양방향 바인딩<br>- 유지보수 및 테스트 용이<br>- 컴포넌트화 유리  | - 초기에 바인딩 구조 이해 어려움<br>- 과도한 추상화 가능     | Vue, React 등 프론트엔드 앱 / 대규모 프로젝트    |

---

> 💡 **팁:**  
> - **빠르게 구현**하려면 `MVC`  
> - **테스트와 역할 분리**가 중요하면 `MVP`  
> - **자동 UI 업데이트와 구조적 설계**가 필요하면 `MVVM`!
