import React, { useState } from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import {
  GoogleScholarIcon,
  LinkedInIcon,
  ResearchGateIcon,
  ORCIDIcon,
} from '@/components/icons/brands.jsx';

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialStatus = { ok: null, msg: '' };

const Contact = () => {
  const [status, setStatus] = useState(initialStatus);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const profiles = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=y_p39wsAAAAJ&hl=en',
      Icon: GoogleScholarIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/roshanshrestha2004/',
      Icon: LinkedInIcon,
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Roshan-Shrestha-5',
      Icon: ResearchGateIcon,
    },
    {
      name: 'ORCID',
      url: 'https://orcid.org/0000-0002-9356-5136',
      Icon: ORCIDIcon,
    },
  ];

  const validateField = (name, value) => {
    if (name === 'name' && !value.trim()) return 'Please enter your name.';
    if (name === 'email') {
      if (!value.trim()) return 'Please enter your email.';
      if (!emailPattern.test(value.trim())) return 'Please enter a valid email.';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Please enter a message.';
      if (value.trim().length < 20) return 'Message should be at least 20 characters.';
    }
    return '';
  };

  const validateForm = (formData) => {
    const nextErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) nextErrors[name] = error;
    });
    return nextErrors;
  };

  const updateFieldState = (name, value) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => {
      const next = { ...prev };
      const message = validateField(name, value);
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(initialStatus);

    const form = e.currentTarget;
    if (form._gotcha.value) {
      setSubmitting(false);
      return;
    }

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      setStatus({ ok: false, msg: 'Please fix the highlighted fields.' });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/xwpqzonq', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'New message from shrestharoshan.com',
          _replyto: formData.email,
        }),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' });
        setErrors({});
        setTouched({});
        form.reset();
      } else {
        setStatus({ ok: false, msg: 'Something went wrong.' });
      }
    } catch {
      setStatus({ ok: false, msg: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    'w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors';

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900/30'>
      <div className='max-w-3xl mx-auto px-6 py-20'>
        <h1 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
          Contact
        </h1>
        <p className='text-slate-500 dark:text-slate-400 mb-12'>
          Open to collaborations, questions, or just saying hello.
        </p>

        <div className='grid md:grid-cols-2 gap-12 mb-14'>
          {/* Info */}
          <div className='space-y-6'>
            <div className='flex items-start gap-3'>
              <Mail className='w-5 h-5 text-slate-400 mt-0.5' />
              <div>
                <p className='text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1'>
                  Email
                </p>
                <a
                  href='mailto:mail@shrestharoshan.com'
                  className='text-blue-600 dark:text-blue-400 hover:underline text-sm'
                >
                  mail@shrestharoshan.com
                </a>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <MapPin className='w-5 h-5 text-slate-400 mt-0.5' />
              <div>
                <p className='text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1'>
                  Location
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Materialise HQ, Technologielaan 15, 3001 Leuven, Belgium
                </p>
              </div>
            </div>
          </div>

          {/* Profiles */}
          <div>
            <p className='text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4'>
              Profiles
            </p>
            <div className='space-y-2'>
              {profiles.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-sm text-sm text-slate-700 dark:text-slate-300 transition-all bg-white dark:bg-slate-800/50'
                >
                  <Icon className='w-4 h-4' aria-hidden />
                  <span>{name}</span>
                  <ExternalLink className='w-3.5 h-3.5 ml-auto text-slate-400' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <section className='border-t border-slate-100 dark:border-slate-800 pt-14'>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            // send a message
          </h2>

          <form onSubmit={handleSubmit} className='space-y-4' noValidate>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <input
                  name='name'
                  placeholder='Your name'
                  className={inputClasses}
                  required
                  aria-label='Your name'
                  aria-invalid={Boolean(errors.name)}
                  onBlur={(e) => updateFieldState(e.target.name, e.target.value)}
                  onChange={(e) => {
                    if (touched.name) updateFieldState(e.target.name, e.target.value);
                  }}
                />
                {touched.name && errors.name && (
                  <p className='text-xs text-red-500 mt-1'>{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  className={inputClasses}
                  required
                  aria-label='Your email'
                  aria-invalid={Boolean(errors.email)}
                  onBlur={(e) => updateFieldState(e.target.name, e.target.value)}
                  onChange={(e) => {
                    if (touched.email) updateFieldState(e.target.name, e.target.value);
                  }}
                />
                {touched.email && errors.email && (
                  <p className='text-xs text-red-500 mt-1'>{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                name='message'
                rows={4}
                placeholder='Message'
                className={inputClasses}
                required
                aria-label='Your message'
                aria-invalid={Boolean(errors.message)}
                onBlur={(e) => updateFieldState(e.target.name, e.target.value)}
                onChange={(e) => {
                  if (touched.message) updateFieldState(e.target.name, e.target.value);
                }}
              />
              {touched.message && errors.message && (
                <p className='text-xs text-red-500 mt-1'>{errors.message}</p>
              )}
            </div>

            <input
              type='text'
              name='_gotcha'
              className='hidden'
              tabIndex={-1}
              autoComplete='off'
              aria-hidden='true'
            />

            <button
              type='submit'
              disabled={submitting}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                submitting
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
              }`}
            >
              {submitting ? 'Sending...' : 'Send'}
            </button>
          </form>

          {status.msg && (
            <p
              className={`text-sm mt-3 ${status.ok ? 'text-green-600' : 'text-red-500'}`}
              role='status'
              aria-live='polite'
            >
              {status.msg}
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
