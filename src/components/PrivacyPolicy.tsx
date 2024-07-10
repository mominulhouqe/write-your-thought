
import { Card } from 'antd';
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card title="Privacy Policy" className="shadow-lg">
        <div className="prose max-w-full">
          <p>
            Welcome to Thoughts! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>Personal Data</li>
            <li>Derivative Data</li>
            <li>Financial Data</li>
            <li>Mobile Device Data</li>
          </ul>
          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account</li>
            <li>Email you regarding your account or order</li>
            <li>Enable user-to-user communications</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site</li>
          </ul>
          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>By Law or to Protect Rights</li>
            <li>Third-Party Service Providers</li>
            <li>Business Transfers</li>
          </ul>
          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: support@thoughts.com
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
