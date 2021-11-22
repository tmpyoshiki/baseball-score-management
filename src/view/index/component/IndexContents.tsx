import React from "react";

const IndexContents = (): JSX.Element => {
  return (
    <React.Fragment>
      <article>
        <h1>チームAとの対戦数の対戦チーム</h1>
        <ul>
          <li>
            <a href="/teams/teamB">チームB</a>
          </li>
          <li>
            <a href="/teams/teamC">チームC</a>
          </li>
          <li>
            <a href="/teams/teamD">チームD</a>
          </li>
          <li>
            <a href="/teams">もっと見る</a>
          </li>
        </ul>
      </article>
      <article>
        <h1>最近の対戦戦績</h1>
        <ul>
          <li>
            <dt>
              <a href="/teams/teamA">チームA</a>vs
              <a href="/teams/teamC">チームC</a>
            </dt>
            <dd>
              <a href="/games/game1">9-2</a>
            </dd>
          </li>
          <li>
            <dt>
              <a href="/teams/teamA">チームA</a>vs
              <a href="/teams/teamC">チームC</a>
            </dt>
            <dd>
              <a href="/games/game1">9-2</a>
            </dd>
          </li>
          <li>
            <dt>
              <a href="/teams/teamA">チームA</a>vs
              <a href="/teams/teamC">チームC</a>
            </dt>
            <dd>
              <a href="/games/game1">9-2</a>
            </dd>
          </li>
          <li>
            <a href="/teams/me">もっと見る</a>
          </li>
        </ul>
        <p>
          <a href="/score-keeping">スコアを記録する</a>
        </p>
      </article>
    </React.Fragment>
  );
};
export default IndexContents;
