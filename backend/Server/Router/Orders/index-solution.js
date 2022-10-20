const queryObject = {
  product : {
    key: "P.product_key",
    name : "P.product_name",
    price : "P.product_price",
    image : "P.product_image",
    detail : "P.product_detail",
    discountSet : "P.product_discount_set",
    discountPercent : "P.product_discount_percent"
  },
  orders : {
    date: "O.orders_date",
    number : "O.orders_status",
    point : "O.orders_point",
  },
  user : {
    key : "O.user_key",
  },
  firstExample: function (QUERY, ...columns) {
    let temp = [];
    columns.map(column => {
      temp.push(column);
    });
    let setValue = QUERY.toUpperCase()+ " " + temp.join(", ");
    return setValue;
  },
  secondExample : function (QUERY) {
    let temp = [];
    for (let key in this.product) {
      temp.push(this.product[key]);
    }
    return QUERY.toUpperCase() +" "+ temp.join(", ");
  }
}
console.log(queryObject.secondExample("select"));
function arraySet(obj) {
  obj = typeof obj === "object" ? obj : console.error('not Object');
  let temp = [];
  for(let key in obj) {
    temp.push(obj[key]);
  }
  return temp.join(", ");
}
console.log(queryObject.firstExample("select", arraySet(queryObject.product, ",") )) 

