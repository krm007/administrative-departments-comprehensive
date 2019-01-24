/* global window, document, Blob */
import * as React from "react";
import { Button, message } from "antd";

/*const defaultProps = {
  id: 'button-download-as-xls',
  className: 'button-download',
  buttonText: 'Download',
};*/
interface Iprops {
  table: string;
  filename: string;
  sheet: string;
  id: string;
  className: string;
  buttonText: string;
  previousAction?: () => Promise<any>;
}
class ReactHTMLTableToExcel extends React.Component<Iprops> {
  public static base64(s: any) {
    return window.btoa(unescape(encodeURIComponent(s)));
  }

  public static format(s: any, c: any) {
    return s.replace(/{(\w+)}/g, (m: any, p: any) => c[p]);
  }
  constructor(props: Iprops) {
    super(props);
    this.handleDownload = this.handleDownload.bind(this);
  }

  public handleDownload() {
    if (this.props.previousAction) {
      this.props.previousAction();
    }
    if (!document) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Failed to access document object");
      }

      return null;
    }
    const tableExport = document.getElementById(this.props.table);
    if (tableExport !== null) {
      if (tableExport.nodeType !== 1 || tableExport.nodeName !== "TABLE") {
        if (process.env.NODE_ENV !== "production") {
          console.error("Provided table property is not html table element");
        }

        return null;
      }
    }

    if (tableExport === null) {
      message.error("没有数据");
      return null;
    }
    const table = tableExport.outerHTML;
    table.replace(/<(img).*?>/g, "");
    const sheet = String(this.props.sheet);
    const filename = `${String(this.props.filename)}.xls`;

    const uri = "data:application/vnd.ms-excel;base64,";
    const template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
      'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
      'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
      "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
      "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
      "xml><![endif]--></head><body>{table}</body></html>";

    const context = {
      worksheet: sheet || "Worksheet",
      table
    };

    // If IE11
    if (window.navigator.msSaveOrOpenBlob) {
      const fileData = [
        `${'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
          'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
          'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
          "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
          "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
          "xml><![endif]--></head><body>"}${table}</body></html>`
      ];
      const blobObject = new Blob(fileData);
      // @ts-ignore
      document.getElementById("react-html-table-to-excel").click()(() => {
        window.navigator.msSaveOrOpenBlob(blobObject, filename);
      });

      return true;
    }

    const element = window.document.createElement("a");
    element.href =
      uri +
      ReactHTMLTableToExcel.base64(
        ReactHTMLTableToExcel.format(template, context)
      );
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    return true;
  }

  public render() {
    return (
      <Button
        id={this.props.id}
        className={this.props.className}
        type="primary"
        size={"small"}
        onClick={this.handleDownload}
      >
        {this.props.buttonText}
      </Button>
    );
  }
}

export default ReactHTMLTableToExcel;
