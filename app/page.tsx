export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SMS Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Recover Abandoned Carts with{" "}
          <span className="text-[#58a6ff]">Personalized SMS</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CartPulse connects to your store via webhooks, detects abandoned carts, and automatically sends targeted SMS messages with personalized product recommendations and discount codes — recovering revenue on autopilot.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Carts — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to start. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "15–25%", label: "Average cart recovery rate" },
            { stat: "< 2 min", label: "Setup with webhook integration" },
            { stat: "3x ROI", label: "Typical return on SMS spend" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Webhook Integration", desc: "Connect any e-commerce platform in minutes via standard webhooks." },
            { title: "Auto Discount Codes", desc: "Generate unique discount codes per customer to drive conversions." },
            { title: "Campaign Analytics", desc: "Track open rates, click-throughs, and recovered revenue in real time." },
            { title: "Twilio-Powered SMS", desc: "Reliable global SMS delivery with delivery receipts and opt-out handling." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited abandoned cart detection",
              "Automated SMS recovery campaigns",
              "Personalized discount code generation",
              "Campaign analytics dashboard",
              "Webhook integration for any platform",
              "Twilio SMS delivery included"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which e-commerce platforms are supported?",
              a: "CartPulse works with any platform that supports webhooks — Shopify, WooCommerce, BigCommerce, and custom stores. Setup takes under 2 minutes."
            },
            {
              q: "Are SMS costs included in the $14/mo?",
              a: "The $14/mo covers the CartPulse platform. SMS delivery is billed through your own Twilio account at standard rates, giving you full transparency and control."
            },
            {
              q: "How does opt-out and compliance work?",
              a: "CartPulse automatically handles STOP/HELP replies and maintains opt-out lists per Twilio best practices, keeping your campaigns compliant with TCPA and GDPR."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CartPulse. All rights reserved.
      </footer>
    </main>
  );
}
