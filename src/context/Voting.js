import React, { useState } from 'react';
import { useAuth } from '../context/UserAuthContext';
import { db } from '../firebase';

function VotingComponent({ userId }) {
    const { currentUser } = useAuth();
    const [selectedCandidateId, setSelectedCandidateId] = useState('');

    const handleVote = async (candidateId) => {
        try {
            // Check if the user has already voted
            const voteRef = db.collection('votes').doc(currentUser.uid);
            const voteDoc = await voteRef.get();
            if (voteDoc.exists) {
                alert('You have already voted.');
                return;
            }

            // Add a new vote
            await voteRef.set({
                voterId: currentUser.uid,
                candidateId: selectedCandidateId,
            });

            alert('Vote submitted successfully!');
        } catch (error) {
            console.error('Error submitting vote:', error);
            alert('Failed to submit vote. Please try again later.');
        }
    };

    return (
        <HomeRegistered userId={userId} />
    );
}

export default VotingComponent;

