import OverviewTask from "../../components/overviewTask";

export default function Page({ params }) {
  return <OverviewTask id={params.id} />;
}