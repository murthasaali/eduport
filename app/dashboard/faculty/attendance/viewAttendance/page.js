import ViewAttendance from "../../components/viewAttendance";

export default function Page({ params }) {
  return <ViewAttendance id={params.id} />;
}