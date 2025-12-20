import { checkSchema } from "express-validator";

// Task validator
export const updateTaskValidator = checkSchema({
    _id: {
        in: ["body"],
        notEmpty: true,
        isString: true,
        isMongoId: true,
        errorMessage: "Valid document id is required"
    },
    title: {
        in: ["body"], // most important, also check "query"
        optional: true,
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
        optional: true,
        notEmpty: true,
        isString: true,
        trim: true,
    },
    status: {
        in: ["body"],
        optional: true,
        notEmpty: true,
        isIn: {
            options: [["todo", "progress", "completed"]],
        }
    },
    priority: {
        in: ["body"],
        optional: true,
        notEmpty: true,
        isIn: {
            options: [["low", "normal", "high"]],
        }
    },
    dueDate: {
        in: ["body"],
        optional: true,
        isISO8601: true,
    }
});