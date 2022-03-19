import styled from "styled-components";

import BasicLayout from "./BasicLayout";
import Sidebar from "./Sidebar";
import Main from "./Main";

const ProfileCard = styled.div``;

const ProfileCardTitle = styled.h1``;

const ProfileCardTitleInner = styled.span`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${({ theme }) => theme.typography.color.light};
  `;

const AvatarImage = styled.img`
  height: auto;

  border-radius: 50%;

  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.palette.background};
  flex-shrink: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.typography.color.light}55;
`;

const ProfileLayout = ({ children, title, profile }) => {
  const { image, name } = profile;

  return (
    <BasicLayout title={title}>
      <Sidebar className="main_block">
        <ProfileCard>
          <AvatarImage width="260" height="260" src={image} />
          <ProfileCardTitle>
            <ProfileCardTitleInner>{name}</ProfileCardTitleInner>
          </ProfileCardTitle>
        </ProfileCard>
      </Sidebar>
      <Main className="main_block">{children}</Main>
    </BasicLayout>
  );
};

export default ProfileLayout;
