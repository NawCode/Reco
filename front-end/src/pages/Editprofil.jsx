import { useForm } from "react-hook-form";
import ConstantSelect from "../components/ConstantSelect";
import { YesNo, YesNoLabels } from "../services/Utils";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../components/Context/UserContext";
import { updateUser } from "../services/Api";
import Man from "../assets/man.png";
import Woman from "../assets/women.png";
import NonBinary from "../assets/Non-binarity.jpg";
import { toast } from "react-toastify";
import { getTagIcon } from "../services/Tags";
import PrivateLayout from "./PrivateLayout";

const Editprofil = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });
  const notify = () =>
    toast.success("Changements enrengistrés !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const onSubmit = async (data) => {
    try {
      setUser(await updateUser(data));
      notify();
      setTimeout(() => navigate("/mon-profil"), 1000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex justify-center items-center  px-8">
          <form
            className="w-full max-w- h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-3xl">Éditer le profil</h1>
            <div
              id="profile-photo"
              className="pt-3 pb-3 flex items-center justify-center"
            >
              {user && user.avatar !== null ? (
                <img
                  className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                  src={user.avatar}
                  alt="person"
                />
              ) : user && user.gender === 0 ? (
                <img
                  className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                  src={Man}
                  alt="person"
                />
              ) : user && user.gender === 1 ? (
                <img
                  className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                  src={Woman}
                  alt="person"
                />
              ) : (
                <img
                  className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                  src={NonBinary}
                  alt="person"
                />
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  Prénom
                </label>
                <input
                  {...register("firstname")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstname"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Nom
                </label>
                <input
                  {...register("lastname")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="lastname"
                  placeholder="Michel"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  readOnly={
                    user && user.provider === "google" ? "true" : "false"
                  }
                  placeholder="Comme vous êtes connecté avec Google, changez votre email directement via leurs services"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="newsletter"
                >
                  Newsletter
                </label>

                <div className="relative">
                  <ConstantSelect
                    {...register("newsletter")}
                    constObj={YesNo}
                    constLabels={YesNoLabels}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="newsletter"
                  />

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mb-3 border-b border-20 border-black"></div>

            <div id="interet" className="mt-3">
              <h2 className="text-2xl flex justify-center mb-3">
                Centres d'intérêt
              </h2>
              <div className="grid grid-cols-4 gap-4 text-center">
                {user &&
                  user.tags.map(({ tag }) => (
                    <>
                      <button className="border-2 w-9 h-9 rounded-full  text-black border-black  text-2xl text-white"  >
                        {getTagIcon(tag.label)}
                      </button>
                    </>
                  ))}
              </div>
            </div>
            <div id="modify" className="flex justify-center mt-3">
              <button
                type="button"
                className="bg-blue-500 text-blue-100 p-1 px-4 rounded-lg hover:bg"
                onClick={() => navigate("/choix")}
              >
                Modifier mes centres d'intérêt
              </button>
            </div>

            <div className="w-full mb-3 mt-3 border-b border-20 border-black"></div>

            <div id="modify" className="flex justify-center pb-6">
              <button
                type="submit"
                className="bg-red-500 text-blue-100 py-2 px-4 rounded-lg hover:bg"
              >
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      ) : (
        <PrivateLayout />
      )}
    </div>
  );
};

export default Editprofil;
