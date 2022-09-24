import react from "react";
import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { createContact } from "../store/actions/Index";

export default function CreateQontact({ navigation }) {
  const dispatch = useDispatch();
  const [formRegister, setRegister] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: "",
  });

  const onChange = (text, name) => {
    const newForm = {
      firstName: formRegister.firstName,
      lastName: formRegister.lastName,
      age: formRegister.age,
      photo: formRegister.photo,
    };
    newForm[name] = text;
    setRegister(newForm);
  };

  const onSubmit = (e) => {
    console.log(formRegister);
    dispatch(createContact(formRegister))
      .then((resp) => {
        navigation.navigate("Qontact");
      })
      .catch((err) => console.log("error"));
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "firstName")}
          value={formRegister.firstName}
          placeholder="First Name"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "lastName")}
          value={formRegister.lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            borderColor: "#b6b6b6",
          }}
          keyboardType="numeric"
          onChangeText={(text) => onChange(text, "age")}
          value={formRegister.age}
          placeholder="age"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "photo")}
          value={formRegister.photo}
          placeholder="photo"
        />
        <TouchableOpacity
          onPress={(e) => {
            onSubmit(e);
          }}
        >
          <View
            style={{
              height: 50,
              width: 320,
              borderRadius: 12,
              backgroundColor: "rgb(252,114,73)",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 2,
                fontWeight: "bold",
                color: "rgb(255, 255, 255)",
              }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
