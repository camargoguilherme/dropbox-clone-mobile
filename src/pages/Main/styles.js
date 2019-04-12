import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 30
  },

  logo:{
    alignSelf: 'center'
  },  

  input:{
    height: 48,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 30
  },

  button:{
    height: 48,
    borderColor: '#444',
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
});

export default styles;