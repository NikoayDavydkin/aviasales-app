/* eslint-disable semi */
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Spinner = () => (
  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 80,
          marginTop: '20px',
        }}
        spin
      />
    }
  />
);
export default Spinner;
