import React , {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

const ChatScreen = ({navigation,route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Chat",
          headerTitleAlign: "left",
          headerBackTitleVisible: false,
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                rounded
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                }}
              />
                <Text style={{color:"white",marginLeft:10,fontWeight:700 }}>{route.params.chatName}</Text>
              
            </View>
          ),
        });
      
    }, [navigation])

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
