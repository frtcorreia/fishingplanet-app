export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'hbjasdyhaonmasdonadsnpias9gbouqjweboujads',
        user: {
          name: 'filipe',
          email: 'frtcorreia@gmail.com',
        },
      });
    }, 2000);
  });
}
