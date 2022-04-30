# 코딩스톱워치 (coding stopwatch)⏰

## 1. 기획

고등학교때 하루하루 공부시간 측정용으로 사용했던 스톱워치에서 착안하여 <br>
프로젝트도 만들고, 코딩 실력도 늘리고, 코딩 텐션 유지에 도움이 되는 코딩 스톱 워치를 기획하였다.

## 2. 목표
- 간단하면서 가시성 높은 코딩 시간 기록용 앱
- 요소들의 움직임은 부드럽게
- 디자인은 단순,깔끔,세련되게

## 3. 기능

- 코딩 스톱 워치
- 가시화를 위한 날짜-시간,contributions 그래프
- 달력에 시간표시
- 깃허브 커밋시 달력에 횟수 표시
- 달력에서 시간 수정가능
- 라이트모드/다크모드

## 4. 웹스토리지 선정 (데이터 저장 방법은 어떤걸 써야할까)

[ https://han41858.tistory.com/54 ] 를 참고하니

1. 네트워크로 불러온 리소스나 파일을 캐싱해야 한다면 캐시 스토리지 API(Cache Storage API)
2. 아니라면 IndexedDB 를 이용하는게 좋다고 한다.

캐싱이나 로컬스토리지는 추천하지 않아 위에 방법을 찾아보고 안되면 로컬 스토리지로 해보려고 한다.

[ https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ] 에서 웬만한 브라우저는 로컬 스토리지를 지원한다는 것을 확인했다.

## 5. 기본적인 레이아웃

canva를 통해 기본적인 레이아웃을 간단하게 디자인했다.

[ https://www.canva.com/design/DAE_R42vVqQ/view ]

## 6. 깃허브 contribution 받아오기

api를 이용해 달력에 표시할 contribution 값을 받아온다.

[ https://docs.github.com/en/graphql/reference/objects#contributionscollection ] <br>
[ https://github.com/Didericis/github-contributions-api ]

