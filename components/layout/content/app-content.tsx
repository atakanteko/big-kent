'use client';
import React from 'react';
import { Layout } from 'antd';

const AppContent = ({ children }: { children: React.ReactNode }) => {
  return <Layout.Content>{children}</Layout.Content>;
};

export default AppContent;
