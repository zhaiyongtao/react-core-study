/**
 * proxyObjecct$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/24 3:12 下午
 * @LastEditTime: 2021/2/24 3:12 下午
 */
class Watch {
    constructor(obj) {
        this.emit = dispatchEvent.bind(document);
        this.listen = addEventListener.bind(document);
        let customEventData = { detail: obj };
        this.eventUpdated = new CustomEvent('updated', customEventData);
        this.eventRead = new CustomEvent('read', customEventData);
        this.eventChanged = new CustomEvent('changed', customEventData);
        this.targetObj = obj;
    }

    createProxy() {
        let _this = this;
        let handler = {
            get(target, property) {
                _this.emit(_this.eventRead);
                return Reflect.get(target, property);
            },
            set(target, property, value) {
                _this.emit(_this.eventUpdated);
                if (target[property] != value) _this.emit(_this.eventChanged);
                return Reflect.set(target, property, value);
            }
        }

        return toDeepProxy(_this.targetObj, handler);


        function toDeepProxy(object, handler) {
            if (!isPureObject(object)) addSubProxy(object, handler);
            return new Proxy(object, handler);

            function addSubProxy(object, handler) {
                for (let prop in object) {
                    if (typeof object[prop] == 'object') {
                        if (!isPureObject(object[prop])) addSubProxy(object[prop], handler);
                        object[prop] = new Proxy(object[prop], handler);
                    }
                }
                object = new Proxy(object, handler)
            }

            function isPureObject(object) {
                if (typeof object !== 'object') {
                    return false;
                } else {
                    for (let prop in object) {
                        if (typeof object[prop] == 'object') {
                            return false;
                        }
                    }
                }
                return true;
            }
        }

    }

    on(eventStr, callback) {
        let _this = this;
        if (!/,+/.test(eventStr)) {
            this.listen(eventStr, (e) => {
                if (e.detail == _this.targetObj) callback();
            });
        } else {
            let eventStrArr = eventStr.split(',');
            for (let i = 0, len = eventStrArr.length; i < len; i++) {
                this.listen(eventStrArr[i].trim(), (e) => {
                    if (e.detail == _this.targetObj) callback();
                    callback()
                });
            }
        }
    }
}