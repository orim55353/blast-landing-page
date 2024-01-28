import { ListPage } from "@/styles/common";
import { sf } from "@/pages";

export default function PrivacyPolicy() {
  return (
    <ListPage className={sf.className}>
      <div>
        <h1>Privacy Policy</h1>
        <ol>
          <li>
            Respect Others
            <ol>
              <li>
                Be Kind and Courteous: {"We're"} a diverse community with users
                from different backgrounds. Please be respectful and considerate
                to all users.
              </li>
              <li>
                No Harassment or Bullying: Make sure everyone feels safe.
                Bullying, harassment, or intimidation of any kind is not
                tolerated.
              </li>
            </ol>
          </li>
          <li>
            User Conduct
            <ol>
              <li>
                Appropriate Content: Share content that is appropriate and
                respectful. Content that is offensive, harmful, or explicit is
                strictly prohibited.
              </li>
              <li>
                Honesty and Transparency: Be truthful in your interactions.
                Misleading or deceiving other users is not allowed.
              </li>
              <li>
                Safety First: Exercise caution when meeting people from Blast in
                person. Meet in public places and inform someone you trust about
                your plans.
              </li>
            </ol>
          </li>
          <li>
            Privacy and Security
            <ol>
              <li>
                Protect Your Information: Be cautious about sharing personal
                information, such as your full name, address, and financial
                details.
              </li>
              <li>
                Report Concerns: If you encounter suspicious or inappropriate
                behavior, please report it to us immediately at
                blastCs@blastit.app.
              </li>
            </ol>
          </li>
          <li>
            Legal Compliance
            <ol>
              <li>
                Follow the Law: Engage in activities and behaviors that are
                legal in your jurisdiction. Do not use Blast for illegal
                activities.
              </li>
            </ol>
          </li>
          <li>
            Age Restriction
            <ol>
              <li>
                Age Limit: Blast is intended for use by individuals 18 years of
                age or older. Do not use the app if you are under the
                age-appropriate limit.
              </li>
            </ol>
          </li>
          <li>
            Account Use
            <ol>
              <li>
                One Account Per Person: Users should only create and operate one
                account. Multiple accounts per individual are not allowed.
              </li>
              <li>
                Responsibility for Account: You are responsible for all
                activities conducted through your account.
              </li>
            </ol>
          </li>
          <li>
            Intellectual Property
            <ol>
              <li>
                Respect Copyrights: Do not post content that infringes on the
                intellectual property rights of others.
              </li>
            </ol>
          </li>
          <li>
            Reporting and Enforcement
            <ol>
              <li>
                We reserve the right to remove any content or suspend accounts
                which we determine to be in violation of these guidelines or our
                Terms and Conditions.
              </li>
              <li>
                If you believe your account was suspended in error, you can
                contact us at blastCs@blastit.app for review.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </ListPage>
  );
}
