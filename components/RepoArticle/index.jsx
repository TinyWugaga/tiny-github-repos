import Image from "next/image";
import styled from "styled-components";

import LanguageProgress, {
  LanguageProgressItem,
  LanguageColorLabel
} from "./LanguageProgress";
import * as Logo from "@/components/Layout/Logo";

import { darkenColor, lightenColor } from "@/styles/utils/colorInput";
import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-around;
  gap: 6%;

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

  ${mediaMobileMixin.M(`
    flex-direction: column;
    gap: 16px;

    > div {
      flex: 1;
      width: 100%;
    }
  `)}
`;

const ArticleContent = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
`;

const ArticleContentTitle = styled.div`
  flex-grow: 2;

  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};

  margin: 0.67em 0;
  margin-bottom: 24px;
  line-height: 1.25;
  font-weight: 500;

  h2 {
    ${mediaMobileMixin.M(`
        min-height: 30%;
    `)}
    ${mediaMobileMixin.S(`
        min-height: 0%;
    `)}
  }

  p {
    font-size: 18px;
    padding: 12px 0px;

    margin-bottom: 8px;
    font-weight: 300;
  }
`;

const ArticleContentText = styled.p`
  flex-grow: 1;

  height: 1em;
  padding-top: 0.5em;
  font-size: 1em;
  vertical-align: middle;
  line-height: 1.2;
`;

const ArticleContentBottom = styled.div`
  flex-grow: 3;

  font-size: 14px;
  margin-top: 24px;
  padding: 16px 0;

  border-top: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};
`;

const ArticleContentAttachment = styled.div`
  position: relative;
  width: 34%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;

  border-radius: 15px;

  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.palette.background, 5)}33;

    box-shadow: 0px 0px 2px 3px
      ${({ theme }) => lightenColor(theme.typography.color.dark, 8)}77;
    cursor: pointer;

    color: ${({ theme }) => theme.palette.info};
  }
`;

const ArticleContentImage = styled.div`
  padding-top: 10%;
  height: 90%;
  min-height: 200px;

  ${mediaMobileMixin.M(`
    width: 80%;
    height: 100%;
    padding-top: 0%;
    padding-left: 20%;
  `)}

  ${mediaMobileMixin.S(`
    padding-left: 0%;
    width: 100%;
  `)}
`;

const ArticleContentImageLabel = styled.div`
  display: block;
  width: 40%;
  max-width: 220px;
  height: auto;
  padding: 18px 2px 30px;

  position: absolute;
  top: 6%;
  left: 5%;
  margin: auto;

  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  background-image: url("/chat-bubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${mediaMobileMixin.M(`
    padding: 16px 2px 28px;
    left: 2%;
  `)}

  ${mediaMobileMixin.S(`
    padding: 10px 2px 24px;
    top: 3%;
    left: 4%;
    font-size: 1rem;
  `)}
`;

const getArticleIcon = logo => styled(logo)`
  width: 16px;
  height: 16px;

  margin-right: 12px;
`;

const RepoArticle = ({
  article: {
    description,
    stargazers_count,
    forks,
    watchers,
    link,
    languages
  } = {}
}) => {
  const contentItems = [
    {
      key: "stargazers_count",
      value: stargazers_count,
      icon: getArticleIcon(Logo.StarFilled),
      label: "stars"
    },
    {
      key: "watchers",
      value: watchers,
      icon: getArticleIcon(Logo.Eye),
      label: "watching"
    },
    {
      key: "forks",
      value: forks,
      icon: getArticleIcon(Logo.Fork),
      label: "forks"
    }
  ];

  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleContentTitle>
          <h2>{"About"}</h2>
          <p>{description}</p>
        </ArticleContentTitle>
        {contentItems.map(({ icon: Icon, key, value, label }) => (
          <ArticleContentText key={key}>
            <Icon />
            {`${value} ${label}`}
          </ArticleContentText>
        ))}
        <ArticleContentBottom>
          {Boolean(languages && Object.values(languages).length) && (
            <LanguageProgress data={languages} />
          )}
        </ArticleContentBottom>
      </ArticleContent>
      <ArticleContentAttachment onClick={() => window.open(link)}>
        <ArticleContentImage>
          <Image
            src="/octocat.svg"
            alt="TinyOctocat"
            width={360}
            height={540}
          />
        </ArticleContentImage>
        <ArticleContentImageLabel>{"Repo"}</ArticleContentImageLabel>
      </ArticleContentAttachment>
    </ArticleContainer>
  );
};

export default RepoArticle;
