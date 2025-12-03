import ContactForm from "@/app/components/contact/o-form/ContactForm";

export default function Contact() {
  return (
    <>
      <main className="grid col-(--content-col) grid-cols-subgrid mt-30">
        <ContactForm />
      </main>
    </>
  );
}
