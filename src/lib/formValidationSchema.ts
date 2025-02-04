import { z } from "zod";

export const subjectFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Subject name is required!" }),
    teachers: z.array(z.string()), // Array of teacher IDs
});

export type SubjectFormSchema = z.infer<typeof subjectFormSchema>;

export const classFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Class name is required!" }),
    capacity: z.number().min(1, { message: "Class capacity is required!" }),
    gradeId: z.number().min(1, { message: "Grade level is required!" }),
    supervisorId: z.string().optional(),
});

export type ClassFormSchema = z.infer<typeof classFormSchema>;

export const teacherFormSchema = z.object({
    id: z.string().optional(),
    username: z.string().min(3, { message: "Username must be at least 3 characters long!" }).max(20, { message: "Username must be no more than 20 characters long!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long!" }).optional().or(z.literal("")),
    name: z.string().min(1, { message: "First name is required!" }),
    surname: z.string().min(1, { message: "Last name is required!" }),
    email: z.string().email({ message: "Invalid email address!" }).optional().or(z.literal("")),
    phone: z.string().optional(),
    address: z.string(),
    image: z.string().optional(),
    bloodType: z.string().min(1, { message: "Blood type is required!" }),
    birthday: z.coerce.date({ message: "Birthday is required!" }),
    sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
    subjects: z.array(z.string()).optional(), // Array of subject IDs
});

export type TeacherFormSchema = z.infer<typeof teacherFormSchema>;

export const studentFormSchema = z.object({
    id: z.string().optional(),
    username: z.string().min(3, { message: "Username must be at least 3 characters long!" }).max(20, { message: "Username must be no more than 20 characters long!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long!" }).optional().or(z.literal("")),
    name: z.string().min(1, { message: "First name is required!" }),
    surname: z.string().min(1, { message: "Last name is required!" }),
    email: z.string().email({ message: "Invalid email address!" }).optional().or(z.literal("")),
    phone: z.string().optional(),
    address: z.string(),
    image: z.string().optional(),
    bloodType: z.string().min(1, { message: "Blood type is required!" }),
    birthday: z.coerce.date({ message: "Birthday is required!" }),
    sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
    gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
    classId: z.coerce.number().min(1, { message: "Class is required!" }),
    parentId: z.string().min(1, { message: "Parent Id level is required!" }),
});

export type StudentFormSchema = z.infer<typeof studentFormSchema>;

export const examFormSchema = z.object({
    id: z.coerce.number().optional(),
    title: z.string().min(1, { message: "Exam name is required!" }),
    startTime: z.coerce.date({ message: "Start time is required!" }),
    endTime: z.coerce.date({ message: "End time is required!" }),
    lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamFormSchema = z.infer<typeof examFormSchema>;