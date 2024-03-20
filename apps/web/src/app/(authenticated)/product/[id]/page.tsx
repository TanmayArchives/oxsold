'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Spin, Space } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProductDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const productId = params.id
  const { enqueueSnackbar } = useSnackbar()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDetails = await Api.Product.findOne(productId)
        setProduct(productDetails)
      } catch (error) {
        enqueueSnackbar('Failed to fetch product details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [productId])

  const addToCart = async () => {
    try {
      const authentication = useAuthentication()
      const userId = authentication.user?.id
      if (!userId) {
        enqueueSnackbar('You must be logged in to add items to the cart', {
          variant: 'info',
        })
        return
      }
      await Api.CartItem.createOneByProductId(productId, {
        quantity: 1,
        cartId: userId,
      })
      enqueueSnackbar('Product added to cart successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to add product to cart', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Title level={2}>Product Details</Title>
        <Paragraph>
          Here you can find details about the product you selected. Add it to
          your cart if you like!
        </Paragraph>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Card>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Title level={4}>{product?.name}</Title>
                <Paragraph>{product?.description}</Paragraph>
                <Text strong>Price: ${product?.price}</Text>
                <br />
                <Text>Stock Quantity: {product?.stockQuantity}</Text>
                <br />
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={addToCart}
                  disabled={product?.stockQuantity === 0}
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Card>
        )}
      </Space>
    </PageLayout>
  )
}
