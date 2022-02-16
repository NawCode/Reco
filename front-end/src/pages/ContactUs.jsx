import React from "react";
import DropDownMenu from "../components/DropDownMenu";
import LinkButton from "../components/LinkButton";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const onFormSubmit = () =>
    toast.success("Ton message a bien été envoyé ! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="md:container md:mx-auto">
      <div className="text-center mt-16">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-dosis tracking-tight">Contactez-nous</h2>
      </div>
      <div className="p-6">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                Prénom
              </label>
              <input
                type="text"
                maxLength="50"
                id="first-name"
                name="first-name"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Nom
              </label>
              <input
                type="text"
                maxLength="50"
                id="last-name"
                name="last-name"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                <div className="flex align-items">
                  Téléphone
                  <span className="ml-auto opacity-75">(Facultatif)</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              />
            </div>
            <DropDownMenu />
            <div className="flex flex-col col-span-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                <div className="flex align-items">
                  Message
                  <span className="ml-auto opacity-75">
                    (Max. 500 caractères)
                  </span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                type="text"
                id="subject"
                name="subject"
                className="appearance-none block w-full bg-white text-gray-900 bg-opacity-25 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              onClick={() => onFormSubmit()}
              type="button"
              value="send"
              className="h-12 flex items-center justify-center uppercase font-roboto px-8 border-2 border-black hover:bg-white hover:text-black transition duration-500 ease-in-out"
            >
              Envoyer
            </button>
          </div>
        </form>
        <LinkButton
          link="/equipe"
          name="NOTRE EQUIPE"
          className="h-12 flex rounded items-center justify-center uppercase font-nova effect-underline invert hover:invert-0 hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </LinkButton>
      </div>
    </div>
  );
};

export default ContactUs;
