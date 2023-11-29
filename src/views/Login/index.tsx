/*
 * @Author: YanMeng
 * @Date: 2023-03-25 13:13:11
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-05 08:53:00
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\Login\index.tsx
 * @Company: 沃尔玛
 */
/*
 * @Author: YanMeng
 * @Date: 2023-03-25 13:13:11
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-05 07:24:53
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\Login\index.tsx
 * @Company: 沃尔玛
 */
import styles from './login.module.scss'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.less"
import init from './bg'
function Login() {
  const [xxx, setXxx] = useState('')
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    init()
  }, [])

  return (
    <div className={styles.loginPage}>
      <canvas id="starfield" style={{ position: "absolute", top: '0', left: '0', zIndex: -6 }}></canvas>
      <div className={styles.loginPageCont}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className={styles.loginButton}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login