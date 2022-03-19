import Image from "next/image";
import styled from "styled-components";

import { darkenColor, lightenColor } from "@/styles/utils/colorInput";
import * as Logo from "@/components/Layout/Logo";

const LanguageColorList = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  HTML: '#e34c26',
  PHP: '#4F5D95',
}

const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-around;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  width: 100%;
  max-width: 1012px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 16px;
`;

const ArticleContent = styled.div`
  width: 74.99995%;

  display: flex;
  flex-direction: column;
`;

const ArticleContentTitle = styled.h2`
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};

  margin: 0.67em 0;
  margin-bottom: 16px;
  line-height: 1.25;
  font-size: 2em;
  font-weight: 600;

  p {
    margin-bottom: 8px;
  }
`;

const ArticleContentText = styled.p`
  vertical-align: middle;
  line-height: 1.2;
`;
const ArticleContentIcon = styled(Logo.StarFilled)`
  width: 16px;
  height: 16px;

  margin-right: 12px;
`;

const ArticleContentBottom = styled.div`
  font-size: 14px;
  margin-top: 8px;
  padding: 16px 0;

  border-top: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};
`

const LanguageProgress = styled.span`
  display: flex;
  height: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => darkenColor(theme.palette.background, 3)};
  border-radius: 6px;
  outline: 1px solid transparent;
`
const LanguageProgressItem = styled.span`
  background-color: ${({ language }) => LanguageColorList[language] || '#eaeaea'};
  width: ${({ percentage }) => percentage};
  outline: 2px solid transparent;
`

const LanguageColorLabel = styled.span`
  display: inline-block;
  margin: 12px 16px;
  margin-left: 0;
  line-height: 1.5;

  &::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 1px;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border: 1px solid ${({ theme }) => lightenColor(theme.palette.background, 3)};
    border-radius: 50%;

    background-color: ${({language}) => LanguageColorList[language] || '#eaeaea'};
  }

  &::after {
    content: '${({ percentage }) => percentage}';
    display: inline-block;
    margin-left: 8px;
    position: relative;
    color: ${({ theme }) => theme.typography.color.dark};
  }
`

const ArticleContentImage = styled.div`
  width: 24.99995%;

  display: flex;
  flex-direction: column;
  justify-content: center
`;

const RepoArticle = ({ repo }) => {
  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleContentTitle>
          <p>{"About"}</p>
          <p>{repo.description}</p>
        </ArticleContentTitle>
        <ArticleContentText>
          <ArticleContentIcon />
          {repo.stargazers_count}
          {" stars"}
        </ArticleContentText>
        <ArticleContentText>
          <ArticleContentIcon />
          {repo.watchers}
          {" watching"}
        </ArticleContentText>
        <ArticleContentText>
          <ArticleContentIcon />
          {repo.forks}
          {" forks"}
        </ArticleContentText>
        <ArticleContentBottom>
            <LanguageProgress>
              <LanguageProgressItem language="JavaScript" percentage="70%"></LanguageProgressItem>
              <LanguageProgressItem language="TypeScript" percentage="30%"></LanguageProgressItem>
            </LanguageProgress>
            <LanguageColorLabel language="JavaScript" percentage="70%">
              {"JavaScript"}
            </LanguageColorLabel>
            <LanguageColorLabel language="TypeScript" percentage="30%">
              {"TypeScript"}
            </LanguageColorLabel>
        </ArticleContentBottom>
      </ArticleContent>
      <ArticleContentImage>
        <Image src="/octocat.svg" alt="TinyOctocat" width={360} height={540} />
      </ArticleContentImage>
    </ArticleContainer>
  );
};

export default RepoArticle;
