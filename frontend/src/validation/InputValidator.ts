import * as yup from "yup";

export const schema = yup.object().shape({
    title: yup
        .string()
        .trim()
        .required('Title must be specified')
        .max(70, 'Title should not exceed 70 characters'),

    content: yup
        .string()
        .trim()
        .required('Content must be specified')
});