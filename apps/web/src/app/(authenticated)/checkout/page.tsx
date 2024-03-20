'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, Select, Space, Table, Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CheckoutPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [cartItems, setCartItems] = useState([])
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>(
    undefined,
  )
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchCartAndAddresses = async () => {
      try {
        if (userId) {
          const userCart = await Api.Cart.findManyByUserId(userId, {
            includes: ['cartItems', 'cartItems.product'],
          })
          const userAddresses = await Api.Address.findManyByUserId(userId, {
            includes: ['user'],
          })
          setCartItems(userCart[0]?.cartItems || [])
          setAddresses(userAddresses)
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch cart or addresses', {
          variant: 'error',
        })
      }
    }

    fetchCartAndAddresses()
  }, [userId])

  const handleCheckout = async (values: any) => {
    try {
      if (userId && selectedAddress) {
        const order = await Api.Order.createOneByUserId(userId, {
          totalPrice: cartItems.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0,
          ),
          status: 'Pending',
          orderDate: new Date().toISOString(),
        })

        await Promise.all(
          cartItems.map(item =>
            Api.OrderItem.createOneByOrderId(order.id, {
              priceAtPurchase: item.product.price,
              quantity: item.quantity,
              productId: item.productId,
            }),
          ),
        )

        await Api.Payment.createOneByOrderId(order.id, {
          amount: order.totalPrice,
          paymentDate: new Date().toISOString(),
          paymentMethod: values.paymentMethod,
        })

        enqueueSnackbar('Checkout successful', { variant: 'success' })
        router.push('/orders')
      }
    } catch (error) {
      enqueueSnackbar('Checkout failed', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: (text: any, record: any) => <Text>{record.product.name}</Text>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: any) => <Text>{text}</Text>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: any, record: any) => <Text>${record.product.price}</Text>,
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <ShoppingCartOutlined /> Checkout
        </Title>
        <Table
          dataSource={cartItems}
          columns={columns}
          rowKey="id"
          pagination={false}
        />
        <Form form={form} layout="vertical" onFinish={handleCheckout}>
          <Form.Item
            name="address"
            label="Shipping Address"
            rules={[
              {
                required: true,
                message: 'Please select your shipping address',
              },
            ]}
          >
            <Select
              placeholder="Select address"
              onChange={value => setSelectedAddress(value)}
            >
              {addresses.map(address => (
                <Option
                  key={address.id}
                  value={address.id}
                >{`${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="paymentMethod"
            label="Payment Method"
            rules={[
              { required: true, message: 'Please select your payment method' },
            ]}
          >
            <Select placeholder="Select payment method">
              <Option value="Credit Card">Credit Card</Option>
              <Option value="Paypal">Paypal</Option>
              <Option value="Bank Transfer">Bank Transfer</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Place Order
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
