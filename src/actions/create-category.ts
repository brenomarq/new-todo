"use server";

import { z } from "zod";

const createCategorySchema = z.object({
  name: z.string().min(3),
  color: z.string(),
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
  console.log("I got called!");

  return {
    errors: {},
  };
}
