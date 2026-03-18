import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const inquiryTypes = [
  { value: "product", label: "Product Inquiry" },
  { value: "research", label: "Research Collaboration" },
  { value: "partnership", label: "Partnership" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

const steps = [
  { num: 1, text: "Send us a message with your requirements" },
  { num: 2, text: "We'll schedule a call to discuss your needs" },
  { num: 3, text: "Design & integration consultation" },
  { num: 4, text: "Manufacturing & delivery coordination" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry_type: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiry_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.inquiry_type || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        inquiry_type: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0d0d0d]"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="green-line" />
            <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Integrated Power{" "}
              <span className="text-green-accent">Advantage</span>
            </h2>
            <p className="text-[#888] text-base lg:text-lg mb-10">
              Our integration services ensure your design fully leverages the benefits 
              of our advanced extrusion systems. By collaborating early in the design process, 
              we help optimize your manufacturing workflow.
            </p>

            {/* How it works */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">How it works:</h3>
              {steps.map((item, index) => (
                <motion.div 
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2CFF95]/10 border border-[#2CFF95]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2CFF95]/20 transition-colors">
                    <span className="text-[#2CFF95] text-sm font-semibold">{item.num}</span>
                  </div>
                  <p className="text-[#888] text-sm pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-dark p-8 lg:p-10 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {/* Name */}
              <div>
                <label className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider">
                  Name
                </label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input h-12 rounded-lg bg-[#161616] border-[#1f1f1f]"
                  data-testid="contact-name-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input h-12 rounded-lg bg-[#161616] border-[#1f1f1f]"
                  data-testid="contact-email-input"
                  required
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider">
                  Inquiry Type
                </label>
                <Select value={formData.inquiry_type} onValueChange={handleSelectChange}>
                  <SelectTrigger 
                    className="form-input h-12 rounded-lg bg-[#161616] border-[#1f1f1f]"
                    data-testid="contact-inquiry-select"
                  >
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#161616] border-[#222]">
                    {inquiryTypes.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="text-white focus:bg-[#222] focus:text-white"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider">
                  Message (optional)
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input min-h-28 rounded-lg resize-none bg-[#161616] border-[#1f1f1f]"
                  data-testid="contact-message-input"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-green h-14 text-base rounded-lg flex items-center justify-center gap-2"
                data-testid="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
