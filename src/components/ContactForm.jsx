import emailjs from "@emailjs/browser"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    }

    const validate = () =>{
        let errors = {};
        if(!formData.name) errors.name = "Name is required";
        if(!formData.email){
            errors.email = "Email is required";
        }else if (!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = "Email is invalid";
        }
        if(!formData.message) errors.message = "Message is required";
        return errors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        } else{
            setErrors({});
            setIsSending(true);

            emailjs.send("service_9uwjqvl",
                 "template_bbjkbmd",
                  formData,
                   "vRMl-7K7hM7ItUObZ",
                ).then((response) =>{
                    toast.success("Message sent successfully");
                    setFormData({name : "", email : "", message : ""});
                })
                .catch((error) =>{
                    console.error("FAILED...", error);
                    toast.error("Failed to send message. Please try again.");
                }).finally(() =>{
                    setIsSending(false);
                })
        }
    }
  return (
<div className="p-4 lg:w-3/4 mx-auto max-w-5xl" id="contact">
  <Toaster />
  <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter text-white">Let's Connect</h2>
  <div className="relative w-full rounded-2xl bg-black/30 p-8 backdrop-blur-xl shadow-lg border border-stone-50/30 bg-gradient-to-br from-white/10 to-white/5">
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col lg:flex-row space-x-0 lg:space-x-4">
        <div className="lg:w-1/2">
          <input type="text" id="name" name="name" value={formData.name} placeholder="Name" onChange={handleChange}
            className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white focus:outline-none"/>
          {errors.name && (
            <p className="text-sm text-rose-500">{errors.name}</p>
          )}
        </div>
        <div className="lg:w-1/2">
          <input type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange}
            className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white focus:outline-none"/>
          {errors.email && (
            <p className="text-sm text-rose-500">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <textarea id="message" name="message" value={formData.message} placeholder="Message" onChange={handleChange}
          className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-transparent px-3 py-2 text-sm text-white focus:border-white focus:outline-none" rows="6"/>
        {errors.message && (
          <p className="text-sm text-rose-500">{errors.message}</p>
        )}
      </div>
      <button type="submit" className={`w-full rounded border border-white/20 bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30 ${
          isSending ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={isSending}>
        <div className="flex items-center justify-center gap-2">
          {isSending ? "Sending..." : "Send"}
          <FiSend />
        </div>
      </button>
    </form>
  </div>
</div>

  )
}

export default ContactForm
