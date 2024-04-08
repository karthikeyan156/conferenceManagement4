// src/pages/paperDetails/PaperDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PaperDetails() {
  let { paperId } = useParams();
  
  return (
    <div>
      <h2>Paper Details - ID: {paperId}</h2>
      {/* Display paper details here */}
    </div>
  );
}

export default PaperDetails;
