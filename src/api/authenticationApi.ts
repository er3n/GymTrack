export type SignInRequestType = {
  username: string;
  password: string;
};

export type SignInResponseType = {
  token: string;
};

export type SignUpRequestType = {
  password: string;
  name: string;
  age: number;
  height: string;
  weight: string;
  email: string;
};

export type SignUpResponseType = {
  success: string;
};

export const signIn = (
  request: SignInRequestType
): Promise<SignInResponseType> => {
  return new Promise<SignInResponseType>((resolve) => {
    console.log(request.username);
    console.log(request.password);
    setTimeout(() => {
      resolve({
        token: "711f6f10-f8cd-46e4-be98-c4e254ed6e50",
      });
    }, 5000);
  });
};

export const signUp = (
  request: SignUpRequestType
): Promise<SignUpResponseType> => {
  return new Promise<SignUpResponseType>((resolve) => {
    console.log(request.name);
    console.log(request.password);
    setTimeout(() => {
      resolve({
        success: "success",
      });
    }, 5000);
  });
};
