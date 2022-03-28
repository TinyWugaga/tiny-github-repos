import Image from "next/image";
import styled from "styled-components";

import * as Logo from "@/components/Layout/Logo";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const ArticleContainer = styled.article`
  position: relative;
  padding: 32px;
  text-align: center;
`;

const ArticleContent = styled.div`
  width: 100%;
  min-height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaDesktopMixin.L(`
    justify-content: flex-end;
  `)}

  ${mediaMobileMixin.L(`
    justify-content: center;
  `)}
`;

const ArticleContentTitle = styled.h2`
  margin-bottom: 4px;

  ${mediaDesktopMixin.L(`
    font-size: 36px;
  `)}

  ${mediaMobileMixin.L(`
    font-size: 24px;
  `)}
`;

const ArticleContentIcon = styled(Logo.Repo)`
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

const EmptyRepoArticle = () => {
  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleContentIcon />
        <ArticleContentTitle>
          {"This organization has no public repositories."}
        </ArticleContentTitle>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default EmptyRepoArticle;
