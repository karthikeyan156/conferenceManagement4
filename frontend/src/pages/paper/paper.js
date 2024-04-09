

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './paper.module.css'; // Adjust the path as needed

const papers = [
  { "id": 3, "title": "Paper 3", "author": "Author 3", "date": "2023-02-15", "marks": 90, "isAccepted": true },
  { "id": 4, "title": "Paper 4", "author": "Author 4", "date": "2023-02-20", "marks": 60, "isAccepted": false },
  { "id": 5, "title": "Paper 5", "author": "Author 5", "date": "2023-03-05", "marks": 88, "isAccepted": true },
  { "id": 6, "title": "Paper 6", "author": "Author 6", "date": "2023-03-12", "marks": 82, "isAccepted": true },
  { "id": 7, "title": "Paper 7", "author": "Author 7", "date": "2023-03-19", "marks": 70, "isAccepted": false },
  { "id": 8, "title": "Paper 8", "author": "Author 8", "date": "2023-03-26", "marks": 95, "isAccepted": true },
  { "id": 9, "title": "Paper 9", "author": "Author 9", "date": "2023-04-02", "marks": 65, "isAccepted": false },
  { "id": 10, "title": "Paper 10", "author": "Author 10", "date": "2023-04-09", "marks": 77, "isAccepted": true },
  { "id": 11, "title": "Paper 11", "author": "Author 11", "date": "2023-04-16", "marks": 84, "isAccepted": true },
  { "id": 12, "title": "Paper 12", "author": "Author 12", "date": "2023-04-23", "marks": 55, "isAccepted": false },
  { "id": 13, "title": "Paper 13", "author": "Author 13", "date": "2023-05-01", "marks": 92, "isAccepted": true },
  { "id": 14, "title": "Paper 14", "author": "Author 14", "date": "2023-05-08", "marks": 78, "isAccepted": true },
  { "id": 15, "title": "Paper 15", "author": "Author 15", "date": "2023-05-15", "marks": 80, "isAccepted": false },
  { "id": 16, "title": "Paper 16", "author": "Author 16", "date": "2023-05-22", "marks": 73, "isAccepted": false },
  { "id": 17, "title": "Paper 17", "author": "Author 17", "date": "2023-05-29", "marks": 89, "isAccepted": true },
  { "id": 18, "title": "Paper 18", "author": "Author 18", "date": "2023-06-05", "marks": 67, "isAccepted": false },
  { "id": 19, "title": "Paper 19", "author": "Author 19", "date": "2023-06-12", "marks": 91, "isAccepted": true },
  { "id": 20, "title": "Paper 20", "author": "Author 20", "date": "2023-06-19", "marks": 85, "isAccepted": true },
  { "id": 21, "title": "Paper 21", "author": "Author 21", "date": "2023-06-26", "marks": 50, "isAccepted": false },
  { "id": 22, "title": "Paper 22", "author": "Author 22", "date": "2023-07-03", "marks": 94, "isAccepted": true }
]
;

function Paper() {
  const navigate = useNavigate();
  const [sortedPapers, setSortedPapers] = useState(papers);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted;
    switch(value) {
      case 'marksHighToLow':
        sorted = [...papers].sort((a, b) => b.marks - a.marks);
        break;
      case 'marksLowToHigh':
        sorted = [...papers].sort((a, b) => a.marks - b.marks);
        break;
      case 'acceptedFirst':
        sorted = [...papers].sort((a, b) => (a.isAccepted === b.isAccepted)? 0 : a.isAccepted ? -1 : 1);
        break;
      case 'rejectedFirst':
        sorted = [...papers].sort((a, b) => (a.isAccepted === b.isAccepted)? 0 : a.isAccepted ? 1 : -1);
        break;
      default:
        sorted = [...papers];
    }
    setSortedPapers(sorted);
  };

  const handlePaperClick = (id) => {
    navigate(`/paperDetails/${id}`);
  };

  return (
    <div className={styles.paperContainer}>
      <div className={styles.header}>
        <h2>Papers</h2>
        <select onChange={handleSortChange} className={styles.dropdown}>
          <option value="marksHighToLow">Sort by Marks (High to Low)</option>
          <option value="marksLowToHigh">Sort by Marks (Low to High)</option>
          <option value="acceptedFirst">Sort by Accepted First</option>
          <option value="rejectedFirst">Sort by Rejected First</option>
        </select>
      </div>
      <section className={styles.submissionsSection}>
        <ul className={styles.paperList}>
          {sortedPapers.map((paper) => (
            <li key={paper.id} className={styles.paperItem} onClick={() => handlePaperClick(paper.id)}>
              <div className={styles.paperTitle}>{paper.title}</div>
              <div className={styles.paperAuthor}>{`by ${paper.author} - Marks: ${paper.marks}`}</div>
              <div className={paper.isAccepted ? styles.acceptanceStatus : styles.rejectionStatus}>
                {paper.isAccepted ? 'Accepted' : 'Rejected'}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Paper;
