import React from "react";
import { Text, Form, Label, Input, Item, Button, Spinner } from "native-base";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Controller, useForm } from "react-hook-form";

import { signIn, SignInRequestType } from "../api/authenticationApi";
import ValidationErrorText from "../components/ValidationErrorText";

const logo = {
  uri:
    // eslint-disable-next-line max-len
    "https://w7.pngwing.com/pngs/541/953/png-transparent-the-gym-logo-illustration-t-shirt-fitness-centre-bodybuilding-personal-trainer-olympic-weightlifting-gorilla-physical-fitness-animals-logo.png",
  width: 120,
  height: 120,
};

const windowHeight = Dimensions.get("window").height;

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInRequestType>();

  const onPressLogin = (data: SignInRequestType) => {
    return signIn(data).then((res) => console.log(res.token));
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={styles.textHeader}>Gym Tracker</Text>
        <Form style={{ display: "flex", justifyContent: "center" }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel style={styles.item}>
                <Label>Kullanıcı Adı</Label>
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(newValue) => onChange(newValue)}
                />
              </Item>
            )}
            name="username"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.username && (
            <ValidationErrorText errorText={"Kullanıcı Adı Alanı Gereklidir"} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel error={!!errors.password}>
                <Label>Şifre</Label>
                <Input
                  onBlur={onBlur}
                  secureTextEntry
                  value={value}
                  onChangeText={(newValue) => onChange(newValue)}
                />
              </Item>
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />

          {errors.password && (
            <ValidationErrorText errorText={"Şifre Alanı Gereklidir"} />
          )}
        </Form>
      </View>
      <View
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{ color: "#05386b", fontSize: 13 }}
          onPress={() => console.log("Şifremi Unuttum")}
        >
          Şifremi Unuttum
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={isSubmitting}
          primary
          style={{ marginTop: "3%", width: 200, justifyContent: "center" }}
          onPress={handleSubmit(onPressLogin)}
        >
          {!isSubmitting && <Text> Giriş Yap </Text>}
          {isSubmitting && <Spinner color="white" />}
        </Button>
      </View>
      <View
        style={{
          height: windowHeight - 550,
          marginLeft: 10,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#05386b",
            fontSize: 16,
            width: 120,
          }}
          onPress={() => console.log("Kullanıcı Oluştur")}
        >
          Kullanıcı Oluştur
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  } as ViewStyle,
  item: {
    width: "80%",
  } as TextStyle,
  textHeader: {
    color: "#f64c72",
    fontSize: 24,
  } as TextStyle,
});

export default SignInScreen;
