const DIContainerTypes = {
  IndexController: Symbol.for('IndexController'),
  ScoresService: Symbol.for('ScoresService'),
  TeamsService: Symbol.for('TeamsService'),
  TeamsRepository: Symbol.for('TeamsRepository'),
  BMSAPILibrary: Symbol.for('BMSAPILibrary'),
} as const;

export default DIContainerTypes;
