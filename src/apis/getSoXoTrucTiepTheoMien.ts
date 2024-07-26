const getSoXoTrucTiepTheoMien = async (locate: string, time: string) => {
  const staticData = await fetch(`http://api.sa88.art/api/web-sxvn/adp/crawls/get-so-xo-truc-tiep?locate=${locate}&date=${time}`, { cache: 'force-cache' });
  const res = await staticData.json()
  if (res.status == 200) {
    return res.data
  }
  return {}
}

export default getSoXoTrucTiepTheoMien;