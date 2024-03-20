'use client'

import React, { useEffect, useState } from 'react'
import {
  Button,
  Form,
  Input,
  Modal,
  Table,
  Typography,
  Space,
  Select,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyAddressesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [addresses, setAddresses] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [currentAddress, setCurrentAddress] = useState(null)

  useEffect(() => {
    if (userId) {
      fetchAddresses()
    }
  }, [userId])

  const fetchAddresses = async () => {
    try {
      const addressesFound = await Api.Address.findManyByUserId(userId, {
        includes: ['user'],
      })
      setAddresses(addressesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch addresses', { variant: 'error' })
    }
  }

  const handleAddAddress = async values => {
    try {
      await Api.Address.createOneByUserId(userId, values)
      enqueueSnackbar('Address added successfully', { variant: 'success' })
      fetchAddresses()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to add address', { variant: 'error' })
    }
  }

  const handleUpdateAddress = async (id, values) => {
    try {
      await Api.Address.updateOne(id, values)
      enqueueSnackbar('Address updated successfully', { variant: 'success' })
      fetchAddresses()
      setIsModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to update address', { variant: 'error' })
    }
  }

  const handleDeleteAddress = async id => {
    try {
      await Api.Address.deleteOne(id)
      enqueueSnackbar('Address deleted successfully', { variant: 'success' })
      fetchAddresses()
    } catch (error) {
      enqueueSnackbar('Failed to delete address', { variant: 'error' })
    }
  }

  const showModal = (address = null) => {
    setCurrentAddress(address)
    setIsModalVisible(true)
    if (address) {
      form.setFieldsValue(address)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const columns = [
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Zip Code',
      dataIndex: 'zipCode',
      key: 'zipCode',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Address Type',
      dataIndex: 'addressType',
      key: 'addressType',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteAddress(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title>My Addresses</Title>
      <Text>
        Manage your addresses here. You can add, update, or delete them as
        needed.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add New Address
      </Button>
      <Table dataSource={addresses} columns={columns} rowKey="id" />

      <Modal
        title={currentAddress ? 'Edit Address' : 'Add New Address'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={
            currentAddress
              ? () =>
                  handleUpdateAddress(currentAddress.id, form.getFieldsValue())
              : handleAddAddress
          }
        >
          <Form.Item name="street" label="Street" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="addressType"
            label="Address Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="Home">Home</Option>
              <Option value="Work">Work</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentAddress ? 'Update Address' : 'Add Address'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
