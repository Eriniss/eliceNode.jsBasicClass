// * 웹 프레임 워크

// 웹 서비스를 구성하기 위해서는 매우 많은 기능이 필요
// 웹 서비스는 많은 부분이 정형화 되어있음
// 프레임워크를 사용하여 정형화된 부분을 간단하게 구현, 필요한 부분만 집중해서 개발 할 수 있음


// 웹 서비스의 정형화된 구성을 많은 웹 프레임워크가 기본적으로 제공함


// 웹 프레임워크는 HTTP 요청을 처리할 수 있음


// 라우팅, 웹 프레임워크는 HTTP 요청을 분기하는 방법을 제공함
// HTTP 요청 URL에 해당하는 알맞은 응담의 경오를 미리 설정


// HTML Templating은 웹 프레임 워크를 SSR로 구현하기 위한 방법을 제공
// SSR에서 응답으로 보낼 HTML을 서버에서 작성하기 위해, HTML Template를 통해 미리 페이지의 뼈대를 작성 가능


// Node.js에는 다양한 웹 프레임워크가 있음
// express.js, nest.js 등


// 웹 프레임워크 정리
// 웹 서비스를 빠르게 구성하기 위해 웹 프레임워크를 사용할 수 있음
// 웹 프레임워크는 HTTP요청, 응답, 라우팅, HTML Templating등의 기능을 제공함

// Node.js에도 다양한 웹 프레임워크가 있으며, 본 강의에서는 Express.js를 다룸


// * Express.js


// Express.js를 사용하는 이유
// Express.js는 Node.js의 웹 프레임워크중 가장 유명한 웹 프레임워크
// 필요에 따라 유연하게 구조 설정 가능
// 다양한 미들웨어를 통해 필요한 기능을 간단하게 추가 가능
// 모든 동작이 명시적으로 구성되기 때문에 웹 프레임워크의 동작 방식을 이해하기 가장 좋은 프레임워크


// npm init 으로 시작하기
// Express.js를 처음부터 작성할 수 있는 방법
// 직접 모든 구조를 작성해야 하기 때문에 Express.js를 처음 접하는 사용자에겐 쉽지 않음


// express-generator 사용하기
// Express.js는 express-generator 라고 하는 프로젝트 생성기를 제공함
// express-generator를 사용하면 프로젝트의 기본구조를 자동으로 생성해줌
// 빠르게 프로젝트를 시작하기 좋은 방법
// 생성된 프로젝트는 npm start로 실행 가능


// npx + express-generator 사용하기
// npx를 사용하여 express-generator를 설치하지 않고, 바로 사용 가능.
// express-generator는 프로젝트 생성 이후엔 사용되지 않기 때문에, npx를 사용하는 것도 좋은 방법


