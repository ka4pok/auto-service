import firebase from "firebase/app";

export default {
    actions:{
        async login({disptch, commit}, {email,password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e
            }

        },
        async logout({commit}){
            await firebase.auth().signOut()
            commit('clearInfo')
        },
        async register({dispatch, commit}, {emailR,nameR,passwordR}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(emailR, passwordR)
                const uid =  await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name: nameR,
                    cart: 0,
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }

        },
        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    }
}
