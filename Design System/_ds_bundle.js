/* @ds-bundle: {"format":4,"namespace":"LiveHubShoppingDesignSystem_8f0aee","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"7448c80bb591","components/core/IconButton.jsx":"cd255c796447","components/feedback/Badge.jsx":"82de41f2d06a","components/feedback/Tag.jsx":"ad70bb012e57","components/feedback/Toast.jsx":"046e5f1aa1f3","components/feedback/Tooltip.jsx":"41497e291add","components/forms/Checkbox.jsx":"3b5cf3eb9780","components/forms/Input.jsx":"df186b8e0e66","components/forms/Radio.jsx":"036922a8e769","components/forms/Select.jsx":"f61c8bf210b5","components/forms/Switch.jsx":"126aab69d99d","components/surfaces/Card.jsx":"d03778899de5","components/surfaces/Dialog.jsx":"2320bf6ee3b4","components/surfaces/Tabs.jsx":"896576edfb1d","ui_kits/creator-app/OfferScreen.jsx":"0a5d65958f98","ui_kits/creator-app/RecordScreen.jsx":"19c738f8ec56","ui_kits/creator-app/RewardScreen.jsx":"73e68ae0b8f2","ui_kits/creator-app/SubmitScreen.jsx":"880d9dddc074","ui_kits/creator-app/ios-frame.jsx":"24642b887be3","ui_kits/dashboard/AnalyticsScreen.jsx":"61a15780a5f8","ui_kits/dashboard/CampaignsScreen.jsx":"b673fcc8f148","ui_kits/dashboard/ReviewScreen.jsx":"4ce670da8e3b","ui_kits/dashboard/Sidebar.jsx":"d26cc66b86a1","ui_kits/dashboard/TopBar.jsx":"d4faede74bf9","ui_kits/site/Footer.jsx":"f68ba38eed23","ui_kits/site/ForBusiness.jsx":"9352af09125f","ui_kits/site/Hero.jsx":"600821f6fe85","ui_kits/site/HowItWorks.jsx":"a5d42aac2129","ui_kits/site/Manifesto.jsx":"cdb2a731ad17"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LiveHubShoppingDesignSystem_8f0aee = window.LiveHubShoppingDesignSystem_8f0aee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-sm)',
    gap: 6
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-base)',
    gap: 8
  },
  lg: {
    padding: '15px 26px',
    fontSize: 'var(--text-md)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--brand-coral)',
    color: 'var(--text-inverse)',
    border: '2px solid var(--brand-coral)'
  },
  secondary: {
    background: 'var(--ink-900)',
    color: 'var(--text-inverse)',
    border: '2px solid var(--ink-900)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '2px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-900)',
    border: '2px solid transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  style
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: `all var(--duration-fast) var(--ease-snap)`,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      filter: hover && !disabled ? 'brightness(0.94)' : 'none',
      ...v,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  size = 'md',
  variant = 'outline',
  label = '',
  onClick,
  style
}) {
  const px = sizeMap[size] || 40;
  const [hover, setHover] = React.useState(false);
  const styles = {
    solid: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      border: '2px solid var(--ink-900)'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--ink-900)',
      border: '2px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: `all var(--duration-fast) var(--ease-snap)`,
      filter: hover ? 'brightness(0.94)' : 'none',
      ...(styles[variant] || styles.outline),
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--ink-900)',
    color: 'var(--text-inverse)'
  },
  coral: {
    background: 'var(--brand-coral)',
    color: 'var(--text-inverse)'
  },
  success: {
    background: 'var(--success-100)',
    color: 'var(--success-600)'
  },
  warning: {
    background: 'var(--warning-100)',
    color: 'var(--warning-600)'
  },
  danger: {
    background: 'var(--danger-100)',
    color: 'var(--danger-600)'
  },
  info: {
    background: 'var(--info-100)',
    color: 'var(--info-600)'
  }
};
function Badge({
  tone = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...(tones[tone] || tones.neutral)
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      border: `2px solid ${selected ? 'var(--ink-900)' : 'var(--border-default)'}`,
      background: selected ? 'var(--ink-900)' : 'var(--surface-card)',
      color: selected ? 'var(--text-inverse)' : 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: `all var(--duration-fast) var(--ease-snap)`
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      opacity: 0.6,
      fontWeight: 700
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  title,
  description,
  onClose
}) {
  const accents = {
    neutral: 'var(--ink-900)',
    success: 'var(--success-600)',
    warning: 'var(--warning-600)',
    danger: 'var(--danger-600)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 340,
      padding: '14px 16px',
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-flat-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 2,
      background: accents[tone] || accents.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontWeight: 700
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '120%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: '2px solid var(--border-strong)',
      background: checked ? 'var(--ink-900)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `all var(--duration-fast) var(--ease-snap)`
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--brand-coral)',
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  helper
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      padding: '11px 14px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      border: `2px solid ${error ? 'var(--danger-600)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger-600)' : 'var(--text-secondary)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '2px solid var(--border-strong)',
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand-coral)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      padding: '11px 14px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--border-strong)',
      background: checked ? 'var(--brand-coral)' : 'var(--paper-100)',
      position: 'relative',
      transition: `all var(--duration-fast) var(--ease-snap)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--ink-900)',
      transition: `all var(--duration-fast) var(--ease-snap)`
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  flat = true,
  padding = 'var(--space-6)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '2px solid var(--border-strong)',
      boxShadow: flat ? 'var(--shadow-flat-md)' : 'var(--shadow-soft-md)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(26,18,16,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-flat-lg)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--text-secondary)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 20
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '2px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.value,
    onClick: () => onChange && onChange(it.value),
    style: {
      padding: '10px 16px',
      cursor: 'pointer',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: active === it.value ? 'var(--ink-900)' : 'var(--text-secondary)',
      borderBottom: `3px solid ${active === it.value ? 'var(--brand-coral)' : 'transparent'}`,
      marginBottom: -2
    }
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/OfferScreen.jsx
try { (() => {
function OfferScreen({
  onNext
}) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Button,
    Badge
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-coral)',
      padding: '28px 20px 40px',
      color: 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Shopping Riverside"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      marginTop: 14,
      lineHeight: 1.05
    }
  }, "Tem 30 segundos?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      marginTop: 8,
      opacity: 0.9
    }
  }, "Mostra sua compra na Zara e ganha R$ 3 de volta.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-flat-md)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "O que fazer"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 13,
      marginTop: 6
    }
  }, "Grave um v\xEDdeo curto sobre o que voc\xEA acabou de comprar. Seja natural, sem roteiro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-flat-md)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "O que voc\xEA ganha"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 13,
      marginTop: 6
    }
  }, "R$ 3,00 de cr\xE9dito na loja, enviado em at\xE9 24 horas ap\xF3s a aprova\xE7\xE3o."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: onNext
  }, "Come\xE7ar a gravar")));
}
window.OfferScreen = OfferScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/OfferScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/RecordScreen.jsx
try { (() => {
function RecordScreen({
  onNext,
  onBack
}) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    IconButton
  } = DS;
  const Back = () => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#1a1210',
      fontFamily: 'var(--font-body)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Back, null),
    label: "Voltar",
    variant: "outline",
    style: {
      background: 'rgba(255,255,255,0.12)',
      border: '2px solid rgba(255,255,255,0.2)',
      color: '#fff'
    },
    onClick: onBack
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.5)',
      fontSize: 13
    }
  }, "pr\xE9-visualiza\xE7\xE3o da c\xE2mera"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Toque para gravar, at\xE9 30s"), /*#__PURE__*/React.createElement("div", {
    onClick: onNext,
    style: {
      width: 74,
      height: 74,
      borderRadius: '50%',
      border: '4px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--brand-coral)'
    }
  }))));
}
window.RecordScreen = RecordScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/RecordScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/RewardScreen.jsx
try { (() => {
function RewardScreen({
  onRestart
}) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Button,
    Badge
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-body)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      gap: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Enviado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 1.1
    }
  }, "Voc\xEA est\xE1 na fila."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      maxWidth: 260
    }
  }, "A loja revisa os v\xEDdeos em at\xE9 24 horas. R$ 3,00 caem na sua conta assim que for aprovado."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onRestart
  }, "Voltar \xE0s ofertas"));
}
window.RewardScreen = RewardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/RewardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/SubmitScreen.jsx
try { (() => {
function SubmitScreen({
  onNext,
  onBack
}) {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Input,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-body)',
      padding: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22
    }
  }, "Adicione uma legenda"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '9/12',
      background: 'var(--ink-900)',
      borderRadius: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "O que voc\xEA comprou? Marque a loja!"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: onNext
  }, "Enviar por R$ 3,00"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    style: {
      width: '100%'
    },
    onClick: onBack
  }, "Gravar de novo")));
}
window.SubmitScreen = SubmitScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/SubmitScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AnalyticsScreen.jsx
try { (() => {
function AnalyticsScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Card
  } = DS;
  const stats = [{
    label: 'Vídeos este mês',
    value: '1.204'
  }, {
    label: 'Aumento estimado de fluxo',
    value: '+18%'
  }, {
    label: 'Recompensas pagas',
    value: 'R$ 4.820'
  }, {
    label: 'Média de visualizações/vídeo',
    value: '640'
  }];
  const bars = [40, 65, 52, 80, 70, 95, 60];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--ink-900)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 13,
      marginTop: 4
    }
  }, s.label)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 16
    }
  }, "V\xEDdeos enviados nos \xFAltimos 7 dias"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: 140
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${b}%`,
      background: i === 5 ? 'var(--brand-coral)' : 'var(--paper-200)',
      borderRadius: '6px 6px 0 0'
    }
  })))));
}
window.AnalyticsScreen = AnalyticsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AnalyticsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/CampaignsScreen.jsx
try { (() => {
function CampaignsScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Card,
    Button,
    Badge
  } = DS;
  const campaigns = [{
    name: 'Desafio da Compra do Fim de Semana',
    store: 'Todas as lojas',
    reward: 'R$ 5',
    status: 'Ativa',
    tone: 'success',
    videos: 214
  }, {
    name: 'Provando as Novidades',
    store: 'Zara, Piso 1',
    reward: 'R$ 3',
    status: 'Ativa',
    tone: 'success',
    videos: 88
  }, {
    name: 'Volta às Aulas',
    store: 'Todas as lojas',
    reward: 'R$ 10',
    status: 'Agendada',
    tone: 'info',
    videos: 0
  }, {
    name: 'Buzz da Inauguração',
    store: 'Sephora, Piso 2',
    reward: 'R$ 8',
    status: 'Encerrada',
    tone: 'neutral',
    videos: 341
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "+ Nova campanha")), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr',
      gap: 12,
      padding: '12px 20px',
      background: 'var(--surface-sunken)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Campanha"), /*#__PURE__*/React.createElement("div", null, "Escopo"), /*#__PURE__*/React.createElement("div", null, "Recompensa"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "V\xEDdeos")), campaigns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr',
      gap: 12,
      padding: '16px 20px',
      borderTop: '1px solid var(--border-default)',
      alignItems: 'center',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, c.store), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, c.reward), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone
  }, c.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, c.videos)))));
}
window.CampaignsScreen = CampaignsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/CampaignsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ReviewScreen.jsx
try { (() => {
function ReviewScreen() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Card,
    Button,
    Tabs
  } = DS;
  const [tab, setTab] = React.useState('pending');
  const queue = [{
    shopper: 'Jordan M.',
    store: 'Zara',
    caption: 'Provando as novidades que chegaram',
    amount: 'R$ 3,00'
  }, {
    shopper: 'Priya K.',
    store: 'Sephora',
    caption: 'Testando o novo fixador de maquiagem o dia todo no shopping',
    amount: 'R$ 8,00'
  }, {
    shopper: 'Diego R.',
    store: 'Todas as lojas',
    caption: 'O que comprei por R$ 50 no Riverside este fim de semana',
    amount: 'R$ 5,00'
  }];
  const Play = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      label: 'Pendentes (3)',
      value: 'pending'
    }, {
      label: 'Aprovados',
      value: 'approved'
    }, {
      label: 'Rejeitados',
      value: 'rejected'
    }],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, queue.map(q => /*#__PURE__*/React.createElement(Card, {
    key: q.shopper,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 88,
      background: 'var(--ink-900)',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--paper-0)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Play, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, q.shopper, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, "\xB7 ", q.store)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 13,
      marginTop: 4,
      maxWidth: 420
    }
  }, q.caption)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, q.amount), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Rejeitar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Aprovar"))))));
}
window.ReviewScreen = ReviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ReviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    key: 'campaigns',
    label: 'Campanhas'
  }, {
    key: 'review',
    label: 'Fila de revisão'
  }, {
    key: 'analytics',
    label: 'Análises'
  }, {
    key: 'settings',
    label: 'Configurações'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      minWidth: 220,
      background: 'var(--ink-900)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      gap: 4,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--paper-0)',
      marginBottom: 24,
      letterSpacing: '-0.02em'
    }
  }, "MONI"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    onClick: () => onNav(it.key),
    style: {
      padding: '10px 14px',
      borderRadius: 10,
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 600,
      color: active === it.key ? 'var(--ink-900)' : 'var(--paper-100)',
      background: active === it.key ? 'var(--brand-coral)' : 'transparent'
    }
  }, it.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      fontSize: 12,
      color: 'var(--ink-300)'
    }
  }, "Shopping Riverside"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/TopBar.jsx
try { (() => {
function TopBar({
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '28px 32px 20px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      marginTop: 4
    }
  }, subtitle)), action);
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
function SiteFooter() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 64px',
      background: 'var(--ink-900)',
      color: 'var(--paper-300, var(--ink-300))',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logomark-paper.svg",
    style: {
      width: 20,
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--paper-0)',
      fontWeight: 700
    }
  }, "MONI")), /*#__PURE__*/React.createElement("div", null, "\xA9 2026 MONI Shopping"));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ForBusiness.jsx
try { (() => {
function ForBusiness() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Button,
    Card
  } = DS;
  const stats = [{
    v: '1.204',
    l: 'vídeos por mês'
  }, {
    v: '+18%',
    l: 'fluxo estimado'
  }, {
    v: '640',
    l: 'visualizações por vídeo'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 64px',
      background: 'var(--paper-100)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      gap: 48,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--ink-900)',
      marginBottom: 16
    }
  }, "Prova social de quem realmente compra."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginBottom: 24
    }
  }, "Lance campanhas de incentivo, revise os v\xEDdeos antes de publicar, e acompanhe o impacto direto em tr\xE1fego e vendas."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Falar com vendas")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--ink-900)'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, s.l)))));
}
window.ForBusiness = ForBusiness;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ForBusiness.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
function Hero() {
  const DS = window.LiveHubShoppingDesignSystem_8f0aee;
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/brand/pattern-geometric.svg)',
      backgroundSize: 90,
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/logomark-coral.svg",
    style: {
      width: 36,
      height: 36
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--ink-900)'
    }
  }, "MONI")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.05,
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, "Transformando compradores em criadores."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      marginTop: 20
    }
  }, "MONI paga clientes reais para gravar v\xEDdeos sobre o que compraram e transforma isso em alcance, tr\xE1fego e vendas para lojas de shopping.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Baixar o app"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Sou lojista")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HowItWorks.jsx
try { (() => {
function HowItWorks() {
  const steps = [{
    n: '1',
    t: 'Compre',
    d: 'Faça uma compra em qualquer loja participante do shopping.'
  }, {
    n: '2',
    t: 'Grave',
    d: 'Grave um vídeo de até 30 segundos mostrando o que comprou.'
  }, {
    n: '3',
    t: 'Receba',
    d: 'Envie no app e receba a recompensa em até 24 horas.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 64px',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--ink-900)',
      textAlign: 'center',
      marginBottom: 48
    }
  }, "Como funciona"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--ink-900)',
      color: 'var(--paper-0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      margin: '0 auto 16px'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--ink-900)',
      marginBottom: 8
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, s.d)))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Manifesto.jsx
try { (() => {
function Manifesto() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-900)',
      padding: '80px 64px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/brand/pattern-organic-dark.svg)',
      backgroundSize: 220,
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 680,
      margin: '0 auto',
      color: 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--brand-coral)',
      marginBottom: 20
    }
  }, "Manifesto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.4,
      margin: '0 0 20px'
    }
  }, "Todo mundo compra. Poucos contam pra algu\xE9m."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--paper-100)',
      margin: '0 0 16px'
    }
  }, "Um v\xEDdeo de 30 segundos de quem realmente comprou vale mais do que qualquer an\xFAncio, porque quem fala ali \xE9 cliente, n\xE3o vendedor."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.75,
      color: 'var(--paper-100)',
      margin: '0 0 16px'
    }
  }, "A MONI existe pra transformar isso em neg\xF3cio. Sem atores, sem roteiro, sem post patrocinado."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      margin: 0
    }
  }, "N\xE3o vendemos an\xFAncio. Vendemos gente contando pra gente o que vale a pena comprar.")));
}
window.Manifesto = Manifesto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Manifesto.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
