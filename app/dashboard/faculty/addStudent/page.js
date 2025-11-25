import AddStudent from "../components/addStudent";

export default function Page({ params }) {
  return <AddStudent id={params.id} />;
}