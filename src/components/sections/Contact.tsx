import { useState } from 'react';
import type { FormEvent } from 'react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof form) => (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[radial-gradient(circle_at_top,_var(--color-accent-soft),_transparent_60%)]"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Contact Me"
            description="Have a project, role, or idea in mind? I'd love to hear about it."
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border-2 border-ink bg-surface p-8 shadow-brutal space-y-5"
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
                className="mt-1 w-full rounded-lg border-2 border-border bg-bg px-4 py-2.5 text-ink
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
                className="mt-1 w-full rounded-lg border-2 border-border bg-bg px-4 py-2.5 text-ink
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
                className="mt-1 w-full rounded-lg border-2 border-border bg-bg px-4 py-2.5 text-ink
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              />
            </div>

            <Button type="submit" disabled={status === 'submitting'} className="w-full justify-center">
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>

            {status === 'success' && (
              <p className="text-center font-mono text-sm text-accent2">
                Message sent — thanks for reaching out!
              </p>
            )}
            {status === 'error' && error && (
              <p className="text-center font-mono text-sm text-accent">{error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
