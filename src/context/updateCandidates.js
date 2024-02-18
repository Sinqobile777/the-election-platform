import { db } from '../firebase';

const updateCandidates = async (db) => {
    const candidatesRef = db.collection('candidates');
    const candidatesSnapshot = await candidatesRef.get();
  
    candidatesSnapshot.forEach(async (doc) => {
      // Update each document with image and bio fields
      await candidatesRef.doc(doc.id).update({
        image: 'url_to_image',
        bio: 'candidate_biography',
      });
    });
  };
  
  export default updateCandidates;
  