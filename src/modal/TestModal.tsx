import { Button, Form, Space } from "antd";
import React from "react";
import ModalLayout from ".";

const TestModal = ({
  title,
  subtitle,
  type,
  isOpen,
  closeModal,
  handleModal,
  setIsOpen,
}: {
  title?: any;
  subtitle?: any;
  type?: any;
  isOpen?: any;
  closeModal?: any;
  handleModal?: any;
  setIsOpen?: any;
}) => {
  const onReset = () => {
    setIsOpen(false);
    handleModal();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalLayout
      className="modal"
      width={300}
      isHeaderNone="none"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div className="my-8">
        <p className=" text-justify">Are you want to sure you want to close</p>
      </div>
      <Form.Item>
        <Space>
          <Button htmlType="button" onClick={handleClose}>
            No
          </Button>
          <Button
            type="primary"
            htmlType="button"
            className=" !bg-green-300 text-black"
            onClick={onReset}
          >
            Yes
          </Button>
        </Space>
      </Form.Item>
    </ModalLayout>
  );
};

export default TestModal;
