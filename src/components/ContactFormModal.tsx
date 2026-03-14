import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setSuccess(false);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect With Us</DialogTitle>
          <DialogDescription>Fill in the form below and we'll get back to you soon.</DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <p className="text-lg font-semibold text-primary mb-2">Thanks! Your message has been sent.</p>
            <p className="text-muted-foreground">We will get back to you soon.</p>
            <Button className="mt-6" onClick={() => handleClose(false)}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
