import * as React from "react";

export function hejiColumns(value: string, n: number, text?: string) {
  if (value) {
    const xiaoji = value.substr(value.length - 2, 2);
    if (xiaoji === "小计") {
      return {
        children: <span style={{ fontWeight: "bold" }}>{value}</span>,
        props: {
          colSpan: n
        }
      };
    } else {
      if (text === undefined) {
        return value;
      } else {
        return text;
      }
    }
  } else {
    if (text === undefined) {
      return value;
    } else {
      return text;
    }
  }
}
