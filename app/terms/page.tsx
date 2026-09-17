import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service & Compliance | Regicore",
  description: "Terms of Service and Compliance rules governing access to the Regicore website and services.",
};

export default function TermsPage() {
  return (
    <main id="main">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="section-label text-teal">Legal</p>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl leading-tight tracking-tight text-ink">
          Terms of Service and Compliance
        </h1>
        <p className="mt-4 text-sm text-muted">Effective date: 5th July 2026</p>

        <div className="mt-10 flex flex-col gap-10 text-base leading-7 text-muted">
          <section className="bg-sand/40 border border-line rounded-xl p-6">
            <p>
              These Terms of Service and Compliance rules govern access to the Regicore website and the use of Regicore Local SEO and AI Intake services. By using this website, requesting services, accepting a proposal, or paying an invoice, you agree to these Terms.
            </p>
            <p className="mt-4">
              Regicore is operated by Regicore, a company in India with its registered office at 38/2, 3rd cross New thippsandra, Bangalore, India.
            </p>
            <p className="mt-4 font-medium text-ink">
              If you do not agree to these Terms, do not use the website or Services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">1. Our Services</h2>
            <p className="mt-3">
              Regicore provides the following services to businesses in the United States, the United Kingdom, Singapore, and other approved locations:
            </p>
            <ol className="mt-3 list-decimal list-inside space-y-2 pl-2">
              <li>Local SEO services intended to improve a business&apos;s visibility in local search results.</li>
              <li>AI voice agents for inbound and outbound calls.</li>
              <li>AI chatbots for website enquiries and customer intake.</li>
              <li>Appointment scheduling, enquiry qualification, and communication routing.</li>
              <li>AI intake services designed to help prospective clients connect with lawyers and law firms more quickly.</li>
            </ol>
            <p className="mt-3">
              The exact features, pricing, usage limits, and delivery terms will be stated in the applicable proposal, order form, or service plan.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">2. AI Disclosure</h2>
            <p className="mt-3">
              Every Regicore AI voice agent and chatbot is configured to disclose at the beginning of the interaction that it is an artificial intelligence agent.
            </p>
            <p className="mt-3">
              The AI agent will also identify the business or law firm it represents and explain the main purpose of the interaction. For legal intake services, that purpose is generally to receive an enquiry, collect basic information, and help the person book a meeting with a lawyer rather than wait for a return call.
            </p>
            <p className="mt-3">
              The AI agent is not a lawyer and does not provide legal advice, legal representation, legal opinions, or guarantees about the outcome of a legal matter.
            </p>
            <p className="mt-3">
              Communicating with an AI agent does not by itself create a lawyer and client relationship. A relationship is created only when the relevant law firm expressly agrees to provide representation.
            </p>
            <p className="mt-3">
              A user may request human assistance. Depending on the service configuration, the AI may transfer the person, arrange a return call, book a consultation, or provide another method of contacting the business.
            </p>
            <p className="mt-3">
              The United States Federal Communications Commission treats AI generated voices as artificial or prerecorded voices under the Telephone Consumer Protection Act. The United Kingdom Information Commissioner&apos;s Office and Singapore regulators also emphasize transparency when personal information is processed through AI systems.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">3. Local SEO Promise</h2>
            <p className="mt-3">
              Where a purchased plan expressly includes the Regicore ranking promise, Regicore will work toward placing the Client within the top three local search results for the agreed search term and location within ninety days.
            </p>
            <p className="mt-3">
              If the agreed result is not achieved within ninety days, Regicore will continue providing the affected monthly SEO service without an additional monthly service fee until the agreed result is achieved.
            </p>
            <p className="mt-3">This promise applies only when all of the following conditions are satisfied:</p>
            <ol className="mt-3 list-decimal list-inside space-y-2 pl-2">
              <li>The target search terms and locations are written in the proposal or order form.</li>
              <li>The Client provides timely access to its website, business profile, listings, analytics, and other required accounts.</li>
              <li>The Client provides accurate information and implements reasonable recommendations without unnecessary delay.</li>
              <li>The Client maintains a genuine, verified, eligible, and policy compliant business profile.</li>
              <li>The Client does not appoint another provider to make conflicting changes to the same properties during the campaign.</li>
              <li>The Client pays all fees due for the initial ninety day service period and all approved outside expenses.</li>
            </ol>
            <p className="mt-3">
              The phrase <em>work for free</em> means that Regicore will waive the future recurring service fee for the affected campaign until the agreed result is achieved. It does not mean that previous payments will be refunded. It does not include advertising expenses, software expenses, listing fees, telecommunications expenses, or other third party charges.
            </p>
            <p className="mt-3">
              Search engines control their own rankings, algorithms, suspensions, and displayed results. Regicore does not claim to control any search engine or to have a special relationship with one. Regicore does not promise that a ranking will remain unchanged after it is achieved.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">4. Acceptable Use</h2>
            <p className="mt-3">You may use the Services only for lawful business purposes.</p>
            <p className="mt-3">You must not use the website or Services to do any of the following:</p>
            <ol className="mt-3 list-decimal list-inside space-y-2 pl-2">
              <li>Contact a person without the consent or other legal authority required in that person&apos;s location.</li>
              <li>Send deceptive, fraudulent, threatening, abusive, discriminatory, or unlawful communications.</li>
              <li>Conceal or falsify the identity of the caller or sender.</li>
              <li>Impersonate a lawyer, business, government agency, or real person.</li>
              <li>Provide legal advice through the AI system or represent AI output as advice from a qualified lawyer.</li>
              <li>Upload contact information obtained through unlawful scraping, purchasing, renting, or sharing.</li>
              <li>Circumvent consent records, calling time restrictions, preference registers, suppression lists, or opt out controls.</li>
              <li>Collect information that is not reasonably necessary for the approved intake purpose.</li>
              <li>Use the Services in a way that violates privacy, telecommunications, professional conduct, consumer protection, or advertising rules.</li>
            </ol>
            <p className="mt-3">
              Regicore may suspend or terminate Services when it reasonably believes that a campaign is unlawful, deceptive, harmful, or likely to expose Regicore, a Client, or an individual to material risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">5. Client Responsibilities</h2>
            <p className="mt-3">
              Clients using AI calling or chatbot services are responsible for determining who may lawfully be contacted and for obtaining all required permissions before providing contact information to Regicore.
            </p>
            <p className="mt-3">
              The Client must keep evidence showing when and how consent was obtained, what disclosure was presented, which telephone number was covered, what communication method was authorized, and whether consent was later withdrawn.
            </p>
            <p className="mt-3">
              The Client is also responsible for the accuracy and legality of its scripts, offers, contact lists, legal intake questions, appointment instructions, and professional disclosures.
            </p>
            <p className="mt-3">
              Law firms must ensure that their use of the Services complies with all applicable rules governing legal advertising, solicitation, confidentiality, conflicts, supervision, competence, and unauthorized legal practice.
            </p>
            <p className="mt-3">
              Regicore may request consent records, scripts, suppression records, or other evidence before activating or continuing an outbound campaign.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">6. United States Compliance</h2>
            <p className="mt-3">
              For calls and messages directed to United States telephone numbers, the Client and Regicore will comply with the Telephone Consumer Protection Act, Federal Communications Commission rules, the Federal Trade Commission Telemarketing Sales Rule, applicable state privacy laws, call recording laws, and state telecommunications requirements.
            </p>
            <p className="mt-3">
              AI generated voice calls are treated as calls using an artificial or prerecorded voice under the Telephone Consumer Protection Act. Where prior express written consent is required, the Client must obtain and preserve legally sufficient written authorization before a call is made.
            </p>
            <p className="mt-3">
              The AI agent will identify itself as AI at the start of the call, identify the business it represents, and state the purpose of the call.
            </p>
            <p className="mt-3">
              Where required, a call will provide an automated and interactive method that allows the recipient to make an immediate do not call request. Federal Trade Commission guidance confirms that calls delivering prerecorded messages must provide an automated interactive opt out mechanism.
            </p>
            <p className="mt-3">
              Regicore and the Client will maintain and honor internal do not call requests. The Federal Communications Commission requires telephone solicitors to maintain company specific do not call procedures.
            </p>
            <p className="mt-3">
              The Client must comply with applicable calling time limits and screen numbers against the National Do Not Call Registry unless legally sufficient consent or another valid exception applies.
            </p>
            <p className="mt-3">
              Regicore does not use AI voice technology to impersonate a real person without lawful authorization and all required disclosure.
            </p>
            <p className="mt-3">
              If a Client subject to United States health privacy law intends to process protected health information through the Services, the Client must notify Regicore before doing so. The parties must sign a compliant business associate agreement and must use approved systems before any protected health information is processed. The United States Department of Health and Human Services requires appropriate business associate contracts when service providers handle protected health information.
            </p>
            <p className="mt-3">
              Where the California Consumer Privacy Act applies, Regicore will act as a service provider or contractor for covered Client information under a separate data processing agreement. California regulations concerning risk assessments, cyber security audits, and automated decision technology became effective in 2026 and contain phased compliance requirements.
            </p>
            <p className="mt-3">
              Clients remain responsible for identifying any stricter rule in the state where the recipient is located.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">7. United Kingdom Compliance</h2>
            <p className="mt-3">
              For Services involving people in the United Kingdom, Regicore and the Client will comply with the United Kingdom General Data Protection Regulation, the Data Protection Act 2018, the Privacy and Electronic Communications Regulations, and applicable Ofcom rules.
            </p>
            <p className="mt-3">
              The Client generally acts as the controller of End User information, and Regicore generally acts as the processor. The parties must enter into a compliant data processing agreement before Personal Data is processed.
            </p>
            <p className="mt-3">
              Regicore will process Personal Data only on documented instructions, maintain appropriate security and confidentiality, control its subprocessors, assist with individual rights, and notify the Client without undue delay after becoming aware of a Personal Data breach.
            </p>
            <p className="mt-3">
              When Personal Data is transferred from the United Kingdom to India, the parties must implement a legally valid transfer mechanism where required. This may include the United Kingdom International Data Transfer Agreement or the approved United Kingdom Addendum, together with a transfer risk assessment and appropriate safeguards. The Information Commissioner&apos;s Office publishes the International Data Transfer Agreement for restricted transfers.
            </p>
            <p className="mt-3">
              If Article 27 of the United Kingdom General Data Protection Regulation applies, Regicore will appoint a representative in the United Kingdom. The Information Commissioner&apos;s Office explains that an organisation outside the United Kingdom may need a local representative when it offers services to people in the United Kingdom or monitors their behaviour.
            </p>
            <p className="mt-3">
              Regicore&apos;s United Kingdom representative is Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a>.
            </p>
            <p className="mt-3">
              Automated marketing calls will be made only where the recipient has provided the specific consent required by the Privacy and Electronic Communications Regulations. General marketing permission will not automatically be treated as permission for an automated call.
            </p>
            <p className="mt-3">
              For live marketing calls, the Client must screen against the Telephone Preference Service and Corporate Telephone Preference Service and must honor previous objections unless valid consent permits the call.
            </p>
            <p className="mt-3">
              All calls must use accurate caller identification and provide contact information as required.
            </p>
            <p className="mt-3">
              Regicore will configure automated calling systems to reduce silent calls, abandoned calls, repeated calls, and misleading caller identification. Ofcom treats repeated abandoned and silent calls as potential persistent misuse of communications services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">8. Singapore Compliance</h2>
            <p className="mt-3">
              For Services involving people in Singapore, Regicore and the Client will comply with the Personal Data Protection Act, the Do Not Call rules, and applicable guidance issued by the Personal Data Protection Commission and Infocomm Media Development Authority.
            </p>
            <p className="mt-3">
              The Client generally acts as the responsible organisation, and Regicore generally acts as a data intermediary processing Personal Data under a written agreement.
            </p>
            <p className="mt-3">
              Regicore will apply reasonable security, retention, incident response, and subprocessor controls. Singapore guidance identifies duties concerning accountability, notification, consent, purpose limitation, accuracy, protection, retention, transfers, access, correction, and breach notification.
            </p>
            <p className="mt-3">
              Singapore Personal Data will be accessed or processed in India only where the arrangement is lawfully authorized and protected by appropriate contractual and security safeguards.
            </p>
            <p className="mt-3">
              Regicore will require approved subprocessors to provide corresponding protection. The Personal Data Protection Commission provides guidance for contractual data protection clauses in processing agreements.
            </p>
            <p className="mt-3">
              Before sending a covered marketing call or other specified message to a Singapore telephone number, the Client must check the applicable Do Not Call Register unless the Client has clear and unambiguous consent in evidential form or a valid legal exception applies. Singapore&apos;s regulator states that organisations must check telephone numbers against the Do Not Call Registry before sending covered messages, subject to applicable exceptions.
            </p>
            <p className="mt-3">
              Callers must provide accurate contact information and must not conceal the calling number.
            </p>
            <p className="mt-3">
              Regicore&apos;s AI agents will identify themselves as AI and provide a practical route to human contact. This approach reflects Singapore&apos;s guidance promoting transparent and human centred AI deployment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">9. India Compliance</h2>
            <p className="mt-3">
              Regicore is established in India and will comply with the Digital Personal Data Protection Act, applicable Digital Personal Data Protection Rules, the Information Technology Act, and any other binding Indian privacy or cyber security requirement.
            </p>
            <p className="mt-3">
              Regicore will process Personal Data only for authorized purposes and under an appropriate contract. It will maintain reasonable security safeguards, access controls, confidentiality requirements, subprocessor controls, and an incident response process.
            </p>
            <p className="mt-3">
              The Government of India has confirmed that the Information Technology rules addressing reasonable security practices and sensitive personal information apply to corporate bodies and persons located in India.
            </p>
            <p className="mt-3">
              Regicore will assist Clients with lawful requests involving access, correction, deletion, consent withdrawal, grievances, incidents, and regulatory enquiries.
            </p>
            <p className="mt-3">
              International transfers will take place only when permitted by applicable Indian law and subject to any restriction, localization requirement, or government direction in force at the relevant time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">10. Privacy and Personal Data</h2>
            <p className="mt-3">
              The separate Regicore Privacy Policy explains what information Regicore collects through its own website, why it is collected, how it is used, how long it is kept, when it is shared, and how a person may exercise applicable privacy rights.
            </p>
            <p className="mt-3">
              When Regicore processes Personal Data for a Client, the Client controls the permitted purpose and Regicore processes the information according to the Client&apos;s documented instructions and the applicable data processing agreement.
            </p>
            <p className="mt-3">
              Regicore may use approved service providers for telecommunications, hosting, speech processing, AI processing, scheduling, security, analytics, and technical support. Regicore will impose appropriate privacy, confidentiality, security, and incident duties on approved providers.
            </p>
            <p className="mt-3">
              Regicore will not use recordings, transcripts, or intake information to train a general AI model unless the arrangement is expressly authorized and every required notice, lawful basis, consent, safeguard, and individual right is provided. The United Kingdom Information Commissioner&apos;s Office states that individuals must be informed when their Personal Data will be used to train an AI system.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">11. Call Recording</h2>
            <p className="mt-3">
              A call will not be recorded or transcribed unless the service configuration permits it and the Client has established the notice, consent, and lawful basis required in every applicable location.
            </p>
            <p className="mt-3">
              Recording laws vary by jurisdiction. When the recipient&apos;s location is uncertain, Regicore may apply the strictest reasonably applicable notice and consent setting or disable recording.
            </p>
            <p className="mt-3">
              Regicore may stop recording or transcription when the Client has not provided sufficient compliance information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">12. Security</h2>
            <p className="mt-3">
              Regicore uses reasonable technical and organisational measures designed to protect Personal Data against unauthorized access, disclosure, alteration, loss, and destruction.
            </p>
            <p className="mt-3">
              These measures may include access restrictions, secure transmission, encryption where appropriate, multifactor authentication, logging, supplier review, employee confidentiality, backups, and incident response procedures.
            </p>
            <p className="mt-3">
              No website, telecommunications service, cloud platform, or AI system can be guaranteed to be completely secure or continuously available.
            </p>
            <p className="mt-3">
              Clients are responsible for protecting their login details, connected accounts, devices, integrations, and authorized users.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">13. Confidentiality</h2>
            <p className="mt-3">
              Regicore will treat Client information and End User intake information as confidential and will disclose it only to authorized personnel, approved service providers, the relevant Client, or a person legally entitled to receive it.
            </p>
            <p className="mt-3">
              Regicore does not guarantee that an initial interaction with an AI intake agent is protected by legal privilege. The relevant law firm is responsible for deciding when privilege applies and for providing any required notice.
            </p>
            <p className="mt-3">
              Clients should configure intake forms and conversations to collect only information reasonably necessary to identify the enquiry, perform approved conflict checks, route the person, and arrange a consultation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">14. Payment</h2>
            <p className="mt-3">
              Prices, billing periods, included usage, taxes, payment dates, renewal terms, and outside charges will be shown in the applicable proposal, order form, or service plan.
            </p>
            <p className="mt-3">
              Undisputed invoices must be paid within the agreed period following the invoice date.
            </p>
            <p className="mt-3">
              Regicore may suspend Services for overdue undisputed payments after giving reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">15. Intellectual Property</h2>
            <p className="mt-3">
              Regicore retains ownership of its website, platform, software, processes, templates, methods, prompts, generic scripts, designs, and service improvements.
            </p>
            <p className="mt-3">
              Clients retain ownership of their trademarks, content, contact information, instructions, and materials supplied to Regicore.
            </p>
            <p className="mt-3">
              The Client grants Regicore a limited right to use Client materials only as reasonably necessary to provide, secure, and support the Services.
            </p>
            <p className="mt-3">
              Any ownership or licence applying to a custom deliverable will be stated in the relevant proposal or order form.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">16. Service Limitations</h2>
            <p className="mt-3">
              AI output may be incomplete, inaccurate, delayed, or misunderstood. Clients must review important workflows and must not use AI output as a substitute for legal or professional judgment.
            </p>
            <p className="mt-3">
              Regicore does not guarantee that every call will connect, every message will be delivered, every appointment will attend, every enquiry will become a customer, or every interaction will be error free.
            </p>
            <p className="mt-3">
              Regicore may change, limit, or suspend a feature when reasonably necessary to comply with law, a regulatory request, a court order, a telecommunications provider requirement, a platform policy, or a security need.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">17. Termination</h2>
            <p className="mt-3">
              The Client or Regicore may terminate a Service according to the cancellation rules in the applicable proposal, order form, or service plan.
            </p>
            <p className="mt-3">
              Regicore may suspend or terminate a Service immediately when continued use creates a credible risk of unlawful calling, privacy harm, fraud, professional misconduct, security compromise, regulatory action, or harm to another person.
            </p>
            <p className="mt-3">
              After termination, Regicore will return or delete Client Personal Data as required by the applicable agreement and law. Information may be retained when necessary for legal compliance, suppression, security, fraud prevention, payment, or dispute purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">18. Disclaimers</h2>
            <p className="mt-3">
              The website and Services are provided on an as available basis, subject to the written commitments in an applicable proposal or order form.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by law, Regicore disclaims implied warranties that are not expressly stated in writing.
            </p>
            <p className="mt-3">
              Nothing in these Terms excludes a warranty, right, remedy, or liability that cannot lawfully be excluded.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">19. Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, neither Regicore nor the Client will be liable for indirect, incidental, special, exemplary, or consequential losses, or for lost profits, revenue, goodwill, opportunity, or anticipated savings.
            </p>
            <p className="mt-3">
              Regicore&apos;s total liability will be limited to the agreed amount or fee multiple, except where Applicable Law does not permit that limitation.
            </p>
            <p className="mt-3">
              The final liability amount and any exceptions must be stated in the applicable proposal or order form and reviewed under the selected governing law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">20. Indemnity</h2>
            <p className="mt-3">
              The Client agrees to protect and reimburse Regicore for reasonable losses arising from the Client&apos;s unlawful contact list, missing or invalid consent, unlawful instructions, misleading content, professional rule violation, or use of the Services in breach of these Terms.
            </p>
            <p className="mt-3">
              Regicore will remain responsible for its own breach of expressly agreed confidentiality, security, and data processing obligations, subject to the applicable liability terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">21. Governing Law and Disputes</h2>
            <p className="mt-3">
              These Terms are governed by applicable governing law, except where mandatory privacy, communications, consumer, or professional laws apply regardless of that choice.
            </p>
            <p className="mt-3">
              Any arbitration clause must identify the arbitration institution, rules, legal seat, language, number of arbitrators, and appointment procedure. India&apos;s Arbitration and Conciliation Act provides the legal framework for arbitration and international commercial arbitration in India.
            </p>
            <p className="mt-3">
              Suggested commercial wording for review by counsel is arbitration administered by the Singapore International Arbitration Centre, seated in Singapore, conducted in English by one arbitrator, with either party permitted to request urgent temporary relief from a competent court.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">22. Changes to These Terms</h2>
            <p className="mt-3">
              Regicore may update these Terms to reflect legal, regulatory, security, platform, or service changes.
            </p>
            <p className="mt-3">
              Material changes will be communicated through the website, account, email, or another reasonable method where required by law.
            </p>
            <p className="mt-3">
              The effective date at the top of this page will show when the Terms were last updated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">23. Contact Information</h2>
            <p className="mt-3">
              Questions about these Terms or Regicore&apos;s compliance practices may be sent to:
            </p>
            <div className="mt-4 rounded-lg bg-sand/30 border border-line p-5 text-sm space-y-2 text-ink">
              <p><strong>Legal company name:</strong> Regicore</p>
              <p><strong>Registered office:</strong> 38/2, 3rd cross, New thippsandra, Rama temple road, Bangalore-560075, India.</p>
              <p><strong>General contact:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>Privacy contact:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>India grievance contact:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>United Kingdom representative:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>United States compliance contact:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>Singapore privacy contact:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>Privacy Policy:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
              <p><strong>Subprocessor list:</strong> Varun, <a href="mailto:varun@regicorehq.com" className="text-teal hover:underline">varun@regicorehq.com</a></p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
