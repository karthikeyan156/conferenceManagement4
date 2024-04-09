import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styles from '../home/Home.module.css'; // Adjust the path as needed

Modal.setAppElement('#root'); // For accessibility reasons

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentQuery, setCurrentQuery] = useState({});
  const [answer, setAnswer] = useState('');

  const paperSubmissions = [
    {
      "id": 1,
      "title": "Exploring Quantum Computing for Artificial Intelligence",
      "author": "Alice Johnson",
      "date": "2023-03-01",
      "abstract": "This paper discusses potential applications of quantum computing in the field of artificial intelligence, highlighting breakthroughs and challenges."
    },
    {
      "id": 2,
      "title": "Advancements in Neural Network Architectures",
      "author": "Bob Smith",
      "date": "2023-03-05",
      "abstract": "A comprehensive review of recent advancements in neural network architectures, focusing on improvements in efficiency and accuracy."
    },
    {
      "id": 3,
      "title": "The Role of Big Data in Modern Epidemiology",
      "author": "Carol Taylor",
      "date": "2023-03-10",
      "abstract": "An exploration of how big data analytics are revolutionizing epidemiological studies and public health responses."
    },
    {
      "id": 4,
      "title": "Blockchain Technology: Beyond Cryptocurrency",
      "author": "David Lee",
      "date": "2023-03-15",
      "abstract": "An analysis of blockchain applications outside of the financial sector, including supply chain management and secure voting systems."
    }
  ]
  ;

  const reviewerQueries = [
    {
      "id": 1,
      "query": "Could the authors provide more details on the methodology used in their quantum computing simulations?",
      "reviewer": "Dr. Emily White",
      "date": "2023-03-02"
    },
    {
      "id": 2,
      "query": "The section on neural network efficiency lacks comparative analysis with traditional models. Please elaborate.",
      "reviewer": "Prof. Alan Brown",
      "date": "2023-03-06"
    },
    {
      "id": 3,
      "query": "How does the proposed blockchain application ensure data integrity in non-financial transactions?",
      "reviewer": "Dr. Sarah Green",
      "date": "2023-03-16"
    },
    {
      "id": 4,
      "query": "There appears to be a discrepancy in the reported results of autonomous vehicle tests. Can this be clarified?",
      "reviewer": "Mr. Omar Khan",
      "date": "2023-03-21"
    },
    {
      "id": 5,
      "query": "The paper mentions augmented reality in higher education but provides few examples in K-12. Any insights?",
      "reviewer": "Ms. Zoe Clark",
      "date": "2023-03-26"
    },
    {
      "id": 6,
      "query": "Regarding IoT cybersecurity, what specific technologies do the authors recommend for threat detection?",
      "reviewer": "Dr. Lucas Moore",
      "date": "2023-03-31"
    },
    {
      "id": 7,
      "query": "Can the environmental impacts of green IT practices mentioned be quantified in terms of carbon footprint reduction?",
      "reviewer": "Prof. Mia Davis",
      "date": "2023-04-05"
    },
    {
      "id": 8,
      "query": "The paper on deep learning for NLP doesn't discuss ethical considerations. Are there any concerns to note?",
      "reviewer": "Dr. Noah Wilson",
      "date": "2023-04-10"
    },
    {
      "id": 9,
      "query": "Virtual reality therapy seems promising, but what about its accessibility to patients in remote areas?",
      "reviewer": "Ms. Isabella Murphy",
      "date": "2023-04-15"
    },
    {
      "id": 10,
      "query": "The methodology section in the paper on sustainable computing lacks detail about the tools used. Please specify.",
      "reviewer": "Prof. Jacob Lee",
      "date": "2023-04-05"
    }
  ]
  ;

  const openModal = (query) => {
    setCurrentQuery(query);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAnswer(''); // Reset answer input when modal is closed
  };

  const handleSubmit = () => {
    alert('Message sent');
    closeModal(); // Close modal after submission
  };

  return (
    <div className={styles.homeContainer}>
      {/* Paper Submissions Section */}
      <section className={styles.submissionsSection}>
        <h2>Recent Paper Submissions</h2>
        <ul className={styles.paperList}>
          {paperSubmissions.map((paper) => (
            <li key={paper.id} className={styles.paperItem}>
              <Link to={`/paperDetails/${paper.id}`} className={styles.paperTitle}>{paper.title}</Link>
              <div className={styles.paperAuthor}>{`by ${paper.author}`}</div>
              <div className={styles.paperAbstract}>{paper.abstract}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviewer Queries Section */}
      <section className={styles.queriesSection}>
        <h2>Reviewer Queries</h2>
        <ul>
          {reviewerQueries.map((query, index) => (
            <li key={index} className={styles.queryItem} onClick={() => openModal(query)}>
              <div className={styles.queryMessage}>{query.query.substring(0, 50)}...</div>
              <div className={styles.queryAuthor}>{query.reviewer}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal for Reviewer Query Details */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Query Details" className={styles.modal}>
        <h2>Query Details</h2>
        <p>{currentQuery.query}</p>
        <p>From: {currentQuery.reviewer}</p>
        <input 
          type="text" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          placeholder="Enter your answer"
          className={styles.answerInput}
        />
        <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
      </Modal>
    </div>
  );
}

export default Home;
