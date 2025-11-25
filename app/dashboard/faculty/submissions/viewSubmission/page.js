import StudentSubmition from "../../components/Submitions";

export default function Page({ params }) {
  return <StudentSubmition id={params.id} />;
}