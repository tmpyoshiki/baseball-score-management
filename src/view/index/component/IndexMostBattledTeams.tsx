import React from "react";

const IndexInformation = (): JSX.Element => {
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
    </React.Fragment>
  );
};
export default IndexInformation;
