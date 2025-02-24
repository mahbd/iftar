import TeamMemberCard from "@/components/TeamMemberCard";

const TeamMembers = () => {
  const members = [
    {
      image: "/images/canvas-banner.jpg",
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    },
    {
      image: "/team/mahmudul.jpg",
      name: "Mahmudul Alam",
      description:
        "Mahmudul Alam is a skilled web developer, app developer, and competitive programmer.",
      link: "https://github.com/mahbd",
    },
    {
      image: "/team/rony.jpg",
      name: "Md. Rony Islam",
      description:
        "Md. Rony Islam is a skilled teacher and cybersecurity expert.",
      link: "https://www.facebook.com/md.rony.islam.879166",
    },
    {
      image: "/team/rakib.jpg",
      name: "MD Rakib Hasan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    },
    {
      image: "/images/canvas-banner.jpg",
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    },
    {
      image: "/images/canvas-banner.jpg",
      name: "John Doe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
    },
  ];
  return (
    <div>
      <h2 className="text-center font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Team
      </h2>
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 px-3"}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
            link={member.link}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
