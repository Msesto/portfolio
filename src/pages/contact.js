import React, { useState } from "react"
import axios from "axios"
import tw from "twin.macro"
import Layout from "../components/layout"

const Contact = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/1c2c3f01-6232-428f-b95b-fea95bd2f798",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thank, I will back to you soon!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Layout>

      <section css={tw``}>
        <h3 css={tw`mt-6 leading-tight text-3xl`}>Submit a contact form</h3>
        <p css={tw`ml-4 leading-none font-light text-sm`}>If the form isn't working, email me at: <span css={tw`select-all cursor-pointer`}><em>sesto@outlook.com</em></span></p>
        <form css={tw`items-center flex flex-col`} onSubmit={handleOnSubmit}>
          <div css={tw`w-2/3 flex-shrink-0 mt-2`}>
            <label css={tw`mt-2 md:mt-12 block`}>Email address:</label>
            <input css={tw`md:mt-1 text-gray-700 p-2 rounded w-full`} type="email" name="email" placeholder="JuanDoe@example.com" required="required" />
          </div>
          <div css={tw` w-2/3 flex-shrink-0 mt-2`}>
            <label css={tw`mt-2 md:mt-6 block`}>Name:</label>
            <input css={tw`md:mt-1 text-gray-700 p-2 rounded w-full`} type="text" name="name" placeholder="Juan Doe" required="required" />
          </div>
          <div css={tw`w-2/3 flex-shrink-0 mt-2`}>
            <label css={tw`mt-2 md:mt-6 block`}>Message:</label>
            <textarea css={tw`md:mt-1 text-gray-700 mb-1 md:mb-4 h-24 p-2 rounded w-full`} type="text" name="message" placeholder="Enter your message"></textarea>
          </div>
          <button css={tw`p-1 w-1/3 text-3xl font-light text-black rounded-md bg-orange-500 mt-2`} type="submit" disabled={serverState.submitting}>
            Submit
          </button>
          {serverState.status && (<p className={!serverState.status.ok ? "errorMsg" : ""}>{serverState.status.msg}</p>)}
        </form>
      </section>
    </Layout >

  )
}

export default Contact