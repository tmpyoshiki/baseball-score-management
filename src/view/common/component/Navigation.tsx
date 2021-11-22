import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  margin: auto 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  opacity: 0.8;
`;
const Title = styled.div`
  display: flex;
`;
const ShortTitle = styled.h1`
  margin: auto 0 auto 30px;
  text-align: center;
  vertical-align: middle;
  font: italic 36px bold;
  color: #ffffff;
`;
const FullTitle = styled.p`
  width: 105px;
  margin: auto 0 auto 30px;
  overflow-wrap normal;
  font: italic 18px bold;
  color: #ffffff;
`;
const NavList = styled.ul`
  display: flex;
`;
const NavListItem = styled.li`
  width: 100px;
  text-align: center;
`;
const NavListItemLink = styled.a`
  display: block;
  height: 20px;
  padding: 30px 0;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  font: 18px bold;
  &:hover {
    cursor: pointer;
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <header>
      <Nav>
        <Title>
          <ShortTitle>BMT</ShortTitle>
          <FullTitle>Baseball Management Tool</FullTitle>
        </Title>
        <NavList>
          <NavListItem>
            <NavListItemLink href="/">チームA</NavListItemLink>
          </NavListItem>
          <NavListItem>
            <NavListItemLink href="/score">スコア入力</NavListItemLink>
          </NavListItem>
          <NavListItem>
            <NavListItemLink href="/games">戦績一覧</NavListItemLink>
          </NavListItem>
          <NavListItem>
            <NavListItemLink href="/team">チーム一覧</NavListItemLink>
          </NavListItem>
        </NavList>
      </Nav>
    </header>
  );
};
export default Navigation;
