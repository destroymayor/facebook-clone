const useShortcuts = () => {
  const list = [
    {
      defaultDisplay: true,
      title: 'Group 1',
      pathname: '',
    },
    {
      defaultDisplay: true,
      title: 'Group 2',
      pathname: '',
    },
    {
      defaultDisplay: true,
      title: 'Group 3',
      pathname: '',
    },
    {
      defaultDisplay: true,
      title: 'Group 4',
      pathname: '',
    },
    {
      defaultDisplay: true,
      title: 'Group 5',
      pathname: '',
    },
    {
      defaultDisplay: false,
      title: 'Group 6',
      pathname: '',
    },
    {
      defaultDisplay: false,
      title: 'Group 7',
      pathname: '',
    },
    {
      defaultDisplay: false,
      title: 'Group 8',
      notification: 0,
      pathname: '',
    },
    {
      defaultDisplay: false,
      title: 'Group 9',
      pathname: '',
    },
  ];

  return { list };
};

export default useShortcuts;
