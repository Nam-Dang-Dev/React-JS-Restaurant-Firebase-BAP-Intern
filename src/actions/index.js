import * as types from './../constants/ActionTypes'
import firebase from './../config/fbConfig'
import * as Aleart from './../pure_components/alearts/Aleart'

export const addUserRequest = (user) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                const db = firebase.firestore();
                db.collection('users').doc(response.user.uid).set({
                    user_name: user.name,
                    email: user.email,
                })
                response.user.updateProfile({
                    displayName: user.name
                })
            }).then(() => {
                dispatch({
                    type: types.REGISTER_SUCCEES,

                })
                Aleart.Aleart('success', "Register success");
            })
            .catch(err => {
                Aleart.Aleart('error', "Register has error");
                dispatch({
                    type: types.REGISTER_FAILED,
                    data: err
                })
                console.log(err);
            })

    }
}
export const login = (userName, password) => {

    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(
                userName,
                password
            ).then((user) => {
                localStorage['token'] = JSON.stringify(user.user.uid);
                dispatch({
                    type: types.LOGIN_SUCCEES,
                    data: user.user
                })
            })
            .catch((err) => {
                Aleart.Aleart('error', "Email or password not correct!");
                dispatch({
                    type: types.LOGIN_FAILED,
                    data: err
                })
                console.log(err)
            })
    }
}

export const logOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            dispatch({
                type: types.LOG_OUT,
            })
        }).catch(function(error) {
            console.log(error);
        });
    }

}
export const updateCartStatus = (user_id, status) => {
    const db = firebase.firestore();
    return (dispatch) => {
        db.collection('carts').where("user_id", "==", user_id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    db.collection('carts').doc(doc.id).update({ status: status });
                })
                dispatch({
                    type: types.UPDATE_CART_STATUS,
                    data: {
                        user_id: user_id,
                        status: status
                    }
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.UPDATE_CART_STATUS_FAILED,
                    data: err
                })
            })
    }
}

export const order = (foods, user_id, info) => {
    let products = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i].status === 1) {
            foods[i].user_id = user_id;
            foods[i].user_name = `${info.firstName} ${info.LastName}`;
            foods[i].phone = info.phone;
            foods[i].address = info.address;
            foods[i].comment = info.comment;
            products.push(foods[i]);
        }

    }
    return (dispatch) => {
        const db = firebase.firestore();
        var batch = db.batch();
        products.forEach((doc) => {
            batch.set(db.collection('orders').doc(), doc);
        });

        batch.commit().then(doc => {
                Aleart.Aleart('success', "Order succes!");

                dispatch({
                    type: types.ADD_ORDER_SUCCESS,
                })
            })
            .catch(err => {
                Aleart.Aleart('error', "Order has error!")
                console.log(err);
                dispatch({
                    type: types.ADD_ORDER_FAILED,
                    data: err
                })
            })
    }
}
export const getAllFood = () => {
    return (dispatch) => {
        const db = firebase.firestore();
        let foods = [];
        db.collection('foods').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let obj = doc.data();
                    obj.id = doc.id;
                    foods.push(obj);
                });
                dispatch({
                    type: types.GET_ALL_FOOD,
                    data: foods
                })
            })
            .catch(err => {
                console.log('error', err);
                dispatch({
                    type: types.GET_ALL_FOOD_FAILED,
                    data: err
                })
            })
    }
}
export const getAllCart = (user_id) => {
    if (user_id) {
        return (dispatch) => {
            const db = firebase.firestore();
            let carts = [];
            db.collection('carts').where("user_id", "==", user_id).get()
                .then(snapshot => {
                    snapshot.forEach(doc => {

                        carts.push(doc.data());
                    });

                    dispatch({
                        type: types.GET_ALL_CART,
                        data: carts
                    });
                })
                .catch(err => {
                    console.log('error', err);
                    dispatch({
                        type: types.GET_ALL_CART_FAILED,
                        data: err
                    })

                })
        }
    }
}
export const updateQuantity = (id, quantity) => {
    return (dispatch) => {
        const db = firebase.firestore();
        db.collection('carts').where("id", "==", id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    db.collection('carts').doc(doc.id).update({ quantity: quantity });
                })
                dispatch({
                    type: types.UPDATE_CART,
                    data: {
                        id: id,
                        quantity: quantity
                    }
                })

            })
            .catch(err => {
                Aleart.Aleart('error', "Update quantity cart item has error!")
                console.log(err);
                dispatch({
                    type: types.UPDATE_CART_FAILED,
                    data: err
                })
            })
    }
}


export const addToCart = (food, storeCart, user_id) => {
    let obj = storeCart.carts.find(obj => obj.id === food.id);
    let index = obj ? obj : null;
    const db = firebase.firestore();
    return (dispatch) => {
        if (!index || (index && index.status !== 1)) {
            db.collection('carts').add({
                    id: food.id,
                    name: food.name,
                    price: food.price,
                    quantity: 1,
                    detail: food.detail,
                    status: 1,
                    image: food.image,
                    user_id: user_id
                })
                .then(doc => {
                    Aleart.Aleart('success', "Add to cart succes!")
                    dispatch({
                        type: types.ADD_TO_CART,
                        data: {
                            id: food.id,
                            name: food.name,
                            price: food.price,
                            quantity: 1,
                            detail: food.detail,
                            status: 1,
                            image: food.image
                        }
                    })
                })
                .catch(err => {
                    Aleart.Aleart('error', "Add to cart has error!")
                    console.log(err);
                    dispatch({
                        type: types.ADD_TO_CART_FAILED,
                        data: err
                    })
                })
        }
        if (index && index.status === 1) {
            db.collection('carts').where("id", "==", food.id)
                .get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        db.collection('carts').doc(doc.id).update({ quantity: ++doc.data().quantity });
                    })
                    dispatch({
                        type: types.UPDATE_CART,
                        data: {
                            id: food.id,
                        }
                    })

                })
                .catch(err => {
                    Aleart.Aleart('error', "Add to cart has error!")
                    console.log(err);
                    dispatch({
                        type: types.ADD_TO_CART_FAILED,
                        data: err
                    })
                })
        }
    }
}


export const deleteCartItem = (id) => {
    return (dispatch) => {
        const db = firebase.firestore();
        db.collection('carts').where("id", "==", id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    db.collection('carts').doc(doc.id).delete();
                    Aleart.Aleart("success", "Delete food success");
                })
                dispatch({
                    type: types.DELETE_CART_ITEM,
                    data: id
                })
            })
            .catch(err => {
                Aleart.Aleart('error', "Delete cart item has error!")
                console.log(err);
                dispatch({
                    type: types.UPDATE_CART_FAILED,
                    data: err
                })
            })
    }
}