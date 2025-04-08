import React from "react";
import Card from "./CardMeet";
import image1 from "./assets/images/Admin.jpg";
import alice from "./assets/images/Alice.jpeg";
import bob from "./assets/images/Bob.jpeg";
import charlie from "./assets/images/Charlie.jpeg";
import diana from "./assets/images/Diana.jpeg";
import ethan from "./assets/images/Ethan.jpeg";
import fiona from "./assets/images/Fiona.jpeg";
import george from "./assets/images/George.jpeg";
import hannah from "./assets/images/Hannah.jpeg";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      imageLink: alice,
      name: "Alice Johnson",
      bio: "Dynamic CEO with a passion for innovation and a proven track record in tech leadership.",
    },
    {
      imageLink: bob,
      name: "Bob Smith",
      bio: "Expert developer who thrives on building scalable applications and mentoring junior devs.",
    },
    {
      imageLink: charlie,
      name: "Charlie Brown",
      bio: "UX visionary who designs clean, user-friendly interfaces that elevate digital experiences.",
    },
    {
      imageLink: diana,
      name: "Diana Prince",
      bio: "Strategic project manager known for delivering complex projects on time and under budget.",
    },
    {
      imageLink: ethan,
      name: "Ethan Hunt",
      bio: "Charismatic PR manager skilled in media relations, branding, and crisis communication.",
    },
    {
      imageLink: fiona,
      name: "Fiona Gallagher",
      bio: "Detail-driven QA engineer who ensures every product meets the highest quality standards.",
    },
    {
      imageLink: george,
      name: "George Martin",
      bio: "Versatile team player always ready to lend a hand, learn something new, or crack a joke.",
    },
    {
      imageLink: hannah,
      name: "Hannah Lee",
      bio: "Product owner with a strong user-first mindset, driving features that make real impact.",
    },
  ];
  

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    justifyItems: "center",
    padding: "1rem",
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", backgroundColor:'#5160A5', marginTop:'5vh'}}>
      <h2 style={{color:'#ff9a36', fontWeight:'bolder'}}>Meet The Team</h2>
      <div style={gridStyles}>
        {teamMembers.map((member) => (
          <Card
            imageLink={member.imageLink}
            title={member.name}
            text={member.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
