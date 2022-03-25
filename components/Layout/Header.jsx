import { useRouter } from 'next/router';
import Link from 'next/link'
import styled from "styled-components";

import { lightenColor } from "@/styles/utils/colorInput";
import SearchBar from "@/components/SearchBar";
import * as Logo from "./Logo";

const HeaderWrapper = styled.div`
  z-index: 32;
  display: flex;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.typography.color.light};
  background-color: ${({ theme }) => lightenColor(theme.palette.background, 5)};
  align-items: center;
  flex-wrap: nowrap;
`;

const HeaderItem = styled.div`
  display: flex;
  margin-right: 16px;
  align-self: stretch;
  align-items: center;
  flex-wrap: nowrap;
`;

const HeaderFullItem = styled(HeaderItem)`
  flex: auto;
`;

const HeaderLogo = styled(HeaderItem)`
  svg {
    vertical-align: middle;
    display: inline-block;
    overflow: visible;
    fill: currentColor;
  }
`;

const UserLogo = styled(HeaderItem)`
  margin-right: 0px;
`;

const SearchBarIcon= styled(Logo.Search)`
  margin-right: 6px;
  font-size: inherit;
  cursor: pointer;
`

function Header({ children, avatar, ...props }) {
  const router = useRouter()
  const searchUserRepo = (username) => {
    router.push(`/users/${username}/repos`)
  }

  const UserAvatar = () => Logo[avatar]?.();

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link href="/users">
          <a><Logo.Github /></a>
        </Link>
      </HeaderLogo>
      <HeaderFullItem>
        <SearchBar
          initialValue=""
          placeholder="Search user and repos..."
          handleSubmit={searchUserRepo}
        />
      </HeaderFullItem>
      {UserAvatar && (
        <UserLogo>
          <UserAvatar />
        </UserLogo>
      )}
    </HeaderWrapper>
  );
}

export default Header;
