import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import Header from "../../../components/Header";
import NavBottomBar from "../../../components/NavBottomBar";
import Button from "../../../components/Button";
import Modale from "../../../components/Modale";
import { styles, Colors } from "./styles";
import { AddBeneficiary, GetBeneficiaries } from "../../../components/Api";


export default function BeneficiariesScreen(props) {
    const colors = Colors(props.theme);
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [modaleAddBenef, setModaleAddBenef] = useState(false);
    const [accountName, setAccountName] = useState("");
    const [iban, setIban] = useState("");
    const [bic, setBic] = useState("");

    useEffect(() => {
        GetListBeneficiaries();
    }, []);

    const addAccountOnTransfers = (accountName, iban, bic) => {
        AddBeneficiary({ userId: props.extraData.id, name: accountName, iban: iban, bic: bic });
        setModaleAddBenef(false);
    }

    const GetListBeneficiaries = () => {
        GetBeneficiaries({ userId: props.extraData.id, setBeneficiaries: setBeneficiaries });
    }

    const AddBeneficiaryForm = (
        <View style={styles.containerViewModale}>
            <TextInput
                style={[styles.input, colors.input]}
                placeholder='IBAN'
                onChangeText={(text) => setIban(text)}
                value={iban}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <View style={styles.input_double_view}>
                <TextInput
                    style={[styles.input_double, colors.input]}
                    placeholder='BIC'
                    onChangeText={(text) => setBic(text)}
                    value={bic}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={[styles.input_double, colors.input]}
                    placeholder='Nom du compte'
                    onChangeText={(text) => setAccountName(text)}
                    value={accountName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
            </View>
            <Button title="Ajouter" onPress={() => {addAccountOnTransfers(accountName, iban, bic); GetListBeneficiaries}} style={[styles.btnAddBenef, colors.btnAddBenef]} textStyle={[styles.textStyle, colors.textStyle]} />
        </View>
    );

    return (
        <>
        <View style={[styles.container, colors.container]}>
            <Header title="Bénéficiaires" navigation={props.navigation} theme={props.theme} setUser={props.setUser} />
            <View style={styles.flatList}>
                <FlatList
                    data={beneficiaries}
                    renderItem={({ item }) => (
                        <View style={[styles.beneficiary, colors.beneficiary]}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.textStyle}>{item.iban}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.viewButton}>
                <Button
                    title="Ajouter un bénéficiaire"
                    onPress={() => setModaleAddBenef(true)}
                    style={[styles.btnAddBenef, colors.btnAddBenef]}
                    textStyle={[styles.textbutton, colors.textbutton]}
                />
            </View>
            {Modale(modaleAddBenef, setModaleAddBenef, AddBeneficiaryForm)}
        </View>
        <NavBottomBar theme={props.theme} navigation={props.navigation} />
        </>
    );
}