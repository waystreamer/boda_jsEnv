// XRBoundedReferenceSpace对象
bodavm.memory.globalobj['XRBoundedReferenceSpace'] = function XRBoundedReferenceSpace(){if (!(this instanceof XRBoundedReferenceSpace)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRBoundedReferenceSpace'], "XRBoundedReferenceSpace");
bodavm.memory.globalobj['XRBoundedReferenceSpace'].prototype.__proto__=bodavm.memory.globalobj['XRReferenceSpace'].prototype;
bodavm.memory.globalobj['XRBoundedReferenceSpace'].__proto__=bodavm.memory.globalobj['XRReferenceSpace'];
bodavm.toolsFunc.defineProperty('XRBoundedReferenceSpace', "boundsGeometry", {configurable:true, enumerable:true, get:function boundsGeometry (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRBoundedReferenceSpace'].prototype, "XRBoundedReferenceSpace", "boundsGeometry_get", arguments)}, set:undefined},'prototype');