/**
 * Basic You.i RN app
 */
import React, { Component, createRef } from "react";
import {
  AppRegistry,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  TextInput,
  View,
  findNodeHandle,
 } from "react-native";
import { FormFactor } from "@youi/react-native-youi";

const { TextInputActivateModule } = NativeModules;

export default class YiReactApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: '',
    };

    this.textRef = createRef();
  }

  componentDidMount() {
    if (this.textRef.current) {
      TextInputActivateModule.activate(findNodeHandle(this.textRef.current));
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View
            style={styles.imageContainer}
            focusable={true}
            accessible={true}
            accessibilityLabel="You i TV logo"
            accessibilityHint="Image in your first app"
            accessibilityRole="image"
          >
            <Image
              style={styles.image}
              source={{ uri: "res://drawable/default/youi_logo_red.png" }}
            />
          </View>
        </View>
        <View style={styles.bodyContainer} focusable={true} accessible={true}>
          <View style={{ flex: 2, borderColor: 'grey', borderWidth: 1 }}>
            <TextInput
              ref={this.textRef}
              keyboardType={'ascii-capable'}
              secureTextEntry={false}
              onChangeText={(textValue) => this.setState({ textValue })}
              placeholder={'Hello World'}
              value={this.state.textValue}
            />
          </View>
          <View style={{ flex: 3 }}>
            <Text
              style={styles.headlineText}
              accessibilityLabel="Welcome to your first You I React Native app"
            >
              Welcome to your first You.i React Native app!
            </Text>
            <Text
              style={styles.bodyText}
            >
              For more information on where to go next visit
            </Text>
            <Text
              style={styles.bodyText}
              accessibilityLabel="https://developer dot you i dot tv"
            >
              https://developer.youi.tv
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  image: {
    height: FormFactor.isTV ? 225 : 75,
    width: FormFactor.isTV ? 225 : 75,
    resizeMode: "contain"
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3
  },
  headlineText: {
    marginBottom: 10,
    color: "#333333",
    textAlign: "center"
  },
  bodyText: {
    color: "#333333",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
