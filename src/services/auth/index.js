export default [
  {
    path: '/auth',
    method: 'get',
    handler: (req, res) => {
      return res.send('Auth Page');
    }
  }
]