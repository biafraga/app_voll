import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return  (
          <Drawer
              //Define o estilo do Drawer, objeto complexo (um objeto dentro do outro)
              screenOptions={{
                drawerStyle:{
                  backgroundColor: "#B6B7B9",
                },
                drawerLabelStyle: {
                  color: "#000",
                }
              }} >

          <Drawer.Screen 
              name="index"
              options={{
                headerShown: true, //Heador do Drawer
                drawerLabel: "Login", //Muda o nome da label
                title: "" //tira o label "index" do header
              }}
          />
          </Drawer>
          
          );
}
