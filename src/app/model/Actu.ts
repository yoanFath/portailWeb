import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

interface Actu {
  title: string;
  date: Timestamp;
  content: string;
}

export default Actu;
