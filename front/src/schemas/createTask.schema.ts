import { z } from "zod"

export const CreateTaskSchema = z.object({
    title: z.string().max(100, { message: "Title must be maximum 100 chars" }), // zod is going to ensure title is a STRING
    dueDate: z.date({
        required_error: "Due date is mandatory"
    }),
    description: z.string().max(500, {
        message: "The description cannot be more than 500 chars",
    }),
    status: z.enum(["todo", "inProgress", "completed"], {
        message: "Status is required",
    }),
    priority: z.enum(["low", "normal", "high"], {
        message: "Priority is needed",
    })
})

