// 각 속성을 가져옴
import colors from "./colors";
import fontSizes from "./fontSize";
import letterSpacings from "./letterSpacings";
import lineHeights from "./lineHeights";
import space from "./space";

// 테마 객체 생성
export const theme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
