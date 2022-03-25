enum MSG {
  INVALID_LOGIN = 'Incorrect email or password',
  FIELDS_NOT_FILLED = 'All fields must be filled',
  EQUAL_TEAMS = 'It is not possible to create a match with two equal teams',
  TEAM_NOT_EXIST = 'There is no team with such id!',
  FINISHED_MATCH = 'Finished match',
  UPDATED_MATCH = 'Updated match',
}

export default MSG;
