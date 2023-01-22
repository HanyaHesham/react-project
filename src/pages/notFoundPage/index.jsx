import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Row className="mt-15">
        <Col
          xs={{
            span: 11,
            offset: 1,
          }}
          lg={{
            span: 6,
            offset: 9,
          }}
        >
          <div className="d-flex justify-center">
            <h2 class="my-3 headline text-center">{t("public.not_found")}</h2>
          </div>

          <div className="d-flex justify-center">
            <Button appearance="primary" size="lg">
              <Link to={"/"}>{t("public.back_home")}</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
