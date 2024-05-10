import { router } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Logo from "../../assets/images/white_logo_nobg.png";
import { SystemsContext } from "../../common/interfaces";
import systemIcons from "../../components/systems_icons";

export default function Main() {
  const { systems } = React.useContext(SystemsContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>MedXNotes</Text>
      </View>
      <ScrollView>
        {systems.sort((a, b) => a.name.localeCompare(b.name)).map((system, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(`/systems/${system.name}`)}
            style={styles.system}
          >
            <Image source={{uri: systemIcons.icons.find(icon => icon.name == system.name).link, cache: 'only-if-cached'}} style={{width: 40, height: 40}} />
            <Text style={styles.systemName}>   {system.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "auto",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 60,
    marginBottom: 20,
  },
  modalInput: {
    width: "50%",
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  connexion: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    fontSize: 20,
  },
  system: {
    padding: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  systemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoContainer: {
    backgroundColor: "#00035B",
    width: "100%",
    paddingRight: "auto",
    paddingLeft: "auto",
    paddingTop: 40,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    opacity: 1,
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});