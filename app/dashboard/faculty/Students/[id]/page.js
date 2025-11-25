import StudentDetails from "../../components/StudentDetails";

export default function Page({ params }) {
  return <StudentDetails id={params.id} />;
}