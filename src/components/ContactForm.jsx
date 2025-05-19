"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { toast } from "react-hot-toast"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { CONTACT_SCHEMA, SOCIAL_MEDIA_LINKS } from "../constants/index"

// Create Yup validation schema from constants
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
})

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Message sent successfully!")
      resetForm()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
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

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-none bg-blue-500/20 border-l border-t border-blue-500/30">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/50">Email</h4>
                    <a href="mailto:contact@medfolio.com" className="text-white hover:text-blue-300 transition-colors">
                      contact@medfolio.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-none bg-blue-500/20 border-l border-t border-blue-500/30">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/50">Response Time</h4>
                    <p className="text-white">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm font-medium text-white/50 mb-3">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {SOCIAL_MEDIA_LINKS.slice(0, 3).map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-blue-500/20 ${link.hoverColor} transition-colors`}
                      aria-label={link.title}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="overflow-hidden rounded-none border-l-2 border-t-2 border-white/10 bg-black/30 backdrop-blur-xl shadow-lg">
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="p-6 md:p-8">
                      <div className="mb-6 space-y-4">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                            Your Name
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <User className="h-5 w-5 text-white/30" />
                            </div>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              className={`w-full rounded-none border-l-2 ${
                                errors.name && touched.name ? "border-red-500/50" : "border-white/20"
                              } bg-white/5 px-3 py-3 pl-10 text-white placeholder-white/30 backdrop-blur-sm focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30`}
                            />
                          </div>
                          <ErrorMessage name="name">
                            {(msg) => (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1 text-sm text-red-400"
                              >
                                {msg}
                              </motion.p>
                            )}
                          </ErrorMessage>
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                            Your Email
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <Mail className="h-5 w-5 text-white/30" />
                            </div>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              placeholder="john@example.com"
                              className={`w-full rounded-none border-l-2 ${
                                errors.email && touched.email ? "border-red-500/50" : "border-white/20"
                              } bg-white/5 px-3 py-3 pl-10 text-white placeholder-white/30 backdrop-blur-sm focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30`}
                            />
                          </div>
                          <ErrorMessage name="email">
                            {(msg) => (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1 text-sm text-red-400"
                              >
                                {msg}
                              </motion.p>
                            )}
                          </ErrorMessage>
                        </div>

                        <div>
                          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                            Your Message
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-3 left-0 flex items-start pl-3">
                              <MessageSquare className="h-5 w-5 text-white/30" />
                            </div>
                            <Field
                              as="textarea"
                              id="message"
                              name="message"
                              rows="6"
                              placeholder="How can I help you?"
                              className={`w-full rounded-none border-l-2 ${
                                errors.message && touched.message ? "border-red-500/50" : "border-white/20"
                              } bg-white/5 px-3 py-3 pl-10 text-white placeholder-white/30 backdrop-blur-sm focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30`}
                            />
                          </div>
                          <ErrorMessage name="message">
                            {(msg) => (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1 text-sm text-red-400"
                              >
                                {msg}
                              </motion.p>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full rounded-none bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-center text-base font-medium text-white shadow-lg transition-all hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          isSubmitting ? "cursor-not-allowed opacity-70" : ""
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
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
  )
}

export default ContactForm
