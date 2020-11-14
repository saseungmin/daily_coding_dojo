module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error', // 뒷공백 허용 x
    'space-infix-ops': 'error', // 연산자 사이의 공백
    'no-multi-spaces': 'error', // 다중 공백 금지
    curly: 'error', // 중괄호 규칙을 따라야 함
    'brace-style': 'error', // Brace Style
    'no-whitespace-before-property': 'error', // 속성 앞에 공백을 허용하지 않음 foo. bar
    'func-call-spacing': ['error', 'never'], // 함수 식별자와 해당 호출 사이의 간격을 허용 x
    'keyword-spacing': ['error', { before: true, after: true }], // 키워드 앞뒤에 일관된 간격 적용
    'comma-spacing': ['error', { before: false, after: true }], // 쉼표 주위에 간격을 적용 var foo = 1, bar = 2
    'comma-style': ['error', 'last'], // 쉼표 스타일 var foo = 1, bar = 2;
    'comma-dangle': ['error', 'always-multiline'], // 후행 쉼표, 마지막 요소 또는 속성이 인 경우 콤마 후행 필요
    'space-in-parens': ['error', 'never'], // 괄호 안에 공백을 적용 x
    'block-spacing': 'error', // 블록을 열고 블록을 닫기 전에 블록 내부에 공백을 허용
    'array-bracket-spacing': ['error', 'never'], // 배열 대괄호 안에 공백을 허용 x
    'object-curly-spacing': ['error', 'always'], // 중괄호 내부에 일관된 간격 적용
    // 객체 리터럴 속성에서 키와 값 사이에 일관된 간격을 적용
    // 개체 리터럴에서 콜론 앞뒤에 정확히 하나의 공백을 적용
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }], // 화살표 기능의 화살표 앞 / 뒤에 공백 필요
    'linebreak-style': 'off', // 일관된 줄 바꿈 스타일 적용 해제
    'no-shadow': 'off',
    'import/no-absolute-path': 'error', // import 절대경로 error
    'consistent-return': 'off', // return 항상 값을 지정하거나 지정하지 않는 require 문 off
    'no-plusplus': 'off', // ++ 사용금지 off
    'no-continue': 'off', // continue 사용금지 off
  },
};
