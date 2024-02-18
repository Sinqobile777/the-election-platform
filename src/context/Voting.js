import React from 'react';
import { useAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
import HomeRegistered from './HomeRegistered';

function VotingComponent({ userId }) {
    const { currentUser } = useAuth();

    const handleVote = async (selectedCandidateId) => {
        try {
            // Check if the user has already voted
            const voteRef = db.collection('votes').doc(currentUser.uid);
            const voteDoc = await voteRef.get();
            if (voteDoc.exists) {
                alert('You have already voted.');
                return;
            }

            // Update the vote count for the selected candidate
            const candidateRef = db.collection('candidates').doc(selectedCandidateId);
            await db.runTransaction(async (transaction) => {
                const candidateDoc = await transaction.get(candidateRef);
                if (!candidateDoc.exists) {
                    throw new Error('Candidate does not exist.');
                }

                const newVoteCount = (candidateDoc.data().votes || 0) + 1;
                transaction.update(candidateRef, { votes: newVoteCount });
            });

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

    return <HomeRegistered userId={userId} handleVote={handleVote} />;
}

export default VotingComponent;

