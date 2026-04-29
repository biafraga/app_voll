import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import LabeledInput from "../components/LabeledInput";
import ButtonForm from "../components/ButtonForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Image 
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Faça login em sua conta</Text>
        <View style={styles.form}>
          <LabeledInput
            label="Email"
            placeholder="Insira seu endereço de email"
            keyboardType="email-adress"
          />
          <LabeledInput
            label="Senha"
            placeholder="Insira sua senha"
            secureTextEntry={true}
          />
          <ButtonForm
          textButton="Entrar"/>
          <TouchableOpacity style={styles.forget}>
            <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            
          <Text style={styles.footerText}>Ainda não tem conta?</Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}> Faça seu cadastro!</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: "#FFFFFF",
    paddingTop: 62,
  },
  
  logo:{
    height: 34,
    width: 150,
    alignSelf: "center", //Centraliza a imagem dentro do container
    marginBottom: 62,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#6B6E71",
    marginBottom: 26,
  },

  form:{
    width: "100%", //vai ocupar a área da tela toda
    marginTop: 16,
    paddingHorizontal: 20,
  },

  forgetText: {
    color: "#00213D",
    fontSize: 13,
    fontWeight: "400",
    textDecorationLine: "underline",

  },

  forget: {
    marginTop: 14,
    alignSelf: "center", //centraliza o botão dentro do container "view"

  },

  footer:{
    marginTop: 30,
    flexDirection: "row", //quando altera pra row altera também o align e justity que por padrão é vertical e horizontal respectivamente
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 13,
    color: "#3A3A3A"
  },

  footerLink: {
    color: "#0E73E8",
    fontSize: 13,
    fontWeight: "700",
  },

})
