import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../../components/Header';
import { faCopy, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

import styles from './styles';
export default function RibScreen(props) {
    console.log(props);
    console.log(props.route.params.account)

    const html = `
      <html>
        <body>
            <h1>RELEVÉ D'IDENTITÉ BANCAIRE</h1>
            <p>Ce relevé d'identité bancaire est destiné à tout organisme souhaitant connaître vos références bancaires pour domicilier des virements ou prélèvements survotre compte.</p>
            <p>_____________________________________________________________</p>
            <h2>Coin Keeper Banque</h2>
            <p>Intitulé du compte : ${props.extraData.fullName}</p>
            <p>IBAN : ${props.route.params.account.iban}</p>
            <p>BIC / SWIFT : ${props.route.params.account.bic}</p>
            <p>_____________________________________________________________</p>
            <p>Je soussigné(e) : ${props.extraData.fullName}</p>
            <p>certifie l'exactitude des informations ci-dessus.</p>
            <p>Fait à Paris, le ${new Date().toLocaleDateString()}</p>
        </body>
      </html>
    `;
  

    let generatePdf = async () => {
      const file = await printToFileAsync({
        html: html,
        base64: false
      });
  
      await shareAsync(file.uri);
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerView}>
                <Header title={"Partager mon RIB"} navigation={props.navigation} setUser={props.setUser} />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.textTitle}>Mes coordonnées bancaires</Text>
                <Text style={styles.depotAccount}>Compte de dépôt</Text>
                <Text style={styles.infoAccount}>M. / Mme : {props.extraData.fullName}</Text>
            </View>
            <View style={styles.ibanInfo}>
                <Text style={styles.depotAccount}>IBAN</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCopy} size={20} style={styles.fontAwesomeIcon} color='white'/>
                    <Text selectable={true}  style={styles.infoAccount}>{props.route.params.account.iban}</Text>
                </TouchableOpacity>
                <Text style={styles.depotAccount}>BIC / SWIFT</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCopy} size={20} style={styles.fontAwesomeIcon} color='white'/>
                    <Text selectable={true} style={styles.infoAccount}>{props.route.params.account.bic}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonShare} onPress={generatePdf}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Partager</Text>
                    <FontAwesomeIcon icon={faFilePdf} size={20} style={styles.pdfIcon} color='white'/>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
