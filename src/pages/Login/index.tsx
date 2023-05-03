import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
  PageContainer,
} from '@ant-design/pro-components';
import { message, Space, Tabs } from 'antd';
import { useState } from 'react';
import { history, useModel } from 'umi';
import { login } from '@/services';

export default () => {

  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  
  const handleSubmit = async (values: any) => {
    try {
      // 登录
      const msg = await login({ ...values });
      if (msg.login === true) {
        message.success('登录成功！');
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        history.push('/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
    } catch (error) {
     
    }
  };

  return (
    <PageContainer>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          title="登 录"
          subTitle=" "
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
        </LoginForm>
      </div>
    </PageContainer>
  )
};