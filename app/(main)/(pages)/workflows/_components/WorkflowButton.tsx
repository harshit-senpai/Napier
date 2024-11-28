"use client";

import { WorkflowForm } from "@/components/forms/WorkflowForm";
import { CustomModal } from "@/components/global/CustomModal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/ModalProvider";
import { Plus } from "lucide-react";

export const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful tool that help you automate your task"
      >
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};
