import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/DestinationCard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c3687b44"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/project/src/components/DestinationCard.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
function DestinationCard({ image, title, description }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/components/DestinationCard.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/home/project/src/components/DestinationCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-serif text-amber-500 mb-3", children: title }, void 0, false, {
        fileName: "/home/project/src/components/DestinationCard.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 mb-4 leading-relaxed", children: description }, void 0, false, {
        fileName: "/home/project/src/components/DestinationCard.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold px-6 py-2 rounded-lg transition-all duration-400", children: "Découvrir" }, void 0, false, {
        fileName: "/home/project/src/components/DestinationCard.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/DestinationCard.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/DestinationCard.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = DestinationCard;
export default DestinationCard;
var _c;
$RefreshReg$(_c, "DestinationCard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/DestinationCard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/DestinationCard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBVVE7QUFWUiwyQkFBVUE7QUFBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU0vQixTQUFTQyxnQkFBZ0IsRUFBRUMsT0FBT0MsT0FBT0MsWUFBa0MsR0FBRztBQUM1RSxTQUNFLHVCQUFDLFNBQUksV0FBVSxzSkFDYjtBQUFBLDJCQUFDLFNBQUksV0FBVSxtQkFDYjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsS0FBS0Y7QUFBQUEsUUFDTCxLQUFLQztBQUFBQSxRQUNMLFdBQVU7QUFBQTtBQUFBLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRzhGLEtBSmhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNQTtBQUFBLElBQ0EsdUJBQUMsU0FBSSxXQUFVLE9BQ2I7QUFBQSw2QkFBQyxRQUFHLFdBQVUsMkNBQTJDQSxtQkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErRDtBQUFBLE1BQy9ELHVCQUFDLE9BQUUsV0FBVSxzQ0FBc0NDLHlCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQStEO0FBQUEsTUFDL0QsdUJBQUMsWUFBTyxXQUFVLDhKQUE0Six5QkFBOUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBO0FBQUEsU0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUE7QUFBQSxPQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlQTtBQUVKO0FBQUNDLEtBbkJRSjtBQXFCVCxlQUFlQTtBQUFnQixJQUFBSTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiRGVzdGluYXRpb25DYXJkUHJvcHMiLCJEZXN0aW5hdGlvbkNhcmQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJEZXN0aW5hdGlvbkNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEZXN0aW5hdGlvbkNhcmRQcm9wcyB7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIERlc3RpbmF0aW9uQ2FyZCh7IGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24gfTogRGVzdGluYXRpb25DYXJkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGJnLWdyYXktOTAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNoYWRvdy1hbWJlci01MDAvMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOi10cmFuc2xhdGUteS0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VyaWYgdGV4dC1hbWJlci01MDAgbWItM1wiPnt0aXRsZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTQgbGVhZGluZy1yZWxheGVkXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBib3JkZXItMiBib3JkZXItYW1iZXItNTAwIHRleHQtYW1iZXItNTAwIGhvdmVyOmJnLWFtYmVyLTUwMCBob3Zlcjp0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgcHgtNiBweS0yIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwXCI+XG4gICAgICAgICAgRMOpY291dnJpclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkNhcmQ7XG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvRGVzdGluYXRpb25DYXJkLnRzeCJ9