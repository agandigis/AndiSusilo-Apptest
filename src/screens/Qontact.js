import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import QontactCard from "../components/QontactCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../store/actions/Index";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/core";

export default function Qontact({ navigation }) {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact.allContacts);
  const renderItem = ({ item }) => {
    return <QontactCard contact={item} />;
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchAllContacts());
    }, [])
  );

  return (
    <>
      <View
        style={{
          // Try setting `flexDirection` to `"row"`.
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <View
            style={{
              flex: 5,
            }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "5%",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              You Have {contact.length} Contact
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
              onPress={() => navigation.navigate("CreateQontact")}
            >
              <AntDesign name="plus" size={25} color="green" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 5.5 }}>
          <FlatList
            data={contact}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}
