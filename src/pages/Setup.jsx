import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2, AlertCircle, Layout as LayoutIcon } from 'lucide-react';

/**
 * Setup.jsx — install guide at /setup.
 *
 * Reached from the /sample success state ("How to install it") and indexable
 * for the high-volume query "how to add template to reMarkable".
 *
 * Screenshots live in /public/images/setup/ — drop these 4 files:
 *   01-upload.jpg          — my.remarkable.com drag-drop area / PDF dropped
 *   02-synced.jpg          — file visible in My Files after upload
 *   03-device-home.jpg     — Your Blueprint file on the reMarkable home screen
 *   04-planner-open.jpg    — the planner open on the device (Year at a Glance)
 */

const SAMPLE_PDF_URL = '/sample/your-blueprint-sample-july-2026.pdf';
const PAGE_TITLE = 'How to install Your Blueprint on your reMarkable';

const Setup = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = PAGE_TITLE;
    return () => { document.title = prev; };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 border-b border-slate-900">
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
            Setup guide · 2 minutes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            How to install Your Blueprint on your reMarkable
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            You've got the PDF. Here's how to get it onto your device and start planning. The whole thing takes about two minutes.
          </p>
        </div>
      </section>

      {/* WHAT YOU DOWNLOADED */}
      <section className="py-12 px-6 border-b border-slate-900 bg-[#0d1219]">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-[#111827] border border-slate-800 p-6">
            <Download className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-white font-bold mb-1">What you downloaded</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A single hyperlinked PDF. It works on the reMarkable 1, reMarkable 2, and Paper Pro — and on most e-ink readers and tablet apps. No app to install on your side, no account beyond the one you already use for the device.
              </p>
              <a
                href={SAMPLE_PDF_URL}
                download="your-blueprint-sample-july-2026.pdf"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-bold mt-3"
              >
                <Download className="w-4 h-4" /> Re-download the sample
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALL STEPS */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">The easy way</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Install via my.remarkable.com</h3>

          {/* Step 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold text-sm">1</span>
              <h4 className="text-xl font-bold text-white">Open my.remarkable.com and sign in</h4>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 pl-11">
              On your computer, go to{' '}
              <a href="https://my.remarkable.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">my.remarkable.com</a>{' '}
              and sign in with the same reMarkable account that's on your device. This is the web library that syncs to your tablet over Wi-Fi.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold text-sm">2</span>
              <h4 className="text-xl font-bold text-white">Drag the PDF into the window</h4>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 pl-11">
              Drag the Your Blueprint PDF from your downloads folder straight into the browser window. It uploads in a few seconds.
            </p>
            <div className="pl-11">
              <img
                src="/images/setup/01-upload.png"
                alt="Dragging the Your Blueprint PDF into the my.remarkable.com web library"
                className="w-full h-auto rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold text-sm">3</span>
              <h4 className="text-xl font-bold text-white">Wait for the sync</h4>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 pl-11">
              The file appears in My Files on the web. Within about ten seconds, as long as your device is on Wi-Fi, it shows up on the reMarkable too.
            </p>
            <div className="pl-11">
              <img
                src="/images/setup/02-synced.png"
                alt="Your Blueprint file synced and visible in the my.remarkable.com My Files view"
                className="w-full h-auto rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-[#0d1219] border border-blue-900/30 p-6 text-sm text-slate-400 leading-relaxed">
            <strong className="text-white">No Wi-Fi sync?</strong> You can also use the reMarkable desktop or mobile app (drag-and-drop / share sheet), or the USB Web Interface for a direct cable transfer. The web method above is the simplest and works for almost everyone.
          </div>
        </div>
      </section>

      {/* ONCE IT'S ON YOUR DEVICE */}
      <section className="py-16 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">First steps</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Once it's on your device</h3>

          <div className="mb-10">
            <img
              src="/images/setup/03-device-home.jpg"
              alt="Your Blueprint file on the reMarkable home screen"
              className="w-full h-auto rounded-xl border border-slate-800 shadow-2xl"
            />
          </div>

          <ul className="space-y-4">
            {[
              'Open the file from your home screen. Pin it to favorites so it is always one tap away.',
              'Tap any date in the year overview. You jump straight to that day. Tap the date header on a daily page to jump back. Every date, week and section is hyperlinked.',
              'Try a Sunday-evening weekly review on the weekly spread. The four questions on the review page are where most of the value lives.',
              'Write your first daily intention: one line at the top of today, before email or Slack.',
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-400 leading-relaxed mt-8">
            Want the full method behind the layout? Read{' '}
            <Link to="/articles/remarkable-pro-planner-2026-guide" className="text-blue-400 hover:underline">
              The reMarkable Pro Planner: A 2026 Setup Guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="py-16 px-6 bg-[#0a0a0a] border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">If something's off</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Troubleshooting</h3>

          <div className="space-y-6">
            {[
              {
                q: 'The file isn\'t showing up on my device',
                a: 'Make sure the device is on Wi-Fi and signed into the same reMarkable account. Pull down on the home screen to force a sync. If it still doesn\'t appear, restart the device.',
              },
              {
                q: 'Tapping a date does nothing',
                a: 'Make sure you\'re on the latest reMarkable firmware. Hyperlinks rely on a PDF feature that older firmware versions render inconsistently. Update the device, then re-open the file.',
              },
              {
                q: 'Some links jump to the wrong place or do nothing (in the free sample)',
                a: 'The free sample is one month extracted from the full planner. Links that point to months outside July won\'t go anywhere — that\'s expected. Inside July, everything is fully navigable. The complete planner has all links live across all three years.',
              },
              {
                q: 'The pages look faint',
                a: 'Adjust the device brightness, and make sure you\'re on the latest firmware. The planner is tuned for high-contrast e-ink, so it should read cleanly on the reMarkable 2 and Paper Pro.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d1219] border border-slate-800 p-6">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <h4 className="text-white font-bold">{item.q}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mt-8 text-center">
            Still stuck? Email{' '}
            <a href="mailto:hello@yourblueprint.co" className="text-blue-500 hover:underline">hello@yourblueprint.co</a>
            {' '}— a real human reads.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <LayoutIcon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Like the sample? The full system covers three years.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            2026, 2027 and 2028 in one hyperlinked file. Over 1,300 pages. One purchase, yours forever.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-[#0f172a] hover:bg-blue-600 hover:text-white px-8 py-3 font-bold uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
          >
            See the full system
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Setup;
