System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Label, sys, JsonAsset, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PopUpManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      sys = _cc.sys;
      JsonAsset = _cc.JsonAsset;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b8bcrYZ4REirXPi7HsxxIo", "PopUpManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PopUpManager
       * DateTime = Sun May 01 2022 18:17:04 GMT+0530 (India Standard Time)
       * Author = prajwal_ramappa
       * FileBasename = PopUpManager.ts
       * FileBasenameNoExtension = PopUpManager
       * URL = db://assets/Scripts/PopUpManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PopUpManager", PopUpManager = (_dec = ccclass('PopUpManager'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class PopUpManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "popupdata", _descriptor, this);

          _initializerDefineProperty(this, "popuptext", _descriptor2, this);

          _initializerDefineProperty(this, "popupNode", _descriptor3, this);
        }

        start() {
          sys.localStorage.setItem('countofpopups', JSON.stringify(0));
          this.checkLaunch();
        }

        checkLaunch() {
          var launchCount = JSON.parse(sys.localStorage.getItem('launchCount'));

          if (launchCount == null) {
            sys.localStorage.setItem('launchCount', JSON.stringify(0));
          } else {
            sys.localStorage.setItem('launchCount', JSON.stringify(++launchCount));
          }

          this.popup();
        }

        popup() {
          var launchCount = JSON.parse(sys.localStorage.getItem('launchCount'));
          var popCount = JSON.parse(sys.localStorage.getItem('countofpopups'));
          var dets = this.popupdata.json;

          if (dets.popupData.length > 0) {
            for (let i = 0; i < dets.popupData.length; i++) {
              if (dets.popupData[i].launchCount == launchCount + 1) {
                if (popCount < dets.popupData[i].popups.length) {
                  this.popuptext.string = dets.popupData[i].popups[popCount].text;
                  this.popupNode.active = true;
                  sys.localStorage.setItem('countofpopups', JSON.stringify(++popCount));
                }
              }
            }
          }
        }

        OnClickClose() {
          this.popupNode.active = false;
          this.popup();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupdata", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popuptext", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "popupNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PopUpManager.js.map