define('argos/_ModelBase', ['exports', 'module', 'dojo/_base/declare', 'dojo/Evented', 'dojo/Stateful'], function (exports, module, _dojo_baseDeclare, _dojoEvented, _dojoStateful) {
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /* Copyright (c) 2014 Infor. All rights reserved.
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

  var _declare = _interopRequireDefault(_dojo_baseDeclare);

  var _Evented = _interopRequireDefault(_dojoEvented);

  var _Stateful = _interopRequireDefault(_dojoStateful);

  /**
   * @class argos._ModelBase
   * A base model class for views to consume
   * @alternateClassName _ModelBase
   */
  module.exports = (0, _declare['default'])('argos._ModelBase', [_Evented['default'], _Stateful['default']], {
    metadata: null,
    _metadataGetter: function _metadataGetter() {
      return this.metadata;
    },
    _metadataSetter: function _metadataSetter(value) {
      this.metadata = value;
    },
    getEntry: function getEntry() {}
  });
});
/*options*/
