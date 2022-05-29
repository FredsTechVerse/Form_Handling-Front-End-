import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";
import Form from "./components/Form";
function App() {
  const [emails, setEmails] = useState([]);
  const [dataTracker, setDataTracker] = useState(false);
  const [viewTracker, setViewTracker] = useState(false);
  const [dataMessage, setDataMessage] = useState("");
  const [tableTracker, setTableTracker] = useState(false);

  //THIS HAPPENS ON PAGE LOAD
  //=========================
  useEffect(() => {
    // A FUNCTION THAT FETCHES THE EMAILS IN OUR DATABASE.
    //====================================================
    const Emails = async () => {
      try {
        const r_data = await axios.get("./emails");
        const data = await r_data.data; //This is kinda like destructuring.
        setEmails(data);
        setDataMessage("The data has been received successfully.");
        setDataTracker(true);
        setTimeout(() => {
          setDataTracker(false);
          setViewTracker(true);
          setTableTracker(true);
        }, 2000);
      } catch (error) {
        setDataMessage(
          "Sorry, Something went wrong while fetching data from the backend."
        );
      }
      setDataTracker(true);
      setTimeout(() => {
        setDataTracker(false);
        setViewTracker(true);
      }, 2000);
    };

    Emails();
  }, []);

  return (
    <>
      {/* CONDITIONAL RENDERING IN ITS GLORY.
            ==================================== */}
      {dataTracker && (
        <p className="px-8 py-2 my-2 bg-green-500 rounded-lg">{dataMessage}</p>
      )}

      {/* CONDITIONAL RENDERING IN ITS GLORY.
            ==================================== */}
      {viewTracker && <Form />}

      {tableTracker && (
        <>
          <div className="flex justify-center">
            <h1 className="font-bold underline text-2xl content-center py-5 ">
              INFORMATION STORED IN THE DATABASE
            </h1>
          </div>

          <div className="p-5 flex flex-col content-center items-center justify-center overflow-auto ">
            <table className="table-auto shadow shadow-gray-900">
              <thead className="bg-slate-700 text-white border-gray-200 rounded-2xl">
                <tr>
                  <th className="w-60 p-5 tracking-wider">Name</th>
                  <th className="w-20 p-5 tracking-wider">Email</th>
                  <th className="w-20 p-5 tracking-wider">Connect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {emails.map(({ email, name, newsLetter: contact }) => (
                  <tr>
                    <td className="px-5 py-2">{name}</td>
                    <td className="px-5 py-2">
                      <a
                        href={"mailto:" + email}
                        className="bg-rose-600 text-white px-2 py-1 rounded-lg"
                      >
                        Email
                      </a>
                    </td>
                    <td className="px-5 py-2">
                      <a
                        href={"tel:" + contact}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg"
                      >
                        Call
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default App;
