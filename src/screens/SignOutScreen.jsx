import React from 'react';
import { View, Alert} from 'react-native';
import Button from '../reusableComponents/Button';
import Text from '../reusableComponents/Text';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import AuthStorageContext from '../context/AuthStorageContext';

const SignOut = () => {
  const client = useApolloClient();
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);

  const onSubmit = async() => {
    try {
      console.log('Cerrando sesion...')
      const token = await authStorage.getAccessToken();
      console.log('Token antes de eliminar:', token);
      await authStorage.removeAccessToken();
      await client.resetStore();
      history.push('/'); 
    } catch(e) {
      console.error('Error al eliminar el token de acceso o restablecer la tienda del cliente Apollo:', e);
    }
  }

  const handleSignOut = () => {
    Alert.alert(
        "Confirmar cierre de sesion",
        "¿Estas seguro de que quieres cerrar sesion?"
        [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Cerrar sesion", onPress: onSubmit }
        ],
        { cancelable: false }
    );
  };

  return (
    <View style={{paddingTop: 50, paddingHorizontal: 20}}>
      <Text color="primary" fontSize="title" fontWeight="bold">
        Sign Out
      </Text>  
      <Text color="grey" fontSize="subheading" style={{ marginVertical: 10 }}>
        Press the button to sign out
      </Text>      
      <Button title="Sign Out" onPress={() => onSubmit()}/>
    </View>
  );
};

export default SignOut;