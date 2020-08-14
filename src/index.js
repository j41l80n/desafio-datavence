import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button, Select, Upload, Layout, Menu, Breadcrumb, Avatar  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
    SettingFilled,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
              </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
              </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Jailson">
                            <Menu.Item key="3">Datavence</Menu.Item>
                            <Menu.Item key="4">Datavence</Menu.Item>
                            <Menu.Item key="5">Datavence</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<SettingFilled />} title="Configurações">
                            <Menu.Item key="6">Datavence</Menu.Item>
                            <Menu.Item key="8">Datavence</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />} />
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>

                        <div className="site-layout-background border" style={{ padding: 24, minHeight: 360 }}>
                        <Avatar size={64} icon={<UserOutlined />} />

                            <Formulario></Formulario>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Desafio Datavence</Footer>
                </Layout>
            </Layout>
        );
    }
}


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
                rules={[{ required: true, message: 'Campo obrigatório.', }]}
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
                <Button type="primary" htmlType="submit" style={{ borderRadius: 5 }} onSubmit={confirmacaoDeSubmissao}>
                    Enviar
            </Button>
            </Form.Item>
        </Form>
    );
};

ReactDOM.render(<SiderDemo />, document.getElementById('container'));