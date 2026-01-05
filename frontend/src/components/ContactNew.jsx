"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Send } from "lucide-react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { toast } from "react-hot-toast"
import emailjs from "emailjs-com"

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long")
    .required("Message is required"),
})

const ContactNew = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_9uwjqvl",
        "template_bywguv8",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "vRMl-7K7hM7ItUObZ"
      )

      await emailjs.send(
        "service_9uwjqvl",
        "template_1qcb9sd",
        {
          to_name: values.name,
          to_email: values.email,
        },
        "vRMl-7K7hM7ItUObZ"
      )

      toast.success("Thank you! Your message has been sent successfully.")
      resetForm()
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Contact
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch before I write another line of code!
            </p>
          </div>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name, your fame"
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.name && touched.name ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Where can I reach you back?"
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.email && touched.email ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Temporary emails are also accepted, unless you wish to hear back 😉
                  </p>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Your words, my inbox."
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.message && touched.message ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                    <Send className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    type="reset"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-xl font-medium transition-all"
                  >
                    Reset
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/education")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Education
            </button>
            <button onClick={() => navigate("/stats")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Stats <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactNew

