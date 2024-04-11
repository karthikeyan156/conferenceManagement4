import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './paperDetails.css'; // Ensure the path is correct

function PaperDetails() {
  const { paperId } = useParams();
  const [paper, setPaper] = useState({});
  const [review, setReview] = useState('');

  useEffect(() => {
    const fetchPaperDetails = async () => {
      try {
        const endpoint = `http://localhost:3000/paper/getPaper`;
        const requestBody = { id: paperId };
        const response = await axios.post(endpoint, requestBody);
        setPaper(response.data);
      } catch (error) {
        console.error('Error fetching paper details:', error);
      }
    };
    fetchPaperDetails();
  }, [paperId]);

  const handleSubmitResponse = async (status) => {
    try {
      const updateEndpoint = `http://localhost:3000/paper/editPaper`;
      // Sending the ID, review, and status to the API
      await axios.post(updateEndpoint, {
        paperId,
        review,
        status, // 'Accepted' or 'Rejected'
      });

      alert(`Paper status updated to: ${status}`);
      setReview(''); // Reset review text
      // Optionally, refetch paper details to reflect the update
    } catch (error) {
      console.error('Error submitting paper status:', error);
    }
  };

  return (
    <div className="paper-details-container">
      <h2>{paper.paperName}</h2>
      <p><strong>Author:</strong> {paper.paperAuthor}</p>
      <p><strong>Paper ID:</strong> {paperId}</p>
      <p><strong>Location:</strong> {paper.paperLocation}</p>
      <p><strong>Date:</strong> {paper.createdAt}</p>
      <p><strong>Marks:</strong> {paper.totalMarks}</p>
      <p><strong>Status:</strong> {paper.isApproved ? 'Approved' : 'Not Approved'}</p>
      <p><strong>Overall Review:</strong> {paper.overallReview}</p>
      <p><strong>Paper State:</strong> {paper.paperState}</p>
      <p><strong>Paper Status:</strong> {paper.paperStatus}</p>x
      <p><strong>Abstract:</strong> {paper.abstract}</p>
      
      {/* Displaying reviewers */}
      {paper.reviewers && paper.reviewers.length > 0 && (
  <>
    <h3>Reviewers</h3>
    <div className="reviewers">
      {paper.reviewers.map((reviewer, index) => (
        <div key={index} className="reviewer-card">
          <h4>{reviewer.name}</h4>
          <p><strong>Overall Score:</strong> {reviewer.overallScore}</p>
          <p><strong>Comments:</strong> {reviewer.privateComments}</p>
        </div>
      ))}
    </div>
  </>
)}

      {/* Optional PDF Download */}
      {paper.paperLocation && (
        <p>
          <strong>Paper PDF:</strong> 
          <a href={`http://localhost:3000/pdf/${paperId}.pdf`} download>Download PDF</a>
        </p>
      )}

      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)} 
        placeholder="Enter your review here..."
      />
      <div className="buttons">
        <button className="accept" onClick={() => handleSubmitResponse('Accepted')}>Accept</button>
        <button className="reject" onClick={() => handleSubmitResponse('Rejected')}>Reject</button>
        <button className="draft" onClick={() => handleSubmitResponse('Draft')}>Save & Continue</button>
      </div>
    </div>
  );
}

export default PaperDetails;
