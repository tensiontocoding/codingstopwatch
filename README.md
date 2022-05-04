<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======

# 코딩스톱워치 (coding stopwatch)⏰

## 1. 기획 의도

고등학교때 하루하루 공부시간 측정용으로 사용했던 스톱워치에서 착안하여 <br>
프로젝트도 만들고, 코딩 실력도 늘리고, 코딩 텐션 유지에 도움이 되는 코딩 스톱 워치를 기획하였다.

canva를 이용해 기본적인 레이아웃을 간단하게 디자인했다.
[ https://www.canva.com/design/DAE_R42vVqQ/view ]

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


## 4. 기능 구현

### 4-1. 웹스토리지 선정 (데이터 저장 방법은 어떤걸 써야할까)

[ https://han41858.tistory.com/54 ] 를 참고하니

1. 네트워크로 불러온 리소스나 파일을 캐싱해야 한다면 캐시 스토리지 API(Cache Storage API)
2. 아니라면 IndexedDB 를 이용하는게 좋다고 한다.

캐싱이나 로컬스토리지는 추천하지 않아 위에 방법을 찾아보고 안되면 로컬 스토리지로 해보려고 한다.

[ https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ] 에서 웬만한 브라우저는 로컬 스토리지를 지원한다는 것을 확인했다.

### 4-2. 깃허브 contribution 받아오기

api를 이용해 달력에 표시할 contribution 값을 받아온다.

[ https://docs.github.com/en/graphql/reference/objects#contributionscollection ] <br>
[ https://github.com/Didericis/github-contributions-api ]

## 5. 기본적인 UI/UX

## 6. 최적화

