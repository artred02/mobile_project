import { firebase } from '../src/firebase/config'

const logout = (props) => {
    firebase.auth().signOut()
    props.setUser(null)
}

const parametre = (props) => {
    props.navigation.navigate('Settings')
}

export { logout, parametre }