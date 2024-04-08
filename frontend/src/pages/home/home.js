import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/Home.module.css'; // Correct path to your CSS module

function Home() {
  const paperSubmissions = [
    { id: 1, title: 'Paper 1', author: 'Author 1', date: '2023-01-01', abstract: 'Abstract of Paper 1...' },
    { id: 2, title: 'Paper 2', author: 'Author 2', date: '2023-01-02', abstract: 'Abstract of Paper 2...' },
    { id: 3, title: 'Paper 3', author: 'Author 3', date: '2023-01-05', abstract: 'Abstract of Paper 3...' },
    { id: 4, title: 'Paper 4', author: 'Author 4', date: '2023-01-06', abstract: 'Abstract of Paper 4...' },
  ];

  // Assuming reviewerQueries remains the same

  return (
    <div className={styles.homeContainer}>
      <section className={styles.submissionsSection}>
        <h2>Recent Paper Submissions</h2>
        <ul className={styles.paperList}>
          {paperSubmissions.map((paper) => (
            <li key={paper.id} className={styles.paperItem}>
              <Link to={`/paperDetails/${paper.id}`} className={styles.paperTitle}>{paper.title}</Link>
              <div className={styles.paperAuthor}>{`by ${paper.author}`}</div>
              <div className={styles.paperDate}>{`on ${paper.date}`}</div>
              <div className={styles.paperAbstract}>{paper.abstract}</div>
            </li>
          ))}
        </ul>
      </section>
      {/* Reviewer Queries Section Remains Unchanged */}
    </div>
  );
}

export default Home;

