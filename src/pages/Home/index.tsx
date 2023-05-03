import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PageContainer } from '@ant-design/pro-components';
import { history } from 'umi';
import { Access, useAccess } from '@umijs/max';

const data = [
  {
    num: '20230303',
    name: 'guo',
    date: '2023-03-22',
    money: '2000',
    status: '已审核',

  }
];

const newForm = () => {
  history.push('/createForm')

}

const App: React.FC = () => {
  const access = useAccess();

  console.log('access===', access);
  
  const columns: ColumnsType = [
    {
      title: '编号',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: '交款单位',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '收款日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '收款金额',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>查看</a>
          <Access accessible={access.isSiku}>
            <a>司库审核</a>
          </Access>
          <Access accessible={access.isSiZhang}>
            <a>司账审核</a>
          </Access>
          <a>发送邮箱</a>
        </Space>
      ),
    },
  ];


  return <PageContainer>
    <Button type='primary' style={{marginBottom: '20px'}} onClick={newForm}>新建收据</Button>
    <Table columns={columns} dataSource={data} pagination={false} />
  </PageContainer>
};

export default App;