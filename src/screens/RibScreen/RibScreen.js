import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Clipboard } from 'react-native';
import Header from '../../../components/Header';
import { faCopy, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { styles, Colors } from './styles';

export default function RibScreen(props) {
    const colors = Colors(props.theme);

    const copyToClipboardIban = () => {
        Clipboard.setString(props.route.params.account.iban);
        alert('IBAN copié dans le presse-papier');
    };
    const copyToClipboardbic= () => {
        Clipboard.setString(props.route.params.account.bic);
        alert('BIC / SWIFT copié dans le presse-papier');
    };

    const html = `
        <html>
            <body>
                <h1>RELEVÉ D'IDENTITÉ BANCAIRE</h1>
                <p>Ce relevé d'identité bancaire est destiné à tout organisme souhaitant connaître vos références bancaires pour domicilier des virements ou prélèvements sur votre compte.</p>
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
        <View style={[styles.container,colors.container]}>
            <View style={styles.containerView}>
                <Header title={"Partager mon RIB"} navigation={props.navigation} setUser={props.setUser} theme={props.theme} />
            </View>
            <View style={styles.containerInfo}>
                <Text style={[styles.textTitle,colors.textTitle]}>Mes coordonnées bancaires</Text>
                <Text style={[styles.depotAccount,colors.depotAccount]}>Compte de dépôt</Text>
                <Text style={[styles.infoAccount,colors.infoAccount]}>M. / Mme : {props.extraData.fullName}</Text>
            </View>
            <View style={styles.ibanInfo}>
                <Text style={[styles.depotAccount,colors.depotAccount]}>IBAN</Text>
                <TouchableOpacity onPress={() =>  copyToClipboardIban()}>
                    <FontAwesomeIcon icon={faCopy} size={20} style={[styles.fontAwesomeIcon,colors.fontAwesomeIcon]}/>
                    <Text selectable={true} style={[styles.infoAccount,colors.infoAccount]}>{props.route.params.account.iban}</Text>
                </TouchableOpacity>
                <Text style={[styles.depotAccount,colors.depotAccount]}>BIC / SWIFT</Text>
                <TouchableOpacity onPress={() =>  copyToClipboardbic()}>
                    <FontAwesomeIcon icon={faCopy} size={20} style={[styles.fontAwesomeIcon,colors.fontAwesomeIcon]}/>
                    <Text selectable={true} style={[styles.infoAccount,colors.infoAccount]}>{props.route.params.account.bic}</Text>
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
