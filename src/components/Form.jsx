import React, { useState } from "react";
import Button from "./Button";
import axios from "../axios";

const Form = () => {
  // DECLARATION OF VARIABLES
  //=========================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [responseTracker, setResponseTracker] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      name,
      email,
      newsLetter,
    };
    try {
      axios.post("/email", info).then((response) => {
        setResponse(response.data);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      });
    } catch (error) {
      setResponse(error);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let info = {
      name,
      email,
      newsLetter,
    };
    try {
      axios.delete(`/email/${info.name}`).then((response) => {
        setResponse(response.data);
        setResponseTracker(true);
        setTimeout(() => {
          setResponseTracker(false);
        }, 3000);
      });
    } catch (error) {
      setResponse(error);
      setResponseTracker(true);
      setTimeout(() => {
        setResponseTracker(false);
      }, 3000);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-extrabold underline text-2xl content-center py-5 ">
          SAMPLE OF A DATA COLLECTION FORM
        </h1>
      </div>
      <div className=" p-5 flex flex-col content-center items-center justify-center">
        <form className="w-full max-w-md ">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="eg Gichia Alfred Githinji"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="eg alfredgithinji87@gmail.com"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                value={newsLetter}
                onClick={(e) => {
                  setNewsLetter(!newsLetter);
                }}
              />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 flex flex-row w-full justify-evenly hover:justify-between ">
              <div className="mx-5">
                <Button type="button" text="Submit" onClick={handleSubmit} />
              </div>
              <div className="mx-5">
                <Button type="button" text="Delete" onClick={handleDelete} />
              </div>
            </div>
          </div>

          {responseTracker ? (
            <p className="bg-yellow-300 text-stone-500">{response}</p>
          ) : (
            " "
          )}
        </form>
      </div>
    </>
  );
};

export default Form; //This is like a permission that this modules gives to be imported.
