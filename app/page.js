import LeadCapture from "../components/LeadCapture";
import SpendForm from "../components/SpendForm";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-5xl font-bold">
        AI Spend Audit
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Discover where your startup is overspending
        on AI subscriptions and optimize costs.
      </p>

      <SpendForm />
      <LeadCapture />
    </main>
  );
}

