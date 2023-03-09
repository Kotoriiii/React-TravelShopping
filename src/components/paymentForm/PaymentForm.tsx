import React from "react";
import { Input, Card } from "antd";
import styles from "./PaymentForm.module.css";

export const PaymentForm:React.FC = () => {

  return (
    <Card
      title="信用卡"
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      <Input></Input>
    </Card>
  );
};