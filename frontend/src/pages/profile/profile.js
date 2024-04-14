
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './profile.css';  // Make sure to create and import the corresponding CSS

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: '',
        profilePicture: ''
    });

    useEffect(() => {
        // Fetch user data from an API
        const fetchData = async () => {
            try {
                const response = {
                    "data":{
                        "name":"james",
                        "email":"james@gmail.com",
                        "bio":"bio is this",

                    }
                }
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <img src={"https://headshots-inc.com/wp-content/uploads/2020/12/what-to-wear-for-professional-headshots-1.jpg" } alt={`${user.name}'s profile`} className={styles.profileImage} />
                <h1 className={styles.profileName}>{user.name}</h1>
            </div>
            <div className={styles.profileDetails}>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
