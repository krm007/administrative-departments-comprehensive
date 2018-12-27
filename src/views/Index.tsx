import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Form, Icon, Upload } from "antd";
import { FormComponentProps } from "antd/lib/form";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      height:1500
    }
  });

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {}

/**
 * 描述：
 *  测试
 * @author 12859
 * @date 2018/12/4-15:23
 */
class Index extends React.Component<Iprops> {
  public normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    console.log(JSON.stringify(this.props.form.getFieldsValue()));
    return e && e.fileList;
  };
  public render() {
    const { classes } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={classes.root}>
        <Form>
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            label="Upload"
            extra="longgggggggggggggggggggggggggggggggggg"
          >
            {getFieldDecorator("upload", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="logo" listType="picture-card">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(withStyles(styles)(Index));
