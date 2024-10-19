import React, { useState, useEffect } from 'react';
import './Edu.css'; // Custom styles for the Education section
import srmImage from '../srm.jpeg'; // Import SRM image
import msImage from '../ms.png'; // Import Microsoft image
import greImage from '../gre.jpeg'; // Import Green's Technology image

function Edu() {
  const [currentEducation, setCurrentEducation] = useState(0);
  const [fadeClass, setFadeClass] = useState(''); // State to manage fade-in effect

  const educationData = [
    {
      institution: "SRM Institution of Science and Technology",
      location: "Chennai",
      percentage: "88.6",
      duration: "2020-09-01 - 2024-06-07",
      degree: "B. Tech in Computer Science and Engineering",
      image: srmImage
    },
    {
      institution: "Microsoft in association with Intrnforte",
      location: "Azure exam",
      percentage: "842/1000",
      duration: "2023-06-01 - 2023-09-11",
      degree: "AIML (Microsoft Azure - AI900)",
      image: msImage
    },
    {
      institution: "Green's Technology",
      location: "Chennai",
      degree: "AWS and DevOps",
      technologies: [
        "AWS: EC2, S3, VPC, LB, Route 53, IAM",
        "DevOps: Docker, Kubernetes, Jenkins, GIT, Ansible, Terraform"
      ],
      duration: "Feb 2024",
      image: greImage
    }
  ];

  useEffect(() => {
    setFadeClass(''); // Reset the fade-in class
    setTimeout(() => setFadeClass('fade-in'), 100); // Add the fade-in class after a slight delay
  }, [currentEducation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEducation((prev) => (prev + 1) % educationData.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [educationData.length]);

  const { institution, location, percentage, duration, degree, image, technologies } = educationData[currentEducation];

  const handleRadioChange = (index) => {
    setCurrentEducation(index);
  };

  return (
    <section className="education-section">
      <div className="education-content">
        <h2 className={fadeClass}>{currentEducation === 1 ? "Certification" : currentEducation === 2 ? "Training" : "Education"}</h2>
        <p className={`line-1 ${fadeClass}`}>{institution}</p>
        <p className={`line-2 ${fadeClass}`}>📍 {location}</p>
        {percentage && <p className={`line-3 ${fadeClass}`}>Percentage: {percentage}</p>} 
        <p className={`line-4 ${fadeClass}`}>Duration: {duration}</p>
        <p className={`line-5 ${fadeClass}`}>Degree: {degree}</p>
        {technologies && (
          <div className={`line-6 ${fadeClass}`}>
            <p>{technologies[0]}</p>
            <p>{technologies[1]}</p>
          </div>
        )}
      </div>
      <div className="education-images">
        <div className="education-image" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="education-radios">
        {educationData.map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="education"
              checked={currentEducation === index}
              onChange={() => handleRadioChange(index)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}

export default Edu;
