const parse = (csv, delimiter = ",") => {
  const csvArr = csv.split("\n");
  const data = csvArr.map(row => {
    return row.split(delimiter);
  });

  const cols = data[0];
  const rows = data.splice(1);

  const results = {length: 0, data: []};

  for(let i = 0; i < rows.length; i++){
      const record = {}
      for(let j = 0; j < cols.length; j++){
          const col = format(cols[j])

          let currentVal = format(rows[i][j])
          record[col] = currentVal;
      };

      results.data.push(record)
  };

  results.length = results.data.length;
  return results;
};

const format = (str) => {
  if(str){
    if(!isNaN(str * 1)){
      str = str * 1
    }else{
      str = str.replace(/[\n\r]/g, '')
    }
    return str
  }
}

module.exports = parse
