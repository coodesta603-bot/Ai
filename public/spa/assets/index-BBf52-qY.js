import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { d as w } from './providerConfig-qS2Xx-oI.js';
import {
  g as C,
  ax as A,
  v as M,
  R as L,
  a_ as T,
  F as p,
  B as m,
  I as k,
} from './index-C8UyLGsD.js';
import { M as _ } from './Modal-Dd2pIxVd.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { T as z } from './index-B_YhPabI.js';
import { u as E } from './store-8fdqmFXe.js';
import { F as l } from './index-5nC5GwBn.js';
import { I as B } from './index-OkOG2AHU.js';
import { U as R } from './index-C2-gySBL.js';
import { ay as q, az as P } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Drawer-Blxnywp3.js';
import './TextArea-CHeYteyg.js';
import './style-Bc_3l5BM.js';
import './useIMECompositionEvent-CkD1Q2jQ.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-BTy9wwF3.js';
import './index-ClRvEh9W.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-C5lJURGN.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BKXDfgeT.js';
import './useForm-By-Y7CLc.js';
import './row-cnvQQvQf.js';
import './index-BSuyBMRZ.js';
import './index-CqaQ90GQ.js';
import './Input-BIU8BRU1.js';
import './index-RoMbEimC.js';
import './EyeOutlined-BrqBWuO3.js';
import './TextArea-BTdxpOlh.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-CqsUaYIW.js';
const N = a.memo(({ initialValues: j, onClose: i, open: S }) => {
  const { t: e } = C('common'),
    { message: t } = A.useApp(),
    [o] = l.useForm(),
    [y, f] = a.useState(!1),
    [c, n] = a.useState(null),
    [u, h] = a.useState(!1),
    b = E((r) => r.uploadWithProgress),
    g = M(L.email),
    F = a.useCallback(
      async (r) => {
        if (r.size > 5242880) {
          t.error(e('feedback.errors.fileTooLarge'));
          return;
        }
        h(!0);
        try {
          const d = await b({ file: r });
          d?.url && (n(d.url), t.success(e('feedback.screenshotUploaded')));
        } catch (d) {
          (console.error('[FeedbackModal] Screenshot upload failed:', d),
            t.error(e('feedback.errors.uploadFailed')));
        } finally {
          h(!1);
        }
      },
      [t, e, b],
    ),
    I = a.useCallback(() => {
      n(null);
    }, []),
    v = a.useCallback(async () => {
      try {
        const r = await o.validateFields();
        f(!0);
        const U = await T.market.submitFeedback.mutate({
          clientInfo: {
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            url: window.location.href,
            userAgent: navigator.userAgent,
          },
          email: g || void 0,
          message: r.message,
          screenshotUrl: c || void 0,
          title: r.title,
        });
        (t.success(e('feedback.success')), o.resetFields(), n(null), i());
      } catch (r) {
        (console.error('[FeedbackModal] Submission failed:', r),
          t.error(e('feedback.errors.submitFailed')));
      } finally {
        f(!1);
      }
    }, [o, t, i, c, e, g]),
    x = a.useCallback(() => {
      (o.resetFields(), n(null), i());
    }, [o, i]);
  return s.jsxs(_, {
    centered: !0,
    open: S,
    title: e('feedback.title'),
    width: 600,
    footer: s.jsxs(p, {
      horizontal: !0,
      gap: 8,
      justify: 'flex-end',
      children: [
        s.jsx(m, { onClick: x, children: e('cancel') }),
        s.jsx(m, {
          icon: s.jsx(k, { icon: P }),
          loading: y,
          type: 'primary',
          onClick: v,
          children: e('feedback.submit'),
        }),
      ],
    }),
    onCancel: x,
    children: [
      s.jsx('p', {
        style: { color: 'var(--colorTextSecondary)', fontSize: 14, marginBottom: 16 },
        children: e('feedback.emailContact', { email: w.business }),
      }),
      s.jsxs(l, {
        form: o,
        initialValues: j,
        layout: 'vertical',
        children: [
          s.jsx(l.Item, {
            label: e('feedback.fields.title.label'),
            name: 'title',
            rules: [
              { message: e('feedback.fields.title.required'), required: !0 },
              { max: 200, message: e('feedback.fields.title.maxLength') },
            ],
            children: s.jsx(B, {
              showCount: !0,
              maxLength: 200,
              placeholder: e('feedback.fields.title.placeholder'),
            }),
          }),
          s.jsx(l.Item, {
            label: e('feedback.fields.message.label'),
            name: 'message',
            rules: [
              { message: e('feedback.fields.message.required'), required: !0 },
              { max: 5e3, message: e('feedback.fields.message.maxLength') },
            ],
            children: s.jsx(z, {
              showCount: !0,
              maxLength: 5e3,
              placeholder: e('feedback.fields.message.placeholder'),
              rows: 6,
            }),
          }),
          s.jsxs(l.Item, {
            label: e('feedback.fields.screenshot.label'),
            children: [
              s.jsx(p, {
                gap: 8,
                children: c
                  ? s.jsxs(p, {
                      gap: 8,
                      children: [
                        s.jsx('img', {
                          alt: 'Screenshot',
                          src: c,
                          style: { borderRadius: 8, maxHeight: 200, maxWidth: '100%' },
                        }),
                        s.jsx(m, {
                          danger: !0,
                          disabled: u,
                          onClick: I,
                          children: e('feedback.fields.screenshot.remove'),
                        }),
                      ],
                    })
                  : s.jsx(R, {
                      accept: 'image/*',
                      showUploadList: !1,
                      beforeUpload: (r) => (F(r), !1),
                      children: s.jsx(m, {
                        icon: s.jsx(k, { icon: q }),
                        loading: u,
                        children: e(
                          u
                            ? 'feedback.fields.screenshot.uploading'
                            : 'feedback.fields.screenshot.upload',
                        ),
                      }),
                    }),
              }),
              s.jsx('p', {
                style: { color: 'var(--colorTextSecondary)', fontSize: 12, marginTop: 8 },
                children: e('feedback.fields.screenshot.hint'),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});
N.displayName = 'FeedbackModal';
export { N as default };
