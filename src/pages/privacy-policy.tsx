import { ListPage } from "@/styles/common";
import { sf } from "@/pages";

export default function PrivacyPolicy() {
  return (
    <ListPage className={sf.className}>
      <div>
        <h1>Privacy Policy</h1>
        <ol className="toc-list">
          <li>
            Introduction
            <p>Welcome to Blast, operated by Blact Inc. ({'"we"'}, {'"us"'}, or {'"our"'}). Our Privacy Policy explains how we collect, use, disclose, and protect information about our users ({"you"}) and applies to your use of our application, Blast, regardless of how you access or use it.</p>
          </li>
          <li>
            Information We Collect
            <ol>
              <li>
                Information You Provide to Us
                <ul>
                  <li>Account Information: When you create an account, we collect information like your name, email address, phone number, age, sexual orientation, and gender.</li>
                  <li>Content You Share: We collect the content you create on our platform, including photos, messages, and interactions with other users.</li>
                </ul>
              </li>
              <li>
                Information We Collect Automatically
                <ul>
                  <li>Usage Information: We monitor user activity on our platform, including access times, features used, and pages viewed.</li>
                  <li>Location Information: With your consent, we collect precise geolocation data to enable you to find tables or groups within nightclubs.</li>
                </ul>
              </li>
              <li>
                Information from Third Parties
                <p>We may receive information about you from third parties, such as social media services, that you connect to our app.</p>
              </li>
            </ol>
          </li>
          <li>
            Use of Information
            <p>We use the information we collect to: Provide, maintain, and improve our services; Facilitate social connections on our platform; Communicate with you about products, services, and offers; Monitor and analyze trends, usage, and activities.</p>
          </li>
          <li>
            Sharing of Information
            <p>We may share information as follows: With other users when you voluntarily disclose information on the service (e.g., sharing your location to join a table); With third-party vendors and service providers that support our business (e.g., payment processors like Stripe and communication services like Twilio); In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</p>
          </li>
          <li>
            Your Choices
            <ol>
              <li>
                Account Information
                <p>You may update, correct, or delete information about you at any time by logging into your account or contacting us at blastCs@blastit.app.</p>
              </li>
              <li>
                Location Information
                <p>You can disable location sharing through your device settings.</p>
              </li>
            </ol>
          </li>
          <li>
            Data Security
            <p>We employ measures designed to protect your information from unauthorized access, use, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.</p>
          </li>
          <li>
            International Data Transfers
            <p>We are based in United States and the information we collect is governed by United States law. By accessing or using our services or otherwise providing information to us, you consent to the processing and transfer of information in and to United States and other countries.</p>
          </li>
          <li>
            Changes to the Privacy Policy
            <p>We may modify this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.</p>
          </li>
          <li>
            Contact Us
            <p>If you have any questions about this Privacy Policy, please contact us at blast.cto@gmail.com.</p>
          </li>
        </ol>

      </div>
    </ListPage>
  );
}
