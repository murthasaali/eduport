import OverviewAttendance from "../../components/overviewAttendance";

export default function Page({ params }) {
  return <OverviewAttendance id={params.id} />;
}