define('argos/List', ['module', 'exports', 'dojo/_base/declare', './_ListBase', './_SDataListMixin', './_RelatedViewWidgetListMixin'], function (module, exports, _declare, _ListBase2, _SDataListMixin2, _RelatedViewWidgetListMixin) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _declare2 = _interopRequireDefault(_declare);

  var _ListBase3 = _interopRequireDefault(_ListBase2);

  var _SDataListMixin3 = _interopRequireDefault(_SDataListMixin2);

  var _RelatedViewWidgetListMixin2 = _interopRequireDefault(_RelatedViewWidgetListMixin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @class
   * @alias module:argos/List
   * @classdesc List extends _ListBase and mixes in _SDataListMixin to provide backwards compatibility for consumers.
   * @extends module:argos/_ListBase
   * @extends module:argos/_SDataListMixin
   * @mixes module:argos/_RelateViewdWidgetListMixin
   */
  /* Copyright (c) 2010, Sage Software, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @module argos/List
   */
  var __class = (0, _declare2.default)('argos.List', [_ListBase3.default, _SDataListMixin3.default, _RelatedViewWidgetListMixin2.default], {});
  exports.default = __class;
  module.exports = exports['default'];
});