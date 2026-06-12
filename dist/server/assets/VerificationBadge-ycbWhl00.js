import { jsxs, jsx } from "react/jsx-runtime";
import { ShieldCheck, ShieldAlert, ShieldOff } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
const cfg = {
  none: {
    label: "No verificado",
    icon: ShieldOff,
    cls: "bg-muted text-muted-foreground border-border"
  },
  partial: {
    label: "Parcialmente verificado",
    icon: ShieldAlert,
    cls: "bg-warning/15 text-warning border-warning/40"
  },
  full: {
    label: "100% verificado",
    icon: ShieldCheck,
    cls: "bg-primary/15 text-primary border-primary/40"
  }
};
function VerificationBadge({
  level,
  size = "md"
}) {
  const c = cfg[level];
  const Icon = c.icon;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-md border font-mono",
        size === "sm" && "px-1.5 py-0.5 text-[10px]",
        size === "md" && "px-2 py-1 text-xs",
        size === "lg" && "px-3 py-1.5 text-sm",
        c.cls
      ),
      children: [
        /* @__PURE__ */ jsx(Icon, { className: cn(size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5") }),
        " ",
        c.label
      ]
    }
  );
}
function MatchBadge({ match, size = "md" }) {
  const tone = match >= 85 ? "text-match-high border-match-high/40 bg-match-high/10" : match >= 70 ? "text-match-mid border-match-mid/40 bg-match-mid/10" : "text-match-low border-match-low/40 bg-match-low/10";
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-md border font-mono font-semibold",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xs",
        tone
      ),
      children: [
        match,
        "% match"
      ]
    }
  );
}
export {
  MatchBadge as M,
  VerificationBadge as V
};
