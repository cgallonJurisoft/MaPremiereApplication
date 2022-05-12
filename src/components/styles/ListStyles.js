import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 4
  },
  smallCard: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 4
  },
  bigCard: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 4
  },
  image: {
    height: '50%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5
  },
  smallImage: {
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  bigImage: {
    height: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  adresse: {
    fontWeight: 'bold'
  },
  containerPrice: {
    backgroundColor: '#0bc',
    width: 60,
    height: 60,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  containedPrice: {
    fontWeight: 'bold',
    color: 'white'
  },
  price: {
    fontWeight: 'bold',
    color: '#0bc'
  }
})
