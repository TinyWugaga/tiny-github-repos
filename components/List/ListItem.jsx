import Link from "next/link";
import styled from "styled-components";

import { darkenColor, lightenColor } from "@/styles/utils/colorInput";
import buttonCss from "@/styles/commonStyle/button";
import * as Logo from "@/components/Layout/Logo";

const ListItemContainer = styled.div`
  position: relative;
  display: flex;

  padding-top: 24px;
  padding-bottom: 24px;

  width: 100%;
  border-bottom: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 20)};

  &:nth-last-child(1) {
    border-bottom: unset;
  }
`;

const ListItemBlock = styled.div`
  display: inline-block;
`;
const ListItemBlockLeft = styled(ListItemBlock)`
  width: 74.99999997%;
`;
const ListItemBlockRight = styled(ListItemBlock)`
  width: 24.99999999%;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const ListItemBlockContainer = styled.div`
  display: flex;
  float: right;

  vertical-align: middle;
`;

const ListItemTitle = styled.h3`
  display: inline-block;
  margin-bottom: 4px;
`;
const ListItemTitleText = styled.a`
  display: inline-block;
  margin-bottom: 4px;
`;
const ListItemSubTitleText = styled.p`
  display: inline-block;
  margin-bottom: 8px;
  padding-right: 24px;
  color: ${({ theme }) => darkenColor(theme.palette.gray, 10)};
`;

const ListItemAttachment = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => darkenColor(theme.palette.gray, 5)};
`;
const ListItemAttachmentWrapper = styled.span`
  margin-left: 0;
  margin-right: 16px;

`;
const ListItemAttachmentIcon = styled(Logo.StarFilled)`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const ListItemButton = styled.button`
  ${buttonCss}

  position: relative;
  height: auto;
  float: left;

  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.typography.color.light};
  background-color: ${({ theme }) => lightenColor(theme.palette.background, 5)};
  border-color: ${({ theme }) => darkenColor(theme.palette.gray, 10)};
  box-shadow: 0 0 transparent, 0 0 transparent;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
`;

const ListItemButtonText = styled.span`
  display: inline-block;
  max-width: 125px;
  vertical-align: top;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const LikeIcon = styled(Logo.LoveLine)`
  margin-right: 4px;
  color: ${({ theme }) => theme.typography.color.light};
  vertical-align: text-bottom;

  display: inline-block;
  overflow: visible;
  fill: currentColor;

  width: 16px;
  height: 16px;
`

const ListItem = ({ data }) => {
  const { title, subtitle, attachment, link = '' } = data;
  return (
    <ListItemContainer>
      <ListItemBlockLeft>
        <ListItemTitle>
          <Link href={link} passHref>
            <ListItemTitleText>{title}</ListItemTitleText>
          </Link>
        </ListItemTitle>
        <div>
          <ListItemSubTitleText>{subtitle}</ListItemSubTitleText>
        </div>
        <ListItemAttachment>
          <ListItemAttachmentWrapper>
            <ListItemAttachmentIcon />
            {attachment}
          </ListItemAttachmentWrapper>
        </ListItemAttachment>
      </ListItemBlockLeft>
      <ListItemBlockRight>
        <ListItemBlockContainer>
          <ListItemButton>
            <LikeIcon viewBox="0 -6 24 24" />
            <ListItemButtonText>{"Like"}</ListItemButtonText>
          </ListItemButton>
        </ListItemBlockContainer>
      </ListItemBlockRight>
    </ListItemContainer>
  );
};

export default ListItem;
