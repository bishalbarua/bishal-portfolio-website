import { api } from "encore.dev/api";

export interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// Handles contact form submissions
export const submitContactForm = api<ContactFormRequest, ContactFormResponse>(
  { expose: true, method: "POST", path: "/contact" },
  async (req) => {
    // In a real application, you would send an email or save to database
    // For now, we'll just return a success response
    console.log("Contact form submission:", req);
    
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    };
  }
);
