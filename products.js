const products = [
  {
    id: "7417140101",
    name: "226＃ベーシックパンツ",
    priceEx: 12000,
    delivery: "2027年3月展開",
    colors: [
      { code: "12", name: "ﾍﾞｰｼﾞｭ" },
      { code: "92", name: "Sｸﾞﾚｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417140102",
    name: "3081ベーシックパンツ",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "97", name: "Cｸﾞﾚｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417140103",
    name: "3081＃バレルパンツ",
    priceEx: 12000,
    delivery: "2027年3月展開",
    colors: [
      { code: "12", name: "ﾍﾞｰｼﾞｭ" },
      { code: "59", name: "ﾈｲﾋﾞｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417142104",
    name: "226＃ショートパンツ",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "59", name: "ﾈｲﾋﾞｰ" },
      { code: "97", name: "Cｸﾞﾚｰ" }
    ]
  },
  {
    id: "7417142105",
    name: "YS-8435ショートパンツ",
    priceEx: 9000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "12", name: "ﾍﾞｰｼﾞｭ" },
      { code: "97", name: "Cｸﾞﾚｰ" }
    ]
  },
  {
    id: "7417172111",
    name: "F2632プルオーバー（B)",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "37", name: "ｶｰｷ" },
      { code: "43", name: "ﾍﾟﾊﾟｰﾐﾝﾄ" }
    ]
  },
  {
    id: "7417172112",
    name: "F2783ストライププルオーバー",
    priceEx: 14000,
    delivery: "2027年3月展開",
    colors: [
      { code: "50", name: "ﾌﾞﾙｰ" },
      { code: "80", name: "ﾚｯﾄﾞ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417172113",
    name: "F2783モックネック",
    priceEx: 9000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "37", name: "ｶｰｷ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417172114",
    name: "YS-8435モックネック",
    priceEx: 12000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "12", name: "ﾍﾞｰｼﾞｭ" },
      { code: "97", name: "Cｸﾞﾚｰ" }
    ]
  },
  {
    id: "7417172115",
    name: "TH9054プレーンモックネック",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "14", name: "ｻﾝﾄﾞﾍﾞｰｼﾞｭ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417172116",
    name: "F2632プルオーバー（A)",
    priceEx: 9000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "59", name: "ﾈｲﾋﾞｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417174106",
    name: "F2632+F2783コンビシャツ",
    priceEx: 11000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "37", name: "ｶｰｷ" },
      { code: "59", name: "ﾈｲﾋﾞｰ" }
    ]
  },
  {
    id: "7417174107",
    name: "XYC70024＃シャツ",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "05", name: "ｵﾌﾎﾜｲﾄ" },
      { code: "50", name: "ﾌﾞﾙｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417174108",
    name: "F2803シャツ",
    priceEx: 10000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "37", name: "ｶｰｷ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417174109",
    name: "TH9054プレーンシャツ",
    priceEx: 9000,
    delivery: "2027年3月展開",
    colors: [
      { code: "01", name: "ﾎﾜｲﾄ" },
      { code: "12", name: "ﾍﾞｰｼﾞｭ" },
      { code: "80", name: "ﾚｯﾄﾞ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  },
  {
    id: "7417174110",
    name: "F2783昇華転写シャツ",
    priceEx: 16000,
    delivery: "2027年3月展開",
    colors: [
      { code: "42", name: "ﾗｲﾑ" },
      { code: "50", name: "ﾌﾞﾙｰ" },
      { code: "99", name: "ﾌﾞﾗｯｸ" }
    ]
  }
];
