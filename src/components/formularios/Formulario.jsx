import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="54">+54</Option>
            <Option value="55">+55</Option>
            <Option value="56">+56</Option>
        </Select>
    </Form.Item>
);



const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Formulario = () => {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Nome"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        required: true,

                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Telefone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Idade"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item name={['user', 'introduction']} label="Oberservações">
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Anexos">
                <Upload>
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Enviar
            </Button>
            </Form.Item>
        </Form>
    );
};

ReactDOM.render(<Formulario />, document.getElementById('container'));