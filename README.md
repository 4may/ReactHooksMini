# ReactHooksMini

## メモ

### エラー１

inputフォームに文字列を入力できない。

### 原因

StyledInputとして、styled.divを指定していた。

```
const StyledInput = styled.div`...`
```

### 解決策

StyledInputとしてstyled.divではなく、styled.inputを指定する。

```
const StyledInput = styled.input`...`
```

### エラー２

コンパイルエラー。hooksInputがReactの関数コンポーネントとして認識されない。

```
./src/HooksInput.js
  Line 22:31:  React Hook "useState" is called in function "hooksInput" which is neither a React function component or a custom React Hook function   react-hooks/rules-of-hooks
  Line 23:43:  React Hook "useState" is called in function "hooksInput" which is neither a React function component or a custom React Hook function   react-hooks/rules-of-hooks
  Line 29:5:   React Hook "useEffect" is called in function "hooksInput" which is neither a React function component or a custom React Hook function  react-hooks/rules-of-hooks

Search for the keywords to learn more about each error.
```

### 原因

Reactの関数コンポーネントとして認識されるためには関数の名前の先頭を大文字から始める必要があるが、エラーのコードでは小文字から始めてしまっているため。

```
const hooksInput = () => {

...

export default hooksInput
```

### 解決策

関数の名前を大文字から始める。

```
const HooksInput = () => {

...

export default HooksInput
```