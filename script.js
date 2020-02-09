const rDataURL = "https://api.myjson.com/bins/jcmhn";
const rvars = [
  {vname: "var1", vplaceholder: "Дед"}, 
  {vname: "var2", vplaceholder: "Баба"}, 
  {vname: "var3", vplaceholder: "курочка Ряба"}, 
  {vname: "var4", vplaceholder: "яичко"}, 
  {vname: "var5", vplaceholder: "Мышка"}, 
  {vname: "var6", vplaceholder: "хвостиком"}, 
  {vname: "speach", vplaceholder: "Не плачьте, снесу вам другое, не золотое, а простое"}, 
];

function handleRData(json_data) {
  let rtext = "";
  for (let row in json_data.text) {
    let row_text = json_data.text[row];

    for (let vi in rvars) {
      let vi_varname = rvars[vi].vname;
      let vi_varvalue = $('input[name='+vi_varname+']').val();
      // console.log(vi_varname, vi_varvalue);
      row_text = row_text.replace('{'+vi_varname+'}', vi_varvalue);
    };

    rtext += row_text + '<br>';
  }; 

  $("#r-result").html(rtext);

  // console.log(rvars);
};

function handleRButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(rDataURL, function(data) {
      // console.log(data); 
      handleRData(data);
    }
  );
};

function init() {
  let card = "";
  for (let vi in rvars) {
    card += '<label for=\"'+rvars[vi].vname+'\">'+rvars[vi].vname+'</label> \
      <input type=\"text\" class=\"form-control\" name=\"'+rvars[vi].vname+'\" \
        placeholder=\"'+rvars[vi].vplaceholder+'...\" value=\"'+rvars[vi].vplaceholder+'\">';
  };
  
  // console.log(card);
  $("#r-variables .form-group").html(card);

  $("#r-button").click(handleRButton);
}

$(document).ready(init);