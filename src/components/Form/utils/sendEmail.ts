import { init, send } from '@emailjs/browser';
import { FormData } from '..';


init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    const response = await send(import.meta.env.VITE_EMAIL_JS_SERVICE_KEY, import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY, formData);
    return response;
  } catch (error) {
    throw error;
  }
};