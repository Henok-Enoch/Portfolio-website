import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //=====Email Validation =========

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a Valid Email!");
    } else if (subject === "") {
      setErrMsg("Please Write Your Subject!");
    } else if (message === "") {
      setErrMsg("message is required!");
    } else {
      setSuccessMsg(`Thank you ${username}, Your Message is sent!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <div
      className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 
      rounded-lg shadow-shadowOne"
    >
      <form className="w-full flex flex-col gap-6 py-4">
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          shadow-shadowOne text-center text-orange-500 text-base tracking-wide
          animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          shadow-shadowOne text-center text-green-500 text-base tracking-wide
          animate-bounce"
          >
            {successMsg}
          </p>
        )}
        <div className="w-full flex gap-10">
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your Name
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className={`${
                errMsg === "Username is Required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              phone number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`${
                errMsg === "phone number is required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${
              errMsg === "Email is required!" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className={`${
              errMsg === "Please Write Your Subject!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${
              errMsg === "message is required!" && "outline-designColor"
            }
                  "w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2
                active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent 
                duration-300 resize-none" `}
            cols="30"
            rows="8"
          >
            {" "}
          </textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300
              hover:border-[1px] hover:border-designColor border-transparent"
          >
            send message
          </button>
        </div>
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          shadow-shadowOne text-center text-orange-500 text-base tracking-wide
          animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
          shadow-shadowOne text-center text-green-500 text-base tracking-wide
          animate-bounce"
          >
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
