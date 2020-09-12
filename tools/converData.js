export function ConverData(data) {
  console.warn('data: ', data);
  let arr = [];
  if (data)
    data.map((item) => {
      arr.push({value: item.SehirAdi});
    });
  return arr;
}
