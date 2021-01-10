export class DatabaseService {
  data = [
    {
      name: 'Pablo',
      age: 26,
      img:
        'https://avatars3.githubusercontent.com/u/59542630?s=460&u=2f999d3635d2f5053c929b3e20fdecfef7999219&v=4',
    },
    {
      name: 'Leonardo',
      age: 46,
      img:
        'https://t2.gstatic.com/images?q=tbn:ANd9GcQuPYDYlP5HenKXwW9rruyhm9fdGlnPsmoQ8Hj7D6SQsjfHCw5xm0sFLwupDUsH',
    },
    {
      name: 'Scarlett',
      age: 39,
      img:
        'https://t3.gstatic.com/images?q=tbn:ANd9GcQ4LW1VpSfHP_GYdgHeBhttlWNX7MwloEpn1jA02gkQ6WMGlFvn8lU61d5j1mdK',
    },
  ];

  retrieveData() {
    return this.data;
  }
}
