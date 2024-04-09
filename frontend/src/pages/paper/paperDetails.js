import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './paperDetails.css'; // Assuming you have a separate CSS file for styling

function PaperDetails() {
  const { paperId } = useParams();
  const navigate = useNavigate();
  const [paper, setPaper] = useState({});
  const [review, setReview] = useState('');
  
  useEffect(() => {
    // Simulate fetching paper details. Replace this with your actual fetch call.
    const fetchedPaper = {
      id: paperId,
      title: "Sample Paper Title",
      author: "Author Name",
      date: "2023-01-01",
      marks: 85,
      isAccepted: true,
      abstract: "This is a sample abstract for the paper."
    };
    setPaper(fetchedPaper);
  }, [paperId]);

  const handleSubmitResponse = (status) => {
    // Simulate submitting the review. You might need to POST this data to your server.
    console.log(`Review for paper ${paperId}: ${review}. Status: ${status}`);
    alert('Response submitted successfully');
    setReview(''); // Reset review input
  };

  return (
    <div className="paper-details-container">
      <h2>{paper.title}</h2>
      <p><strong>Author:</strong> {paper.author}</p>
      <p><strong>Date:</strong> {paper.date}</p>
      <p><strong>Abstract:</strong> {paper.abstract}</p>

      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)} 
        placeholder="Enter your review here..."
      />
      <div className="buttons">
        <button className="accept" onClick={() => handleSubmitResponse('Accepted')}>Accept</button>
        <button className="reject" onClick={() => handleSubmitResponse('Rejected')}>Reject</button>
      </div>
    </div>
  );
}

export default PaperDetails;
