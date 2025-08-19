import React, { useState } from 'react';
import { Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import {
  GoogleScholarIcon,
  LinkedInIcon,
  ResearchGateIcon,
  ORCIDIcon,
} from '@/components/icons/brands.jsx';
import { Button } from '@/components/ui/button.jsx';

/*
 * Contact component
 *
 * This version removes the outdated "Personal Website (Old)" entry and surfaces
 * links to professional profiles. It ALSO adds a Formspree contact form with
 * inline success/error feedback and a honeypot to reduce spam.
 */
const Contact = () => {
  const [status, setStatus] = useState({ ok: null, msg: '' });
  const [submitting, setSubmitting] = useState(false);

  // Define the list of online profiles so they can easily be updated.
  const profiles = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=y_p39wsAAAAJ&hl=en',
      Icon: (props) => <GoogleScholarIcon {...props} className={`w-5 h-5 ${props.className || ''}`} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/roshanshrestha2004/',
      Icon: (props) => <LinkedInIcon {...props} className={`w-5 h-5 ${props.className || ''}`} />,
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Roshan-Shrestha-5',
      Icon: (props) => <ResearchGateIcon {...props} className={`w-5 h-5 ${props.className || ''}`} />,
    },
    {
      name: 'ORCID',
      url: 'https://orcid.org/0000-0002-9356-5136',
      Icon: (props) => <ORCIDIcon {...props} className={`w-5 h-5 ${props.className || ''}`} />,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ ok: null, msg: '' });

    const form = e.currentTarget;
    // Honeypot (bots will often fill this)
    if (form._gotcha.value) {
      setSubmitting(false);
      return;
    }

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      _subject: 'New message from shrestharoshan.com',
      _replyto: form.email.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/xwpqzonq', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks! Your message has been sent.' });
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

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16'>
          Contact Me
        </h1>

        <div className='max-w-4xl mx-auto'>
          {/* Introduction */}
          <div className='text-center mb-16'>
            <p className='text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed'>
              I am always open to discussing new research ideas, potential
              collaborations, or any inquiries related to my work. Please feel
              free to reach out to me through the following channels:
            </p>
          </div>

          {/* Contact Information */}
          <div className='grid md:grid-cols-2 gap-8 mb-16'>
            {/* Email */}
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4'>
                  <Mail className='w-6 h-6 text-blue-600' />
                </div>
                <h2 className='text-2xl font-semibold text-slate-900'>Email</h2>
              </div>
              <div className='text-center'>
                <a
                  href='mailto:roshan.shrestha@ibcp.fr'
                  className='text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors'
                >
                  roshan.shrestha@ibcp.fr
                </a>
                <div className='mt-4'>
                  <Button
                    onClick={() =>
                      window.open('mailto:roshan.shrestha@ibcp.fr', '_blank')
                    }
                    className='bg-blue-600 hover:bg-blue-700 text-white'
                  >
                    Send Email <ExternalLink className='ml-2 w-4 h-4' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Professional Address */}
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4'>
                  <MapPin className='w-6 h-6 text-green-600' />
                </div>
                <h2 className='text-2xl font-semibold text-slate-900'>
                  Professional Address
                </h2>
              </div>
              <div className='text-center space-y-2'>
                <p className='font-medium text-slate-900'>
                  Modeling Biological Macromolecules team
                </p>
                <p className='text-slate-700'>
                  7 passage du Vercors, 69367 LYON Cedex 07
                </p>
                <p className='text-slate-700'>
                  Institut de Biologie et Chimie des Protéines (IBCP)
                </p>
                <p className='text-slate-700'>Lyon, France</p>
              </div>
            </div>
          </div>

          {/* New: Direct Message Form (Formspree) */}
          <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4'>
                <Mail className='w-6 h-6 text-blue-600' />
              </div>
              <h2 className='text-2xl font-semibold text-slate-900'>
                Send me a message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4' noValidate>
              <div className='grid md:grid-cols-2 gap-4'>
                <input
                  name='name'
                  placeholder='Your name'
                  className='w-full border rounded px-3 py-2'
                  required
                  aria-label='Your name'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  className='w-full border rounded px-3 py-2'
                  required
                  aria-label='Your email'
                />
              </div>

              <textarea
                name='message'
                rows={4}
                placeholder='Message'
                className='w-full border rounded px-3 py-2'
                required
                aria-label='Your message'
              />

              {/* Honeypot (hidden) */}
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
                className={`px-4 py-2 rounded text-white transition ${
                  submitting
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </form>

            {/* Status message */}
            {status.msg && (
              <p
                className={`text-sm mt-3 ${status.ok ? 'text-green-700' : 'text-red-600'}`}
                role='status'
                aria-live='polite'
              >
                {status.msg}
              </p>
            )}

            <p className='text-xs text-slate-500 mt-2'>
              This form is powered by Formspree.
            </p>
          </div>

          {/* Online Profiles */}
          <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
            <div className='flex items-center mb-6'>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4'>
                <Globe className='w-6 h-6 text-purple-600' />
              </div>
              <h2 className='text-2xl font-semibold text-slate-900'>
                Online Profiles
              </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {profiles.map(({ name, url, Icon }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={name}
                  className='group inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-slate-800 hover:bg-slate-50 transition-colors'
                >
                  <Icon aria-hidden='true' className='mr-2' />
                  <span className='font-medium'>{name}</span>
                  <ExternalLink className='ml-2 w-4 h-4 text-slate-400 group-hover:text-slate-600' />
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white'>
            <h2 className='text-2xl font-semibold mb-4'>Let's Connect!</h2>
            <p className='text-lg mb-6 opacity-90'>
              I look forward to hearing from you and exploring potential
              opportunities for collaboration.
            </p>
            <Button
              onClick={() =>
                window.open('mailto:roshan.shrestha@ibcp.fr', '_blank')
              }
              className='bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3'
            >
              Get In Touch <Mail className='ml-2 w-5 h-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
