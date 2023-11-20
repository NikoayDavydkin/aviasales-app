/* eslint-disable semi */
import React from 'react';
import { Alert, Space } from 'antd';
const Info = () => (
  <Space
    direction="vertical"
    style={{
      marginTop: '20px',
      width: '100%',
    }}
  >
    <Alert message="No results found" description="Check if you have selected the filters correctly" type="info" />
  </Space>
);
export default Info;
