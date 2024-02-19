import React, { useEffect, useState } from 'react';
import { Firestore } from '../firebase';
import { doc, getDocs, increment, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function CandidatesList() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Firestore().collection('candidates').onSnapshot(snapshot => {
      const candidatesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCandidates(candidatesData);
    });

    return () => unsubscribe();
  }, []);

//   const handleVote = (candidateId) => {
//     Firestore().collection('candidates').doc(candidateId).update({
//       votes: Firestore.FieldValue.increment(1)
//     });
//   };

useEffect(() => {
    const auth = getAuth();
    setCurrentUser(auth.currentUser);

    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
    });

    return () => unsubscribe();

}, []);

const handleVote = async () => {

    try {
        if(!selectedCandidate) return;

        const userRef = doc(Firestore, 'users', currentUser.id)
        const userdoc = await getDocs(userRef);
        const alreadyVoted = userDoc.data().isVoted;

        if (alreadyVoted) {
            alert('You already voted');
            return;
        }

        const candidateRef = doc(Firestore, 'candidates', selectedCandidate)
        await updateDoc(candidateRef, { count: increment(1)});

        await updateDoc(userRef, {isVoted: true});

        alert('You have successfully voted!!')
    }

    catch (error){
        console.error('Error in voting:', error)
    }
}

  return (
    <div>
      {candidates.map(candidate => (
        <div key={candidate.id} className="candidate">
          <h3>{candidate.name}</h3>
          <p>Votes: {candidate.count}</p>
          <button onClick={handleVote}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default CandidatesList;
