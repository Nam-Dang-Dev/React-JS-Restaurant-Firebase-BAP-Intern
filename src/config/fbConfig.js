import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAJ7BsgQzI8U4Nt3CbFFP6zzVuL4kHztJI",
    authDomain: "restaurant-react-redux.firebaseapp.com",
    databaseURL: "https://restaurant-react-redux.firebaseio.com",
    projectId: "restaurant-react-redux",
    storageBucket: "restaurant-react-redux.appspot.com",
    messagingSenderId: "728728087683",
    appId: "1:728728087683:web:c1c349908113d604"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;