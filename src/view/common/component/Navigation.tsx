import React from "react";

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <h1>BMT</h1>
      <p>Baseball Management Tool</p>
      <ul>
        <li>
          <a href="/">チームA</a>
        </li>
        <li>
          <a href="/score">スコア入力</a>
        </li>
        <li>
          <a href="/games">戦績一覧</a>
        </li>
        <li>
          <a href="/team">チーム一覧</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
