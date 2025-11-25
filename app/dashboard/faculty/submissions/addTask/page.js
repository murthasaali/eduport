import AssignTask from "../../components/assignTask";

export default function Page({ params }) {
  return <AssignTask id={params.id} />;
}