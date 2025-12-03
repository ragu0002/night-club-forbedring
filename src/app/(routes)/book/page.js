import BookForm from "@/app/components/book/BookForm";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

export default function BookTable() {
  return (
    <>
      <Header />
      <main className="grid col-(--content-col) grid-cols-subgrid">
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
