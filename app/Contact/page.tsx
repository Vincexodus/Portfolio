"use client";
import React from "react";
import { faEnvelope, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const hoverAnimation = "transition-colors duration-500 hover:bg-white hover:text-[#202023]";
  const firstInputStyle = `bg-transparent border-4 border-white outline-none p-3 text-white ${hoverAnimation}`;
  const nextInputStyle = `bg-transparent border-l-4 border-r-4 border-b-4 border-white outline-none p-3 text-white ${hoverAnimation}`;
  const submitStyle = `${nextInputStyle} text-white cursor-pointer ${hoverAnimation}`;

  // submit button clicked
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(`Error sending message: ${response.statusText}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error(`Error sending message: ${error}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cover">
      <div className="w-1/2 m-auto text-center">
        <h1 className="font-bold">Leave A Message!</h1>
        <h3>Feel free to reach out below. I'll be glad to help!</h3>
        <form onSubmit={handleFormSubmit} className="grid py-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className={firstInputStyle}
            maxLength={50}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className={nextInputStyle}
            maxLength={50}
          />
          <textarea
            className={nextInputStyle}
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={6}
            maxLength={500}
            required
          ></textarea>
          {loading ? (
            <div className={nextInputStyle}>
              <FontAwesomeIcon
                icon={faEllipsis}
                style={{ color: "white", fontSize: 25 }}
              />
            </div>
          ) : (
            <input
              type="submit"
              value="Send!"
              className={submitStyle}
              disabled={loading}
            />
          )}
          <ToastContainer />
        </form>
        <div className="flex space-x-5 justify-center">
          <h3>Write Me!</h3>
          <a href="mailto:vincent4552@gmail.com?subject=Personal%20Message">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white", fontSize: 25 }}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
