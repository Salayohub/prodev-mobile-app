import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  /** NAVIGATION HEADER */
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  /** TEXT HEADERS */
  largeText: {
    fontSize: 36,
    fontWeight: "700",
    marginTop: 5,
  },

  smallText: {
    fontSize: 14,
    color: "#7E7B7B",
    marginTop: 10,
  },

  /** FORM SECTION */
  formGroup: {
    marginTop: 40,
  },

  placeholderText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 5,
  },

  inputField: {
    borderWidth: 2,
    borderColor: "#E9E9E9",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
  },

  passwordGroup: {
    borderWidth: 2,
    borderColor: "#E9E9E9",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 12,
    fontSize: 13,
    fontWeight: "500",
  },

  /** MAIN BUTTON */
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },

  /** DIVIDER */
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    gap: 10,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E6E6E6",
  },

  dividerText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#C2C2C2",
  },

  /** SOCIAL BUTTONS */
  socialMediaButtonGroup: {
    gap: 15,
    marginBottom: 30,
  },

  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  socialMediaButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },

  /** SIGNUP TEXT */
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  subText: {
    fontSize: 14,
    color: "#7E7B7B",
  },

  subTextJoin: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34967C",
    marginLeft: 5,
  },
});

export { styles };
