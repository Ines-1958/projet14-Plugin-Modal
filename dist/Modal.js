"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.scss");
function Modal(props) {
  var modal = props.modal,
    setModal = props.setModal,
    title = props.title,
    message = props.message;
  var modalRef = (0, _react.useRef)(null);
  var toggleModal = function toggleModal() {
    setModal(!modal);
  };
  (0, _react.useEffect)(function () {
    /**Allows you to close the modal with the escape key on the keyboard */
    function handleEscKey(event) {
      if (event.key === 'Escape') {
        setModal(false);
      }
    }

    /**Allows you to close the modal by clicking anywhere on the page */
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    }
    window.addEventListener('keydown', handleEscKey);
    window.addEventListener('mousedown', handleClickOutside);
    return function () {
      window.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, modal && /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    ref: modalRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, title)), /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("button", {
    onClick: toggleModal,
    className: "close-modal btn-primary"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-close"
  }, "Close"))))));
}