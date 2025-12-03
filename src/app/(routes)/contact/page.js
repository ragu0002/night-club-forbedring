import ContactForm from "@/app/components/contact/o-form/ContactForm";
import Footer from "@/app/components/footer/Footer";
import { Caption, Subheading, HeadingSecondary, HeadingMain, HeadingXL } from "@/app/components/typography";

export default function Contact() {
  return (
    <>
      <main className="grid col-(--content-col) grid-cols-subgrid">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
