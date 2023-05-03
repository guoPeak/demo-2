import {
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Col, message, Row, Space } from 'antd';
import { useState } from 'react';

const LAYOUT_TYPE_HORIZONTAL = 'vertical';

export default () => {

  return (
    <PageContainer ghost>
      <ProForm
        layout={LAYOUT_TYPE_HORIZONTAL}
        grid={true}
        rowProps={{
          gutter: [16, 0],
        }}
        submitter={{
          render: (props, doms) => {
            return (
              <Row>
                <Col span={14} offset={4}>
                  <Space>{doms}</Space>
                </Col>
              </Row>
            )
          },
        }}
        onFinish={async (values) => {
          message.success('提交成功');
        }}
        params={{}}
        >
        <ProFormDatePicker rules={[{ required: true, message: '请选择收款日期' }]} label="收款日期" name="date" />
        <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{ required: true, message: '请输入交款单位' }]} name="name" label="交款单位" />
        <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{ required: true, message: '请输入收据送达邮箱' }]} name="email" label="收据送达邮箱" />
        <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{ required: true, message: '请输入收款方式' }]} name="company" label="收款方式" />

        <ProFormText colProps={{ md: 12, xl: 8 }} rules={[{ required: true, message: '请输入人民币（小写）' }]} name="money-s" label="人民币（小写）" />
        <ProFormText colProps={{ md: 12, xl: 8 }} disabled name="money-d" label="人民币（大写）" placeholder='根据小写自动生成' />
        
        <ProFormTextArea colProps={{ span: 24 }} name="address" label="收款事由" />
      </ProForm>
    </PageContainer>
   
  );
};