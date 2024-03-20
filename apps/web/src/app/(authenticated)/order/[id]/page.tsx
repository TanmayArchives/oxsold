'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, List, Avatar, Row, Col, Tag } from 'antd'
import {
  DollarOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function OrderDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [order, setOrder] = useState<any>(null)

  useEffect(() => {
    if (!params.id) return
    Api.Order.findOne(params.id, {
      includes: ['user', 'orderItems', 'orderItems.product'],
    })
      .then(setOrder)
      .catch(() =>
        enqueueSnackbar('Failed to fetch order details', { variant: 'error' }),
      )
  }, [params.id])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Order Details</Title>
      <Text>Review the details of your order below.</Text>
      {order && (
        <Card>
          <Row gutter={16}>
            <Col span={24}>
              <List
                itemLayout="horizontal"
                dataSource={order.orderItems}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.product.pictureUrl} />}
                      title={
                        <a
                          onClick={() =>
                            router.push(`/product/${item.productId}`)
                          }
                        >
                          {item.product.name}
                        </a>
                      }
                      description={`Quantity: ${item.quantity}`}
                    />
                    <div>Price: ${item.priceAtPurchase.toFixed(2)}</div>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={24}>
              <Tag icon={<UserOutlined />} color="blue">
                {order.user.name}
              </Tag>
              <Tag icon={<DollarOutlined />} color="green">
                Total: ${order.totalPrice.toFixed(2)}
              </Tag>
              <Tag icon={<ShoppingCartOutlined />} color="volcano">
                Status: {order.status}
              </Tag>
              <Tag icon={<CalendarOutlined />} color="purple">
                Order Date: {dayjs(order.orderDate).format('MMM D, YYYY')}
              </Tag>
            </Col>
          </Row>
        </Card>
      )}
    </PageLayout>
  )
}
