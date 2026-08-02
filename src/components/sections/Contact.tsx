import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof typeof form) => (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.currentTarget.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim() || !EMAIL_PATTERN.test(form.email)) {
      setError('Please fill out every field with a valid email.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: import.meta.env.VITE_WEB3FORMS_KEY, ...form }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setError('Something went wrong sending your message. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error — please try again in a moment.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Open to new opportunities &amp; collaboration
            </span>
          </div>
          <SectionHeading
            index="08"
            eyebrow="Contact"
            title="Let's build something"
            description="Have a project, role, or idea in mind? I'd love to hear about it."
            align="center"
            className="mt-6"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border border-border bg-surface p-8 shadow-soft space-y-5"
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-ink
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-ink
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-ink
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              />
            </div>

            <Button type="submit" disabled={status === 'submitting'} className="w-full justify-center">
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>

            {status === 'success' && (
              <p className="flex items-center justify-center gap-1.5 text-center text-sm text-secondary">
                <CheckCircle2 size={16} /> Message sent — thanks for reaching out!
              </p>
            )}
            {status === 'error' && error && (
              <p className="flex items-center justify-center gap-1.5 text-center text-sm text-accent">
                <AlertCircle size={16} /> {error}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
