import FacultyDetails from "../components/userDetails";

export default function Page({ params }) {
  return <FacultyDetails id={params.id} />;
}