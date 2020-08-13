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
    <Form.Item name="prefixoTelefone" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="54">+54</Option>
            <Option value="55">+55</Option>
            <Option value="56">+56</Option>
        </Select>
    </Form.Item>
);



const mensagensDeValidacao = {
    required: 'campo obrigatório.',
    types: {
        email: '${label} e-mail inválido.',
        number: '${label} deve ser número.',
    },
    number: {
        range: '${label} deve ser entre ${min} e ${max}',
    },
};



  
const Formulario = () => {

    const confirmacaoDeSubmissao = dadosFormulario => {
       console.log(dadosFormulario);
       alert('formulário enviado com sucesso')
    }

    return (
        <Form {...layout} name="nest-messages" onFinish={confirmacaoDeSubmissao} validateMessages={mensagensDeValidacao}>
            <Form.Item
                name={['usuario', 'nome']}
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
                name={['usuario', 'email']}
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
                name="telefone"
                label="Telefone"
                rules={[{ required: true, message: 'Campo obrigatório.',}]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name={['usuario', 'idade']}
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

            <Form.Item name={['usuario', 'observacoes']} label="Oberservações">
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
                <Button type="primary" htmlType="submit" style={{borderRadius: 5}} onSubmit={confirmacaoDeSubmissao}>
                    Enviar
            </Button>
            </Form.Item>
        </Form>
    );
};

ReactDOM.render(<Formulario />, document.getElementById('container'));