import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="w-screen h-screen ">
      <Helmet>
        <title>About Page</title>
        <meta
          property="og:image"
          content="https://insidernote-development.sgp1.cdn.digitaloceanspaces.com/441990945_2501897446865707_8341522541539371412_n.png"
        />
        <meta
          property="ia:markup_url"
          content="https://insidernote-development.sgp1.cdn.digitaloceanspaces.com/441990945_2501897446865707_8341522541539371412_n.png"
        />
        <meta
          property="ia:markup_url_dev"
          content="https://insidernote-development.sgp1.cdn.digitaloceanspaces.com/441990945_2501897446865707_8341522541539371412_n.png"
        />
        <meta
          property="ia:rules_url"
          content="https://insidernote-development.sgp1.cdn.digitaloceanspaces.com/441990945_2501897446865707_8341522541539371412_n.png"
        />
        <meta
          property="ia:rules_url_dev"
          content="https://insidernote-development.sgp1.cdn.digitaloceanspaces.com/441990945_2501897446865707_8341522541539371412_n.png"
        />
      </Helmet>
      <header className="text-3xl text-center ">About Page</header>
      <main className="w-1/2 mx-auto mt-10 h-96 bg-slate-400"></main>
    </div>
  );
};

export default About;
