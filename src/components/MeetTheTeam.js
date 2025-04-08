import React from "react";
import Card from "./CardMeet";
import image1 from "./assets/images/Admin.jpg";

const MeetTheTeam = () => {
  const teamMembers = [
    { imageLink: image1, name: "Alice Johnson", bio: "CEO" },
    { imageLink: image1, name: "Bob Smith", bio: "Lead Developer" },
    { imageLink: image1, name: "Charlie Brown", bio: "Lead UX Designer" },
    { imageLink: image1, name: "Diana Prince", bio: "Project Manager" },
    { imageLink: image1, name: "Ethan Hunt", bio: "PR Manager" },
    { imageLink: image1, name: "Fiona Gallagher", bio: "QA Engineer" },
    { imageLink: image1, name: "George Martin", bio: "Along for the ride Engineer" },
    { imageLink: image1, name: "Hannah Lee", bio: "Product Owner" },
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
