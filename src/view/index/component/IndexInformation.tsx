import React from "react";
import IndexMostBattledTeams from "./IndexMostBattledTeams";
import IndexLatestGames from "./IndexLatestGames";

const IndexInformation = (): JSX.Element => {
  return (
    <section>
      <h1>管理しているチーム情報の概要</h1>
      <IndexMostBattledTeams />
      <IndexLatestGames />
    </section>
  );
};
export default IndexInformation;
