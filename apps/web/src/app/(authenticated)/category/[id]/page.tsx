'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Space } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CategoryDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [category, setCategory] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryFound = await Api.Category.findOne(params.id, {
          includes: ['products'],
        })
        setCategory(categoryFound)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch category details', {
          variant: 'error',
        })
        setLoading(false)
      }
    }

    if (params.id) {
      fetchCategory()
    }
  }, [params.id])

  const navigateToProduct = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  if (loading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>{category?.name}</Title>
        <Text>{category?.description}</Text>
        <Row gutter={[16, 16]}>
          {category?.products?.map((product: any) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.pictureUrl} />}
                onClick={() => navigateToProduct(product.id)}
                actions={[
                  <ShoppingCartOutlined
                    key="add-to-cart"
                    onClick={() =>
                      enqueueSnackbar('Added to cart', { variant: 'success' })
                    }
                  />,
                ]}
              >
                <Card.Meta
                  title={product.name}
                  description={`$${product.price}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
