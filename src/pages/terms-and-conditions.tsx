import { sf } from "@/pages/index";
import { ListPage } from "@/styles/common";

export default function TermsAndConditions() {
  return (
    <ListPage className={sf.className}>
      <div>
        <h1>Terms and Conditions</h1>
        <ol className="toc-list">
          <li>
            Introduction
            <p>Welcome to Blast, a social networking platform designed to facilitate connections between individuals looking to join tables or invite groups to their tables at nightclubs. Blast is operated by Blastit Inc., with its registered office located at Las Vegas. By accessing or using Blast, you agree to be bound by these Terms and Conditions ({'"Terms"'}). Please read these Terms carefully before using our service. If you do not agree with the Terms, do not use Blast.</p>
          </li>
          <li>
            User Eligibility and Account Registration
            <p>You must be at least 18 years old to use Blast. By creating an account, you represent and warrant that you meet this age requirement and that you will provide accurate, current, and complete information about yourself, including your location, images, age, phone number, sexual orientation, and gender. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or remove or edit content in our sole discretion.</p>
          </li>
          <li>
            User Interactions and Content
            <p>Users can express interest in joining tables or inviting others to their tables at nightclubs, and engage in chat communications within the app. You are responsible for the content you share, and you must not engage in inappropriate behavior, including but not limited to harassment, abuse, or use of offensive language. Blast reserves the right to terminate your account if such behavior is reported and confirmed.</p>
          </li>
          <li>
            Data Use and Protection
            <p>Your privacy is important to us. User data, including personal information and location, is collected, used, and protected as described in our Privacy Policy, which complements these Terms. Despite our efforts to protect your information using Google Cloud Function infrastructure, we cannot guarantee absolute security against all threats.</p>
          </li>
          <li>
            Third-Party Services
            <p>Blast integrates with third-party services, such as Twilio for SMS messaging and Stripe for payment processing. Your use of these services is subject to their terms and privacy policies. We are not liable for the data practices of these third-party service providers.</p>
          </li>
          <li>
            User Responsibilities
            <p>You are responsible for your own safety and for conducting yourself in a legal and responsible manner when meeting people through Blast. Exercise caution, report guideline violations, and follow our safety tips for meeting new people.</p>
          </li>
          <li>
            Payment, Refund, and Cancellation
            <p>Payments for joining a table are processed through Stripe and are subject to the individual {"clubs'"} refund and cancellation policies. Detailed conditions under which refunds or cancellations are allowed are available upon request.</p>
          </li>
          <li>
            Intellectual Property
            <p>The content on Blast, including text, graphics, logos, and images, is protected by intellectual property laws. Unauthorized use of any Blast content is strictly prohibited.</p>
          </li>
          <li>
            Modifications to Terms
            <p>Blast reserves the right to modify these Terms at any time. Users will be notified of any changes and will be required to agree to the updated Terms before continuing to use the app.</p>
          </li>
          <li>
            Governing Law
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
          </li>
          <li>
            Contact Information
            <p>For any questions or concerns regarding these Terms, please contact us at blast.cs@gmail.com.</p>
          </li>
          <li>
            Limitation of Liability and Disclaimer of Warranties
            <p>Blast provides the platform on an {'"as is"'} and {'"as available"'} basis. We disclaim all warranties of any kind, whether express or implied. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use Blast.</p>
          </li>
          <li>
            Dispute Resolution
            <p>Any disputes arising from or relating to these Terms will be resolved through binding arbitration in accordance with the laws of Delaware or at a small claims court in the jurisdiction where you reside.</p>
          </li>
          <li>
            Acceptance of Terms
            <p>Your access to and use of Blast constitutes your acceptance of and compliance with these Terms. If you do not agree to these Terms, you must not access or use Blast.</p>
          </li>
        </ol>

      </div>
    </ListPage>
  );
}
