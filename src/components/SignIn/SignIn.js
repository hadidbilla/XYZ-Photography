import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.css";
import { Link } from "react-router-dom";
function SignIn() {
  const [signInUser, setSignInUser] = useState({});
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    const signInData = { email: values.email, password: values.password };
    console.log(signInData);
    form.resetFields();
  };
  return (
    <div className="signin-from">
      <div className="from-content">
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" to="/reset-password">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginRight: "5px" }}
            >
              Log in
            </Button>
            <span style={{ color: "white" }}>Or </span>
            <Link style={{ marginRight: "5px" }} to="/signup">
              register now!
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
