import { takeLatest ,call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "../shop/shop.actions";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export function* fetchCollectionAsync() {
    yield console.log(`I'm Fired`);

try{
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
}
    catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }

    // dispatch(fetchCollectionStart());

    // collectionRef
    // .get()
    // .then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // })
    // .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}