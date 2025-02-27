import TeamMemberCard from "@/components/TeamMemberCard";

const TeamMembers = () => {
  const members = [
    {
      image: "/team/rounak.jpg",
      name: "Rounak Jahan Jeffrey",
      description: "Artist and cooking expert.",
      link: "https://www.facebook.com/share/15UQ3KtMF6/",
    },
    {
      image: "/team/mahmudul.jpg",
      name: "Mahmudul Alam",
      description: "Fullstack Web & App developer.",
      link: "https://github.com/mahbd",
    },
    {
      image: "/team/rony.jpg",
      name: "Md. Rony Islam",
      description: "Customer service expert and social media manager.",
      link: "https://www.facebook.com/md.rony.islam.879166",
    },
    {
      image: "/team/rakib.jpg",
      name: "MD Rakib Hasan",
      description: "Customer service expert and social media manager.",
      link: "",
    },
    {
      image: "/team/monir.jpg",
      name: "Moniruzzaman Masum",
      description: "Delivery expert and customer service expert.",
      link: "https://t.me/Masum1905006",
    },
    {
      image: "/team/rashel.jpg",
      name: "Asaduzzaman Rashel",
      description: "Delivery expert and customer service expert.",
      link: "https://www.facebook.com/Asaduzzamanrashel1998",
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
