# Setting

### [TypeScript Main Page](https://www.typescriptlang.org/)

<br/>

## VSCode Setting

VSCode 실행 후 Ctrl + ',' 입력하여 설정 창으로 이동

'strict null' 을 입력하여 좌측에 확장 -> TypeScript로 이동

JS/TS Implicit Project Config: Strict Null Checks를 체크해준다.

<br/>

## 설치

> npm install -g typescript  
> 명령어 : tsc main.ts => main.js 파일 생성

> npm install -g ts-node  
> TS 코드를 JS로 변환해서 노드에서 실행하는 것을 한번에 할 수 있도록 도와준다.  
> 명령어 : ts-node main.ts

<br/>

## TSC 명령어

### tsc main.ts

main.js 파일을 생성해준다.

### tsc main.ts -w

옵션 (-w) : main.ts 파일의 변화가 생길 때 마다 main.js 파일에도 변화를 적용
