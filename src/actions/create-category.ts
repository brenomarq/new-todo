"use server";

import { z } from "zod";

const createCategorySchema = z.object({
  name: z.string().min(3),
  color: z.enum(["red", "orange", "blue", "green", "pink"]),
});

interface createCategoryFormState {
  errors: {
    name?: string[];
    color?: string[];
    _form?: string[];
  };
}

export async function createCategory(
  formState: any,
  formData: FormData
): Promise<createCategoryFormState> {
  console.log("I was called!");

  const result = createCategorySchema.safeParse({
    name: formData.get("name"),
    color: formData.get("color"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("No problem!");
  return {
    errors: {},
  };
}
