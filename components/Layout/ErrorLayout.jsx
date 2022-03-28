import Link from "next/link";
import styled from "styled-components";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

import { EmptyLayout } from "@/components/Layout";
import * as Logo from "@/components/Layout/Logo";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentTitle = styled.h2`
  margin: 12px 0px;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.2;

  ${mediaDesktopMixin.L(`
    font-size: 36px;
  `)}

  ${mediaMobileMixin.L(`
    font-size: 24px;
  `)}
`;

const ContentSubtitle = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.typography.color.dark};

  ${mediaDesktopMixin.L(`
    font-size: 24px;
  `)}

  ${mediaMobileMixin.L(`
    font-size: 18px;
  `)}

  a {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.info};
  }
`;

const ContentIcon = styled(Logo.EmojiDizzyFilled)`
  display: inline-block;
  overflow: visible;
  vertical-align: text-bottom;
  fill: currentColor;

  width: 24px;
  height: 24px;

  margin-right: 4px;
  margin-bottom: 8px;
  margin-left: 4px;

  ${mediaDesktopMixin.L(`
    width: 36px;
    height: 36px;
  `)}
`;

function ErrorLayout({ message, ...props }) {
  return (
    <EmptyLayout {...props}>
      <ContentContainer>
        <ContentIcon />
        <ContentTitle>{message || "Oops, something went Wrong."}</ContentTitle>
        <ContentSubtitle>
          <Link href="/users" passHref>
            <a>{"← Go back to Home"}</a>
          </Link>
        </ContentSubtitle>
      </ContentContainer>
    </EmptyLayout>
  );
}

export default ErrorLayout;
