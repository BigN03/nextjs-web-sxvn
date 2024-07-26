const getDienToan6X36 = async (time: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/adp/crawls/get-so-xo-dien-toan-6x36?date=${time}`, { cache: 'force-cache' });
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getDienToan6X36;