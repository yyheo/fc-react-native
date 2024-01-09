# Part 1. React Native 개념 및 개요

## Ch 1. Expo CLI & React Native CLI
### Expo Cli
- API, 라이브러리가 있어서 초기 구현이 쉽지만, 자유도 낮음
### React Native CLI
- 고도화된 기능 개발 및 높은 개발 자유도
- 네이티브 모듈 연결 가능

> 선택시, 구현하고자 하는 모든 기능이 Expo에서 지원되는지 고려 필요  
> Expo에서 RN CLI로 전환이 가능함

## Ch 2. Expo 세팅
- Expo App 실행을 위한 Expo Go 앱 설치
- 공식 문서 https://docs.expo.dev/get-started/installation/
- 필요 Tool 설치
  - Node.js
  - Git
  - Watchman(facebook이 만든 file monitoring 도구)
  - homebrew
  - yarn
- 문서를 따라 프로젝트 생성
  - npx: node module을 설치하지 않고도 사용 가능
  - `npx create-expo-app my-app`
  - `npx expo start`
- 터미널에 나타나는 QR로 폰에에서 접속 가능!

## Ch 3. React Native 주요 개념
- 공식 문서: https://reactnative.dev/

### Component
- View : 어떠한 구성요소를 담기 위한 박스
- Text
- StatusBar : 상태바를 관리해주는 컴포넌트
- Image : 이미지 박스. source 옵션에 이미지 지정
- TextInput
- Button, Switch, ScrollView 등
```javascript
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <TextInput placeholder='placeholder'/>
      <Button title="Click Me!" onPress={() => {
        console.log("test")
      }}/>
      <Switch value={true}></Switch>
      {/* <Image source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw1DpSfUIozdHmsfhEGICk6r&ust=1704886696982000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCl6YOc0IMDFQAAAAAdAAAAABAH"}} />
      <ScrollView>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
```

### Component와 prop
- Component: 재사용 가능한 개별적인 여러 조각
- UI를 보고, 어떤 Componet로 구성되어야 하는지 판단할 수 있어야 한다.
- 컴포넌트의 종류
  - 클래스형
    - class 키워드 필요
    - Component로 상속 받아야 함
    - render() 메소드 반드시 필요
    - state, lifeCycle 관련 기능 사용 가능
    - 함수형보다 메모리 자원을 더 사용
  - 함수형
    - state, lifeCycle 관련 기능 사용 불가능 -> hook으로 해결
    - 클래스형보다 메모리 자원을 덜 사용
    - 컴포넌트 선언이 편함
    - 공식 문서에도 함수형 컴포넌트 + hook 사용을 권장!
    - 19년도에 update된 react 버전 16.8부터 hook 지원