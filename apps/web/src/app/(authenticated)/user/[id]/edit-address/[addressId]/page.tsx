'use client'

import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Typography, Row, Col } from 'antd'
import { LoadingOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditAddressPage() {
  const router = useRouter()
  const { id: userId, addressId } = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [address, setAddress] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const addresses = await Api.Address.findManyByUserId(userId, {
          includes: ['user'],
        })
        const currentAddress = addresses.find(addr => addr.id === addressId)
        if (currentAddress) {
          setAddress(currentAddress)
          form.setFieldsValue(currentAddress)
        } else {
          enqueueSnackbar('Address not found', { variant: 'error' })
          router.push(`/user/${userId}/address`)
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch address', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchAddress()
  }, [userId, addressId, form, router])

  const handleSave = async (values: any) => {
    try {
      setLoading(true)
      await Api.Address.updateOne(addressId, { ...values, userId })
      enqueueSnackbar('Address updated successfully', { variant: 'success' })
      router.push(`/user/${userId}/address`)
    } catch (error) {
      enqueueSnackbar('Failed to update address', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  if (loading)
    return (
      <PageLayout layout="narrow">
        <LoadingOutlined />
      </PageLayout>
    )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Edit Address</Title>
      <Text>Edit your existing address details below.</Text>
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="street"
              label="Street"
              rules={[{ required: true, message: 'Street is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'City is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: 'State is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[{ required: true, message: 'Zip Code is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: 'Country is required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="addressType"
              label="Address Type"
              rules={[{ required: true, message: 'Address Type is required' }]}
            >
              <Select>
                <Option value="Home">Home</Option>
                <Option value="Work">Work</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Save Address
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
