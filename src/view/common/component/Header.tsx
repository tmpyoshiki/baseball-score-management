import React from "react";

interface Props {
  title: string;
}

const Header = (): JSX.Element => {
  return (
    <header>
      <h1>野球スコア管理</h1>
      <p>自分のチームの野球のスコアを記録して、自チームを分析！</p>
    </header>
  );
};

export default Header;
