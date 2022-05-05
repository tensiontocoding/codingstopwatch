# 코딩스톱워치 (coding stopwatch) ⏰

## 1. 기획
고등학교때 하루하루 공부시간 측정용으로 사용했던 스톱워치에서 착안하여 프로젝트도 만들고, 코딩 실력도 늘리고, 코딩 텐션 유지에도 도움이 되는 웹앱 코딩 스톱 워치를 기획했다.

### 1-1. 사용 기술
html5, css3, js, reactjs, styled-components, gh-pages, moment.js, chart.js, indexedDB
+ ts, apollo, graphql, vite

### 1-2. 기본 레이아웃 디자인
[ https://www.canva.com/design/DAE_R42vVqQ/view ] canva를 이용해 기본적인 레이아웃 디자인을 만들었다.

### 1-3. 목표
- 간단하고 가시성 높은 코딩 시간 기록용 앱
- 움직임은 부드럽게
- 디자인은 단순,깔끔,세련?되게

### 1-4. 기능
- 브라우저 DB 사용
- 스톱 워치
- 날짜-시간,contributions 그래프
- 달력에 시간표시
- 달력에 contributions 표시
- 달력에서 시간 수정 기능
- 라이트모드/다크모드


## 2. 기능 구현
이 프로젝트의 베이스는 react이다. 함수형 컴포넌트 + hook 조합을 추천하길래 이렇게 구현할 계획이다. (왜 추천하는지는 다음에 알아볼 예정이다.)

### 2-1. 웹스토리지 선정
모두가 사용할 수 있게 브라우저로 코딩시간을 저장할수 있는 웹스토리지를 선택했다. (클라이언트 쪽에서 적용되는 웹 db)

[ https://han41858.tistory.com/54 ] 를 보면 추천하는 웹스토리지는 두개이다.

- 네트워크로 불러온 리소스나 파일을 캐싱해야 한다면 **캐시 스토리지 API(Cache Storage API)**
- 아니라면 **IndexedDB**

캐싱이나 로컬스토리지는 추천하지 않아 위에 방법을 찾아보고 안되면 로컬 스토리지로 해보려고 했는데, indexDB로 구현이 가능할것 같다.

~~[ https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ] 에서 웬만한 브라우저는 로컬 스토리지를 지원한다는 것을 확인했다.~~

[ https://runebook.dev/ko/docs/dom/indexeddb_api/using_indexeddb ] <br>
[ https://developer.mozilla.org/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB ] <br>
위에 링크로 indexedDB의 사용법을 알아보았다. 의외로 사용에는 어려움이 없어보인다.

indexDB로 저장할 data는 두가지이다.
- 깃허브 아이디 // 나중에 깃허브 아이디를 바꿀수 있게 update를 할 예정이므로 깃허브 아이디 별로 저장공간이 필요
- 날짜와 날짜 별 코딩시간 // 날짜와 날짜별 코딩 시간을 저장하고, 그래프와 달력에 값을 호출

contributions은 호출 값으로 저장할 필요가 없다.

### 2-2. 깃허브 contribution 호출
[ https://docs.github.com/en/graphql/reference/objects#contributionscollection ] <br>
[ https://github.com/Didericis/github-contributions-api ] <br>
[ https://github.com/sallar/github-contributions-api ] <br>
위 주소를 참고, api를 이용해 달력에 표시할 contributions 값을 받아온다.

- 그래프에는 최근 2주간의 기록을 표시
- 달력에는 해당 월별로 contributions를 표시

apollo-graphql을 이용해 넘어오는 값을 한번 필터링해도 좋을거 같다.

### 2-3. chart.js로 그래프 구현
[ https://velog.io/@eunjin/React-리액트-그래프차트-라이브러리-모음 ]를 보면 여러가지 react에서 이용할수 있는 라이브러리를 소개하고 있다. 그 중에서 chart.js를 선택했다. 유명하고 가볍고 친절한 설명이 장점이라고 하는데 딱히 큰 이유는 없다.

- 최근 2주간의 코딩시간과 contributions 표기
- 서 코딩시간과 contributions가 독립적으로 배치
- 그래프 크기는 일정하게 유지하되 그 안에 값이 변하면 비례적으로 변하는 그래프

### 2-4. moment.js로 달력 구현 
[ https://yeolceo.tistory.com/69 ] 참고

- contribution 수 표기
- contribution 수 별 색 변화 
- 코딩시간 표기
- 코딩시간 변경 가능
- 월별 달력 이동

### 2-5. stopwatch 구현
[ https://kwanghyuk.tistory.com/185 ] 참고

- 스타트를 누르면 측정이 시작 -> 스타트 버튼은 스톱으로 
- 스톱 누르면 측정 중지 -> 스톱 버튼은 스타트로 
- 리셋 버튼으로 초기화 가능

### 2-6. 통합 구현


## 3. UI/UX
UI/UX는 기획 목표에 맞게 기본만 하자는 생각으로 단순, 깔끔, 명확하면서 부드러운 느낌을 주려고 했다.

### 3-1. reset css
[ https://parkjh7764.tistory.com/80 ] 를 참고해 css를 리셋 해주었다.

### 3-2. 배치
[ https://intrepidgeeks.com/tutorial/five-methods-of-managing-placement-area-from-react ] 참고

### 3-3. light/dark 모드 구현
- 상단에 해와 달 표시 
- 누르면 변경

### 3-4. 부드러운 움직임 구현


## 4. next level

### 4-1. typescript 적용

### 4-2. apollo graphql 적용
 [ https://d2.naver.com/helloworld/4245995 ] 참고

### 4-3. 최적화

### 4-4. weppack 대신 vite 적용

### 4-5. github id 입력
기존에 나의 깃허브 contributions을 받아오는 거였지만 다른사람돌 쓸수 있도록 깃허브 아이디를 입력해서 해당 아이디의 값을 받아오는 걸로 변경했다.


## 5. 후기

혼자하는 미니 프로젝트를 기획하고 구현했고(아직은 구현중이지만) 발전시켜나갈 계획이다. readme에 작성하는게 맞나 싶긴하지만 작업을 위해, 기록을 위해, 포트폴리오를 위해 프로젝트 AtoZ를 적어보았다. <br>

적으면서 느낀 것은 글의 통일성을 유지의 중요함이다. 처음 글을 쓸때는 격식을 차리고 발표하는 느낌으로 적었으나 나중에는 일기를 쓰듯이 글의 느낌이 변하기도 했다. 소제목 같은 경우도 명사로 끝나는 것들과 '~하기'로 끝나는 것들이 뒤섞여 있어 명사로 끝나는 걸로 통일시켰다. 영어 표기와 한글 표기가 혼용된 것은 정리하지 못했다.<br>

좋은 글을 쓰는 방법도 알게 되는 것 같다. 글을 쓰면 이상게 말을 늘이는 것이 보였고, 보일때마다 읽고 다시 쓰고를 반복하면서 명확하고 간단하게 만들어 전달력을 높이려 했다.
(ex.이런게 있으면 좋을것 같다는 생각이 든다. -> 이런게 필요하다.)<br>

코딩을 하면서 정보 전달이 주 목적이라는 것을 알고 난 후, 세상의 모든 것이 정보전달로 보이기 시작했다. 그러면서 자연스럽게 글쓰기에서도 정보전달을 잘 할수 있는 방법을 찾게 되는 것 같다. 말을 하면서도 그런 방향으로 발전하려고 노력하는 중이다. 아주 좋은 변화라고 생각이든다.<br>

국비수업이 끝났고 react를 사용하는 프론트엔드 개발자로 방향을 정했지만, 아직 react에 대한 이해가 전무한 상태였다. 이번 프로젝트를 하면서 react에 대한 이해와 더불어 제대로된 웹앱을 만들어보면서 코딩에 대한 흥미를 높일수 있었다.
