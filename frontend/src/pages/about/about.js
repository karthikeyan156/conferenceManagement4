import React, { useState } from 'react';
import styles from './about.css'; // Ensure you create and import the necessary CSS

const About = () => {
  // Example state for organization's pictures
  const [pictures] = useState([
    { src: '/path-to-image1.png', alt: 'Image 1 Description' },
    { src: '/path-to-image2.png', alt: 'Image 2 Description' },
    // Add more images as needed
  ]);

  // Example state for published citations
  const [citations] = useState([
    { title: 'Citation Title 1', detail: 'Detail about Citation 1' },
    { title: 'Citation Title 2', detail: 'Detail about Citation 2' },
    // Add more citations as needed
  ]);

  // Example state for higher level people in the organization
  const [people] = useState([
    { img: 'https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2023/03/23/123808_1362296.jpeg.1500x1000_q95_crop-smart_upscale.jpg', name: 'Dr.John Doe', qualification: 'Phd in computer science', quote: 'Quote by person 1' },
    { img: 'https://images.freeimages.com/images/premium/previews/8573/8573414-professor.jpg', name: 'Dr.John Doe', qualification: 'Phd in computer science', quote: 'Quote by person 2' },
    // Add more profiles as needed
  ]);

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.picturesSection}>
        {pictures.map((picture, index) => (
          <img key={index} src={picture.src} alt={picture.alt} className={styles.organizationPicture} />
        ))}
      </section>

      <section className={styles.citationsSection}>
        <h2>Published Citations</h2>
        {citations.map((citation, index) => (
          <div key={index} className={styles.citation}>
            <h3>{citation.title}</h3>
            <p>{citation.detail}</p>
          </div>
        ))}
      </section>

      <section className={styles.peopleSection}>
        <h2>Our Team</h2>
        {people.map((person, index) => (
          <div key={index} className={styles.personProfile}>
            <img src={person.img} alt={`Profile of ${person.name}`} className={styles.profilePicture} />
            <h3>{person.name}</h3>
            <p>{person.qualification}</p>
            <blockquote>{`"${person.quote}"`}</blockquote>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;

