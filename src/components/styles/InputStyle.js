import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textInputContainer: {
    marginVertical: 10,
    flex: 0,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    backgroundColor: '#eee',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  textInput: {
    height: 40,
    paddingHorizontal: 15
  }
})
