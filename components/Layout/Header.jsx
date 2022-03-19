import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import styled from "styled-components";

import { lightenColor } from "@/styles/utils/colorInput";
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

const formControl = styled.input.attrs(props => ({
  type: "text"
}))`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.white};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.palette.background};
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid ${({ theme }) => lightenColor(theme.palette.background, 5)};
  border-radius: 6px;
  outline: none;
  box-shadow: 0 0 transparent;
`;

const SearchBarContainer = styled.div`
  max-width: 272px;
  transition: 0.2s ease-in-out;
  transition-property: max-width, padding-bottom, padding-top;

  position: relative;
  flex: auto;
  align-self: auto;
`;

const SearchBarLabel = styled.label`
  min-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative
  width: 100%;
  max-width: 100%;
  padding: 0;
  font-size: inherit;
  font-weight: 400;
  color: ${({ theme }) => theme.typography.color.light};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.typography.color.light}55;
  border-radius: 6px;
  box-shadow: none;
`;

const SearchBarInput = styled(formControl)`
  min-height: 28px;

  display: table-cell;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  font-size: inherit;
  color: inherit;
  background: none;
  border: 0;
  box-shadow: none;

  line-height: 20px;
`;

const SearchBarIcon= styled(Logo.Search)`
  margin-right: 6px;
  font-size: inherit;
  cursor: pointer;
`


function Header({ children, ...props }) {
  const { avatar } = props;
  const [searchValue, setSearchValue] = useState('')

  const UserAvatar = () => Logo[avatar]?.();
  const router = useRouter()

  const searchUserRepo = () => {
    router.push(`/users/${searchValue}/repos`)
  }

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link href="/users">
          <a><Logo.Github /></a>
        </Link>
      </HeaderLogo>
      <HeaderFullItem>
        <SearchBarContainer>
          <form onSubmit={() => {
            event.preventDefault()
            searchUserRepo()
          }}>
            <SearchBarLabel>
              <SearchBarInput
                value={searchValue}
                placeholder="Search User and find repos..."
                onChange={({target}) => setSearchValue(target.value)}
              />
              <SearchBarIcon width={22} height={20} onClick={searchUserRepo}/>
            </SearchBarLabel>
          </form>
        </SearchBarContainer>
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
