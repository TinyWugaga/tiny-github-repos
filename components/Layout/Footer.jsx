import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { mediaDesktopMixin } from "@/styles/utils/device";
import { darkenColor } from "@/styles/utils/colorInput";

const Footer = styled.footer`
  width: 100%;
  max-width: 1280px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 24px;

  ${mediaDesktopMixin.L(`
    max-width: 1440px;
  `)}
`;

const FooterContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 24px;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  border-color: transparent;
  color: #ffffff;
  border-top: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};
`;

const FooterLogoWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const FooterComponent = ({ className }) => {
  return (
    <Footer className={className}>
      <FooterContainer>
        <FooterLogoWrapper onClick={() => window.open(process.env.TINY_PAGE)}>
          <Image
            src="/tiny_logo_text.svg"
            alt="TinyLogo"
            width={160}
            height={32}
          />
        </FooterLogoWrapper>
      </FooterContainer>
    </Footer>
  );
};

export default FooterComponent;
