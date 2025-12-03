import { Caption } from "../../typography";

const ContactForm = () => {
  return (
    <>
      <form className="grid grid-cols-2 col-(-content-col) mx-5 py-4 gap-3 lg:px-80 md:px-40">
        <div className="border col-span-full p-2">
          <input type="text" className="w-full h-full" defaultValue="Your name" />
        </div>
        <div className="border col-span-full p-2">
          <input type="text" className="w-full h-full" defaultValue="Your Email" />
        </div>
        <div className="border col-span-full h-70 p-2">
          <input type="text" className="w-full" defaultValue="Your Comment" />
        </div>
        <button className="border-t border-b col-span-full w-1/2 md:w-35 py-3 justify-self-end">
          <Caption text="SEND" />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
