import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
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

export default function ContactSection() {
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
      className="py-20 md:py-32 bg-slate-900"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
            Ready to
            <span className="text-teal-400"> Innovate Together?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-body">
            Whether you're exploring research partnerships or seeking advanced 
            manufacturing solutions, our R&D team is here to help.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card-industrial p-8 md:p-12 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs uppercase tracking-widest text-slate-400 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-industrial h-12 rounded-sm"
                    data-testid="contact-name-input"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs uppercase tracking-widest text-slate-400 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-industrial h-12 rounded-sm"
                    data-testid="contact-email-input"
                    required
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label 
                  htmlFor="inquiry_type" 
                  className="block text-xs uppercase tracking-widest text-slate-400 font-medium mb-2"
                >
                  Inquiry Type
                </label>
                <Select 
                  value={formData.inquiry_type} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger 
                    className="input-industrial h-12 rounded-sm"
                    data-testid="contact-inquiry-select"
                  >
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {inquiryTypes.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="text-slate-100 focus:bg-slate-700 focus:text-slate-50"
                      >
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs uppercase tracking-widest text-slate-400 font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-industrial min-h-32 rounded-sm resize-none"
                  data-testid="contact-message-input"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-14 text-base rounded-sm flex items-center justify-center gap-2"
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
                    Initiate Collaboration
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
