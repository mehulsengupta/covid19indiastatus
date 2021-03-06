export default {
  MAP_TYPE_COUNTRY: "country",
  MAP_TYPE_STATE: "state",
  MAP_CLICK_NO_EFFECT: "noeffect",
  MAP_PROJECTION_TYPE: "geoMercator",
  BACK_BUTTON: "Back to Country Level",
  GRAPH_BUTTON: "Show on Graph",
  MAP_BUTTON: "Show on Map",
  DISPLAY_MAP: "Map",
  DISPLAY_GRAPH: "Graph",
  MAP_HEADING_COUNTRY: "India",
  MAP_PROJECTION: {
    scale: 7500, //to increase/decrease map size
    center: [78.9629, 22.5937], //fixed for India
  },
  MAP_PROJECTION_STATE: {
    specifics: [
      { statecode: "AN", scale: 30000, center: [92.924179, 12.36718] },
      { statecode: "AP", scale: 20000, center: [79.73999, 15.9129] },
      { statecode: "AR", scale: 30000, center: [94.727753, 28.217999] },
      { statecode: "AS", scale: 30000, center: [92.937576, 26.200603] },
      { statecode: "BR", scale: 30000, center: [85.313118, 25.096073] },
      { statecode: "CH", scale: 1000000, center: [76.779419, 30.733315] },
      { statecode: "CT", scale: 30000, center: [81.866142, 21.278658] },
      { statecode: "DL", scale: 300000, center: [77.209023, 28.613939] },
      { statecode: "DN", scale: 60000, center: [72.860295, 20.405133] },
      { statecode: "GA", scale: 200000, center: [74.123993, 15.299326] },
      { statecode: "GJ", scale: 30000, center: [71.192383, 22.258652] },
      { statecode: "HP", scale: 50000, center: [77.173393, 31.10483] },
      { statecode: "HR", scale: 60000, center: [76.085602, 29.058777] },
      { statecode: "JH", scale: 30000, center: [85.279938, 23.610182] },
      { statecode: "JK", scale: 50000, center: [75.550003, 33.358062] },
      { statecode: "KA", scale: 30000, center: [75.71389, 15.317277] },
      { statecode: "KL", scale: 40000, center: [76.27108, 10.850516] },
      { statecode: "LA", scale: 30000, center: [77.10344, 34.034453] },
      { statecode: "LD", scale: 50000, center: [72.784637, 10.328026] },
      { statecode: "MH", scale: 25000, center: [75.71389, 19.75148] },
      { statecode: "ML", scale: 80000, center: [91.248705, 25.522615] },
      { statecode: "MN", scale: 80000, center: [93.906265, 24.663717] },
      { statecode: "MP", scale: 30000, center: [78.656891, 22.973423] },
      { statecode: "MZ", scale: 80000, center: [92.937576, 23.164543] },
      { statecode: "NL", scale: 80000, center: [94.562447, 26.158436] },
      { statecode: "OR", scale: 30000, center: [85.098526, 20.951666] },
      { statecode: "PB", scale: 60000, center: [75.341217, 31.147129] },
      { statecode: "PY", scale: 100000, center: [79.719422, 11.896916] },
      { statecode: "RJ", scale: 25000, center: [74.217934, 27.023804] },
      { statecode: "SK", scale: 80000, center: [88.482461, 27.595935] },
      { statecode: "TG", scale: 50000, center: [78.998169, 17.602139] },
      { statecode: "TN", scale: 30000, center: [78.656891, 11.127123] },
      { statecode: "TR", scale: 80000, center: [91.988152, 23.940847] },
      { statecode: "UP", scale: 30000, center: [80.946159, 26.846708] },
      { statecode: "UT", scale: 60000, center: [79.019302, 30.066753] },
      { statecode: "WB", scale: 30000, center: [87.854973, 22.986757] },
    ],
  },
  COLOR_RANGE_CONFIRMED: [
    "#ffcccc",
    "#ffb3b3",
    "#ff9999",
    "#ff8080",
    "#ff6666",
    "#ff4d4d",
    "#ff3333",
    "#ff1a1a",
    "#ff0000",
    "#e60000",
    "#cc0000",
    "#b30000",
    "#990000",
    "#800000",
  ],
  COLOR_RANGE_ACTIVE: [
    "#ffedcc",
    "#ffe4b3",
    "#ffdb99",
    "#ffd280",
    "#ffc966",
    "#ffc14d",
    "#ffb833",
    "#ffaf1a",
    "#ffa500",
    "#e69500",
    "#cc8500",
    "#b37400",
    "#996300",
    "#805300",
    "#664200",
  ],
  COLOR_RANGE_RECOVERED: [
    "#ccffcc",
    "#b3ffb3",
    "#b3ffb3",
    "#99ff99",
    "#80ff80",
    "#66ff66",
    "#4dff4d",
    "#33ff33",
    "#1aff1a",
    "#00ff00",
    "#00e600",
    "#00cc00",
    "#00b300",
    "#009900",
    "#008000",
    "#006600",
  ],
  COLOR_RANGE_DEATHS: [
    "#e6e6e6",
    "#d9d9d9",
    "#cccccc",
    "#bfbfbf",
    "#b3b3b3",
    "#a6a6a6",
    "#999999",
    "#8c8c8c",
    "#808080",
    "#737373",
    "#666666",
    "#595959",
    "#4d4d4d",
    "#404040",
    "#333333",
  ],
  DEFAULT_COLOR: "#ccffff",
  GRAPH_PREFIX: "daily",
};
