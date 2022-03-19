import Link from "next/link";
import styled from "styled-components";

import { darkenColor, lightenColor } from "@/styles/utils/colorInput";

const GirdBoxContainer = styled.ol`
  display: flex;

  list-style: none;

  margin-bottom: 8px;

  flex-wrap: wrap;

  margin-right: -8px;
  margin-left: -8px;
`;

const GirdBoxItem = styled.li`
  padding-right: 8px;
  padding-left: 8px;

  display: flex;

  margin-bottom: 16px;

  align-content: stretch;

  width: 49.99999998%;
`;

const BoxCard = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;

  background-color: ${({ theme }) => darkenColor(theme.palette.background, 1)};
  border-color: ${({ theme }) => lightenColor(theme.palette.background, 5)};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
`;

const BoxCardContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CardContentTitle = styled.div`
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;

  font-weight: 600;

  margin-right: 4px;

  color: ${({ theme }) => theme.palette.info};
  text-decoration: none;
`;

const CardContentDescription = styled.p`
  flex: 1 0 auto;

  font-size: 12px;

  margin-top: 8px;
  margin-bottom: 0;

  color: ${({ theme }) => theme.typography.color.light};
`;

const GirdBox = ({ data }) => {
  return (
    <GirdBoxContainer>
      {data.map((item, index) => (
        <GirdBoxItem key={index}>
          <Link href={item.link}>
            <a>
              <BoxCard>
                <BoxCardContent>
                  <CardContentTitle>{item.title}</CardContentTitle>
                  <CardContentDescription>
                    {item.content}
                  </CardContentDescription>
                </BoxCardContent>
              </BoxCard>
            </a>
          </Link>
        </GirdBoxItem>
      ))}
    </GirdBoxContainer>
  );
};

export default GirdBox;
