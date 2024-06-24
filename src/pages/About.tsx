import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className=" h-screen w-screen">
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <header className=" text-3xl text-center">About Page</header>
      <main className=" w-1/2 h-96 bg-slate-400 mx-auto mt-10"></main>
    </div>
  );
};

export default About;
