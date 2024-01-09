import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

const Header = (props) => {
  return <Text>{props.title}</Text>
}

const MyProfile = () => {
  return (
    <View>
      <Profile
        name="지은"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={40}
      />
    </View>
  );
}

const Division = () => {
  return <Text>Division</Text>
}

const FriendSection = () => {
  return <Text>FriendSection</Text>
}

const FriendList = () => {
  return (
    <View>
      <Profile
        name="지연"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={30}
      />
      <Profile
        name="세인"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={30}
      />
      <Profile
        name="지현"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={30}
      />
      <Profile
        name="현서"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={30}
      />
      <Profile
        name="유림"
        uri="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg"
        profileSize={30}
      />
    </View>
  );
}

// const Profile = (props) => {
//   return (
//     <View style={{flexDirection: "row"}}>
//       <Image source={{ 
//         uri: props.uri
//       }} 
//       style = {{
//         width: props.profileSize,
//         height: props.profileSize,
//       }}/>
//       <Text>{props.name}</Text>
//     </View>
//   )
// }

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: this.props.uri,
          }}
          style={{
            width: this.props.profileSize,
            height: this.props.profileSize,
          }}
        />
        <Text>{props.name}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});