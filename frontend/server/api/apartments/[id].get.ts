import { Apartment } from '~~/composables/types';
import { firestore } from '../../utils/firebase';

export default defineEventHandler(async event => {
    return await firestore.collection('apartments')
        .doc(event.context.params.id)
        .get()
        .then((snapshot) => {
            return { id: snapshot.id, ...snapshot.data() } as any as Apartment
        })
        .catch(err => {
            console.error(err)
        })
})