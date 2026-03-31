import { r as l, R as Re } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  bh as ue,
  cV as yt,
  cl as Ye,
  bW as Ze,
  gL as qe,
  b8 as wt,
  b9 as vt,
  ba as Ct,
  ct as be,
  bm as Qe,
  gM as St,
  fD as Et,
  cr as He,
  aG as _e,
  bP as Be,
  bb as Xe,
  bO as Ft,
  be as xt,
  bS as Rt,
  J as Ve,
} from './index-C8UyLGsD.js';
import {
  v as It,
  c as N,
  u as M,
  K as We,
  x as Ot,
  E as Dt,
  C as ke,
  o as Lt,
  H as Pt,
  a as Nt,
} from '../vendor/vendor-motion-Dbb9VQJo.js';
import { l as Mt } from '../i18n/i18n-en-US-DgOT8d-N.js';
import { D as Ut } from './DeleteOutlined-DFutYCzo.js';
import { R as jt } from './EyeOutlined-BrqBWuO3.js';
import { P as zt } from './progress-CqsUaYIW.js';
import { T as At } from './index-BSuyBMRZ.js';
function Ie() {
  return (
    (Ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Ie.apply(this, arguments)
  );
}
const Tt = (e, t) => l.createElement(ue, Ie({}, e, { ref: t, icon: Ut })),
  qt = l.forwardRef(Tt),
  Ht = (e, t) => {
    if (e && t) {
      const n = Array.isArray(t) ? t : t.split(','),
        a = e.name || '',
        s = e.type || '',
        o = s.replace(/\/.*$/, '');
      return n.some((i) => {
        const r = i.trim();
        if (/^\*(\/\*)?$/.test(i)) return !0;
        if (r.charAt(0) === '.') {
          const c = a.toLowerCase(),
            u = r.toLowerCase();
          let p = [u];
          return (
            (u === '.jpg' || u === '.jpeg') && (p = ['.jpg', '.jpeg']),
            p.some((h) => c.endsWith(h))
          );
        }
        return /\/\*$/.test(r)
          ? o === r.replace(/\/.*$/, '')
          : s === r
            ? !0
            : /^\w+$/.test(r)
              ? (It(!1, `Upload takes an invalidate 'accept' type '${r}'.Skip for check.`), !0)
              : !1;
      });
    }
    return !0;
  };
function _t(e, t) {
  const n = `cannot ${e.method} ${e.action} ${t.status}'`,
    a = new Error(n);
  return ((a.status = t.status), (a.method = e.method), (a.url = e.action), a);
}
function Ge(e) {
  const t = e.responseText || e.response;
  if (!t) return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Ke(e) {
  const t = new XMLHttpRequest();
  e.onProgress &&
    t.upload &&
    (t.upload.onprogress = function (o) {
      (o.total > 0 && (o.percent = (o.loaded / o.total) * 100), e.onProgress(o));
    });
  const n = new FormData();
  (e.data &&
    Object.keys(e.data).forEach((s) => {
      const o = e.data[s];
      if (Array.isArray(o)) {
        o.forEach((i) => {
          n.append(`${s}[]`, i);
        });
        return;
      }
      n.append(s, o);
    }),
    e.file instanceof Blob
      ? n.append(e.filename, e.file, e.file.name)
      : n.append(e.filename, e.file),
    (t.onerror = function (o) {
      e.onError(o);
    }),
    (t.onload = function () {
      return t.status < 200 || t.status >= 300 ? e.onError(_t(e, t), Ge(t)) : e.onSuccess(Ge(t), t);
    }),
    t.open(e.method, e.action, !0),
    e.withCredentials && 'withCredentials' in t && (t.withCredentials = !0));
  const a = e.headers || {};
  return (
    a['X-Requested-With'] !== null && t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
    Object.keys(a).forEach((s) => {
      a[s] !== null && t.setRequestHeader(s, a[s]);
    }),
    t.send(n),
    {
      abort() {
        t.abort();
      },
    }
  );
}
const Bt = async (e, t) => {
    const n = [],
      a = [];
    e.forEach((c) => a.push(c.webkitGetAsEntry()));
    async function s(c) {
      const u = c.createReader(),
        p = [];
      for (;;) {
        const h = await new Promise((v) => {
            u.readEntries(v, () => v([]));
          }),
          F = h.length;
        if (!F) break;
        for (let v = 0; v < F; v++) p.push(h[v]);
      }
      return p;
    }
    async function o(c) {
      return new Promise((u) => {
        c.file((p) => {
          t(p)
            ? (c.fullPath &&
                !p.webkitRelativePath &&
                (Object.defineProperties(p, { webkitRelativePath: { writable: !0 } }),
                (p.webkitRelativePath = c.fullPath.replace(/^\//, '')),
                Object.defineProperties(p, { webkitRelativePath: { writable: !1 } })),
              u(p))
            : u(null);
        });
      });
    }
    const i = async (c, u) => {
      if (c) {
        if (((c.path = ''), c.isFile)) {
          const p = await o(c);
          p && n.push(p);
        } else if (c.isDirectory) {
          const p = await s(c);
          a.push(...p);
        }
      }
    };
    let r = 0;
    for (; r < a.length; ) (await i(a[r]), r++);
    return n;
  },
  Xt = +new Date();
let Vt = 0;
function Ee() {
  return `rc-upload-${Xt}-${++Vt}`;
}
function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    $e.apply(this, arguments)
  );
}
class Wt extends l.Component {
  state = { uid: Ee() };
  reqs = {};
  fileInput;
  _isMounted;
  filterFile = (t, n = !1) => {
    const { accept: a, directory: s } = this.props;
    let o, i;
    if (typeof a == 'string') i = a;
    else {
      const { filter: c, format: u } = a || {};
      ((i = u), c === 'native' ? (o = () => !0) : (o = c));
    }
    return (o || (s || n ? (c) => Ht(c, i) : () => !0))(t);
  };
  onChange = (t) => {
    const { files: n } = t.target,
      a = [...n].filter((s) => this.filterFile(s));
    (this.uploadFiles(a), this.reset());
  };
  onClick = (t) => {
    const n = this.fileInput;
    if (!n) return;
    const a = t.target,
      { onClick: s } = this.props;
    (a && a.tagName === 'BUTTON' && (n.parentNode.focus(), a.blur()), n.click(), s && s(t));
  };
  onKeyDown = (t) => {
    t.key === 'Enter' && this.onClick(t);
  };
  onDataTransferFiles = async (t, n) => {
    const { multiple: a, directory: s } = this.props,
      o = [...(t.items || [])];
    let i = [...(t.files || [])];
    if (((i.length > 0 || o.some((r) => r.kind === 'file')) && n?.(), s))
      ((i = await Bt(Array.prototype.slice.call(o), this.filterFile)), this.uploadFiles(i));
    else {
      let r = [...i].filter((c) => this.filterFile(c, !0));
      (a === !1 && (r = i.slice(0, 1)), this.uploadFiles(r));
    }
  };
  onFilePaste = async (t) => {
    const { pastable: n } = this.props;
    if (n && t.type === 'paste') {
      const a = t.clipboardData;
      return this.onDataTransferFiles(a, () => {
        t.preventDefault();
      });
    }
  };
  onFileDragOver = (t) => {
    t.preventDefault();
  };
  onFileDrop = async (t) => {
    if ((t.preventDefault(), t.type === 'drop')) {
      const n = t.dataTransfer;
      return this.onDataTransferFiles(n);
    }
  };
  componentDidMount() {
    this._isMounted = !0;
    const { pastable: t } = this.props;
    t && document.addEventListener('paste', this.onFilePaste);
  }
  componentWillUnmount() {
    ((this._isMounted = !1), this.abort(), document.removeEventListener('paste', this.onFilePaste));
  }
  componentDidUpdate(t) {
    const { pastable: n } = this.props;
    n && !t.pastable
      ? document.addEventListener('paste', this.onFilePaste)
      : !n && t.pastable && document.removeEventListener('paste', this.onFilePaste);
  }
  uploadFiles = (t) => {
    const n = [...t],
      a = n.map((s) => ((s.uid = Ee()), this.processFile(s, n)));
    Promise.all(a).then((s) => {
      const { onBatchStart: o } = this.props;
      (o?.(s.map(({ origin: i, parsedFile: r }) => ({ file: i, parsedFile: r }))),
        s
          .filter((i) => i.parsedFile !== null)
          .forEach((i) => {
            this.post(i);
          }));
    });
  };
  processFile = async (t, n) => {
    const { beforeUpload: a } = this.props;
    let s = t;
    if (a) {
      try {
        s = await a(t, n);
      } catch {
        s = !1;
      }
      if (s === !1) return { origin: t, parsedFile: null, action: null, data: null };
    }
    const { action: o } = this.props;
    let i;
    typeof o == 'function' ? (i = await o(t)) : (i = o);
    const { data: r } = this.props;
    let c;
    typeof r == 'function' ? (c = await r(t)) : (c = r);
    const u = (typeof s == 'object' || typeof s == 'string') && s ? s : t;
    let p;
    u instanceof File ? (p = u) : (p = new File([u], t.name, { type: t.type }));
    const h = p;
    return ((h.uid = t.uid), { origin: t, data: c, parsedFile: h, action: i });
  };
  post({ data: t, origin: n, action: a, parsedFile: s }) {
    if (!this._isMounted) return;
    const {
        onStart: o,
        customRequest: i,
        name: r,
        headers: c,
        withCredentials: u,
        method: p,
      } = this.props,
      { uid: h } = n,
      F = i || Ke,
      v = {
        action: a,
        filename: r,
        data: t,
        file: s,
        headers: c,
        withCredentials: u,
        method: p || 'post',
        onProgress: (x) => {
          const { onProgress: E } = this.props;
          E?.(x, s);
        },
        onSuccess: (x, E) => {
          const { onSuccess: O } = this.props;
          (O?.(x, s, E), delete this.reqs[h]);
        },
        onError: (x, E) => {
          const { onError: O } = this.props;
          (O?.(x, E, s), delete this.reqs[h]);
        },
      };
    (o(n), (this.reqs[h] = F(v, { defaultRequest: Ke })));
  }
  reset() {
    this.setState({ uid: Ee() });
  }
  abort(t) {
    const { reqs: n } = this;
    if (t) {
      const a = t.uid ? t.uid : t;
      (n[a] && n[a].abort && n[a].abort(), delete n[a]);
    } else
      Object.keys(n).forEach((a) => {
        (n[a] && n[a].abort && n[a].abort(), delete n[a]);
      });
  }
  saveFileInput = (t) => {
    this.fileInput = t;
  };
  render() {
    const {
        component: t,
        prefixCls: n,
        className: a,
        classNames: s = {},
        disabled: o,
        id: i,
        name: r,
        style: c,
        styles: u = {},
        multiple: p,
        accept: h,
        capture: F,
        children: v,
        directory: x,
        openFileDialogOnClick: E,
        onMouseEnter: O,
        onMouseLeave: A,
        hasControlInside: z,
        ...T
      } = this.props,
      U = typeof h == 'string' ? h : h?.format,
      I = N(n, { [`${n}-disabled`]: o, [a]: a }),
      _ = x ? { directory: 'directory', webkitdirectory: 'webkitdirectory' } : {},
      B = o
        ? {}
        : {
            onClick: E ? this.onClick : () => {},
            onKeyDown: E ? this.onKeyDown : () => {},
            onMouseEnter: O,
            onMouseLeave: A,
            onDrop: this.onFileDrop,
            onDragOver: this.onFileDragOver,
            tabIndex: z ? void 0 : '0',
          };
    return Re.createElement(
      t,
      $e({}, B, { className: I, role: z ? void 0 : 'button', style: c }),
      Re.createElement(
        'input',
        $e(
          {},
          yt(T, { aria: !0, data: !0 }),
          {
            id: i,
            name: r,
            disabled: o,
            type: 'file',
            ref: this.saveFileInput,
            onClick: (j) => j.stopPropagation(),
            key: this.state.uid,
            style: { display: 'none', ...u.input },
            className: s.input,
            accept: U,
          },
          _,
          { multiple: p, onChange: this.onChange },
          F != null ? { capture: F } : {},
        ),
      ),
      v,
    );
  }
}
function Oe() {
  return (
    (Oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Oe.apply(this, arguments)
  );
}
function Fe() {}
let Je = class extends l.Component {
  static defaultProps = {
    component: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: !1,
    onStart: Fe,
    onError: Fe,
    onSuccess: Fe,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0,
    hasControlInside: !1,
  };
  uploader;
  abort(t) {
    this.uploader.abort(t);
  }
  saveUploader = (t) => {
    this.uploader = t;
  };
  render() {
    return Re.createElement(Wt, Oe({}, this.props, { ref: this.saveUploader }));
  }
};
const Gt = (e) => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-drag`]: {
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          background: e.colorFillAlter,
          border: `${M(e.lineWidth)} dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: 'pointer',
          transition: `border-color ${e.motionDurationSlow}`,
          [t]: { padding: e.padding },
          [`${t}-btn`]: {
            'display': 'table',
            'width': '100%',
            'height': '100%',
            'outline': 'none',
            'borderRadius': e.borderRadiusLG,
            '&:focus-visible': { outline: `${M(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}` },
          },
          [`${t}-drag-container`]: { display: 'table-cell', verticalAlign: 'middle' },
          [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: { borderColor: e.colorPrimaryHover },
          [`p${t}-drag-icon`]: {
            marginBottom: e.margin,
            [n]: { color: e.colorPrimary, fontSize: e.uploadThumbnailSize },
          },
          [`p${t}-text`]: {
            margin: `0 0 ${M(e.marginXXS)}`,
            color: e.colorTextHeading,
            fontSize: e.fontSizeLG,
          },
          [`p${t}-hint`]: { color: e.colorTextDescription, fontSize: e.fontSize },
          [`&${t}-disabled`]: {
            [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: { color: e.colorTextDisabled },
          },
        },
      },
    };
  },
  Kt = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        fontSize: a,
        lineHeight: s,
        motionDurationSlow: o,
        calc: i,
      } = e,
      r = `${t}-list-item`,
      c = `${r}-actions`,
      u = `${r}-action`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-list`]: {
          ...Ze(),
          lineHeight: e.lineHeight,
          [r]: {
            'position': 'relative',
            'height': i(e.lineHeight).mul(a).equal(),
            'marginTop': e.marginXS,
            'fontSize': a,
            'display': 'flex',
            'alignItems': 'center',
            'transition': `background-color ${o}`,
            'borderRadius': e.borderRadiusSM,
            '&:hover': { backgroundColor: e.controlItemBgHover },
            [`${r}-name`]: {
              ...Ye,
              padding: `0 ${M(e.paddingXS)}`,
              lineHeight: s,
              flex: 'auto',
              transition: `all ${o}`,
            },
            [c]: {
              'whiteSpace': 'nowrap',
              [u]: { opacity: 0 },
              '@media (hover: none), (pointer: coarse)': { [u]: { opacity: 1 } },
              [n]: { color: e.actionsColor, transition: `all ${o}` },
              [`
              ${u}:focus-visible,
              &.picture ${u}
            `]: { opacity: 1 },
            },
            [`${t}-icon ${n}`]: { color: e.colorIcon, fontSize: a },
            [`${r}-progress`]: {
              'position': 'absolute',
              'bottom': e.calc(e.uploadProgressOffset).mul(-1).equal(),
              'width': '100%',
              'paddingInlineStart': i(a).add(e.paddingXS).equal(),
              'fontSize': a,
              'lineHeight': 0,
              'pointerEvents': 'none',
              '> div': { margin: 0 },
            },
          },
          [`${r}:hover ${u}`]: { opacity: 1 },
          [`${r}-error`]: {
            color: e.colorError,
            [`${r}-name, ${t}-icon ${n}`]: { color: e.colorError },
            [c]: { [`${n}, ${n}:hover`]: { color: e.colorError }, [u]: { opacity: 1 } },
          },
          [`${t}-list-item-container`]: {
            'transition': ['opacity', 'height'].map((p) => `${p} ${o}`).join(', '),
            '&::before': { display: 'table', width: 0, height: 0, content: '""' },
          },
        },
      },
    };
  },
  Jt = (e) => {
    const { componentCls: t } = e,
      n = new We('uploadAnimateInlineIn', {
        from: {
          width: 0,
          height: 0,
          padding: 0,
          opacity: 0,
          margin: e.calc(e.marginXS).div(-2).equal(),
        },
      }),
      a = new We('uploadAnimateInlineOut', {
        to: {
          width: 0,
          height: 0,
          padding: 0,
          opacity: 0,
          margin: e.calc(e.marginXS).div(-2).equal(),
        },
      }),
      s = `${t}-animate-inline`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${s}-appear, ${s}-enter, ${s}-leave`]: {
            animationDuration: e.motionDurationSlow,
            animationTimingFunction: e.motionEaseInOutCirc,
            animationFillMode: 'forwards',
          },
          [`${s}-appear, ${s}-enter`]: { animationName: n },
          [`${s}-leave`]: { animationName: a },
        },
      },
      { [`${t}-wrapper`]: Ot(e) },
      n,
      a,
    ];
  },
  Yt = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        uploadThumbnailSize: a,
        uploadProgressOffset: s,
        calc: o,
      } = e,
      i = `${t}-list`,
      r = `${i}-item`;
    return {
      [`${t}-wrapper`]: {
        [`
        ${i}${i}-picture,
        ${i}${i}-picture-card,
        ${i}${i}-picture-circle
      `]: {
          [r]: {
            'position': 'relative',
            'height': o(a).add(o(e.lineWidth).mul(2)).add(o(e.paddingXS).mul(2)).equal(),
            'padding': e.paddingXS,
            'border': `${M(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            'borderRadius': e.borderRadiusLG,
            '&:hover': { background: 'transparent' },
            [`${r}-thumbnail`]: {
              ...Ye,
              width: a,
              height: a,
              lineHeight: M(o(a).add(e.paddingSM).equal()),
              textAlign: 'center',
              flex: 'none',
              [n]: { fontSize: e.fontSizeHeading2, color: e.colorPrimary },
              img: { display: 'block', width: '100%', height: '100%', overflow: 'hidden' },
            },
            [`${r}-progress`]: {
              bottom: o(e.fontSize).mul(e.lineHeight).div(2).add(s).equal(),
              width: `calc(100% - ${M(o(e.paddingSM).mul(2).equal())})`,
              marginTop: 0,
              paddingInlineStart: o(a).add(e.paddingXS).equal(),
            },
          },
          [`${r}-error`]: {
            borderColor: e.colorError,
            [`${r}-thumbnail ${n}`]: {
              [`svg path[fill='${qe[0]}']`]: { fill: e.colorErrorBg },
              [`svg path[fill='${qe.primary}']`]: { fill: e.colorError },
            },
          },
          [`${r}-uploading`]: { borderStyle: 'dashed', [`${r}-name`]: { marginBottom: s } },
        },
        [`${i}${i}-picture-circle ${r}`]: {
          [`&, &::before, ${r}-thumbnail`]: { borderRadius: '50%' },
        },
      },
    };
  },
  Zt = (e) => {
    const { componentCls: t, iconCls: n, fontSizeLG: a, colorTextLightSolid: s, calc: o } = e,
      i = `${t}-list`,
      r = `${i}-item`,
      c = e.uploadPicCardSize;
    return {
      [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: {
        ...Ze(),
        display: 'block',
        [`${t}${t}-select`]: {
          width: c,
          height: c,
          textAlign: 'center',
          verticalAlign: 'top',
          backgroundColor: e.colorFillAlter,
          border: `${M(e.lineWidth)} dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: 'pointer',
          transition: `border-color ${e.motionDurationSlow}`,
          [`> ${t}`]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimary },
        },
        [`${i}${i}-picture-card, ${i}${i}-picture-circle`]: {
          'display': 'flex',
          'flexWrap': 'wrap',
          '&:not(:empty)': { minHeight: c },
          '@supports not (gap: 1px)': {
            '& > *': { marginBlockEnd: e.marginXS, marginInlineEnd: e.marginXS },
          },
          '@supports (gap: 1px)': { gap: e.marginXS },
          [`${i}-item-container`]: {
            display: 'inline-block',
            width: c,
            height: c,
            verticalAlign: 'top',
          },
          '&::after': { display: 'none' },
          '&::before': { display: 'none' },
          [r]: {
            'height': '100%',
            'margin': 0,
            '&::before': {
              position: 'absolute',
              zIndex: 1,
              width: `calc(100% - ${M(o(e.paddingXS).mul(2).equal())})`,
              height: `calc(100% - ${M(o(e.paddingXS).mul(2).equal())})`,
              backgroundColor: e.colorBgMask,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '" "',
            },
          },
          [`${r}:hover`]: { [`&::before, ${r}-actions`]: { opacity: 1 } },
          [`${r}-actions`]: {
            position: 'absolute',
            insetInlineStart: 0,
            zIndex: 10,
            width: '100%',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            [`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]: {
              'zIndex': 10,
              'width': a,
              'margin': `0 ${M(e.marginXXS)}`,
              'fontSize': a,
              'cursor': 'pointer',
              'transition': `all ${e.motionDurationSlow}`,
              'color': s,
              '&:hover': { color: s },
              'svg': { verticalAlign: 'baseline' },
            },
          },
          [`${r}-thumbnail, ${r}-thumbnail img`]: {
            position: 'static',
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          },
          [`${r}-name`]: { display: 'none', textAlign: 'center' },
          [`${r}-file + ${r}-name`]: {
            position: 'absolute',
            bottom: e.margin,
            display: 'block',
            width: `calc(100% - ${M(o(e.paddingXS).mul(2).equal())})`,
          },
          [`${r}-uploading`]: {
            [`&${r}`]: { backgroundColor: e.colorFillAlter },
            [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: { display: 'none' },
          },
          [`${r}-progress`]: {
            bottom: e.marginXL,
            width: `calc(100% - ${M(o(e.paddingXS).mul(2).equal())})`,
            paddingInlineStart: 0,
          },
        },
      },
      [`${t}-wrapper${t}-picture-circle-wrapper`]: { [`${t}${t}-select`]: { borderRadius: '50%' } },
    };
  },
  Qt = (e) => {
    const { componentCls: t } = e;
    return { [`${t}-rtl`]: { direction: 'rtl' } };
  },
  kt = (e) => {
    const { componentCls: t, colorTextDisabled: n } = e;
    return {
      [`${t}-wrapper`]: {
        ...Ct(e),
        [t]: { 'outline': 0, "input[type='file']": { cursor: 'pointer' } },
        [`${t}-select`]: { display: 'inline-block' },
        [`${t}-hidden`]: { display: 'none' },
        [`${t}-disabled`]: { color: n, cursor: 'not-allowed' },
      },
    };
  },
  en = (e) => ({ actionsColor: e.colorIcon, pictureCardSize: e.controlHeightLG * 2.55 }),
  tn = wt(
    'Upload',
    (e) => {
      const { fontSizeHeading3: t, marginXS: n, lineWidth: a, pictureCardSize: s, calc: o } = e,
        i = vt(e, {
          uploadThumbnailSize: o(t).mul(2).equal(),
          uploadProgressOffset: o(o(n).div(2)).add(a).equal(),
          uploadPicCardSize: s,
        });
      return [kt(i), Gt(i), Yt(i), Zt(i), Kt(i), Jt(i), Qt(i), Dt(i)];
    },
    en,
  );
var nn = {
  icon: function (t, n) {
    return {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: { d: 'M534 352V136H232v752h560V394H576a42 42 0 01-42-42z', fill: n },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z',
            fill: t,
          },
        },
      ],
    };
  },
  name: 'file',
  theme: 'twotone',
};
function De() {
  return (
    (De = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    De.apply(this, arguments)
  );
}
const rn = (e, t) => l.createElement(ue, De({}, e, { ref: t, icon: nn })),
  an = l.forwardRef(rn);
var on = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z',
        },
      },
    ],
  },
  name: 'paper-clip',
  theme: 'outlined',
};
function Le() {
  return (
    (Le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Le.apply(this, arguments)
  );
}
const sn = (e, t) => l.createElement(ue, Le({}, e, { ref: t, icon: on })),
  ln = l.forwardRef(sn);
var cn = {
  icon: function (t, n) {
    return {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
            fill: t,
          },
        },
        {
          tag: 'path',
          attrs: { d: 'M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z', fill: n },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z',
            fill: n,
          },
        },
        { tag: 'path', attrs: { d: 'M276 368a28 28 0 1056 0 28 28 0 10-56 0z', fill: n } },
        {
          tag: 'path',
          attrs: {
            d: 'M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
            fill: t,
          },
        },
      ],
    };
  },
  name: 'picture',
  theme: 'twotone',
};
function Pe() {
  return (
    (Pe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Pe.apply(this, arguments)
  );
}
const dn = (e, t) => l.createElement(ue, Pe({}, e, { ref: t, icon: cn })),
  un = l.forwardRef(dn);
function fe(e) {
  return {
    ...e,
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e,
  };
}
function he(e, t) {
  const n = be(t),
    a = n.findIndex(({ uid: s }) => s === e.uid);
  return (a === -1 ? n.push(e) : (n[a] = e), n);
}
function xe(e, t) {
  const n = e.uid !== void 0 ? 'uid' : 'name';
  return t.filter((a) => a[n] === e[n])[0];
}
function pn(e, t) {
  const n = e.uid !== void 0 ? 'uid' : 'name',
    a = t.filter((s) => s[n] !== e[n]);
  return a.length === t.length ? null : a;
}
const mn = (e = '') => {
    const t = e.split('/'),
      a = t[t.length - 1].split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(a) || [''])[0];
  },
  et = (e) => e.indexOf('image/') === 0,
  gn = (e) => {
    if (e.type && !e.thumbUrl) return et(e.type);
    const t = e.thumbUrl || e.url || '',
      n = mn(t);
    return /^data:image\//.test(t) ||
      /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n)
      ? !0
      : !(/^data:/.test(t) || n);
  },
  W = 200;
function fn(e) {
  return new Promise((t) => {
    if (!e.type || !et(e.type)) {
      t('');
      return;
    }
    const n = document.createElement('canvas');
    ((n.width = W),
      (n.height = W),
      (n.style.cssText = `position: fixed; left: 0; top: 0; width: ${W}px; height: ${W}px; z-index: 9999; display: none;`),
      document.body.appendChild(n));
    const a = n.getContext('2d'),
      s = new Image();
    if (
      ((s.onload = () => {
        const { width: o, height: i } = s;
        let r = W,
          c = W,
          u = 0,
          p = 0;
        (o > i ? ((c = i * (W / o)), (p = -(c - r) / 2)) : ((r = o * (W / i)), (u = -(r - c) / 2)),
          a.drawImage(s, u, p, r, c));
        const h = n.toDataURL();
        (document.body.removeChild(n), window.URL.revokeObjectURL(s.src), t(h));
      }),
      (s.crossOrigin = 'anonymous'),
      e.type.startsWith('image/svg+xml'))
    ) {
      const o = new FileReader();
      ((o.onload = () => {
        o.result && typeof o.result == 'string' && (s.src = o.result);
      }),
        o.readAsDataURL(e));
    } else if (e.type.startsWith('image/gif')) {
      const o = new FileReader();
      ((o.onload = () => {
        o.result && t(o.result);
      }),
        o.readAsDataURL(e));
    } else s.src = window.URL.createObjectURL(e);
  });
}
var hn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'download',
  theme: 'outlined',
};
function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Ne.apply(this, arguments)
  );
}
const bn = (e, t) => l.createElement(ue, Ne({}, e, { ref: t, icon: hn })),
  $n = l.forwardRef(bn),
  yn = l.forwardRef(
    (
      {
        prefixCls: e,
        className: t,
        style: n,
        classNames: a,
        styles: s,
        locale: o,
        listType: i,
        file: r,
        items: c,
        progress: u,
        iconRender: p,
        actionIconRender: h,
        itemRender: F,
        isImgUrl: v,
        showPreviewIcon: x,
        showRemoveIcon: E,
        showDownloadIcon: O,
        previewIcon: A,
        removeIcon: z,
        downloadIcon: T,
        extra: U,
        onPreview: I,
        onDownload: _,
        onClose: B,
      },
      j,
    ) => {
      const { status: q } = r,
        [D, Q] = l.useState(q);
      l.useEffect(() => {
        q !== 'removed' && Q(q);
      }, [q]);
      const [se, k] = l.useState(!1);
      l.useEffect(() => {
        const C = setTimeout(() => {
          k(!0);
        }, 300);
        return () => {
          clearTimeout(C);
        };
      }, []);
      const H = p(r);
      let X = l.createElement('div', { className: `${e}-icon` }, H);
      if (i === 'picture' || i === 'picture-card' || i === 'picture-circle')
        if (D === 'uploading' || (!r.thumbUrl && !r.url)) {
          const C = N(`${e}-list-item-thumbnail`, { [`${e}-list-item-file`]: D !== 'uploading' });
          X = l.createElement('div', { className: C }, H);
        } else {
          const C = v?.(r)
              ? l.createElement('img', {
                  src: r.thumbUrl || r.url,
                  alt: r.name,
                  className: `${e}-list-item-image`,
                  crossOrigin: r.crossOrigin,
                })
              : H,
            ae = N(`${e}-list-item-thumbnail`, { [`${e}-list-item-file`]: v && !v(r) });
          X = l.createElement(
            'a',
            {
              className: ae,
              onClick: (ye) => I(r, ye),
              href: r.url || r.thumbUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            C,
          );
        }
      const ie = N(`${e}-list-item`, `${e}-list-item-${D}`, a?.item),
        le = typeof r.linkProps == 'string' ? JSON.parse(r.linkProps) : r.linkProps,
        ee = (typeof E == 'function' ? E(r) : E)
          ? h(
              (typeof z == 'function' ? z(r) : z) || l.createElement(qt, null),
              () => B(r),
              e,
              o.removeFile,
              !0,
            )
          : null,
        L =
          (typeof O == 'function' ? O(r) : O) && D === 'done'
            ? h(
                (typeof T == 'function' ? T(r) : T) || l.createElement($n, null),
                () => _(r),
                e,
                o.downloadFile,
              )
            : null,
        V =
          i !== 'picture-card' &&
          i !== 'picture-circle' &&
          l.createElement(
            'span',
            {
              key: 'download-delete',
              className: N(`${e}-list-item-actions`, { picture: i === 'picture' }),
            },
            L,
            ee,
          ),
        G = typeof U == 'function' ? U(r) : U,
        te = G && l.createElement('span', { className: `${e}-list-item-extra` }, G),
        S = N(`${e}-list-item-name`),
        ne = r.url
          ? l.createElement(
              'a',
              {
                key: 'view',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: S,
                title: r.name,
                ...le,
                href: r.url,
                onClick: (C) => I(r, C),
              },
              r.name,
              te,
            )
          : l.createElement(
              'span',
              { key: 'view', className: S, onClick: (C) => I(r, C), title: r.name },
              r.name,
              te,
            ),
        d =
          (typeof x == 'function' ? x(r) : x) && (r.url || r.thumbUrl)
            ? l.createElement(
                'a',
                {
                  href: r.url || r.thumbUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  onClick: (C) => I(r, C),
                  title: o.previewFile,
                },
                typeof A == 'function' ? A(r) : A || l.createElement(jt, null),
              )
            : null,
        y =
          (i === 'picture-card' || i === 'picture-circle') &&
          D !== 'uploading' &&
          l.createElement(
            'span',
            { className: `${e}-list-item-actions` },
            d,
            D === 'done' && L,
            ee,
          ),
        { getPrefixCls: R } = l.useContext(Qe),
        P = R(),
        re = l.createElement(
          'div',
          { className: ie, style: s?.item },
          X,
          ne,
          V,
          y,
          se &&
            l.createElement(
              ke,
              { motionName: `${P}-fade`, visible: D === 'uploading', motionDeadline: 2e3 },
              ({ className: C }) => {
                const ae =
                  'percent' in r
                    ? l.createElement(zt, {
                        'type': 'line',
                        'percent': r.percent,
                        'aria-label': r['aria-label'],
                        'aria-labelledby': r['aria-labelledby'],
                        ...u,
                      })
                    : null;
                return l.createElement('div', { className: N(`${e}-list-item-progress`, C) }, ae);
              },
            ),
        ),
        K =
          r.response && typeof r.response == 'string'
            ? r.response
            : r.error?.statusText || r.error?.message || o.uploadError,
        J =
          D === 'error'
            ? l.createElement(At, { title: K, getPopupContainer: (C) => C.parentNode }, re)
            : re;
      return l.createElement(
        'div',
        { className: N(`${e}-list-item-container`, t), style: n, ref: j },
        F
          ? F(J, r, c, {
              download: _.bind(null, r),
              preview: I.bind(null, r),
              remove: B.bind(null, r),
            })
          : J,
      );
    },
  ),
  wn = (e, t) => {
    const {
        listType: n = 'text',
        previewFile: a = fn,
        onPreview: s,
        onDownload: o,
        onRemove: i,
        locale: r,
        iconRender: c,
        isImageUrl: u = gn,
        prefixCls: p,
        items: h = [],
        showPreviewIcon: F = !0,
        showRemoveIcon: v = !0,
        showDownloadIcon: x = !1,
        removeIcon: E,
        previewIcon: O,
        downloadIcon: A,
        extra: z,
        progress: T = { size: [-1, 2], showInfo: !1 },
        appendAction: U,
        appendActionVisible: I = !0,
        itemRender: _,
        disabled: B,
        classNames: j,
        styles: q,
      } = e,
      [, D] = St(),
      [Q, se] = l.useState(!1),
      k = ['picture-card', 'picture-circle'].includes(n);
    (l.useEffect(() => {
      n.startsWith('picture') &&
        (h || []).forEach((d) => {
          !(d.originFileObj instanceof File || d.originFileObj instanceof Blob) ||
            d.thumbUrl !== void 0 ||
            ((d.thumbUrl = ''),
            a?.(d.originFileObj).then((y) => {
              ((d.thumbUrl = y || ''), D());
            }));
        });
    }, [n, h, a]),
      l.useEffect(() => {
        se(!0);
      }, []));
    const H = (d, y) => {
        if (s) return (y?.preventDefault(), s(d));
      },
      X = (d) => {
        typeof o == 'function' ? o(d) : d.url && window.open(d.url);
      },
      ie = (d) => {
        i?.(d);
      },
      le = (d) => {
        if (c) return c(d, n);
        const y = d.status === 'uploading';
        if (n.startsWith('picture')) {
          const R = n === 'picture' ? l.createElement(Be, null) : r.uploading,
            P = u?.(d) ? l.createElement(un, null) : l.createElement(an, null);
          return y ? R : P;
        }
        return y ? l.createElement(Be, null) : l.createElement(ln, null);
      },
      ee = (d, y, R, P, re) => {
        const K = {
          type: 'text',
          size: 'small',
          title: P,
          onClick: (J) => {
            (y(), l.isValidElement(d) && d.props.onClick?.(J));
          },
          className: `${R}-list-item-action`,
          disabled: re ? B : !1,
        };
        return l.isValidElement(d)
          ? l.createElement(_e, { ...K, icon: He(d, { ...d.props, onClick: () => {} }) })
          : l.createElement(_e, { ...K }, l.createElement('span', null, d));
      };
    l.useImperativeHandle(t, () => ({ handlePreview: H, handleDownload: X }));
    const { getPrefixCls: L } = l.useContext(Qe),
      V = L('upload', p),
      G = L(),
      te = N(`${V}-list`, `${V}-list-${n}`, j?.list),
      S = l.useMemo(() => Lt(Et(G), ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd']), [G]),
      ne = {
        ...(k ? {} : S),
        motionDeadline: 2e3,
        motionName: `${V}-${k ? 'animate-inline' : 'animate'}`,
        keys: be(h.map((d) => ({ key: d.uid, file: d }))),
        motionAppear: Q,
      };
    return l.createElement(
      'div',
      { className: te, style: q?.list },
      l.createElement(Pt, { ...ne, component: !1 }, ({ key: d, file: y, className: R, style: P }) =>
        l.createElement(yn, {
          key: d,
          locale: r,
          prefixCls: V,
          className: R,
          style: P,
          classNames: j,
          styles: q,
          file: y,
          items: h,
          progress: T,
          listType: n,
          isImgUrl: u,
          showPreviewIcon: F,
          showRemoveIcon: v,
          showDownloadIcon: x,
          removeIcon: E,
          previewIcon: O,
          downloadIcon: A,
          extra: z,
          iconRender: le,
          actionIconRender: ee,
          itemRender: _,
          onPreview: H,
          onDownload: X,
          onClose: ie,
        }),
      ),
      U &&
        l.createElement(ke, { ...ne, visible: I, forceRender: !0 }, ({ className: d, style: y }) =>
          He(U, (R) => ({
            className: N(R.className, d),
            style: { ...y, pointerEvents: d ? 'none' : void 0, ...R.style },
          })),
        ),
    );
  },
  vn = l.forwardRef(wn),
  de = `__LIST_IGNORE_${Date.now()}__`,
  Cn = (e, t) => {
    const n = Xe('upload'),
      {
        fileList: a,
        defaultFileList: s,
        onRemove: o,
        showUploadList: i = !0,
        listType: r = 'text',
        onPreview: c,
        onDownload: u,
        onChange: p,
        onDrop: h,
        previewFile: F,
        disabled: v,
        locale: x,
        iconRender: E,
        isImageUrl: O,
        progress: A,
        prefixCls: z,
        className: T,
        type: U = 'select',
        children: I,
        style: _,
        itemRender: B,
        maxCount: j,
        data: q = {},
        multiple: D = !1,
        hasControlInside: Q = !0,
        action: se = '',
        accept: k = '',
        supportServerRender: H = !0,
        rootClassName: X,
        styles: ie,
        classNames: le,
      } = e,
      ee = l.useContext(Ft),
      L = v ?? ee,
      V = e.customRequest || n.customRequest,
      [G, te] = Nt(s, a),
      S = G || [],
      [ne, d] = l.useState('drop'),
      y = l.useRef(null),
      R = l.useRef(null);
    l.useMemo(() => {
      const m = Date.now();
      (a || []).forEach((f, $) => {
        !f.uid && !Object.isFrozen(f) && (f.uid = `__AUTO__${m}_${$}__`);
      });
    }, [a]);
    const P = (m, f, $) => {
        let g = be(f),
          b = !1;
        (j === 1 ? (g = g.slice(-1)) : j && ((b = g.length > j), (g = g.slice(0, j))),
          Ve.flushSync(() => {
            te(g);
          }));
        const Y = { file: m, fileList: g };
        ($ && (Y.event = $),
          (!b || m.status === 'removed' || g.some((ge) => ge.uid === m.uid)) &&
            Ve.flushSync(() => {
              p?.(Y);
            }));
      },
      re = async (m, f) => {
        const { beforeUpload: $ } = e;
        let g = m;
        if ($) {
          const b = await $(m, f);
          if (b === !1) return !1;
          if ((delete m[de], b === de))
            return (Object.defineProperty(m, de, { value: !0, configurable: !0 }), !1);
          typeof b == 'object' && b && (g = b);
        }
        return g;
      },
      K = (m) => {
        const f = m.filter((b) => !b.file[de]);
        if (!f.length) return;
        const $ = f.map((b) => fe(b.file));
        let g = be(S);
        ($.forEach((b) => {
          g = he(b, g);
        }),
          $.forEach((b, Y) => {
            let ge = b;
            if (f[Y].parsedFile) b.status = 'uploading';
            else {
              const { originFileObj: oe } = b;
              let Z;
              try {
                Z = new File([oe], oe.name, { type: oe.type });
              } catch {
                ((Z = new Blob([oe], { type: oe.type })),
                  (Z.name = oe.name),
                  (Z.lastModifiedDate = new Date()),
                  (Z.lastModified = new Date().getTime()));
              }
              ((Z.uid = b.uid), (ge = Z));
            }
            P(ge, g);
          }));
      },
      J = (m, f, $) => {
        try {
          typeof m == 'string' && (m = JSON.parse(m));
        } catch {}
        if (!xe(f, S)) return;
        const g = fe(f);
        ((g.status = 'done'), (g.percent = 100), (g.response = m), (g.xhr = $));
        const b = he(g, S);
        P(g, b);
      },
      C = (m, f) => {
        if (!xe(f, S)) return;
        const $ = fe(f);
        (($.status = 'uploading'), ($.percent = m.percent));
        const g = he($, S);
        P($, g, m);
      },
      ae = (m, f, $) => {
        if (!xe($, S)) return;
        const g = fe($);
        ((g.error = m), (g.response = f), (g.status = 'error'));
        const b = he(g, S);
        P(g, b);
      },
      ye = (m) => {
        let f;
        Promise.resolve(typeof o == 'function' ? o(m) : o).then(($) => {
          if ($ === !1) return;
          const g = pn(m, S);
          g &&
            ((f = { ...m, status: 'removed' }),
            S?.forEach((b) => {
              const Y = f.uid !== void 0 ? 'uid' : 'name';
              b[Y] === f[Y] && !Object.isFrozen(b) && (b.status = 'removed');
            }),
            y.current?.abort(f),
            P(f, g));
        });
      },
      we = (m) => {
        (d(m.type), m.type === 'drop' && h?.(m));
      };
    l.useImperativeHandle(t, () => ({
      onBatchStart: K,
      onSuccess: J,
      onProgress: C,
      onError: ae,
      fileList: S,
      upload: y.current,
      nativeElement: R.current,
    }));
    const {
        getPrefixCls: rt,
        direction: Me,
        className: at,
        style: ot,
        classNames: st,
        styles: it,
      } = Xe('upload'),
      w = rt('upload', z),
      lt = {
        ...e,
        listType: r,
        showUploadList: i,
        type: U,
        multiple: D,
        hasControlInside: Q,
        supportServerRender: H,
        disabled: L,
      },
      [pe, me] = xt([st, le], [it, ie], { props: lt }),
      ce = {
        onBatchStart: K,
        onError: ae,
        onProgress: C,
        onSuccess: J,
        ...e,
        customRequest: V,
        data: q,
        multiple: D,
        action: se,
        accept: k,
        supportServerRender: H,
        prefixCls: w,
        disabled: L,
        beforeUpload: re,
        onChange: void 0,
        hasControlInside: Q,
      };
    (delete ce.className, delete ce.style, (!I || L) && delete ce.id);
    const Ue = `${w}-wrapper`,
      [je, ct] = tn(w, Ue),
      [dt] = Rt('Upload', Mt.Upload),
      {
        showRemoveIcon: ze,
        showPreviewIcon: ut,
        showDownloadIcon: pt,
        removeIcon: mt,
        previewIcon: gt,
        downloadIcon: ft,
        extra: ht,
      } = typeof i == 'boolean' ? {} : i,
      bt = typeof ze > 'u' ? !L : ze,
      ve = (m, f) =>
        i
          ? l.createElement(vn, {
              classNames: pe,
              styles: me,
              prefixCls: w,
              listType: r,
              items: S,
              previewFile: F,
              onPreview: c,
              onDownload: u,
              onRemove: ye,
              showRemoveIcon: bt,
              showPreviewIcon: ut,
              showDownloadIcon: pt,
              removeIcon: mt,
              previewIcon: gt,
              downloadIcon: ft,
              iconRender: E,
              extra: ht,
              locale: { ...dt, ...x },
              isImageUrl: O,
              progress: A,
              appendAction: m,
              appendActionVisible: f,
              itemRender: B,
              disabled: L,
            })
          : m,
      Ce = N(Ue, T, X, je, ct, at, pe.root, {
        [`${w}-rtl`]: Me === 'rtl',
        [`${w}-picture-card-wrapper`]: r === 'picture-card',
        [`${w}-picture-circle-wrapper`]: r === 'picture-circle',
      }),
      Se = { ...me.root },
      Ae = { ...ot, ..._ };
    if (U === 'drag') {
      const m = N(
        je,
        w,
        `${w}-drag`,
        {
          [`${w}-drag-uploading`]: S.some((f) => f.status === 'uploading'),
          [`${w}-drag-hover`]: ne === 'dragover',
          [`${w}-disabled`]: L,
          [`${w}-rtl`]: Me === 'rtl',
        },
        pe.trigger,
      );
      return l.createElement(
        'span',
        { className: Ce, ref: R, style: Se },
        l.createElement(
          'div',
          {
            className: m,
            style: { ...Ae, ...me.trigger },
            onDrop: we,
            onDragOver: we,
            onDragLeave: we,
          },
          l.createElement(
            Je,
            { ...ce, ref: y, className: `${w}-btn` },
            l.createElement('div', { className: `${w}-drag-container` }, I),
          ),
        ),
        ve(),
      );
    }
    const $t = N(w, `${w}-select`, { [`${w}-disabled`]: L, [`${w}-hidden`]: !I }, pe.trigger),
      Te = l.createElement(
        'div',
        { className: $t, style: { ...Ae, ...me.trigger } },
        l.createElement(Je, { ...ce, ref: y }),
      );
    return r === 'picture-card' || r === 'picture-circle'
      ? l.createElement('span', { className: Ce, ref: R, style: Se }, ve(Te, !!I))
      : l.createElement('span', { className: Ce, ref: R, style: Se }, Te, ve());
  },
  tt = l.forwardRef(Cn),
  Sn = l.forwardRef((e, t) => {
    const { style: n, height: a, hasControlInside: s = !1, children: o, ...i } = e,
      r = { ...n, height: a };
    return l.createElement(tt, { ref: t, hasControlInside: s, ...i, style: r, type: 'drag' }, o);
  }),
  nt = tt;
nt.Dragger = Sn;
nt.LIST_IGNORE = de;
export { qt as R, nt as U, $n as a };
