export const parseJwt = (token) => {
  try {
    token = token?.split(" ")[1];
    return JSON.parse(window.atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
