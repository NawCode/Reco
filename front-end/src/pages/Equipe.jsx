import React from "react";
import TeamCard from "../components/TeamCard";
import "./equipe.css";
import LinkButton from "../components/LinkButton";

const Equipe = () => {
  return (
    <>
      <div className="grid-cols-1 flex-col">
        <div className="mx-auto">
          <div className="mx-auto">
            <div className="sm:flex items-center">
              <div className="mx-auto">
                <div className="w-full mb-3 pb-3">
                  <img
                    className="mx-auto mt-4 bg-cover bg-center"
                    src="https://cdn.pixabay.com/photo/2017/05/12/12/42/dresden-2306937_960_720.jpg"
                    alt=""
                  />
                  <h1 className="text-center text-black font-bold text-3xl md:text-4xl lg:text-5xl my-2 font-nova">
                    Valoriser et mettre en avant la culture de votre ville{" "}
                  </h1>
                </div>
                <p className="text-center text-gray-900 mb-2 md:mb-6 text-2xl font-nova">
                  L’objectif de la Reco est de (re)mettre sur le devant de la
                  scène tout ce qui fait vivre votre ville. Nous souhaitons que
                  les gens puissent partager leurs recommandations, leur coup de
                  cœur, leur lieu préféré… N’hésitez pas à nous contacter si
                  vous souhaitez nous recommander un lieu, événement, nous faire
                  part d’amélioration ou tout simplement pour nous demander
                  notre coup de cœur.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-32 py-12">
          <div className="text-center pb-12 w-full mb-3">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black font-nova">
              Notre équipe
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_960_720.jpg"
                alt="photo"
              />
            </TeamCard>

            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg"
                alt="photo"
              />
            </TeamCard>

            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </TeamCard>

            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </TeamCard>

            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                alt="photo"
              />
            </TeamCard>

            <TeamCard firstName="Nom générique" job="Job générique">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://cdn.pixabay.com/photo/2014/09/17/11/47/man-449404_960_720.jpg"
                alt="photo"
              />
            </TeamCard>
          </div>
        </section>
      </div>
    </>
  );
};

export default Equipe;
