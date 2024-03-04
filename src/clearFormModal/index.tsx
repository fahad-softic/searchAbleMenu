import { Button, Form, Input, Space } from "antd";
import React, { useState } from "react";
import TestModal from "../modal/TestModal";

const ClearFormModal = () => {
  const [form] = Form.useForm();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen", isOpen);

  const onFinish = (values: any) => {
    console.log(values);
    form.resetFields();
  };

  const onReset = () => {
    // form.resetFields();
    setIsOpen(!isOpen);
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  const formReset = () => {
    console.log("resetFields", form.resetFields());
    form.resetFields();
  };
  console.log("firstName", form?.getFieldsValue()?.firstName);
  return (
    <div className=" h-full flex justify-center items-center ">
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button htmlType="button" onClick={onReset}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className=" !bg-green-300 text-black"
            >
              Order Callback
            </Button>
          </Space>
        </Form.Item>
      </Form>

      {isOpen && (
        <TestModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleModal={formReset}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default ClearFormModal;
