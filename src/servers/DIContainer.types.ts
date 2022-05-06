const DIContainerTypes = {
  IndexController: Symbol.for('IndexController'),
  GamesService: Symbol.for('GamesService'),
  TeamsService: Symbol.for('TeamsService'),
  TeamsRepository: Symbol.for('TeamsRepository'),
  GamesRepository: Symbol.for('GamesRepository'),
  BMSAPILibrary: Symbol.for('BMSAPILibrary'),
} as const;

export default DIContainerTypes;
