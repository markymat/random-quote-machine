var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var quotes = [
{ quote: "Roads? Where we're going, we don't need roads.",
  author: "Doc Emmet Brown" },
{ quote: "I'll be back.",
  author: "T-800" },
{ quote: "I'm sorry, Dave. I'm afraid I can't do that.",
  author: "HAL2000" },
{ quote: "Lets rock.",
  author: "Pvt. Vasquez" },
{ quote: "Every champion was once a contender who refused to give up.",
  author: "Rocky Balboa" },
{ quote: "There's no place like home.",
  author: "Dorothy Gale" },
{ quote: "Go ahead. Make my Day.",
  author: "Harry Callahan" },
{ quote: "Try not. Do or do not. There is no try.",
  author: "Yoda" }];var

Application = function (_React$Component) {_inherits(Application, _React$Component);
  function Application(props) {_classCallCheck(this, Application);var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this,
    props));
    _this.state = {
      drawedNumber: 1 };

    _this.drawQuote = _this.drawQuote.bind(_this);return _this;
  }_createClass(Application, [{ key: "drawQuote", value: function drawQuote()
    {
      this.setState({
        drawedNumber: Math.floor(Math.random() * quotes.length) });

    } }, { key: "render", value: function render()
    {
      var selectedQuote = quotes[this.state.drawedNumber];
      return (
        React.createElement("div", { clasName: "container" },
          React.createElement("h1", null, selectedQuote.quote),
          React.createElement("p", null, selectedQuote.author),

          React.createElement("button", { className: "buttonf", onClick: this.drawQuote }, "Pick another quote")));

    } }]);return Application;}(React.Component);

ReactDOM.render(React.createElement(Application, null), document.getElementById('app'));