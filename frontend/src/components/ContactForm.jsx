import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { CONTACT_SCHEMA, SOCIAL_MEDIA_LINKS } from "../constants/index";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import animationData from "../assets/animations/Animation contact.json";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(CONTACT_SCHEMA.name.min, CONTACT_SCHEMA.name.errorMessages.min)
    .max(CONTACT_SCHEMA.name.max, CONTACT_SCHEMA.name.errorMessages.max)
    .required(CONTACT_SCHEMA.name.errorMessages.required),
  email: Yup.string()
    .email(CONTACT_SCHEMA.email.errorMessages.email)
    .required(CONTACT_SCHEMA.email.errorMessages.required),
  message: Yup.string()
    .min(CONTACT_SCHEMA.message.min, CONTACT_SCHEMA.message.errorMessages.min)
    .max(CONTACT_SCHEMA.message.max, CONTACT_SCHEMA.message.errorMessages.max)
    .required(CONTACT_SCHEMA.message.errorMessages.required),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      // 1. Save message to MongoDB via your backend
      const res = await axios.post("http://localhost:0208/api/contact", values);

      if (res.data.success) {
        // 2. Send email to YOU (site owner)
        await emailjs.send(
          "service_9uwjqvl",
          "template_bywguv8",
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          "vRMl-7K7hM7ItUObZ"
        );

        // 3. Send feedback email to USER
        await emailjs.send(
          "service_9uwjqvl",
          "template_1qcb9sd",
          {
            to_name: values.name,
            to_email: values.email,
          },
          "vRMl-7K7hM7ItUObZ"
        );

        // 4. Show success message
        toast.success("Thank you, your request will be reviewed as soon as possible.");
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);

      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => toast.error(err.msg));
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-slate-900 backdrop-blur-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 border-l-2 border-blue-500/50 pl-4">
                  Contact Information
                </h3>
                <p className="text-white/70 mb-6">
                  Feel free to reach out through the form or directly via the contact details below.
                </p>
              </div>

              <motion.div whileHover={{ x: 5 }} className="flex flex-col items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-none bg-blue-500/20 border-l border-t border-blue-500/30">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/50">Email</h4>
                    <a href="mailto:contact@medfolio.com" className="text-white hover:text-blue-300 transition-colors">
                      mohammedbaba1505@gmail.com
                    </a>
                  </div>
                </div>

                {/* Lottie animation below the email */}
                <div className="w-full max-w-xs mt-4">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="overflow-hidden rounded-none border-l-2 border-t-2 border-blue-300/70 bg-black/30 backdrop-blur-xl shadow-lg">
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="p-6 md:p-8 space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm text-white/70 mb-1">Your Name</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <User className={`h-5 w-5 ${errors.name && touched.name ? "text-red-400" : "text-blue-400"}`} />
                          </div>
                          <Field
                            type="text"
                            name="name"
                            className={`pl-10 w-full py-3 bg-white/5 text-white border-l-2 ${
                              errors.name && touched.name ? "border-red-500/50" : "border-blue-500/50"
                            } focus:border-blue-500/50 focus:outline-none`}
                            placeholder="Full name"
                          />
                        </div>
                        <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm text-white/70 mb-1">Your Email</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <Mail className={`h-5 w-5 ${errors.email && touched.email ? "text-red-400" : "text-blue-400"}`} />
                          </div>
                          <Field
                            type="email"
                            name="email"
                            className={`pl-10 w-full py-3 bg-white/5 text-white border-l-2 ${
                              errors.email && touched.email ? "border-red-500/50" : "border-blue-500/50"
                            } focus:border-blue-500/50 focus:outline-none`}
                            placeholder="email@example.com"
                          />
                        </div>
                        <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm text-white/70 mb-1">Your Message</label>
                        <div className="relative">
                          <div className="absolute left-3 top-3">
                            <MessageSquare className={`h-5 w-5 ${errors.message && touched.message ? "text-red-400" : "text-blue-400"}`} />
                          </div>
                          <Field
                            as="textarea"
                            name="message"
                            rows="5"
                            className={`pl-10 w-full py-3 bg-white/5 text-white border-l-2 ${
                              errors.message && touched.message ? "border-red-500/50" : "border-blue-500/50"
                            } focus:border-blue-500/50 focus:outline-none`}
                            placeholder="How can I help you?"
                          />
                        </div>
                        <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 text-white rounded-none border-l-2 border-t-2 border-blue-500/30 bg-blue-500/10 backdrop-blur-sm ${
                          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <span className="flex justify-center items-center gap-2">
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className="h-4 w-4" />
                        </span>
                      </motion.button>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
