import React from 'react';
import { Button } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ExclamationCircleOutlined className="text-6xl text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Something Went Wrong</h1>
      <p className="text-gray-600 mb-8">We're sorry, but the page you are looking for doesn't exist or an error occurred.</p>
      <div>
        <Link to="/" >
          <Button type="primary"  className="mr-4">Go to Home</Button>
        </Link>
        {/* <Button onClick={goBack}>
          Go Back
        </Button> */}
      </div>
    </div>
  );
};

export default ErrorPage;
