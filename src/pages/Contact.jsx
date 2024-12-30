import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { TbCircleDashedLetterS } from "react-icons/tb";
import Footer from "../components/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, message }) => {
    try {
      const res = await axios.post("https://portfolio-backend-hito.onrender.com", {
        name,
        email,
        message,
      });
      console.log(res.data);
      reset()
      
      if(res.status === 201)  {
        alert("Message sent successfully");
      }
    } catch (e) {
      alert("Failed to send message");
    }
  }




  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center font-semibold underline mt-5 mb-8">
        {" "}
        Contact Me
      </h1>
      <div className="flex flex-row  items-center justify-evenly">
        <div className="Container flex flex-col items-center justify-center w-[600px] h-[400px] bg-white shadow-2xl shadow-zinc-500 border-2 border-zinc-500 mr-36 rounded-lg p-10 text-xl">
        <div className="flex flex-row m-4">
        <FaPhoneAlt/> <p className="ml-2">+91-7319525287.</p>
        </div>
       <div className="flex flex-row m-4">
       <IoMdMailOpen/><p className="ml-3"> soumyapersonal04@gmail.com</p>
       </div>
       <div className="flex flex-row m-4">
        <FaLinkedin/> <a href="www.linkedin.com/in/soumya-sen-3a7194344" className="ml-3">Linkedin Profile</a>
       </div>
       <div className="flex flex-row m-4">
        <TbCircleDashedLetterS/> <p className="ml-3">Ganrapota,Bongaon,West Bengal,743251</p>
       </div>
       </div>
        <div>
          <form
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="mb-4 mt-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="shadow appearance-none border-2 border-zinc-500 rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="shadow appearance-none border-2 border-zinc-500 rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">Email is required</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow appearance-none h-60 border-2 border-zinc-500 rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">Message is required</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-zinc-500 hover:rounded-lg hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
