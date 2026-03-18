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
      className="py-24 lg:py-32 bg-[#0d0d0d]"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div>
            <div className="green-line" />
            <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to
              <span className="text-green-accent"> Innovate Together?</span>
            </h2>
            <p className="text-[#888] text-base lg:text-lg mb-8">
              Whether you're exploring research partnerships or seeking advanced 
              manufacturing solutions, our R&D team is here to help.
            </p>

            {/* How it works */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">How it works:</h3>
              {[
                { step: 1, text: "Send us a message with your requirements" },
                { step: 2, text: "We'll schedule a call to discuss your needs" },
                { step: 3, text: "Design & integration consultation" },
                { step: 4, text: "Manufacturing & delivery coordination" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2CFF95]/10 border border-[#2CFF95]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2CFF95] text-sm font-semibold">{item.step}</span>
                  </div>
                  <p className="text-[#888] text-sm pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-dark p-8 lg:p-10 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider"
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
                  className="form-input h-12 rounded-lg bg-[#1a1a1a] border-[#222]"
                  data-testid="contact-name-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider"
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
                  className="form-input h-12 rounded-lg bg-[#1a1a1a] border-[#222]"
                  data-testid="contact-email-input"
                  required
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label 
                  htmlFor="inquiry_type" 
                  className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider"
                >
                  Inquiry Type
                </label>
                <Select 
                  value={formData.inquiry_type} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger 
                    className="form-input h-12 rounded-lg bg-[#1a1a1a] border-[#222]"
                    data-testid="contact-inquiry-select"
                  >
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#333]">
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
                <label 
                  htmlFor="message" 
                  className="block text-xs text-[#888] font-medium mb-2 uppercase tracking-wider"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input min-h-32 rounded-lg resize-none bg-[#1a1a1a] border-[#222]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
