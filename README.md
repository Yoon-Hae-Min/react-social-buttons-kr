# react-social-buttons-kr

## 디자인 미리보기

https://6390ab1791c9ca4ba1d1b586-jxsenddwvb.chromatic.com/?path=/story/sociallogin-githubloginbutton--default

## 설치

npm

```bash
npm i react-social-buttons-kr
```

yarn

```bash
yarn add react-social-buttons-kr
```

## UI목록

- 네이버

```jsx
<NaverLoginButton />
```

- 카카오

```jsx
<KakaoLoginButton />
```

- 페이스북

```jsx
<FacebookLoginButton />
```

- 애플

```jsx
<AppleLoginButton />
```

- 구글

```jsx
<GoogleLoginButton />
```

- 깃허브

```jsx
<GithubLoginButton />
```

## Props

### 공통

| prop    | 타입                            | 기본값   | 설명                                        |
| ------- | ------------------------------- | -------- | ------------------------------------------- |
| width   | `string`                        | 1.5rem   | 버튼의 폭의 길이를 설정한다.                |
| height  | `string`                        | 1.5rem   | 버튼의 높이를 설정한다.                     |
| onClick | `function`                      |          | 버튼을 클릭했을시 실행할 이벤트를 등록한다. |
| shape   | `'circle','standard', 'square'` | standard | 버튼의 모양을 설정한다.                     |
| align   | `'center','start'  `            | start    | 아이콘의 정렬상태를 설정한다.               |
| isRound | `boolean`                       | true     | 버튼의 둥근정도를 설정한다 .                |

### 네이버 로그인 버튼

| prop       | 타입               | 기본값 | 설명                    |
| ---------- | ------------------ | ------ | ----------------------- |
| designType | `'green', 'white'` | green  | 버튼의 테마를 설정한다. |

### 페이스북 로그인 버튼

| prop       | 타입                                           | 기본값 | 설명                    |
| ---------- | ---------------------------------------------- | ------ | ----------------------- |
| designType | `'blue', 'blue-white', 'black', 'black-white'` | blue   | 버튼의 테마를 설정한다. |

### 애플 로그인 버튼

| prop       | 타입               | 기본값 | 설명                         |
| ---------- | ------------------ | ------ | ---------------------------- |
| designType | `'white', 'black'` | white  | 버튼의 테마를 설정한다.      |
| border     | `boolean`          | false  | 버튼의 테두리 선을 설정한다. |

### 구글 로그인 버튼

| prop       | 타입      | 기본값 | 설명                         |
| ---------- | --------- | ------ | ---------------------------- |
| designType | `'white'` | white  | 버튼의 테마를 설정한다.      |
| border     | `boolean` | false  | 버튼의 테두리 선을 설정한다. |

## 로그인 버튼 디자인 가이드

[네이버](https://developers.naver.com/docs/login/bi/bi.md)

[카카오](https://developers.kakao.com/docs/latest/ko/kakaosync/design-guide)

[페이스북](https://developers.facebook.com/docs/facebook-login/userexperience?locale=ko_KR)

[애플](https://developer.apple.com/design/human-interface-guidelines/technologies/sign-in-with-apple)

[구글](https://developers.google.com/identity/branding-guidelines?hl=ko)
