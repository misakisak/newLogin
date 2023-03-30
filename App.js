import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from "firebase";
// import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyAjhaKYI3CKPA8thTKWaCXURrh9c6ro78U",
//   authDomain: "authentication-54034.firebaseapp.com",
//   projectId: "authentication-54034",
//   storageBucket: "authentication-54034.appspot.com",  
//   messagingSenderId: "432112843981",
//   appId: "1:432112843981:web:ba436deaab71436226fd84"
// };

// // Initialize Firebase
// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth1 = firebase.auth()
const navigation = useNavigation()

function HomeScreen({navigation}){

  // const handleSignOut = () => {
  //   auth1
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login")
  //     })
  //     .catch(error => alert(error.message))
  // }

  return(
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        styles={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

function LoginScreen({navigation}) {
  // const navigation = useNavigation()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })
      
  //   return unsubscribe
  // }, [])

  // const handleSignUp = () => {
  //   auth1
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  // const handleLogin = () => {
  //   auth1
  //     .signInWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  return(
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Passward"
          value={password}
          onChangeText={text => setPassword(text) }
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={(handleLogin)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Resister</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            options={{ headerShown: false}} 
            name="Login" 
            component={LoginScreen}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default App