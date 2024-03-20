'use client'

import React, { useState } from 'react'
import { Typography, Form, Input, Button, Select, Row, Col } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddNewAddressPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const [form] = Form.useForm()

  const handleSubmit = async (values: any) => {
    try {
      await Api.Address.createOneByUserId(userId, values)
      enqueueSnackbar('Address added successfully', { variant: 'success' })
      router.push(`/user/${userId}/address`)
    } catch (error) {
      enqueueSnackbar('Failed to add address', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <Title level={2}>
            <HomeOutlined /> Add New Address
          </Title>
          <Text type="secondary">
            Fill in the details below to add a new address to your profile.
          </Text>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            style={{ marginTop: '20px' }}
          >
            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: 'Please input your street!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please input your city!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: 'Please input your state!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Zip Code"
              name="zipCode"
              rules={[
                { required: true, message: 'Please input your zip code!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              rules={[
                { required: true, message: 'Please select your country!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address Type"
              name="addressType"
              rules={[
                { required: true, message: 'Please select your address type!' },
              ]}
            >
              <Select placeholder="Select an address type">
                <Option value="Home">Home</Option>
                <Option value="Work">Work</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Address
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
