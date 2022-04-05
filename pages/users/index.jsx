import styled from "styled-components";

import useSearchUser from "@/lib/hook/useSearchUser";

import { mediaMobileMixin } from "@/styles/utils/device";
import { lightenColor } from "@/styles/utils/colorInput";

import { EmptyLayout } from "@/components/Layout";
import SearchBar from "@/components/SearchBar";

const inlineStyle = {
  display: 'table-cell',
  minHeight: '60px',
  width: '100%',
  padding: '5px 20px',
  paddingTop: 0,
  paddingBottom: 0,
  color: 'inherit',
  fontSize: 'inherit',
  border: 0,
  boxShadow: 'none',
  lineHeight: 1.2,
}

const UserPageTitle = styled.h1`
  font-size: 32px;
  line-height: 1;
  text-align: center;

  p:nth-of-type(1) {
    margin-bottom: 16px;
  }

  p:nth-last-of-type(1) {
    font-weight: 300;
    font-size: 22px;
    margin-bottom: 24px;
  }

  ${mediaMobileMixin.M(`
    font-size: 30px;

    p:nth-last-of-type(1) {
      font-size: 18px;
    }
  `)}

  .title-info {
    font-weight: 400;
    color: ${({theme}) => theme.palette.primary};
  }
`

const UserSearchBar = styled(SearchBar)`
  max-width: 100%;
  font-size: 24px;

  label {
    border-width: 3px;
    border-radius: 12px;
    color: #fff;
  }

  &:hover label {
    border-color: ${({ theme }) => theme.typography.color.light};
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => lightenColor(theme.palette.background, 10)};
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 20px;
  }

  ${mediaMobileMixin.M(`
    font-size: 18px;
  `)}
`

function Users({ title }) {
  const { searchUserRepo } = useSearchUser()

  return (
    <EmptyLayout title={title}>
      <UserPageTitle>
        <p>
          {'Try to enter somethimg?'}
        </p>
        <p>
          {'Like'}
          <span className="title-info">{' Tinywugaga '}</span>
          {'😊'}
        </p>
      </UserPageTitle>
      <UserSearchBar
        initialValue=""
        placeholder="Search user and repos..."
        inlineStyle={inlineStyle}
        handleSubmit={searchUserRepo}
      />
    </EmptyLayout>
  );
}

export default Users;
