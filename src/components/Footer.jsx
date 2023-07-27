import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const PlainTextFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      This is a plain text footer.
    </Footer>
  );
};

export default PlainTextFooter;
