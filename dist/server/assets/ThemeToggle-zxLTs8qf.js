import { jsx } from "react/jsx-runtime";
import { Sun, Moon } from "lucide-react";
import { B as Button } from "./button-BC9oXVxV.js";
import { d as useTheme } from "./router-BI82v7Nb.js";
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, "aria-label": "Cambiar tema", children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) });
}
export {
  ThemeToggle as T
};
