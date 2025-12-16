import { checkSchema } from "express-validator";

// Task validator
export const createTaskValidator = checkSchema({
    title: {
        in: ["body"], // most important, also check "query"
        notEmpty: true,
        errorMessage: "ERROR: Title is required",
        isString: true,
        isLength: {
            options: {
                max: 100,
                min: 2
            },
            errorMessage: "Title should at least 100 chars"
        },
        trim: true,
    },
    description: {
        in: ["body"],
        notEmpty: true,
        isString: true,
        trim: true,
    },
    status: {
        in: ["body"],
        notEmpty: true,
        isIn: {
            options: [["todo", "progress", "completed"]],
        }
    },
    priority: {
        in: ["body"],
        notEmpty: true,
        isIn: {
            options: [["low", "normal", "high"]],
        }
    },
    dueDate: {
        in: ["body"],
        isISO8601: true,
    }
});