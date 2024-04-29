import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgypkn");

  if (state.succeeded) {
    return <p className="m-24 md:m-24 lg:m-26 xl:m-20 2xl:m-40 gradientBg rounded-xl rounded-br-[80px] rounded-tl-[80px] flex flex-col md:p-9 px-4 py-8 md:py-16 text-xl text-center">Thanks for contacting me! I will be in touch soon!</p>;
  }

  return (
    <div className="m-24 md:m-24 lg:m-26 xl:m-20 2xl:m-40 gradientBg rounded-xl rounded-br-[80px] rounded-tl-[80px] flex flex-col md:p-9 px-4 py-8 md:py-16">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Contact Me</h2>
          <p className="text-center">Thank you for your interest!</p>
          <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-xl text-white mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="inputField mb-4 w-full md:w-72 rounded-xl p-2"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className="text-xl text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="inputField mb-4 w-full md:w-72 rounded-xl p-2"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className="btnPrimary p-10 m-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
