import "styled-components";
import theme from "../theme/theme";

declare module "styled-components" {
  type ThemeType = typeOf theme;

  export interface DefaulTheme extends ThemeType {}
}
