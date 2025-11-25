import Attendance from "../../components/attendance";

export default function Page({ params }) {
  return <Attendance id={params.id} />;
}