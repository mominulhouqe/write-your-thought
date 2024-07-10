
import { Card } from 'antd';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card title="Terms and Conditions" className="shadow-lg">
        <div className="prose max-w-full">
          <p>
            Welcome to Thoughts! These terms and conditions outline the rules and regulations for the use of Thoughts's Website.
          </p>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Thoughts if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2>Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Thoughts, you agreed to use cookies in agreement with the Thoughts's Privacy Policy.
          </p>
          <h2>License</h2>
          <p>
            Unless otherwise stated, Thoughts and/or its licensors own the intellectual property rights for all material on Thoughts. All intellectual property rights are reserved. You may access this from Thoughts for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <h2>Hyperlinking to our Content</h2>
          <p>
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul>
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
          </ul>
          <h2>Content Liability</h2>
          <p>
            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
          </p>
          <h2>Your Privacy</h2>
          <p>
            Please read our Privacy Policy.
          </p>
          <h2>Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
          </p>
          <h2>Removal of links from our website</h2>
          <p>
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about these Terms and Conditions, please contact us at: support@thoughts.com
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TermsAndConditions;
