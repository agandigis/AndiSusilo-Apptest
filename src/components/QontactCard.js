import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function QontactCard({ contact }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          height: 50,
          borderTopWidth: 0.2,
          borderColor: "grey",
        }}
        onPress={() => navigation.navigate("DetailQontact", { id: contact.id })}
      >
        <Text
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            fontWeight: "400",
          }}
        >
          {contact.firstName}{" "}
          <Text
            style={{
              fontWeight: "500",
            }}
          >
            {contact.lastName}
          </Text>
        </Text>
      </TouchableOpacity>
    </>
  );
}
