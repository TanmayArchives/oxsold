'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Table, Tag, Space, Button } from 'antd'
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyOrdersPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (userId) {
      Api.Order.findManyByUserId(userId, {
        includes: ['orderItems', 'orderItems.product'],
      })
        .then(setOrders)
        .catch(() =>
          enqueueSnackbar('Failed to fetch orders', { variant: 'error' }),
        )
    }
  }, [userId])

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: text => dayjs(text).format('DD/MM/YYYY'),
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: text => `$${text.toFixed(2)}`,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => {
        let color = 'geekblue'
        let icon = <ClockCircleOutlined />
        if (status === 'Completed') {
          color = 'green'
          icon = <CheckCircleOutlined />
        } else if (status === 'Cancelled') {
          color = 'volcano'
          icon = <CloseCircleOutlined />
        }
        return (
          <Tag icon={icon} color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => router.push(`/order/${record.id}`)}>
            View Details
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Orders</Title>
      <Text>Track the status and details of your orders.</Text>
      <Table columns={columns} dataSource={orders} rowKey="id" />
    </PageLayout>
  )
}
