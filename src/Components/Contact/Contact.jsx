import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import Container from "../../Hooks/Container";

import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import LottieAnimation from "../LottieAnimation/LottieAnimation";

const ContactForm = () => {
  const [state, handleSubmit, resetForm] = useForm("manjalwn");

  if (state.succeeded && !state.submitting) {
    Swal.fire({
      title: "Thanks for your feedback!",
      text: "Give me a bit of time, I’ll reach out soon.",
      icon: "success",
    });
    // Wait for the resetForm Promise to resolve
    const form = document.getElementById("yourFormId");
    if (form) {
      form.reset();
    }

    resetForm({ submitting: true });
  }

  return (
    <Container>
      <div id="contact" className="mb-20">
        <SectionTitle title={"Contact Me"}></SectionTitle>
        <div className="flex  flex-col-reverse md:flex-row-reverse  justify-between  text-[#F2F2F2] items-center gap-10 ">
          <div className="w-full md:w-1/2">
            <form
              id="yourFormId"
              action="https://formspree.io/f/manjalwn"
              method="POST"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="flex gap-5 justify-between items-center h-auto">
                <div className="w-1/2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="mt-1 p-2 bg-transparent border-b rounded-md w-full"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-2 border-b bg-transparent rounded-md w-full"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="mt-10">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  className="mt-1 pt-5 pl-2 border-b bg-transparent rounded-md w-full"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="btn hover:bg-transparent w-full mt-4 font-bold bg-transparent text-[#70FF00] flex items-center gap-3 border-2 border-gray-400  px-3 rounded-md"
              >
                {state?.submitting && (
                  <span className="loading loading-spinner loading-md pl-2"></span>
                )}
                Send
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
