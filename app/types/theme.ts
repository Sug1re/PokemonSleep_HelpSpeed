import { createTheme } from "@mui/material/styles";
import { rocknRollOne } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: `${rocknRollOne.style.fontFamily}, sans-serif`,
  },
  // 必要に応じて他の設定も
});

export default theme;
