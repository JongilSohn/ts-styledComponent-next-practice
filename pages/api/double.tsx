export default (req, res) => {
  const value = parseFloat( req.query.value )
  // 해당 주소로 받는 쿼리 value
  // http://localhost:3000/api/double?value=15 15의 값을 받는다.
  res.json({value : value * 2});
}
