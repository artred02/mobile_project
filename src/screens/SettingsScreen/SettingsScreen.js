import React from 'react'
import { Text, TouchableOpacity, View,Alert } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faLightbulb, faTrash } from '@fortawesome/free-solid-svg-icons/';
import NavBottomBar from '../../../components/NavBottomBar';
import { storeData } from '../../../components/SecureStore';
import { styles, Colors } from './styles';

export default function SettingsScreen(props) {
    const colors = Colors(props.theme);

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

    const ThemeSelect = () => {
        // Affichage d'une alerte avec une lise de choix
        Alert.alert(
            "Choix du thème",
            "Choisissez le thème de l'application",
            [
                {
                    text: "Dark mode",
                    onPress: () => {
                        storeData('theme', 'dark', props.setTheme);
                        props.setTheme('dark');
                    }
                },
                {
                    text: "Light mode",
                    onPress: () => {
                        storeData('theme', 'light', props.setTheme);
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <KeyboardAwareScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.header}>
                    <Text style={[styles.headerTxt, colors.headerTxt]}>Paramètres</Text>
                </View>
                <View style={styles.body}>
                    <Text style={[styles.title, colors.title]}>Mes Informations</Text>
                    <TouchableOpacity onPress={confidentialite}>
                        <View style={[styles.information,colors.information]}>
                            <FontAwesomeIcon icon={faGear} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Confidentialité</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteAccountFunction}>
                        <View style={[styles.information,colors.information]}>
                            <FontAwesomeIcon icon={faTrash} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Supprimer le compte</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={[styles.title, colors.title]}>Thème</Text>
                    <TouchableOpacity onPress={ThemeSelect}>
                        <View style={[styles.information,colors.information]}>
                            <FontAwesomeIcon icon={faLightbulb} style={styles.Icon} size={25}/>
                            <Text style={styles.bodyTxt}>Changer le mode d'affichage</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
        <View style={styles.navbar}>
            <NavBottomBar navigation={props.navigation} theme={props.theme} />
        </View>
        </>
    )
}