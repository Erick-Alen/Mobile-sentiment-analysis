import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: "#000"
  },
  title: {
    color: "#CECECE",
    margin: 22,
    fontSize: 22,
    fontWeight: '900',
  },
  button : {
    backgroundColor: '#883DF2',
    fontWeight: '900',
    width: 56,
    height: 56,
    alignSelf: 'flex-end',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: "#CECECE",
    width: '100%',
    textAlignVertical: 'top',
    fontSize: 16,
    height: 150,
  },
  form: {
    color: "#CECECE",
    width: '100%',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#999',
    padding: 16,
  },
});
