## 🐤 Daily Coding Dojo

- 매일 코딩 도장
- 현실적이게 꾸준히를 목표로 한다.

### 🦄 진행 방법

- 테스트를 적용한다. (jest..)
- 문제 혹은 링크 첨부한다.
- 해당 문제를 TDD 사이클에 맞춰 문제를 푼다.
- 문제를 푼 해당 폴더의 `README.md` 파일에 어떤 방식으로 풀었는지 풀이 방법을 적는다.
- 푼 문제에 대한 회고 적는다.

### 📚 JavaScript 폴더 별 설정 with Jest

#### 📌 npm install

```shell
> npm init -y
> npm i jest @types/jest eslint jest-plugin-context
> npx eslint --init
```

#### 📌 .eslintrc.js with airbnb

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    context: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
};
```

#### 📌 jest.config.js

```js
module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
```