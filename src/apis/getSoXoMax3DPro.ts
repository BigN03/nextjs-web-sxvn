const getSoXoMax3DPro = async (time: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/adp/crawls/get-so-xo-max3dpro?date=${time}`, { cache: 'force-cache' });
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoMax3DPro;