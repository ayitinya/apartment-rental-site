import { Apartment } from '~~/composables/types';
import { firestore } from '../../utils/firebase';

export default defineEventHandler(async _event => {
    return await firestore.collection('apartments').get().then((snapshot) => {
        const data: Apartment[] = []
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() } as any as Apartment)
        })
        return data
    })
})