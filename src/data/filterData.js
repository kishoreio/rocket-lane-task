export const filterData = [
  {
    prop: 'gender',
    option: [
      { title: 'Male', isChecked: true },
      { title: 'Female', isChecked: true },
    ],
  },
  {
    prop: 'occupation',
    option: [
      { title: 'Working', isChecked: true },
      { title: 'Student', isChecked: true },
      { title: 'Retired', isChecked: true },
    ],
  },
  {
    prop: 'martialStatus',
    option: [
      { title: 'Single', isChecked: true },
      { title: 'Married', isChecked: true },
      { title: 'Divorced', isChecked: true },
    ],
  },
];

export const filter = {
  gender: ['Male', 'Female'],
  occupation: ['Working', 'Student', 'Retired'],
  martialStatus: ['Single', 'Married', 'Divorced'],
  availability: ['gender', 'occupation', 'martialStatus'],
};
