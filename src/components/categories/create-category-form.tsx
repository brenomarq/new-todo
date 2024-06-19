"use client";

import { createCategory } from "@/actions/create-category";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function CreateCategoryForm() {
  const [formState, action] = useFormState(createCategory, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Category</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a category</h3>

            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />

            <Input
              name="color"
              label="Color"
              labelPlacement="outside"
              placeholder="Color"
              isInvalid={!!formState.errors.color}
              errorMessage={formState.errors.color?.join(", ")}
            />

            <FormButton>Create Category</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
