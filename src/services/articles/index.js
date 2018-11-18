export default [
  {
    path: '/articles',
    method: 'get',
    handler: (req, res) => {
      return res.send('Articles Page');
    }
  }
]