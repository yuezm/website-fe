import { useMemoizedFn } from 'ahooks';
import { Form, Input, Modal, Select } from 'antd';
import { FC, memo, useEffect } from 'react';

interface HyperLinkProps {
  open: boolean;
  initialValues: HyperLinkModalValues | undefined;
  onOk(value: HyperLinkModalValues): void;
  onCancel(): void;
}

export interface HyperLinkModalValues {
  title: string;
  url: string;
}

interface HyperLinkFormValues {
  title: string;
  url: string;
  protocol: string;
}

const initHyperLinkFormValues: HyperLinkFormValues = {
  title: '',
  url: '',
  protocol: 'http://',
};

const HyperLinkModal: FC<HyperLinkProps> = (props) => {
  const { initialValues, open, onCancel, onOk } = props;

  const [formIns] = Form.useForm<HyperLinkFormValues>();

  const onModalOK = useMemoizedFn(() => {
    formIns.validateFields().then(() => {
      const formValues = formIns.getFieldsValue();
      onOk({
        title: formValues.title,
        url: formValues.protocol + formValues.url,
      });
    });
  });

  useEffect(() => {
    if (initialValues) {
      const u = new URL(initialValues.url);
      formIns.setFieldsValue({
        title: initialValues.title,
        url: initialValues.url.replace(u.protocol, ''),
        protocol: u.protocol,
      });
    } else {
      formIns.setFieldsValue(initHyperLinkFormValues);
    }
  }, [formIns, initialValues]);

  return (
    <Modal title="超链接" open={open} onOk={onModalOK} onCancel={onCancel}>
      <Form form={formIns}>
        <Form.Item label="名称" name="title" rules={[{ required: true, message: '名称为必填项' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="链接" name="url" rules={[{ required: true, message: 'url为必填项' }]}>
          <Input
            addonBefore={
              <Form.Item noStyle name="protocol">
                <Select className="w-24">
                  <Select.Option value="http://">http://</Select.Option>
                  <Select.Option value="https://">https://</Select.Option>
                </Select>
              </Form.Item>
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(HyperLinkModal);
