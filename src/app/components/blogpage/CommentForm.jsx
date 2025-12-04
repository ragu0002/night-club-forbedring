import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";

const CommentForm = () => {
  return (
    <div className="my-20">
      <HeadingXL text="leave a comment" />
      <form className="grid md:grid-cols-2 col-(-content-col)  py-4 gap-4">
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Your name" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Your Email" />
        </div>
        <div className="border md:p-4 col-span-full h-80 p-2">
          <input type="text" className="w-full" defaultValue="Your Comment" />
        </div>
        <MainButton text="submit" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default CommentForm;
