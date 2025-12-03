import BookForm from "@/app/components/book/BookForm";
import TableGrid from "@/app/components/book/TableGrid";



export default function BookTable() {
  return (
    <>
 
      <main className="grid col-(--content-col) grid-cols-subgrid">
        <TableGrid />
        <BookForm />
      </main>
  
    </>
  );
}
