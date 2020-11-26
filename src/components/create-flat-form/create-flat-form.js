import React, { useContext } from "react";
import { useHistory } from "react-router-dom/";
import { v4 as uuidv4 } from "uuid";

import { Button, Form, Input } from "antd";

import { FlatContext } from "../context/flat-context";

const CreateFlatForm = ({ onSuccessRedirect }) => {
  const { setFlatData } = useContext(FlatContext);
  const history = useHistory();

  const handleSuccess = (values) => {
    const flat = { id: uuidv4(), ...values };
    setFlatData(flat);

    history.push(onSuccessRedirect);
  };

  const handleFailure = (error) => {
    alert(error);
  };

  // TODO - address, phone, contact, photo fields

  return (
    <Form
      name="create-flat"
      onFinish={handleSuccess}
      onFinishFailed={handleFailure}
    >
      <Form.Item label="Flat Name" name="flatName">
        <Input />
      </Form.Item>
      <Form.Item label="Flat Address" name="flatAddress">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateFlatForm;
