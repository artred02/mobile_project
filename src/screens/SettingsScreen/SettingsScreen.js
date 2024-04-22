import React from 'react'
import { Text, TouchableOpacity, View,Alert } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faLightbulb, faTrash } from '@fortawesome/free-solid-svg-icons/';
import NavBottomBar from '../../../components/NavBottomBar';
export default function SettingsScreen(props) {

    const confidentialite = () => {
        props.navigation.navigate('Confidentialite')
    }

    const deleteAccountFunction = async () => {
        Alert.alert(
          "Confirmation",
          "Voulez-vous vraiment supprimer votre compte ?",
          [
            {
              text: "Annuler",
              onPress: () => console.log("Suppression annulée"),
              style: "cancel"
            },
            {
              text: "Confirmer",
              onPress: async () => {
                const user = firebase.auth().currentUser;
      
                try {
                  const firestore = firebase.firestore();
                  await firestore.collection('users').doc(user.uid).delete();
                  console.log("Données utilisateur supprimées de Firestore avec succès");
                } catch (error) {
                  console.log("Erreur lors de la suppression des données utilisateur de Firestore:", error);
                }
      
                try {
                  firebase.auth().signOut();
                  props.setUser(null)
                  user.delete();
                  console.log("Compte utilisateur supprimé avec succès");
                } catch (error) {
                  console.log("Erreur lors de la suppression du compte utilisateur:", error);
                }
              }
            }
        ],
        { cancelable: false }
    );
    };

    return (
        <>
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Paramètres</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Mes Informations</Text>
                    <TouchableOpacity onPress={confidentialite}>
                        <View style={styles.information}>
                            <FontAwesomeIcon icon={faGear} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Confidentialité</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteAccountFunction}>
                        <View style={styles.information}>
                            <FontAwesomeIcon icon={faTrash} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Supprimer le compte</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>Thème</Text>
                    <TouchableOpacity onPress={confidentialite}>
                        <View style={styles.information}>
                            <FontAwesomeIcon icon={faLightbulb} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Passer en Dark mode</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} />
        </View>
        </>
    )
}