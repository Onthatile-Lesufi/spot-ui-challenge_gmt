import React from "react";
import Card from "./CardMeet";
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
    { imageLink: alice, name: "Alice Johnson", bio: "CEO" },
    { imageLink: bob, name: "Bob Smith", bio: "Lead Developer" },
    { imageLink: charlie, name: "Charlie Brown", bio: "Lead UX Designer" },
    { imageLink: diana, name: "Diana Prince", bio: "Project Manager" },
    { imageLink: ethan, name: "Ethan Hunt", bio: "PR Manager" },
    { imageLink: fiona, name: "Fiona Gallagher", bio: "QA Engineer" },
    { imageLink: george, name: "George Martin", bio: "Along for the ride Engineer" },
    { imageLink: hannah, name: "Hannah Lee", bio: "Product Owner" },
  ];

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    justifyItems: "center",
    padding: "1rem",
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{color:'black'}}>Meet The Team</h2>
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
