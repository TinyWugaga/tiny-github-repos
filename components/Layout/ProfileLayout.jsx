import styled from "styled-components";

import BasicLayout from "./BasicLayout";
import Sidebar from "./Sidebar";
import Main from "./Main";
import LoadingContent from "@/components/Layout/LoadingContent";

import { mediaMobileMixin } from "@/styles/utils/device";

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  align-items: center;

  ${mediaMobileMixin.L(`
    flex-direction: row;
  `)}
`;

const ProfileCardTitle = styled.h1`
  top: 0;
  padding-top: 18px;
  padding-bottom: 18px;
  float: left;
  width: 100%;
`;

const ProfileCardTitleInner = styled.span`
  display: block;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
  color: ${({ theme }) => theme.typography.color.light};
`;
const ProfileCardSubtitleInner = styled(ProfileCardTitleInner)`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: ${({ theme }) => theme.typography.color.light}88;
`;

const AvatarImage = styled.img`
  display: inline-block;
  flex-shrink: 0;

  width: 100%;
  height: auto;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.typography.color.light};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.typography.color.light}33;

  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.palette.background};

  cursor: pointer;

  ${mediaMobileMixin.L(`
    width: 16.6666%;
    margin-right: 16px;
  `)}
`;

const ProfileLayout = ({ children, profile = {}, isLoading, ...props }) => {
  const { login, name, image, link } = profile;

  return (
    <BasicLayout {...props}>
      <Sidebar className="main_block">
        <ProfileCard>
          <AvatarImage
            width="260"
            height="260"
            src={image}
            onClick={() => window.open(link)}
          />
          <ProfileCardTitle>
            <ProfileCardTitleInner>{name}</ProfileCardTitleInner>
            <ProfileCardSubtitleInner>{login}</ProfileCardSubtitleInner>
          </ProfileCardTitle>
        </ProfileCard>
      </Sidebar>
      <Main className="main_block">
        {isLoading ? <LoadingContent /> : children}
      </Main>
    </BasicLayout>
  );
};

export default ProfileLayout;
