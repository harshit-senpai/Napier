import { WorkflowCard } from "./WorkflowCard";

export const Workflows = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 m-2">
        <WorkflowCard
          description="Creating a test workflow"
          id="3243dfdr2"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};
