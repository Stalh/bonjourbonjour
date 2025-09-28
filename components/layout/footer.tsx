'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useDictionary } from '@/components/providers/dictionary-provider';

export function Footer() {
  const dictionary = useDictionary();
  const { footer } = dictionary;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(footer.submit);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <footer id="contact-form" className="bg-primary py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl tracking-tight">{footer.title}</h2>
            <p className="mt-4 max-w-xl text-lg text-gray-300">{footer.description}</p>
          </div>

          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p>{footer.address}</p>
                <p>{footer.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p>{footer.phoneLabel}</p>
                <p>{footer.phoneAvailability}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p>{footer.emailLabel}</p>
                <p>{footer.emailAvailability}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-xl">{footer.formTitle}</h3>
            </div>
            <Input
              name="name"
              placeholder={footer.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/50"
            />
            <Input
              type="email"
              name="email"
              placeholder={footer.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/50"
            />
            <Input
              name="phone"
              placeholder={footer.phone}
              value={formData.phone}
              onChange={handleChange}
              className="border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/50"
            />
            <Textarea
              name="message"
              placeholder={footer.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="border-white/20 bg-white/10 text-white placeholder:text-gray-300 focus:border-accent focus:ring-accent/50"
            />
            <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90">
              <Send className="mr-2 h-4 w-4" />
              {footer.submit}
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-300">
        {footer.copyright}
      </div>
    </footer>
  );
}
