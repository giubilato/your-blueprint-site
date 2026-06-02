import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0a0a0a] text-slate-300">
      <Helmet>
        <title>Privacy Policy — Your Blueprint</title>
        <meta name="description" content="How Your Blueprint handles your data — waitlist, GDPR rights, and data processors." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://yourblueprint.co/privacy" />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        {/* DATA CORRETTA */}
        <p className="text-sm text-slate-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-invert prose-slate">
          <p className="mb-6">
            Welcome to Your Blueprint. We respect your privacy. This policy outlines exactly how we handle your data for our waitlist.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. No-Spam Guarantee</h3>
          <p className="mb-4">
            We collect your email address for one specific purpose only. You will not receive newsletters, marketing spam, or third-party offers.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Purpose of Collection</h3>
          <p className="mb-4">
            By joining the waitlist, you consent to receive emails <strong>solely</strong> for:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Notification of product availability (Launch Day).</li>
              <li>Sending your exclusive early-access discount code.</li>
            </ul>
            Once the launch sequence is complete, your data will not be used for other purposes unless you explicitly opt-in later.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Data Storage</h3>
          <p className="mb-4">
            Your data is securely processed via Formspree, a third-party service provider acting as a data processor on our behalf. We do not sell or share your data with any other third parties.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Your Rights (GDPR)</h3>
          <p className="mb-4">
            Under the GDPR, you have the right to request access to, correction of, or deletion of your personal data at any time. To unsubscribe or request deletion, simply reply to any email we send or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;