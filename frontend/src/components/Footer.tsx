import React from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-6">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {year} {t("app.title")}
          </p>


        </div>
      </Container>
    </footer>
  );
};

export default Footer;
