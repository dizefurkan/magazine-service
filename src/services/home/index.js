export default [
  {
    path: '/',
    method: 'get',
    handler: (req, res) => {
      return res.send('Home Page');
    }
  }
]