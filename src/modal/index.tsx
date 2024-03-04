import { Modal } from "antd";
import React from "react";
interface ModalLayoutI {
  isOpen: boolean;
  closeModal?: any;
  children: any;
  width?: number;
  className?: string;
  isHeaderNone?: boolean;
}
const ModalLayout = ({
  isOpen,
  closeModal,
  children,
  width,
  className,
  isHeaderNone,
}) => {
  return (
    <>
      <Modal
        centered={true}
        footer={null}
        open={isOpen}
        closable={false}
        onOk={() => closeModal()}
        onCancel={() => closeModal()}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalLayout;
