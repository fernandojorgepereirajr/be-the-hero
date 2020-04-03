import React from 'react'

// Importando os ícones
import { Feather } from '@expo/vector-icons'

// Importando o sistema de rotas que permite a transição entre as páginas.
import { useNavigation, useRoute } from '@react-navigation/native'

// Importando os componentes em linguagem nativa. 
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'

// Importando o serviço que permite interligar ao e-mail.
import * as MailComposer from 'expo-mail-composer'

// Importando a estilização da tela.
import styles from './styles'

// Importando as imagens que são usados na aplicação.
import logoImg from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident
    const message = `Olá ${incident.name}, estou entrado em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}`

    // Função responsável por fazer a navegação para a tela anterior.
    function navigateBack() {
        navigation.goBack()
    }

    // Função responsável por envio do e-mail.
    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    // Função responsável por envio do whatsapp.
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    // Estrutura XML em linguagem nativa que será renderizado na tela.
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />

                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{
                    Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
                        .format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}