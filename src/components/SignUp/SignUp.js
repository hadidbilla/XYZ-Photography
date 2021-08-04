import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "antd/dist/antd.css";
import "./SignUp.css";

import { Form, Input, Row, Col, Button, Card } from "antd";
import firebaseConfig from "../../firebase.config";
firebase.initializeApp(firebaseConfig);

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
function SignUp() {
  const { form } = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <Card className="site-card-border-less-wrapper">
      <Card type="inner" title="Sign Up">
        <Form
          initialValues={{
            remember: true,
          }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                name="name"
                label="Your name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Password cannot be empty",
                  },
                  {
                    min: 6,
                    message: "Password cannot be less than 4 characters",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 12,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Card>
  );
}

export default SignUp;
