import { useState, useRef } from "react";
import styled from "styled-components";

import { lightenColor } from "@/styles/utils/colorInput";
import * as Logo from "@/components/Layout/Logo";

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

  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 0;

  font-size: inherit;
  font-weight: 400;
  vertical-align: middle;
  color: ${({ theme }) => theme.typography.color.light};

  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.typography.color.light}55;
  border-radius: 6px;
  box-shadow: none;

  &:hover {
    border-color: ${({ theme }) => theme.typography.color.light}33;
    color: ${({ theme }) => theme.palette.white};
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  padding: 5px 12px;

  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  color: inherit;

  background: none;
  background-repeat: no-repeat;
  background-position: right 8px center;

  border: 0;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 0 transparent;
`;

const SearchBarIcon = styled(Logo.Search)`
  margin-right: 6px;
  font-size: inherit;
  cursor: pointer;

  &:hover {
      path {
        fill: #FFF;
      }
    }
`;

function SearchBar({
  fullWidth,
  className,
  initialValue,
  placeholder,
  inlineStyle = {},
  onValidate,
  handleSubmit
}) {
  const [searchValue, setSearchValue] = useState(initialValue);
  const [validate, setValidate] = useState(true);

  const formRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();
    const isValidated = onValidate
      ? onValidate(searchValue)
      : true
    setValidate(isValidated)

    isValidated && handleSubmit(searchValue);
  }

  return (
      <SearchBarContainer className={className}>
        <form
          ref={formRef}
          onSubmit={onSubmit}
        >
          <SearchBarLabel>
            <SearchBarInput
              type="text"
              style={inlineStyle}
              value={searchValue}
              placeholder={placeholder}
              onChange={({ target }) => setSearchValue(target.value)}
            />
            <SearchBarIcon width={22} height={20} onClick={onSubmit} />
          </SearchBarLabel>
        </form>
      </SearchBarContainer>
  );
}

export default SearchBar
