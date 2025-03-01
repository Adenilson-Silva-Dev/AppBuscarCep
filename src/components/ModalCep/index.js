import React, { useContext } from 'react';
import {
    Modal,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../Contexts';

export default function ModalCep({ data }) {
    const { setVisibleModal, visibleModal, setVisibleButtonIsInput } =
        useContext(AuthContext);

    function fechaModal() {
        setVisibleModal(false);
        setVisibleButtonIsInput(true);
    }

    return (
        <SafeAreaView>
            <Modal
                style={styles.Modal}
                visible={visibleModal}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.Container}>
                    <View style={styles.AreaDados}>
                        <Text style={styles.title}>
                            Rua: <Text style={styles.nomes}>{data.logradouro}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Cidade: <Text style={styles.nomes}>{data.localidade}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Estado: <Text style={styles.nomes}>{data.estado}</Text>
                        </Text>
                        <Text style={styles.title}>
                            Cep: <Text style={styles.nomes}>{data.cep}</Text>
                        </Text>

                        <TouchableOpacity style={styles.Button} onPress={fechaModal}>
                            <Text style={{ fontSize: 18, fontWeight: '900' }}>
                                Nova busca
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },
    AreaDados: {
        width: '75%',

        paddingTop: 18,
        borderRadius: 4,

        backgroundColor: '#fff',
    },
    title: {
        fontWeight: '900',
        left: 8,
        marginBottom: 4,
    },
    nomes: {
        fontWeight: '400',
    },

    Button: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: '#EDDE6E',
    },
});
