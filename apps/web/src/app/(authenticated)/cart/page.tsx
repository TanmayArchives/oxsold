'use client'

import { useEffect, useState } from 'react'
import { Button, Table, InputNumber, Space, Typography, Modal } from 'antd'
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ShoppingCartPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      fetchCartItems()
    }
  }, [userId])

  const fetchCartItems = async () => {
    setLoading(true)
    try {
      const carts = await Api.Cart.findManyByUserId(userId, {
        includes: ['cartItems', 'cartItems.product'],
      })
      if (carts.length > 0) {
        setCartItems(carts[0].cartItems || [])
      }
    } catch (error) {
      enqueueSnackbar('Failed to fetch cart items', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (cartItemId, quantity) => {
    try {
      await Api.CartItem.updateOne(cartItemId, { quantity })
      fetchCartItems()
      enqueueSnackbar('Quantity updated', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update quantity', { variant: 'error' })
    }
  }

  const removeItem = async cartItemId => {
    try {
      await Api.CartItem.deleteOne(cartItemId)
      fetchCartItems()
      enqueueSnackbar('Item removed', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to remove item', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: product => <Text>{product.name}</Text>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <Space>
          <MinusCircleOutlined
            onClick={() => updateQuantity(record.id, Math.max(1, quantity - 1))}
          />
          <InputNumber
            min={1}
            max={100}
            value={quantity}
            onChange={value => updateQuantity(record.id, value)}
          />
          <PlusCircleOutlined
            onClick={() => updateQuantity(record.id, quantity + 1)}
          />
        </Space>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'product',
      key: 'price',
      render: product => <Text>${product.price.toFixed(2)}</Text>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => removeItem(record.id)}
        />
      ),
    },
  ]

  const handleCheckout = () => {
    router.push('/checkout')
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Shopping Cart</Title>
      <Text>Your items are waiting for you to review and checkout.</Text>
      <Table
        columns={columns}
        dataSource={cartItems.map(item => ({ ...item, key: item.id }))}
        loading={loading}
        pagination={false}
      />
      <Space
        style={{ marginTop: 20, justifyContent: 'flex-end', width: '100%' }}
      >
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </Space>
    </PageLayout>
  )
}
