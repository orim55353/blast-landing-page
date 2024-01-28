import { sf } from "@/pages/index";
import { ListPage } from "@/styles/common";

export default function TermsAndConditions() {
  return (
    <ListPage className={sf.className}>
      <div>
        <h1>Terms and Conditions</h1>
        <ol className="toc-list">
          <li>
            Introduction Welcome to Blast, a social networking platform designed
            to facilitate connections between individuals looking to join tables
            or invite groups to their tables at nightclubs. This app is operated
            by [Your Company Name], with its registered office located at [Your
            Company's Registered Address]. By using Blast, you agree to be bound
            by these Terms and Conditions ("Terms"). Please read these Terms
            carefully before using our service. If you do not agree with the
            Terms, do not use Blast.
          </li>
          <li>
            User Eligibility and Account Registration You must be at least 18
            years old to use Blast. When creating an account, you agree to
            provide accurate and current information about yourself, including
            your location, images, age, phone number, sexual orientation, and
            gender. You are responsible for maintaining the confidentiality of
            your account and password and for all activities that occur under
            your account.
          </li>
          <li>
            User Interactions and Content
            <ol>
              <li>
                Users can express interest in joining tables or inviting others
                to their tables at nightclubs, and engage in chat communications
                within the app.
              </li>
              <li>
                Users are responsible for the content they share, including
                plans for going out. Blast does not endorse or verify such
                content.
              </li>
              <li>
                Inappropriate behavior, as reported by users and identified as a
                breach of our guidelines, may lead to account termination.
              </li>
            </ol>
          </li>
          <li>
            Data Use and Protection
            <ol>
              <li>
                User data, including personal information and location, is used
                solely for the functioning of our in-house algorithm to provide
                service features.
              </li>
              <li>
                All user data is protected using Google Cloud Function
                infrastructure. However, Blast cannot guarantee absolute
                security.
              </li>
            </ol>
          </li>
          <li>
            Third-Party Services
            <ol>
              <li>
                Blast integrates with Twilio for SMS messaging and Stripe for
                payment processing. Your use of these services is subject to
                their respective terms and privacy policies.
              </li>
            </ol>
          </li>
          <li>
            User Responsibilities Users are responsible for their safety when
            meeting people through Blast. Users should exercise caution, report
            guideline violations, and engage in responsible and lawful behavior
            while using the app.
          </li>
          <li>
            Payment, Refund, and Cancellation Payments are processed through
            Stripe when a user's request to join a table is accepted. The
            specific refund and cancellation policies are set by the individual
            clubs.
          </li>
          <li>
            Modifications to Terms Blast reserves the right to modify these
            Terms at any time. Users will be notified and required to agree to
            the updated Terms before continuing to use the app.
          </li>
          <li>
            Governing Law These Terms shall be governed by and construed in
            accordance with the laws of the United States.
          </li>
          <li>
            Contact Information For any questions or concerns regarding these
            Terms, please contact us at blastCs@blastit.app.
          </li>
        </ol>
      </div>
    </ListPage>
  );
}
