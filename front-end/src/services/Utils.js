/**
 * Define genders constants
 */
const Gender = {
  MALE: 0,
  FEMALE: 1,
  NONBINARY: 2,
};

/**
 * Returns genders labels
 */
const GenderLabels = {
  [Gender.MALE]: "Homme",
  [Gender.FEMALE]: "Femme",
  [Gender.NONBINARY]: "Non-binaire",
};

/**
 * Define yes/no constants
 */
const YesNo = {
  NO: 0,
  YES: 1,
};

/**
 * Returns yes/no labels
 */
const YesNoLabels = {
  [YesNo.NO]: "Non",
  [YesNo.YES]: "Oui",
};

export { Gender, GenderLabels, YesNo, YesNoLabels };
