import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
  bottom: {},
  floatContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
  },
  floatButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: "row",
    overflow: 'hidden',
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#000",
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0
  },
  floatButtonLabel: {
    fontSize: 12
  }
});
