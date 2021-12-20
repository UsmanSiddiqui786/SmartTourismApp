import React from 'react';
import DateField from 'react-native-datefield';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import {
    Modal,
    Button,
    Input,
    FormControl,
    Center,
    NativeBaseProvider,
  } from "native-base";
import {Home} from './Home'; 

export function Login ({ navigation }) {
    
    return (
      <View style={styles.container}>
        <Text style={{color:'#fb5b5a',fontWeight:'bold',fontSize:40,marginBottom:60}}>
            My Tourism
        </Text>
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry={true}  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <>
            
            <Example />
          </>
            
        </TouchableOpacity>
      </View>
    );
}
export function Example() {
    const [modalVisible, setModalVisible] = React.useState(false)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
      <>
        <NativeBaseProvider>
        <Center flex={1} px="3">
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Password</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>City</FormControl.Label>
                <Input/>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setModalVisible(false)
          

                  }}
                >
                  Go
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Button style={{backgroundColor:'#fb5b5a'}}
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        >
          SignUp
        </Button>
       
        </Center>
      </NativeBaseProvider>
      </>
    )
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  signupBtn:{
    width:"50%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
  },
});
