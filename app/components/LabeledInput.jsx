import { View, Text, TextInput, StyleSheet } from "react-native";

const INPUT_BG = '#F5F5F5';
const INPUT_BORDER = '#E8E8E8';
const LABEL_COLOR = '#36454F';

export default function LabeledInput({ label, ...rest }){ //componente de reuso
    return (
        <View style={styles.wrapper}>
            {/* Se o label for passado, exiba o label. Se não, exiba não informado. */}
            <Text style={styles.label}> { label ? label : "Não informado" } </Text>

            <TextInput
                style= {styles.input} 
                placeholderTextColor='#B5B5B5'
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%', //Faz o componente ocupar toda a largura disponível
        marginBottom: 14, // Define o espaço abaixo do campo.
    },
    label: {
        marginBottom: 6,
        color: LABEL_COLOR, // Cor do texto da label, utilizando const.
        fontSize: 14,
        fontWeight: 600,
    },
    input: {
        backgroundColor: INPUT_BG,
        borderRadius: 8, // Arredonda os cantos do campo
        paddingHorizontal: 14, // Define espaçamento interno esquerdo/direito
        paddingVertical: 12, // Define o espaçamento interno de cima/baixo
        borderWidth: 1,  // Define a largura da borda
        borderColor: INPUT_BORDER, 
        shadowColor: '#000', // Define a cor da borda da sombra (drop shadow)
        shadowOffset: {width: 1, height: 2}, // Define a posição da sombra. Se passa com o comprimento e o local/altura dependendo do input por isso se coloca em um dicionário
        shadowOpacity: 0.08, //Define a transparência da sombra.
        shadowRadius: 6,
        fontSize: 14,
        color: '#222',  //Define a cor do texto
    },
})