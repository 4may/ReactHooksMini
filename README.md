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



### 原因



### 解決策

