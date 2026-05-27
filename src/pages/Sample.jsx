import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Download, Shield, ArrowRight, Layout as LayoutIcon } from 'lucide-react';

/**
 * Sample.jsx — dedicated landing page for the July 2026 free sample.
 *
 * Lives at /sample. Self-contained focused-landing — no competing CTAs, only
 * the email capture + direct download flow.
 *
 * Flow:
 *  1. Visitor lands on /sample (direct link, footer, or nav).
 *  2. Reads the hero + 4 bullets of what's inside the sample.
 *  3. Enters email + accepts consent.
 *  4. Submit → POST to Formspree (free plan captures the email).
 *  5. On success → PDF auto-downloads and visible "Download again" button stays.
 *
 * Form ID: mwvygzwa — Formspree form "Your Blueprint — Sample (July 2026)"
 * PDF path: /sample/your-blueprint-sample-july-2026.pdf (Vercel serves static)
 *
 * See docs/03-product/lead-magnet.md for the full rationale and nurture
 * strategy. We deliberately do NOT use a modal — this is a standalone landing
 * page kept independent from the homepage's main sales narrative.
 */

const SAMPLE_FORM_ID = 'mwvygzwa';
const SAMPLE_PDF_URL = '/sample/your-blueprint-sample-july-2026.pdf';
const PAGE_TITLE = 'Free sample — Your Blueprint planner for reMarkable';

const Sample = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Per-page document title — until a proper react-helmet-async setup is in place
  useEffect(() => {
    const prev = document.title;
    document.title = PAGE_TITLE;
    return () => { document.title = prev; };
  }, []);

  // Auto-trigger the PDF download once the form is successfully submitted
  useEffect(() => {
    if (!submitted) return;
    const a = document.createElement('a');
    a.href = SAMPLE_PDF_URL;
    a.download = 'your-blueprint-sample-july-2026.pdf';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent || !email) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`https://formspree.io/f/${SAMPLE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'sample_landing_page',
          campaign: 'july_2026_sample',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'sample_request_submitted',
            sample_campaign: 'july_2026',
            sample_source: 'landing_page',
          });
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO + FORM */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 border-b border-slate-900">
        {/* Subtle grid background, matches homepage hero */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-block px-3 py-1 border border-blue-900/50 text-blue-400 text-xs uppercase tracking-[0.2em] mb-8 bg-blue-950/20 backdrop-blur-sm">
            Free sample · July 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Try one month{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500">
              before the launch.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            A 41-page sample from Your Blueprint — the multi-year planner system for the reMarkable 2 and Paper Pro. Drop your email and the PDF downloads instantly.
          </p>

          {/* WHAT'S INSIDE */}
          <div className="max-w-lg mx-auto text-left mb-12">
            <h3 className="text-xs font-mono uppercase text-blue-500 tracking-widest mb-5">
              What's inside
            </h3>
            <ul className="space-y-3 text-slate-300">
              {[
                'Year-at-a-glance overview + the Yearly Milestone Log',
                'July 2026 monthly planner with focus areas and OKRs',
                '4 weekly spreads with time-blocking and weekly review',
                '31 daily pages — intention, three priorities, end-of-day reflection',
                'Hyperlinked end-to-end — every date is tappable on the device',
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FORM or SUCCESS STATE */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="text-left">
                <div className="relative mb-4">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-slate-700 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-slate-600"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-slate-400 mb-6 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <span>
                    I'd like the sample and occasional updates from Your Blueprint. Read the{' '}
                    <Link to="/privacy" className="text-blue-500 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {error && (
                  <p className="text-red-400 text-sm mb-4 text-center" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting || !consent}
                  className="w-full bg-slate-100 text-[#0f172a] hover:bg-blue-600 hover:text-white disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed px-6 py-4 font-bold uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    'Loading…'
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Get the sample
                    </>
                  )}
                </button>

                <p className="mt-5 text-xs text-slate-600 uppercase tracking-widest flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" /> Secure data processing.
                </p>
              </form>
            ) : (
              <div className="bg-blue-900/10 border border-blue-900/50 p-8 backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mx-auto mb-5">
                  <Download className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Your sample is downloading
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  The PDF should appear in your downloads folder. Next: get it onto your reMarkable.
                </p>
                <Link
                  to="/setup"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 text-[#0f172a] hover:bg-blue-600 hover:text-white px-6 py-3 font-bold uppercase tracking-wide transition w-full mb-3"
                >
                  How to install it
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SAMPLE_PDF_URL}
                  download="your-blueprint-sample-july-2026.pdf"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-6 py-3 font-bold uppercase tracking-wide transition w-full"
                >
                  <Download className="w-4 h-4" />
                  Download again
                </a>
                <p className="mt-6 text-xs text-slate-500 leading-relaxed">
                  Trouble?{' '}
                  <a
                    href="mailto:hello@yourblueprint.co"
                    className="text-blue-500 hover:underline"
                  >
                    hello@yourblueprint.co
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER CTA — bring user back to main site */}
      <section className="py-20 px-6 bg-[#0d1219]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <LayoutIcon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The full system covers 2026, 2027 and 2028.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Over 1,300 pages, hyperlinked end-to-end. One purchase, yours forever. Designed for the reMarkable 1, 2 and Paper Pro.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-blue-500 text-slate-200 hover:text-blue-400 px-8 py-3 font-bold uppercase tracking-wide transition-all"
          >
            See the full system
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sample;
