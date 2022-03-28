import styled from "styled-components";

import { darkenColor, lightenColor, randomColor } from "@/styles/utils/colorInput";

export const LanguageColorList = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  PHP: "#4F5D95",
  other: []
};

const getRandomColor = (index) => {
  const colorInMap = LanguageColorList.other[index]
  if (colorInMap) return colorInMap
  LanguageColorList.other[index] = lightenColor(randomColor(), index * 18)
  return LanguageColorList.other[index]
}

const LanguageProgressContainer = styled.span`
  display: flex;
  margin: 12px 0;
  height: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => darkenColor(theme.palette.background, 3)};
  border-radius: 6px;
  outline: 1px solid transparent;
`;
export const LanguageProgressItem = styled.span`
  background-color: ${({ language, index }) =>
    LanguageColorList[language] || getRandomColor(index)};
  width: ${({ percentage }) => percentage}%;
  outline: 2px solid transparent;
`;

export const LanguageColorLabel = styled.span`
  display: inline-block;
  margin: 10px 16px;
  margin-left: 0;
  line-height: 1.5;

  &::before {
    content: '';
    position: relative;
    top: 1px;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border: 1px solid ${({ theme }) =>
      lightenColor(theme.palette.background, 3)};
    border-radius: 50%;
    vertical-align: middle;

    background-color: ${({ language, index }) =>
      LanguageColorList[language] || getRandomColor(index)};
  }

  &::after {
    content: '${({ percentage }) => percentage}%';
    display: inline-block;
    margin-left: 8px;
    position: relative;
    color: ${({ theme }) => lightenColor(theme.typography.color.dark, 10)};
    vertical-align: middle;
  }
`;

export const LanguageColorLabelText = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.typography.color.light};
  vertical-align: middle;
`

const LanguageProgress = ({ data }) => {
  return (
    <div>
      <LanguageProgressContainer>
        {data.map(({ language, percentage }, index) => (
          <LanguageProgressItem
            key={index}
            language={language}
            index={index}
            percentage={percentage}
          ></LanguageProgressItem>
        ))}
      </LanguageProgressContainer>
      {data.map(({ language, percentage }, index) => (
        <LanguageColorLabel
          key={index}
          language={language}
          index={index}
          percentage={percentage}
        >
          <LanguageColorLabelText>
            {language}
          </LanguageColorLabelText>
        </LanguageColorLabel>
      ))}
    </div>
  );
};

export default LanguageProgress;
