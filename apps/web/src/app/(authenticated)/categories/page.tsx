'use client'

import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Typography } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CategoriesPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesFound = await Api.Category.findMany()
        setCategories(categoriesFound)
      } catch (error) {
        enqueueSnackbar('Failed to load categories', { variant: 'error' })
      }
    }

    fetchCategories()
  }, [])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Product Categories</Title>
      <Paragraph>
        Browse through our wide range of product categories to find what you
        need.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {categories?.map(category => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              onClick={() => router.push(`/category/${category.id}`)}
              cover={
                <AppstoreOutlined
                  style={{ fontSize: '64px', margin: '24px 0' }}
                />
              }
            >
              <Card.Meta
                title={category.name}
                description={
                  category.description || 'No description available.'
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
