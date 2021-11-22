import React from "react";

const IndexInformation = (): JSX.Element => {
  return (
    <React.Fragment>
      <article>
        <h1>対戦戦績</h1>
        <section>
          <h1>最近3試合の対戦成績</h1>
          <ol>
            <li>
              <a href="/games/game1">チームA 9 - 0 チームB</a>
            </li>
            <li>
              <a href="/games/game2">チームA 10 - 3 チームC</a>
            </li>
            <li>
              <a href="/games/game3">チームA 4 - 20 チームC</a>
            </li>
          </ol>
        </section>
        <section>
          <h1>対戦成績の閲覧や管理</h1>
          <ul>
            <li>
              <a href="/score-keeping">スコアを記録する</a>
            </li>
            <li>
              <a href="/teams/me">もっと見る</a>
            </li>
          </ul>
        </section>
      </article>
    </React.Fragment>
  );
};
export default IndexInformation;
