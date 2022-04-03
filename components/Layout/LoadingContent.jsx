import Image from "next/image";
import styled from "styled-components";

import * as Logo from "@/components/Layout/Logo";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const ArticleContainer = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ArticleContentTitle = styled.p`
  margin: 16px;

  ${mediaDesktopMixin.L(`
    font-size: 28px;
  `)}

  ${mediaMobileMixin.L(`
    font-size: 22px;
  `)}
`;

const ArticleContentIcon = styled(Logo.LoadingBubble)`
  display: inline-block;
  overflow: visible;
  vertical-align: text-bottom;
  fill: currentColor;

  width: 24px;
  height: 24px;

  margin-right: 4px;
  margin-bottom: 16px;
  margin-left: 4px;

  ${mediaDesktopMixin.L(`
    width: 36px;
    height: 36px;
  `)}
`;

const LoadingContent = ({ className }) => {
  return (
    <ArticleContainer className={className}>
        <ArticleContentIcon />
        <ArticleContentTitle>{"Loading ..."}</ArticleContentTitle>
    </ArticleContainer>
  );
};

export default LoadingContent;
