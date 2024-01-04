import { z } from "zod";
export const FormDataSchema = z.object({
    fullName:z.string().min(1, 'Full Name is Required'),
    email:z.string().min(1, 'Email is required').email('Invalid Email Address'),
    phoneNumber:z.coerce.number().min(1,'Phone Number is Required'),
    website:z.string().startsWith("https://",{ message: "Must provide secure URL" }).url('Invalid URL').min(1,'Website URL is Required'),
    city:z.string().min(1, 'City Name is Required'),
    socialPlatform:z.string().min(1, 'One of Your Social Platform is Required'),
    link:z.string().startsWith("https://",{ message: "Must provide secure URL" }).url('Invalid URL').min(1, 'Social Link is Required'),
    followers:z.number().min(1, 'Number of followers is Required'),
    message:z.string(),

})