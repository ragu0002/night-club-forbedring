export const HeadingXL = ({ text }) => <h1 className="text-6xl">{text}</h1>;
export const HeadingMain = ({ text }) => <h1 className="text-4xl">{text}</h1>;
export const HeadingSecondary = ({ text }) => <h2 className="text-2xl">{text}</h2>;
export const Subheading = ({ text }) => <h3 className="text-xl">{text}</h3>;
export const Caption = ({ text }) => <span className="text-md">{text}</span>;

const Typography = ({ children }) => <>{children}</>;

export default Typography;
