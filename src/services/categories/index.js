export default [
  {
    path: '/categories',
    method: 'get',
    handler: (req, res) => {
      return res.send('Cateogires Page');
    }
  }
]