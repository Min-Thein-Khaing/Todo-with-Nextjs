
import CreateForm from "@/components/CreateForm";
import Loader from "@/components/Loader";
import { lazy, Suspense } from "react";
const TaskListContainer = lazy(() => import('@/components/TaskListContainer'));


export default function Home() {
  return (
    <main className="p-10 w-[450px]">
      <h1 className="font-bold text-3xl">Todo Application</h1>
      <CreateForm />
      <Suspense fallback={<Loader />}>
      <TaskListContainer />
      </Suspense>
    </main>
  );
}
