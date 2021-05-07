import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, Form, Label, Input, Item, Button, Spinner } from "native-base";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";

import { signUp, SignUpRequestType } from "../api/authenticationApi";
import ValidationErrorText from "../components/ValidationErrorText";

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpRequestType>();

  const onPressLogin = (data: SignUpRequestType) => {
    return signUp(data).then((res) => console.log(res.success));
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Kayıt Formu</Text>
        <Form style={{ display: "flex", justifyContent: "center" }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel style={styles.item}>
                <Label>İsminiz</Label>
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(newValue) => onChange(newValue)}
                />
              </Item>
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && (
            <ValidationErrorText errorText={"Kullanıcı Adı Alanı Gereklidir"} />
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel style={styles.item}>
                <Label>E-posta Adresiniz</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(newValue) => onChange(newValue)}
                />
              </Item>
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.email && (
            <ValidationErrorText errorText={"E-posta Alanı Gereklidir"} />
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
          {!isSubmitting && <Text> Kayıt Ol </Text>}
          {isSubmitting && <Spinner color="white" />}
        </Button>
      </View>
      <View
        style={{
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

export default SignUpScreen;
