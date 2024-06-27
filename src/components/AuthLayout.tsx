import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import img1 from '../../src/assets/login.jpg';

const { Content } = Layout;

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen flex">
      <Content 
        className="w-full flex items-center justify-center p-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm"></div>
        <div className="relative z-10">
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
