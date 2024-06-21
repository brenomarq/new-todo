"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
  const result = createCategorySchema.safeParse({
    name: formData.get("name"),
    color: formData.get("color"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const category = await db.category.create({
      data: {
        name: result.data.name,
        color: result.data.color,
      },
    });

    console.log(category);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create category"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}
