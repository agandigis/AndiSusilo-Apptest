import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { deleteContact, fetchSingleContact } from "../store/actions/Index";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/core";

export default function DetailQontact({ navigation, route }) {
  const { id } = route.params;
  const dispatch = useDispatch();

  const singleContact = useSelector((state) => state.contact.singleContact);

  const pressDelete = () => {
    dispatch(deleteContact(singleContact.id))
      .then((resp) => {
        navigation.navigate("Qontact");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(fetchSingleContact(id));
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(fetchSingleContact(id));
  //   }, [singleContact])
  // );
  if (!singleContact) {
    return (
      <View>
        <Text>Loadingg</Text>
      </View>
    );
  } else {
    return (
      <>
        <View
          style={{
            // Try setting `flexDirection` to `"row"`.
            flex: 1,
            flexDirection: "column",
          }}
        >
          {singleContact !== {} ? (
            <>
              <View style={{ flex: 1 }}>
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    marginTop: "auto",
                    marginLeft: "auto",
                    marginBottom: "auto",
                    marginRight: "auto",
                    borderRadius: "50%",
                  }}
                  source={{
                    uri:
                      "https://reactnative.dev/img/tiny_logo.png" ||
                      singleContact.photo,
                  }}
                />
              </View>

              <View style={{ flex: 3, alignItems: "center" }}>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 30,
                    }}
                  >
                    {singleContact.firstName} {singleContact.lastName}
                  </Text>
                </View>
                <View
                  style={{
                    height: 50,
                    width: "95%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <View
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "5%",
                      marginRight: "5%",
                    }}
                  >
                    <Text
                      style={{
                        letterSpacing: 2,
                        fontSize: 12,
                        marginBottom: "2%",
                      }}
                    >
                      15 Digits ID
                    </Text>
                    <Text
                      style={{
                        letterSpacing: 2,
                        fontSize: 12,
                        color: "blue",
                      }}
                    >
                      {singleContact.id}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 50,
                    width: "95%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    // marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <View
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "5%",
                      marginRight: "5%",
                    }}
                  >
                    <Text
                      style={{
                        letterSpacing: 2,
                        marginBottom: "2%",
                        fontSize: 12,
                      }}
                    >
                      Age
                    </Text>
                    <Text
                      style={{
                        letterSpacing: 2,
                        fontSize: 12,
                        color: "blue",
                      }}
                    >
                      {singleContact.age} years
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      height: 50,
                      width: "40%",
                      backgroundColor: "white",
                      borderRadius: 10,
                      // marginTop: "5%",
                      marginBottom: "5%",
                      marginLeft: "auto",
                      marginRight: "5%",
                    }}
                  >
                    <View
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("EditQontact", {
                            id: singleContact.id,
                          });
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "green",
                          }}
                        >
                          edit contact
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 50,
                      width: "40%",
                      backgroundColor: "white",
                      borderRadius: 10,
                      // marginTop: "5%",
                      marginBottom: "5%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <View
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          pressDelete(singleContact.id);
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "red",
                          }}
                        >
                          delete contact
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                ></View>
              </View>
              <View style={{ flex: 2 }} />
            </>
          ) : (
            <View>
              <Text>Loading</Text>
            </View>
          )}
        </View>
      </>
    );
  }
}
