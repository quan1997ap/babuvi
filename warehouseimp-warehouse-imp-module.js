(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouseimp-warehouse-imp-module"],{

/***/ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm5/ngx-webcam.js ***!
  \*****************************************************/
/*! exports provided: WebcamComponent, WebcamImage, WebcamInitError, WebcamMirrorProperties, WebcamModule, WebcamUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamImage", function() { return WebcamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamInitError", function() { return WebcamInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamMirrorProperties", function() { return WebcamMirrorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamModule", function() { return WebcamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamUtil", function() { return WebcamUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    WebcamImage.getDataFromDataUrl = function (dataUrl, mimeType) {
        return dataUrl.replace("data:" + mimeType + ";base64,", '');
    };
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        /**
         * Get the base64 encoded image data
         * @returns base64 data of the image
         */
        get: function () {
            return this._imageAsBase64 ? this._imageAsBase64
                : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        /**
         * Get the encoded image as dataUrl
         * @returns the dataUrl of the image
         */
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageData", {
        /**
         * Get the ImageData object associated with the canvas' 2d context.
         * @returns the ImageData of the canvas's 2d context.
         */
        get: function () {
            return this._imageData;
        },
        enumerable: true,
        configurable: true
    });
    return WebcamImage;
}());

var WebcamUtil = /** @class */ (function () {
    function WebcamUtil() {
    }
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    WebcamUtil.getAvailableVideoInputs = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                resolve(devices.filter(function (device) { return device.kind === 'videoinput'; }));
            })
                .catch(function (err) {
                reject(err.message || err);
            });
        });
    };
    return WebcamUtil;
}());

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent_1.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    WebcamComponent_1 = WebcamComponent;
    Object.defineProperty(WebcamComponent.prototype, "trigger", {
        /**
         * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
         */
        set: function (trigger) {
            var _this = this;
            if (this.triggerSubscription) {
                this.triggerSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to take snapshots
            this.triggerSubscription = trigger.subscribe(function () {
                _this.takeSnapshot();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "switchCamera", {
        /**
         * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
         * @param switchCamera Indicates which webcam to switch to
         *   true: cycle forwards through available webcams
         *   false: cycle backwards through available webcams
         *   string: activate the webcam with the given id
         */
        set: function (switchCamera) {
            var _this = this;
            if (this.switchCameraSubscription) {
                this.switchCameraSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to switch video device
            this.switchCameraSubscription = switchCamera.subscribe(function (value) {
                if (typeof value === 'string') {
                    // deviceId was specified
                    _this.switchToVideoInput(value);
                }
                else {
                    // direction was specified
                    _this.rotateVideoInput(value !== false);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    WebcamComponent.getMediaConstraintsForDevice = function (deviceId, baseMediaTrackConstraints) {
        var result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    };
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    WebcamComponent.getDeviceIdFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            var deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent_1.getValueFromConstrainDOMString(deviceIdObj);
        }
    };
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    WebcamComponent.getFacingModeFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                var facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent_1.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    };
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    WebcamComponent.isUserFacing = function (mediaStreamTrack) {
        var facingMode = WebcamComponent_1.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    };
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    WebcamComponent.getValueFromConstrainDOMString = function (constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    };
    WebcamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.detectAvailableDevices()
            .then(function () {
            // start video
            _this.switchToVideoInput(null);
        })
            .catch(function (err) {
            _this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            _this.switchToVideoInput(null);
        });
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    };
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    WebcamComponent.prototype.takeSnapshot = function () {
        // set canvas size to actual video size
        var _video = this.nativeVideoElement;
        var dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        var _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        var context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        var mimeType = this.imageType ? this.imageType : WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        var quality = this.imageQuality ? this.imageQuality : WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        var dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        var imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    };
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    WebcamComponent.prototype.rotateVideoInput = function (forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            var increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            var nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    };
    /**
     * Switches the camera-view to the specified video device
     */
    WebcamComponent.prototype.switchToVideoInput = function (deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    };
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    WebcamComponent.prototype.videoResize = function () {
        // here to trigger Angular change detection
    };
    Object.defineProperty(WebcamComponent.prototype, "videoWidth", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.width, this.height * videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoHeight", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.height, this.width / videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoStyleClasses", {
        get: function () {
            var classes = '';
            if (this.isMirrorImage()) {
                classes += 'mirrored ';
            }
            return classes.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "nativeVideoElement", {
        get: function () {
            return this.video.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the video aspect ratio of the active video stream
     */
    WebcamComponent.prototype.getVideoAspectRatio = function () {
        // calculate ratio from video element dimensions if present
        var videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    };
    /**
     * Init webcam live view
     */
    WebcamComponent.prototype.initWebcam = function (deviceId, userVideoTrackConstraints) {
        var _this = this;
        var _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            var videoTrackConstraints = WebcamComponent_1.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then(function (stream) {
                _this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                _this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                var activeDeviceId = WebcamComponent_1.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                _this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                _this.detectAvailableDevices()
                    .then(function () {
                    _this.activeVideoInputIndex = activeDeviceId ? _this.availableVideoInputs
                        .findIndex(function (mediaDeviceInfo) { return mediaDeviceInfo.deviceId === activeDeviceId; }) : -1;
                    _this.videoInitialized = true;
                })
                    .catch(function () {
                    _this.activeVideoInputIndex = -1;
                    _this.videoInitialized = true;
                });
            })
                .catch(function (err) {
                _this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    };
    WebcamComponent.prototype.getActiveVideoTrack = function () {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    };
    WebcamComponent.prototype.isMirrorImage = function () {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            var mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent_1.isUserFacing(this.getActiveVideoTrack());
    };
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    WebcamComponent.prototype.stopMediaTracks = function () {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach(function (track) { return track.stop(); });
        }
    };
    /**
     * Unsubscribe from all open subscriptions
     */
    WebcamComponent.prototype.unsubscribeFromSubscriptions = function () {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    };
    /**
     * Reads available input devices
     */
    WebcamComponent.prototype.detectAvailableDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            WebcamUtil.getAvailableVideoInputs()
                .then(function (devices) {
                _this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(function (err) {
                _this.availableVideoInputs = [];
                reject(err);
            });
        });
    };
    var WebcamComponent_1;
    WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
    WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
    WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "videoOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "allowCameraSwitch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "mirrorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "captureImageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WebcamComponent.prototype, "imageType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "imageQuality", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "initError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "cameraSwitched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "trigger", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "switchCamera", null);
    WebcamComponent = WebcamComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'webcam',
            template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
            styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scale(-1,1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
        })
    ], WebcamComponent);
    return WebcamComponent;
}());

var COMPONENTS = [
    WebcamComponent
];
var WebcamModule = /** @class */ (function () {
    function WebcamModule() {
    }
    WebcamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS
            ]
        })
    ], WebcamModule);
    return WebcamModule;
}());

var WebcamInitError = /** @class */ (function () {
    function WebcamInitError() {
        this.message = null;
        this.mediaStreamError = null;
    }
    return WebcamInitError;
}());

var WebcamMirrorProperties = /** @class */ (function () {
    function WebcamMirrorProperties() {
    }
    return WebcamMirrorProperties;
}());


//# sourceMappingURL=ngx-webcam.js.map


/***/ }),

/***/ "./node_modules/primeng/checkbox.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/checkbox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/checkbox/checkbox */ "./node_modules/primeng/components/checkbox/checkbox.js"));

/***/ }),

/***/ "./node_modules/primeng/components/inputtext/inputtext.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/inputtext/inputtext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        core_1.Directive({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputText);
    return InputText;
}());
exports.InputText = InputText;
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());
exports.InputTextModule = InputTextModule;
//# sourceMappingURL=inputtext.js.map

/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./node_modules/primeng/paginator.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/paginator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/paginator/paginator */ "./node_modules/primeng/components/paginator/paginator.js"));

/***/ }),

/***/ "./node_modules/primeng/tooltip.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/tooltip.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/tooltip/tooltip */ "./node_modules/primeng/components/tooltip/tooltip.js"));

/***/ }),

/***/ "./src/app/model/warehouse-imp-detail.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/warehouse-imp-detail.model.ts ***!
  \*****************************************************/
/*! exports provided: WarehouseImpDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImpDetail", function() { return WarehouseImpDetail; });
var WarehouseImpDetail = /** @class */ (function () {
    function WarehouseImpDetail() {
    }
    return WarehouseImpDetail;
}());



/***/ }),

/***/ "./src/app/model/warehouse-imp.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/warehouse-imp.model.ts ***!
  \**********************************************/
/*! exports provided: WarehouseImp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImp", function() { return WarehouseImp; });
var WarehouseImp = /** @class */ (function () {
    function WarehouseImp() {
    }
    return WarehouseImp;
}());



/***/ }),

/***/ "./src/app/services/fileManager.services.ts":
/*!**************************************************!*\
  !*** ./src/app/services/fileManager.services.ts ***!
  \**************************************************/
/*! exports provided: FileManagerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerServices", function() { return FileManagerServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileManagerServices = /** @class */ (function (_super) {
    __extends(FileManagerServices, _super);
    function FileManagerServices(http, _router) {
        return _super.call(this, app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].fileManager.controller, http, _router) || this;
    }
    FileManagerServices.prototype.uploadImg = function (data) {
        return this.postNoConvert(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].fileManager.upLoadImageOneDrive, data);
    };
    FileManagerServices.prototype.uploadFile = function (data) {
        return this.postNoConvert(this.apiBaseController + app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["ApiApplication"].fileManager.upLoadAttachFileOneDrive, data);
    };
    FileManagerServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FileManagerServices);
    return FileManagerServices;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));



/***/ }),

/***/ "./src/app/services/warehouse-imp.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/warehouse-imp.service.ts ***!
  \***************************************************/
/*! exports provided: WarehouseImpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImpService", function() { return WarehouseImpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/api.service */ "./src/app/services/common/api.service.ts");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/http.service */ "./src/app/services/common/http.service.ts");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WarehouseImpService = /** @class */ (function (_super) {
    __extends(WarehouseImpService, _super);
    function WarehouseImpService(http, _router) {
        return _super.call(this, _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.controller, http, _router) || this;
    }
    WarehouseImpService.prototype.saveWarehouseImp = function (data) {
        return this.post(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.saveWarehouseImp, data);
    };
    WarehouseImpService.prototype.completeWarehouseImp = function (data) {
        return this.put(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.completeWarehouseImp, data);
    };
    WarehouseImpService.prototype.getWarehouseExpByCode = function (expCode) {
        var param = '?expCode=' + expCode;
        return this.get(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.getWarehouseExpByCode + param);
    };
    WarehouseImpService.prototype.getWarehouseImpViewById = function (warehouseImpId) {
        var param = '?warehouseImpId=' + warehouseImpId;
        return this.get(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.getWarehouseImpViewById + param);
    };
    WarehouseImpService.prototype.deleteLsImpDetail = function (deleteIds) {
        var body = {
            lsId: deleteIds
        };
        return this.delete(this.apiBaseController + _config_app_config__WEBPACK_IMPORTED_MODULE_4__["ApiApplication"].warehouse.deleteLsImpDetail, body);
    };
    WarehouseImpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WarehouseImpService);
    return WarehouseImpService;
}(_common_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));



/***/ }),

/***/ "./src/app/warehouseimp/add/add-warehouse-imp.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/warehouseimp/add/add-warehouse-imp.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div autoscroll=\"true\" class=\"ng-scope\">\r\n    <div class=\"row\">\r\n        <div class=\"col-left pr-2 pl-2 mb-3 mb-md-0\">\r\n            <div class=\"block\">\r\n                <div class=\"block-title text-uppercase p-2 font-weight-bold\">Thông tin phiếu nhập hàng</div>\r\n                <div class=\"block-content p-3\">\r\n                    <form #warehouseImpForm=\"ngForm\" (keydown.enter)=\"$event.preventDefault()\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"warehouseExpCode\">Mã phiếu xuất</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"warehouseExpCode\" name=\"warehouseExpCode\"\r\n                                #warehouseExpCd=\"ngModel\" [readOnly]=\"isLoadByImpId\"\r\n                                (keydown.enter)=\"loadWarehouseImpByExpCode(warehouseExpCd.value)\" ngModel\r\n                                [(ngModel)]=\"warehouseExpCode\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"expWarehouseId\">Kho xuất hàng</label>\r\n                            <select class=\"form-control\" id=\"expWarehouseId\" name=\"expWarehouseId\" ngModel\r\n                                [(ngModel)]=\"warehouseImp.expWarehouseId\">\r\n                                <option *ngFor=\"let warehouse of warehouseList\" [value]=\"warehouse.warehouseId\">\r\n                                    {{warehouse.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"warehouseImpCode\">Mã phiếu nhập</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"warehouseImpCode\" name=\"warehouseImpCode\"\r\n                                ngModel [readonly]=\"true\" [(ngModel)]=\"warehouseImp.warehouseImpCode\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"warehouseId\">Kho nhập hàng</label>\r\n                            <select class=\"form-control\" id=\"warehouseId\" name=\"warehouseId\" ngModel\r\n                                [(ngModel)]=\"warehouseImp.warehouseId\" #warehouseId\r\n                                (change)=\"loadListStorekeeperInWarehouse(warehouseId.value)\">\r\n                                <option *ngFor=\"let warehouse of warehouseList\" [value]=\"warehouse.warehouseId\">\r\n                                    {{warehouse.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"impDate\">Ngày nhập hàng</label>\r\n                            <input type=\"date\" class=\"form-control\" id=\"impDate\" name=\"impDate\" ngModel\r\n                                [(ngModel)]=\"warehouseImp.impDate\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"storekeeperId\">Thủ kho</label>\r\n                            <!--                            TODO: need to set property of storekeeper by property of object-->\r\n                            <select class=\"form-control\" id=\"storekeeperId\" name=\"storekeeperId\" ngModel\r\n                                [(ngModel)]=\"warehouseImp.storekeeperId\">\r\n                                <option *ngFor=\"let keeper of storekeeperList\" [value]=\"keeper.userId\">\r\n                                    {{keeper.firstName + ' ' + keeper.lastName}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"status\">Trạng thái</label>\r\n                            <select class=\"form-control\" id=\"status\" name=\"status\" ngModel\r\n                                [(ngModel)]=\"warehouseImp.status\">\r\n                                <option *ngFor=\"let status of warehouseImpStatusList\" [value]=\"status.value\">\r\n                                    {{status.displayValue}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"row ml-0 mr-0\">\r\n                            <button type=\"submit\" (click)=\"saveWarehouseImp(warehouseImpForm)\"\r\n                                class=\"btn btn-primary w-25 col\">Lưu</button>\r\n                            <button type=\"button\" (click)=\"completeWarehouseImp(warehouseImpForm)\"\r\n                                class=\"btn btn-success w-25 col ml-3\">Hoàn tất\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-right pr-2 pl-2\">\r\n            <div class=\"warehouse-imp-list mb-3 block\">\r\n                <div class=\"block-title text-uppercase p-2 font-weight-bold\">Chi tiết phiếu nhập hàng</div>\r\n                <div class=\"block-content\">\r\n                    <div class=\"add-warehouse-imp-detail p-3\">\r\n                        <form #warehouseImpDetailForm=\"ngForm\" (keydown.enter)=\"$event.preventDefault()\">\r\n                            <div class=\"form-row\">\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"merchandiseCode\">Mã kiện hàng</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"merchandiseCode\" name=\"merchandiseCode\"\r\n                                        required #merchandiseCode=\"ngModel\" ngModel\r\n                                        [(ngModel)]=\"warehouseImpDetail.merchandiseCode\"\r\n                                        (keyup.enter)=\"checkMerchandiseCode($event,merchandiseCode.value, 'enter')\"\r\n                                        (ngModelChange)=\"merchandiseCodeChange($event, merchandiseCode.value)\"\r\n                                        (focusout)=\"checkMerchandiseCode($event,merchandiseCode.value, 'focusout')\"\r\n                                        (keydown.Tab)=\"checkNextControlMerchandiseCode($event, merchandiseCode.value)\"\r\n                                        #inputToFocus tabindex=\"1\">\r\n                                    <div *ngIf=\"merchandiseCode.invalid && ((merchandiseCode.dirty || merchandiseCode.touched) || warehouseImpDetailForm.submitted)\"\r\n                                        class=\"alert-no-bg\">\r\n                                        <small *ngIf=\"merchandiseCode.errors.required\" role=\"alert\">Trường \"Mã kiện\r\n                                            hàng\" không được để\r\n                                            trống</small>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group upload-img-section\"\r\n                                    *ngIf=\"warehouseImpDetail.merchandiseCode && !checkEditExistingMerchandise()\">\r\n                                    <label class=\"upload-img-padding\" for=\"shelfPosition\">&nbsp;</label>\r\n                                    <button tabindex=\"2\"\r\n                                        *ngIf=\"!warehouseImpDetail.lsImage || !warehouseImpDetail.lsImage.length; else has_img\"\r\n                                        class=\"capture\" pButton pRipple (click)=\"checkMerchandiseCode(undefined,merchandiseCode.value)\"\r\n                                        (keyup.enter)=\"checkMerchandiseCode(undefined, merchandiseCode.value)\" type=\"button\"\r\n                                        pTooltip=\"Thêm ảnh ( Bạn cần up tối thiểu 1 ảnh )\">\r\n                                        <i class=\"pi pi-image\" id=\"icon-upload-img\"></i>\r\n                                    </button>\r\n                                    <ng-template #has_img>\r\n                                        <button pButton pRipple tabindex=\"2\" class=\"btn-img-uploaded\">\r\n                                            <img class=\"img-uploaded\" pTooltip=\"Sửa ảnh\" (click)=\"checkMerchandiseCode(undefined, merchandiseCode.value)\"\r\n                                                [style.background-image]=\"'url(' + warehouseImpDetail.lsImage[0].attachLink + ')'\"\r\n                                                [src]=\"warehouseImpDetail.lsImage[0].attachLink\" style=\"margin-right: 0;\">\r\n                                        </button>\r\n                                    </ng-template>\r\n                                </div>\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"shelfPosition\">Mã vị trí</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"shelfPosition\" name=\"shelfPosition\"\r\n                                        ngModel [(ngModel)]=\"warehouseImpDetail.shelfPosition\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-row\">\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"netWeight\">Cân nặng</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"netWeight\" name=\"netWeight\" ngModel\r\n                                        (keydown.Tab)=\"checkNextControlNetWeight($event, warehouseImpDetail.netWeight, 'keydownTab')\"\r\n                                        [(ngModel)]=\"warehouseImpDetail.netWeight\" #inputToFocus tabindex=\"3\"\r\n                                        (keyup.enter)=\"checkNextControlNetWeight($event, warehouseImpDetail.netWeight, 'keyupEnter')\"\r\n                                    >\r\n                                </div>\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"length\">Dài</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"length\" name=\"length\" ngModel\r\n                                        [(ngModel)]=\"warehouseImpDetail.length\" #inputToFocus tabindex=\"4\"\r\n                                        (keyup.enter)=\"nextFocus($event)\">\r\n                                </div>\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"width\">Rộng</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"width\" name=\"width\" ngModel\r\n                                        [(ngModel)]=\"warehouseImpDetail.width\" #inputToFocus tabindex=\"5\"\r\n                                        (keyup.enter)=\"nextFocus($event)\">\r\n                                </div>\r\n                                <div class=\"form-group col-sm\">\r\n                                    <label for=\"height\">Cao</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"height\" name=\"height\" ngModel\r\n                                        [(ngModel)]=\"warehouseImpDetail.height\" #inputToFocus tabindex=\"6\"\r\n                                        (keyup.enter)=\"nextFocus($event)\">\r\n                                </div>\r\n                                <div class=\"form-group col-sm align-bottom align-self-end\">\r\n                                    <button class=\"btn btn-primary w-100\" #inputToFocus tabindex=\"7\"\r\n                                        (keyup.enter)=\"saveWarehouseImpDetail(warehouseImpDetailForm, $event)\"\r\n                                        (click)=\"saveWarehouseImpDetail(warehouseImpDetailForm, $event)\"\r\n                                        [disabled]=\"!warehouseImpDetail.merchandiseCode || !isValidSize() || !warehouseImpDetail?.lsImage?.length || loading\">{{isEditWarehouseImpDetails\r\n                                        ? 'Lưu' : 'Thêm'}}</button>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"!isValidSize()\" class=\"alert-no-bg\">\r\n                                <small role=\"alert\">Vui lòng nhập đầy đủ kích thước Dài Rộng Cao</small>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"warehouse-imp-detail\">\r\n                        <div class=\"warehouse-imp-action d-flex\" style=\"margin-left: 10px;\">\r\n                            <div class=\"delete action\" (click)=\"deleteAllWarehouseImpDetail()\">Xóa tất cả</div>\r\n                        </div>\r\n                        <div class=\"table-statistic\">\r\n                            Tổng kiện: {{warehouseImpDetailList.length}} | Tổng cân nặng {{sumWeight()}} kg\r\n                        </div>\r\n                        <ngx-datatable class=\"material\" rowHeight=\"auto\" [rows]=\"warehouseImpDetailList\"\r\n                            [headerHeight]=\"0\" [messages]=\"tableMessage\" [columnMode]=\"columnMode.force\"\r\n                            [headerHeight]=\"45\" [footerHeight]=\"45\" [limit]=\"5\" [selected]=\"selected\"\r\n                            [selectionType]=\"selectionType.checkbox\" [selectAllRowsOnPage]=\"false\"\r\n                            (select)=\"onSelect($event)\">\r\n                            <ngx-datatable-column [minWidth]=\"120\">\r\n                                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" ngx-datatable-cell-template>\r\n                                    <img class=\"first-img-of-pack\"\r\n                                        *ngIf=\"row.lsImage && row.lsImage[0] && row.lsImage[0].attachLink; else noImg\"\r\n                                        [src]=\"row.lsImage[0]?.attachLink\"\r\n                                        (click)=\"editListImgOfMerchandise(row.lsImage, rowIndex)\">\r\n                                    <ng-template #noImg>\r\n                                        <img class=\"first-img-of-pack\" src=\"assets/images/no-img.jpg\"\r\n                                            (click)=\"editListImgOfMerchandise(row.lsImage, rowIndex)\">\r\n                                    </ng-template>\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [minWidth]=\"200\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    <div *ngIf=\"row.merchandiseCode\" pTooltip={{row.merchandiseCode}}>\r\n                                        <strong>{{row.merchandiseCode}}</strong>\r\n                                        <!-- <span>{{row.warehouseImpDetailId}}</span> -->\r\n                                    </div>\r\n                                    <div *ngIf=\"row.shelfPosition\" pTooltip={{row.shelfPosition}}>\r\n                                        Vị trí: <strong>{{row.shelfPosition}}</strong>\r\n                                    </div>\r\n                                    <div></div>\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [minWidth]=\"270\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    <div>Cân nặng: <span class=\"highlight-txt\">{{row.netWeight}}</span></div>\r\n                                    <div>Thể tích:\r\n                                        <span class=\"highlight-txt\" *ngIf=\"row.length && row.width && row.height\">\r\n                                            {{row.length}} x\r\n                                            {{row.width}} x\r\n                                            {{row.height}}\r\n                                            ( {{row.length && row.width && row.height}} kg )\r\n                                        </span>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [minWidth]=\"120\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n                                    <button class=\"btn remove-warehouseImp\"\r\n                                        (click)=\"deleteOneWarehouseImpDetail(row, rowIndex)\">\r\n                                        Xóa\r\n                                    </button>\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"spinner-wrapper\" [hidden]=\"!loading\">\r\n    <div class=\"spinner-container\">\r\n        <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    </div>\r\n</div>\r\n\r\n<p-confirmDialog header=\"Xác nhận\" icon=\"pi pi-exclamation-triangle\" key=\"notificationPopup\" appendTo=\"body\">\r\n</p-confirmDialog>\r\n<p-toast key=\"notificationPopup\"></p-toast>\r\n\r\n<p-confirmDialog #cd key=\"comfirmOrder\" icon=\"pi pi-exclamation-triangle\" appendTo=\"body\">\r\n    <p-footer>\r\n        <div>\r\n            <label style=\"display: block; text-align: left;\">Nhập mã đơn hàng để khai báo.</label>\r\n            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"orderCodeMapping\" name=\"orderCodeMapping\"\r\n                placeholder=\"Mã đơn hàng\" ngModel [(ngModel)]=\"orderCodeMapping\"\r\n                (keydown.enter)=\"cd.accept(orderCodeMapping)\"\r\n            >\r\n            <br><br>\r\n        </div>\r\n        <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Khai báo\"\r\n            (click)=\"cd.accept(orderCodeMapping)\"></button>\r\n        <button type=\"button\" [disabled]=\"!orderCodeMapping\" pButton icon=\"pi pi-times\" label=\"Bỏ qua\"\r\n            (click)=\"cd.reject(orderCodeMapping)\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/warehouseimp/add/add-warehouse-imp.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/warehouseimp/add/add-warehouse-imp.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row {\n  align-items: flex-start; }\n\n.col-left,\n.col-right {\n  width: 100%; }\n\n.first-img-of-pack {\n  max-width: 90%;\n  min-width: 90px;\n  min-height: 50px;\n  background: #f2f4f8;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto; }\n\n.upload-img-section .capture {\n  width: 40px;\n  height: 40px;\n  text-align: initial;\n  line-height: 50px;\n  border: 1px solid #ddd;\n  margin: 0 4px;\n  background: #e9ecef;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n\n.upload-img-section .capture:hover {\n    border: none;\n    background-color: #ddd !important; }\n\n.upload-img-section #icon-upload-img {\n  font-size: 44px;\n  margin-left: 8px;\n  color: #848484;\n  text-align: center; }\n\n.upload-img-section .btn-img-uploaded {\n  background: #fff;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 0px 2px 8px; }\n\n.upload-img-section .btn-img-uploaded .img-uploaded {\n    width: 70px;\n    height: 70px;\n    background: #f2f4f8;\n    background-size: contain;\n    border-radius: 8px;\n    border: 1px solid #ddd;\n    margin-right: 6px;\n    cursor: pointer; }\n\n.highlight-txt {\n  color: #f15922; }\n\n.remove-warehouseImp {\n  background-color: #f15922; }\n\n.table-statistic {\n  background: #f15922;\n  color: #fff;\n  padding: 8px; }\n\n@media (min-width: 768px) {\n  .col-left {\n    width: 35%; }\n  .col-right {\n    width: calc(100% - 35%); } }\n\n.block {\n  background-color: #ffffff; }\n\n.block-content {\n  padding-top: 0 !important; }\n\n.block-title {\n  border-top: 2px solid #f15922;\n  display: table; }\n\n.btn-primary {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:active {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:focus {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n.btn-primary:hover {\n  background-color: #f15922;\n  border-color: #f15922; }\n\n/deep/ .ngx-datatable.material {\n  margin: auto; }\n\n/deep/ .ngx-datatable.material .datatable-header {\n    background-color: #f15922; }\n\n/deep/ .ngx-datatable.material .datatable-header .datatable-header-cell {\n      border-left: 1px solid #fff;\n      color: #fff; }\n\n/deep/ .ngx-datatable.material .datatable-header .datatable-header-cell:first-child {\n        border-left: 0;\n        padding-left: 8px; }\n\n/deep/ .ngx-datatable.material .datatable-body .datatable-row-wrapper:last-child .datatable-body-cell {\n    border-bottom: 0; }\n\n/deep/ .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n    border-left: 1px solid #e8e8e8;\n    border-bottom: 1px solid #e8e8e8; }\n\n/deep/ .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell:first-child {\n      padding-left: 8px;\n      border-left: 0; }\n\n/deep/ .ngx-datatable.material .datatable-footer {\n    margin-top: -5px; }\n\n@media (min-width: 576px) {\n  .label-hide {\n    visibility: hidden; } }\n\n@media (max-width: 580px) {\n  /deep/ .ngx-datatable.material .datatable-header .datatable-header-cell {\n    padding-left: 3px;\n    padding-right: 3px; }\n  /deep/ .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n    padding-left: 3px;\n    padding-right: 3px; } }\n\n/deep/ .status-14 {\n  background-color: yellow; }\n\n/deep/ .status-15 {\n  background-color: orange; }\n\n/deep/ .status-16 {\n  background-color: #e10d0c; }\n\n/deep/ .status {\n  background-color: blue; }\n\n/deep/ .status-1 {\n  background-color: green; }\n\n[data-icon]:before {\n  font-family: \"data-table\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/deep/ [class^=\"datatable-icon-\"]:before,\n/deep/ [class*=\" datatable-icon-\"]:before {\n  font-family: \"data-table\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/deep/ .datatable-icon-filter:before {\n  content: \"\\62\"; }\n\n/deep/ .datatable-icon-collapse:before {\n  content: \"\\61\"; }\n\n/deep/ .datatable-icon-expand:before {\n  content: \"\\63\"; }\n\n/deep/ .datatable-icon-close:before {\n  content: \"\\64\"; }\n\n/deep/ .datatable-icon-up:before {\n  content: \"\\65\"; }\n\n/deep/ .datatable-icon-down:before {\n  content: \"\\66\"; }\n\n/deep/ .datatable-icon-sort:before {\n  content: \"\\67\"; }\n\n/deep/ .datatable-icon-done:before {\n  content: \"\\68\"; }\n\n/deep/ .datatable-icon-done-all:before {\n  content: \"\\69\"; }\n\n/deep/ .datatable-icon-search:before {\n  content: \"\\6a\"; }\n\n/deep/ .datatable-icon-pin:before {\n  content: \"\\6b\"; }\n\n/deep/ .datatable-icon-add:before {\n  content: \"\\6d\"; }\n\n/deep/ .datatable-icon-left:before {\n  content: \"\\6f\"; }\n\n/deep/ .datatable-icon-right:before {\n  content: \"\\70\"; }\n\n/deep/ .datatable-icon-skip:before {\n  content: \"\\71\"; }\n\n/deep/ .datatable-icon-prev:before {\n  content: \"\\72\"; }\n\n/deep/ .ngx-datatable .datatable-footer-inner {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between; }\n\n/deep/ .ngx-datatable .datatable-footer-inner > .page-count {\n    display: none; }\n\n/deep/ .ngx-datatable .datatable-footer-inner > .datatable-pager {\n    margin: 0 auto !important;\n    flex: 0 0 auto !important; }\n\n/deep/ .ngx-datatable .datatable-footer-inner > .datatable-pager > .pager {\n      display: flex !important;\n      flex-flow: row nowrap; }\n\n.warehouse-imp-action .action {\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  cursor: pointer; }\n\n.warehouse-imp-action .action:first-child {\n    padding-left: 0; }\n\n/deep/ .alert-no-bg {\n  border: none !important;\n  background: transparent;\n  color: #d90000; }\n\n/deep/ .spinner-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n/deep/ .spinner-wrapper .spinner-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    padding: 0 !important;\n    transform: translate(-50%, -50%); }\n\n@media only screen and (max-width: 600px) {\n  .upload-img-padding {\n    display: none; } }\n\n.ngx-datatable.material {\n  max-width: 100%;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FyZWhvdXNlaW1wL2FkZC9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcd2FyZWhvdXNlaW1wXFxhZGRcXGFkZC13YXJlaG91c2UtaW1wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93YXJlaG91c2VpbXAvYWRkL2FkZC13YXJlaG91c2UtaW1wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEOztFQUVFLFlBQVcsRUFDWjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGVBQWMsRUFDakI7O0FBQ0Q7RUFFSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLG1CQUFrQixFQUtuQjs7QUFsQkg7SUFlTSxhQUFZO0lBQ1osa0NBQWlDLEVBQ2xDOztBQWpCTDtFQW9CSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCLEVBQ25COztBQXhCSDtFQTBCSSxpQkFBZ0I7RUFDaEIsNEJBQW1CO0VBQW5CLHlCQUFtQjtFQUFuQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLHlCQUF3QixFQVl6Qjs7QUE1Q0g7SUFrQ00sWUFBVztJQUNYLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIseUJBQXdCO0lBQ3hCLG1CQUFrQjtJQUNsQix1QkFBc0I7SUFDdEIsa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCOztBQUlMO0VBQ0UsZUE1RXVCLEVBNkV4Qjs7QUFDRDtFQUNFLDBCQS9FdUIsRUFnRnhCOztBQUVEO0VBQ0Usb0JBbkZ1QjtFQW9GdkIsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFDRDtFQUNFO0lBQ0UsV0FoRm1CLEVBaUZwQjtFQUNEO0lBQ0Usd0JBQXlDLEVBQzFDLEVBQUE7O0FBR0g7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSw4QkF6R3VCO0VBMEd2QixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSwwQkE5R3VCO0VBK0d2QixzQkEvR3VCLEVBZ0h4Qjs7QUFFRDtFQUNFLDBCQW5IdUI7RUFvSHZCLHNCQXBIdUIsRUFxSHhCOztBQUVEO0VBQ0UsMEJBeEh1QjtFQXlIdkIsc0JBekh1QixFQTBIeEI7O0FBRUQ7RUFDRSwwQkE3SHVCO0VBOEh2QixzQkE5SHVCLEVBK0h4Qjs7QUFHRDtFQUNFLGFBQVksRUF5Q2I7O0FBMUNEO0lBSUksMEJBdElxQixFQWlKdEI7O0FBZkg7TUFZTSw0QkF4SVE7TUF5SVIsWUF6SVEsRUEwSVQ7O0FBZEw7UUFRUSxlQUFjO1FBQ2Qsa0JBQWlCLEVBQ2xCOztBQVZQO0lBcUJVLGlCQUFnQixFQUNqQjs7QUF0QlQ7SUFpQ1EsK0JBNUpVO0lBNkpWLGlDQTdKVSxFQThKWDs7QUFuQ1A7TUE2QlUsa0JBQWlCO01BQ2pCLGVBQWMsRUFDZjs7QUEvQlQ7SUF3Q0ksaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0U7SUFDRSxtQkFBa0IsRUFDbkIsRUFBQTs7QUFHSDtFQUNFO0lBSVEsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUNuQjtFQU5QO0lBWVUsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUNuQixFQUFBOztBQVFYO0VBRUkseUJBMU0yQixFQTJNNUI7O0FBSEg7RUFNSSx5QkEvTTJCLEVBZ041Qjs7QUFQSDtFQVVJLDBCQXBONEIsRUFxTjdCOztBQVhIO0VBY0ksdUJBcE5tQixFQXFOcEI7O0FBZkg7RUFrQkksd0JBek55QixFQTBOMUI7O0FDekVIO0VENkVFLHFDQUFvQztFQUNwQyx5QkFBd0I7RUFDeEIsOEJBQTZCO0VBQzdCLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsZ0NBQStCO0VBQy9CLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0NBQW1DO0VBQ25DLG1DQUFrQyxFQUNuQzs7QUFFRDs7RUFHSSxxQ0FBb0M7RUFDcEMsOEJBQTZCO0VBQzdCLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsZ0NBQStCO0VBQy9CLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsb0NBQW1DO0VBQ25DLG1DQUFrQyxFQUNuQzs7QUFaSDtFQWVJLGVBQWMsRUFDZjs7QUFoQkg7RUFtQkksZUFBYyxFQUNmOztBQXBCSDtFQXVCSSxlQUFjLEVBQ2Y7O0FBeEJIO0VBMkJJLGVBQWMsRUFDZjs7QUE1Qkg7RUErQkksZUFBYyxFQUNmOztBQWhDSDtFQW1DSSxlQUFjLEVBQ2Y7O0FBcENIO0VBdUNJLGVBQWMsRUFDZjs7QUF4Q0g7RUEyQ0ksZUFBYyxFQUNmOztBQTVDSDtFQStDSSxlQUFjLEVBQ2Y7O0FBaERIO0VBbURJLGVBQWMsRUFDZjs7QUFwREg7RUF1REksZUFBYyxFQUNmOztBQXhESDtFQTJESSxlQUFjLEVBQ2Y7O0FBNURIO0VBK0RJLGVBQWMsRUFDZjs7QUFoRUg7RUFtRUksZUFBYyxFQUNmOztBQXBFSDtFQXVFSSxlQUFjLEVBQ2Y7O0FBeEVIO0VBMkVJLGVBQWMsRUFDZjs7QUFJSDtFQUVJLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsK0JBQThCLEVBZ0IvQjs7QUFwQkg7SUFNTSxjQUFhLEVBQ2Q7O0FBUEw7SUFVTSwwQkFBeUI7SUFFekIsMEJBQXlCLEVBTzFCOztBQW5CTDtNQWdCUSx5QkFBd0I7TUFDeEIsc0JBQXFCLEVBQ3RCOztBQUtQO0VBRUksbUJBQWtCO0VBTWxCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBWEg7SUFLTSxnQkFBZSxFQUNoQjs7QUFRTDtFQUVJLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsZUEvVmEsRUFnV2Q7O0FBR0g7RUFDRSxxQ0FBb0M7RUFDcEMsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLE9BQU07RUFDTixRQUFPO0VBQ1AsV0FBVSxFQVNYOztBQWhCRDtJQVVJLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsVUFBUztJQUNULHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFDakM7O0FBR0g7RUFDRTtJQUNFLGNBQWEsRUFDZCxFQUFBOztBQUdIO0VBQ0UsZ0JBQWU7RUFDZixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC93YXJlaG91c2VpbXAvYWRkL2FkZC13YXJlaG91c2UtaW1wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNfcHJpbWFyeS1jb2xvcjogI2YxNTkyMjtcclxuJGNfc3RhdHVzLTE2LWJhY2tncm91bmQ6ICNlMTBkMGM7XHJcbiRjX3N0YXR1cy0xNS1iYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiRjX3N0YXR1cy0xNC1iYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiRjX3N0YXR1cy0xLWJhY2tncm91bmQ6IGdyZWVuO1xyXG4kY19zdGF0dXNfZGVmYXVsdDogYmx1ZTtcclxuJGNfd2hpdGU6ICNmZmY7XHJcbiRjX2JvcmRlcjogI2U4ZThlODtcclxuJGNfYWxlcnQ6ICNkOTAwMDA7XHJcbiRjb2wtbGVmdC1tZC13aWR0aDogMzUlO1xyXG5cclxuLmZvcm0tcm93IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4uY29sLWxlZnQsXHJcbi5jb2wtcmlnaHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlyc3QtaW1nLW9mLXBhY2t7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnVwbG9hZC1pbWctc2VjdGlvbiB7XHJcbiAgLmNhcHR1cmUge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAjaWNvbi11cGxvYWQtaW1ne1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWltZy11cGxvYWRlZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHggMHB4IDJweCA4cHg7XHJcbiAgICAuaW1nLXVwbG9hZGVke1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbi5oaWdobGlnaHQtdHh0IHtcclxuICBjb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG4ucmVtb3ZlLXdhcmVob3VzZUltcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLnRhYmxlLXN0YXRpc3RpYyB7XHJcbiAgYmFja2dyb3VuZDogJGNfcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbC1sZWZ0IHtcclxuICAgIHdpZHRoOiAkY29sLWxlZnQtbWQtd2lkdGg7XHJcbiAgfVxyXG4gIC5jb2wtcmlnaHQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JGNvbC1sZWZ0LW1kLXdpZHRofSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ibG9jay1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvY2stdGl0bGUge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjX3ByaW1hcnktY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19wcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLy9TdHlsaW5nIGRhdGF0YWJsZVxyXG4vZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNfcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGNfd2hpdGU7XHJcbiAgICAgIGNvbG9yOiAkY193aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtYm9keSB7XHJcbiAgICAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkY19ib3JkZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjX2JvcmRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5sYWJlbC1oaWRlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gIC9kZWVwLyB7XHJcbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XHJcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1ib2R5IHtcclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcclxuICAgICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vU3RhdHVzXHJcbi9kZWVwLyB7XHJcbiAgLnN0YXR1cy0xNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19zdGF0dXMtMTQtYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIC5zdGF0dXMtMTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNfc3RhdHVzLTE1LWJhY2tncm91bmQ7XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLTE2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjX3N0YXR1cy0xNi1iYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19zdGF0dXMtZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC5zdGF0dXMtMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY19zdGF0dXMtMS1iYWNrZ3JvdW5kO1xyXG4gIH1cclxufVxyXG5cclxuW2RhdGEtaWNvbl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogXCJkYXRhLXRhYmxlXCIgIWltcG9ydGFudDtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBzcGVhazogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4vZGVlcC8ge1xyXG4gIFtjbGFzc149XCJkYXRhdGFibGUtaWNvbi1cIl06YmVmb3JlLFxyXG4gIFtjbGFzcyo9XCIgZGF0YXRhYmxlLWljb24tXCJdOmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJkYXRhLXRhYmxlXCIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBzcGVhazogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLWZpbHRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDYyXCI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLWljb24tY29sbGFwc2U6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw2MVwiO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLWV4cGFuZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDYzXCI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLWljb24tY2xvc2U6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw2NFwiO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLXVwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcNjVcIjtcclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtaWNvbi1kb3duOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcNjZcIjtcclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtaWNvbi1zb3J0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcNjdcIjtcclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtaWNvbi1kb25lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcNjhcIjtcclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDY5XCI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLWljb24tc2VhcmNoOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcNmFcIjtcclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtaWNvbi1waW46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw2YlwiO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLWFkZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDZkXCI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDZmXCI7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw3MFwiO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw3MVwiO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFw3MlwiO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZml4IHBhZ2VyIHNvIHRoYXQgaXQgZG9lc24ndCB3cmFwIGFuZCB1c2VzIGF2YWlsYWJsZSBzcGFjZVxyXG4vZGVlcC8gLm5neC1kYXRhdGFibGUge1xyXG4gIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7IC8vIGNhbid0IHdyYXAgYmVjYXVzZSBmb290ZXIgaGVpZ2h0IGZpeGVkXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8vIHByb2JhYmx5IG5vdCBuZWVkZWQgYmVjYXVzZSAucGFnZS1jb3VudCBmbGV4IGdyb3dzXHJcbiAgICA+IC5wYWdlLWNvdW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA+IC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAvLyBkb24ndCBncm93LCBvdGhlcndpc2UgcGFnZXIgd29uJ3QgYmUgcmlnaHQtYWxpZ25lZFxyXG4gICAgICBmbGV4OiAwIDAgYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgPiAucGFnZXIge1xyXG4gICAgICAgIC8vIHByZXZlbnQgbnVtYmVycyBmcm9tIHdyYXBwaW5nXHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndhcmVob3VzZS1pbXAtYWN0aW9uIHtcclxuICAuYWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuL2RlZXAvIHtcclxuICAuYWxlcnQtbm8tYmcge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAkY19hbGVydDtcclxuICB9XHJcbn1cclxuXHJcbi9kZWVwLyAuc3Bpbm5lci13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAuc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudXBsb2FkLWltZy1wYWRkaW5ne1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFse1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufSIsIi5mb3JtLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG5cbi5jb2wtbGVmdCxcbi5jb2wtcmlnaHQge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZmlyc3QtaW1nLW9mLXBhY2sge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4udXBsb2FkLWltZy1zZWN0aW9uIC5jYXB0dXJlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAudXBsb2FkLWltZy1zZWN0aW9uIC5jYXB0dXJlOmhvdmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50OyB9XG5cbi51cGxvYWQtaW1nLXNlY3Rpb24gI2ljb24tdXBsb2FkLWltZyB7XG4gIGZvbnQtc2l6ZTogNDRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udXBsb2FkLWltZy1zZWN0aW9uIC5idG4taW1nLXVwbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDhweDsgfVxuICAudXBsb2FkLWltZy1zZWN0aW9uIC5idG4taW1nLXVwbG9hZGVkIC5pbWctdXBsb2FkZWQge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmhpZ2hsaWdodC10eHQge1xuICBjb2xvcjogI2YxNTkyMjsgfVxuXG4ucmVtb3ZlLXdhcmVob3VzZUltcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTU5MjI7IH1cblxuLnRhYmxlLXN0YXRpc3RpYyB7XG4gIGJhY2tncm91bmQ6ICNmMTU5MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbGVmdCB7XG4gICAgd2lkdGg6IDM1JTsgfVxuICAuY29sLXJpZ2h0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzUlKTsgfSB9XG5cbi5ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLmJsb2NrLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9XG5cbi5ibG9jay10aXRsZSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjE1OTIyO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE1OTIyO1xuICBib3JkZXItY29sb3I6ICNmMTU5MjI7IH1cblxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTU5MjI7XG4gIGJvcmRlci1jb2xvcjogI2YxNTkyMjsgfVxuXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE1OTIyO1xuICBib3JkZXItY29sb3I6ICNmMTU5MjI7IH1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNTkyMjtcbiAgYm9yZGVyLWNvbG9yOiAjZjE1OTIyOyB9XG5cbi9kZWVwLyAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIG1hcmdpbjogYXV0bzsgfVxuICAvZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTU5MjI7IH1cbiAgICAvZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgL2RlZXAvIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7IH1cbiAgL2RlZXAvIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyOmxhc3QtY2hpbGQgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b206IDA7IH1cbiAgL2RlZXAvIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7IH1cbiAgICAvZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICBib3JkZXItbGVmdDogMDsgfVxuICAvZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IC01cHg7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5sYWJlbC1oaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgL2RlZXAvIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDsgfVxuICAvZGVlcC8gLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDsgfSB9XG5cbi9kZWVwLyAuc3RhdHVzLTE0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyB9XG5cbi9kZWVwLyAuc3RhdHVzLTE1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyB9XG5cbi9kZWVwLyAuc3RhdHVzLTE2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxMGQwYzsgfVxuXG4vZGVlcC8gLnN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7IH1cblxuL2RlZXAvIC5zdGF0dXMtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyB9XG5cbltkYXRhLWljb25dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImRhdGEtdGFibGVcIiAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cblxuL2RlZXAvIFtjbGFzc149XCJkYXRhdGFibGUtaWNvbi1cIl06YmVmb3JlLFxuL2RlZXAvIFtjbGFzcyo9XCIgZGF0YXRhYmxlLWljb24tXCJdOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImRhdGEtdGFibGVcIiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2MlwiOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYxXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDYzXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjRcIjsgfVxuXG4vZGVlcC8gLmRhdGF0YWJsZS1pY29uLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2NVwiOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNjZcIjsgfVxuXG4vZGVlcC8gLmRhdGF0YWJsZS1pY29uLXNvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY3XCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1kb25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2OFwiOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDY5XCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZhXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1waW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZiXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDZkXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw2ZlwiOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDcwXCI7IH1cblxuL2RlZXAvIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFw3MVwiOyB9XG5cbi9kZWVwLyAuZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcNzJcIjsgfVxuXG4vZGVlcC8gLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAvZGVlcC8gLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIgPiAucGFnZS1jb3VudCB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAvZGVlcC8gLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIgPiAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAvZGVlcC8gLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIgPiAuZGF0YXRhYmxlLXBhZ2VyID4gLnBhZ2VyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDsgfVxuXG4ud2FyZWhvdXNlLWltcC1hY3Rpb24gLmFjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC53YXJlaG91c2UtaW1wLWFjdGlvbiAuYWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxuL2RlZXAvIC5hbGVydC1uby1iZyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkOTAwMDA7IH1cblxuL2RlZXAvIC5zcGlubmVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxOyB9XG4gIC9kZWVwLyAuc3Bpbm5lci13cmFwcGVyIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudXBsb2FkLWltZy1wYWRkaW5nIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/warehouseimp/add/add-warehouse-imp.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/warehouseimp/add/add-warehouse-imp.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddWarehouseImpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseImpComponent", function() { return AddWarehouseImpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/warehouse-imp.model */ "./src/app/model/warehouse-imp.model.ts");
/* harmony import */ var _model_warehouse_imp_detail_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/warehouse-imp-detail.model */ "./src/app/model/warehouse-imp-detail.model.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_services_warehouse_imp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/warehouse-imp.service */ "./src/app/services/warehouse-imp.service.ts");
/* harmony import */ var app_services_system_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/system.services */ "./src/app/services/system.services.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/merchandise.services */ "./src/app/services/merchandise.services.ts");
/* harmony import */ var _services_fileManager_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/fileManager.services */ "./src/app/services/fileManager.services.ts");
/* harmony import */ var _capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./capture-merchandise/capture-merchandise.component */ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//Service





// Component

var AddWarehouseImpComponent = /** @class */ (function () {
    function AddWarehouseImpComponent(warehouseImpService, merchandiseServices, systemService, userService, changeDetectorRef, activeRoute, location, messageService, confirmationService, dialogService, fileManagerServices) {
        this.warehouseImpService = warehouseImpService;
        this.merchandiseServices = merchandiseServices;
        this.systemService = systemService;
        this.userService = userService;
        this.changeDetectorRef = changeDetectorRef;
        this.activeRoute = activeRoute;
        this.location = location;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.dialogService = dialogService;
        this.fileManagerServices = fileManagerServices;
        this.imgUploadType = "image/jpeg";
        // Const
        // TODO: paging
        this.page = 1;
        this.perPage = 5;
        this.defaultWarehouseStatus = "1";
        this.defaultStoreKeeper = 1;
        this.defaultImportWarehouse = 2;
        this.defaultStatus = "1";
        this.defaultImpDate = new Date().toISOString().substr(0, 10);
        // Something
        this.isEditWarehouseImpDetails = false;
        this.isLoadByImpId = false;
        // Data
        this.warehouseImp = new _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__["WarehouseImp"]();
        this.warehouseImpDetail = new _model_warehouse_imp_detail_model__WEBPACK_IMPORTED_MODULE_4__["WarehouseImpDetail"]();
        this.orderCodeMapping = ""; // using for declare new Merchandise
        this.warehouseImpDetailList = [];
        this.warehouseImpStatusList = [];
        this.storekeeperList = [];
        // Ngx Datatable
        this.tableMessage = {
            emptyMessage: "Không có dữ liệu",
        };
        this.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["ColumnMode"];
        this.selectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["SelectionType"];
        this.selected = [];
        this.loading = false;
    }
    AddWarehouseImpComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.account = JSON.parse(localStorage.getItem("userData"));
                        this.userId = this.account.userId;
                        return [4 /*yield*/, this.activeRoute.queryParams.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!params.warehouseImpId) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.loadWarehouseById(params.warehouseImpId)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadWareHouseStatus()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadWareHouseList()];
                    case 3:
                        _a.sent();
                        this.warehouseImp.impDate = this.defaultImpDate;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save ware house imp
     * @param form
     */
    AddWarehouseImpComponent.prototype.saveWarehouseImp = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadSuccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!form.valid) return [3 /*break*/, 2];
                        this.warehouseImp.lsDetail = this.warehouseImpDetailList;
                        this.warehouseImp.createdUserId = this.warehouseImp.changeUserId = this.userId;
                        this.loading = true;
                        return [4 /*yield*/, this.uploadListImg()];
                    case 1:
                        uploadSuccess = _a.sent();
                        if (uploadSuccess == true) {
                            this.saveWarehouseImpWithImgsUploaded();
                        }
                        else {
                            // upload các img còn thiếu không?
                            if (confirm("Một số ảnh đã bị upload lỗi. Tiếp tục và bỏ lưu các ảnh lỗi?")) {
                                this.saveWarehouseImpWithImgsUploaded();
                            }
                            else {
                                this.saveWarehouseImp(form);
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddWarehouseImpComponent.prototype.saveWarehouseImpWithImgsUploaded = function () {
        var _this = this;
        this.warehouseImp.lsDetail.forEach(function (details) {
            details.lsImage = details.lsImage.filter(function (img) { return img.attachLink && img.attachLink.includes("https:"); });
        });
        console.log(this.warehouseImp);
        this.warehouseImpService
            .saveWarehouseImp(this.warehouseImp)
            .toPromise()
            .then(function (res) {
            if (res.result.success) {
                _this.messageService.add({
                    key: "notificationPopup",
                    severity: "success",
                    summary: "Thông báo",
                    detail: "Bạn đã lưu thành công phiếu nhập hàng",
                });
                _this.mapResData(res.result.data);
                _this.isLoadByImpId = true;
                _this.location.go(_this.location.path().split("?")[0], "warehouseImpId=" + _this.warehouseImp.warehouseImpId);
                _this.loading = false;
            }
            else {
                _this.location.go(_this.location.path().split("?")[0]);
                _this.messageService.add({
                    key: "notificationPopup",
                    severity: "error",
                    summary: "Thông báo",
                    detail: res.result.message,
                });
                _this.loading = false;
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.location.go(_this.location.path().split("?")[0]);
            _this.messageService.add({
                key: "notificationPopup",
                severity: "error",
                summary: "Thông báo",
                detail: "Lưu kiện hàng không thành công",
            });
        });
    };
    AddWarehouseImpComponent.prototype.uploadOneImg = function (imageAsDataUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var imgBlob = _this.DataURIToBlob(imageAsDataUrl);
            var fileName = new Date().getTime();
            formData.append("file", imgBlob, fileName.toString());
            _this.fileManagerServices.uploadImg(formData).subscribe(function (resultUploadImg) {
                if (resultUploadImg &&
                    resultUploadImg.result &&
                    resultUploadImg.result.success &&
                    resultUploadImg.result.data) {
                    resolve(resultUploadImg.result.data);
                }
                else {
                    resolve(false);
                }
            }, function (uploadErr) {
                resolve(false);
            });
        });
    };
    AddWarehouseImpComponent.prototype.uploadListImg = function () {
        var _this = this;
        // upload and update img uploaded response to this.warehouseImpDetailList
        var uploadSuccess = true;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var warehouseImpIndex, imgIndex, imgAttachLink, uploadImgStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseImpIndex = 0;
                        _a.label = 1;
                    case 1:
                        if (!(warehouseImpIndex < this.warehouseImpDetailList.length)) return [3 /*break*/, 6];
                        imgIndex = 0;
                        _a.label = 2;
                    case 2:
                        if (!(imgIndex <
                            this.warehouseImpDetailList[warehouseImpIndex].lsImage.length)) return [3 /*break*/, 5];
                        imgAttachLink = this.warehouseImpDetailList[warehouseImpIndex]
                            .lsImage[imgIndex].attachLink;
                        if (!(imgAttachLink && imgAttachLink.includes("https:") == false)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadOneImg(imgAttachLink)];
                    case 3:
                        uploadImgStatus = _a.sent();
                        if (uploadImgStatus) {
                            this.warehouseImpDetailList[warehouseImpIndex].lsImage[imgIndex] = Object.assign({}, uploadImgStatus);
                            this.warehouseImpDetailList[warehouseImpIndex].lsImage[imgIndex].uploadSuccess = true;
                        }
                        else {
                            this.warehouseImpDetailList[warehouseImpIndex].lsImage[imgIndex].uploadSuccess = false;
                            uploadSuccess = false;
                        }
                        _a.label = 4;
                    case 4:
                        imgIndex++;
                        return [3 /*break*/, 2];
                    case 5:
                        warehouseImpIndex++;
                        return [3 /*break*/, 1];
                    case 6:
                        resolve(uploadSuccess);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Save warehouse import info
     * @param form
     * @param event
     */
    AddWarehouseImpComponent.prototype.saveWarehouseImpDetail = function (form, event) {
        var _this = this;
        this.loading = true;
        this.merchandiseServices
            .getMerchandiseByCode(form.value.merchandiseCode)
            .subscribe(function (resCheck) {
            if (resCheck.result.success) {
                // check tồn tại trong danh list chưa
                if (_this.checkEditExistingMerchandise()) {
                    _this.messageService.add({
                        key: "notificationPopup",
                        severity: "error",
                        summary: "Thông báo",
                        detail: "Kiện hàng đã tồn tại trong danh sách",
                    });
                    var merchandiseCodeInput = document.getElementById("merchandiseCode");
                    merchandiseCodeInput.focus();
                    merchandiseCodeInput.select();
                    return;
                }
                else {
                    _this.loading = false;
                }
                var selfPosition = _this.warehouseImpDetail.shelfPosition;
                if (_this.isEditWarehouseImpDetails) {
                    // Because warehouse import detail data is pass by reference to form data, just refresh list with this way
                    _this.warehouseImpDetailList = _this.warehouseImpDetailList.slice();
                }
                else {
                    // Push new warehouse import detail data to list and refresh list
                    _this.warehouseImpDetailList = [
                        _this.warehouseImpDetail
                    ].concat(_this.warehouseImpDetailList);
                }
                // Because warehouse import detail data is pass by reference to form data, need to init new warehouse import detail and reset form
                _this.warehouseImpDetail = new _model_warehouse_imp_detail_model__WEBPACK_IMPORTED_MODULE_4__["WarehouseImpDetail"]();
                // form.resetForm();
                _this.warehouseImpDetail.shelfPosition = selfPosition;
                _this.isEditWarehouseImpDetails = false;
                _this.selected = [];
                _this.nextFocus(event);
                _this.loading = false;
            }
            else {
                _this.messageService.add({
                    key: "notificationPopup",
                    severity: "error",
                    summary: "Thông báo",
                    detail: "Kiện hàng chưa được khai báo",
                });
                _this.loading = false;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddWarehouseImpComponent.prototype.deleteAllWarehouseImpDetail = function () {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            this.delete(this.warehouseImpDetailList);
        }
    };
    AddWarehouseImpComponent.prototype.deleteOneWarehouseImpDetail = function (warehouseImp, index) {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            if (warehouseImp && warehouseImp.warehouseImpDetailId) {
                this.delete([warehouseImp]);
            }
            else {
                this.warehouseImpDetailList = this.warehouseImpDetailList.filter(function (item) { return item.merchandiseCode !== warehouseImp.merchandiseCode; });
                this.changeDetectorRef.detectChanges();
            }
        }
    };
    AddWarehouseImpComponent.prototype.sumWeight = function () {
        var sum = 0;
        this.warehouseImpDetailList.forEach(function (warehouseImp) {
            if (warehouseImp.netWeight && warehouseImp.netWeight > 0) {
                sum += warehouseImp.netWeight;
            }
        });
        return sum;
    };
    /**
     * Complete warehouse import
     * @param form
     */
    AddWarehouseImpComponent.prototype.completeWarehouseImp = function (form) {
        var _this = this;
        if (form.valid) {
            this.warehouseImp.lsDetail = this.warehouseImpDetailList;
            this.warehouseImp.changeUserId = this.userId;
            this.loading = true;
            this.warehouseImpService
                .completeWarehouseImp(this.warehouseImp)
                .toPromise()
                .then(function (res) {
                _this.loading = false;
                if (res.result.success) {
                    _this.messageService.add({
                        key: "notificationPopup",
                        severity: "success",
                        summary: "Thông báo",
                        detail: "Bạn đã hoàn tất thành công phiếu nhập hàng",
                    });
                    _this.mapResData(res.result.data);
                    _this.isLoadByImpId = true;
                    _this.location.go(_this.location.path().split("?")[0], "warehouseImpId=" + _this.warehouseImp.warehouseImpId);
                }
                else {
                    _this.messageService.add({
                        key: "notificationPopup",
                        severity: "error",
                        summary: "Thông báo",
                        detail: res.result.message,
                    });
                }
            })
                .catch(function () {
                _this.loading = false;
                _this.messageService.add({
                    key: "notificationPopup",
                    severity: "error",
                    summary: "Thông báo",
                    detail: "Hoàn tất kiện hàng không thành công",
                });
            });
        }
    };
    /**
     * Delete warehouse import details
     */
    AddWarehouseImpComponent.prototype.delete = function (warehouseImpDetailList) {
        var _this = this;
        this.selected = Object.assign([], warehouseImpDetailList);
        if (this.selected.length > 0) {
            var deleteApiIds_1 = this.selected
                .filter(function (item) { return item.warehouseImpDetailId; })
                .map(function (itm) { return itm.warehouseImpDetailId; });
            deleteApiIds_1 = deleteApiIds_1.filter(function (v, i) { return deleteApiIds_1.indexOf(v) === i; });
            if (deleteApiIds_1.length > 0) {
                this.loading = true;
                this.warehouseImpService
                    .deleteLsImpDetail(deleteApiIds_1)
                    .toPromise()
                    .then(function (res) {
                    _this.loading = false;
                    if (res.result.success) {
                        _this.messageService.add({
                            key: "notificationPopup",
                            severity: "success",
                            summary: "Thông báo",
                            detail: "Đã xóa kiện hàng",
                        });
                        var filtered = _this.warehouseImpDetailList.filter(function (element) { return !_this.selected.includes(element); });
                        _this.warehouseImpDetailList = filtered.slice();
                    }
                    else {
                        _this.messageService.add({
                            key: "notificationPopup",
                            severity: "error",
                            summary: "Thông báo",
                            detail: "Xóa kiện hàng không thành công",
                        });
                    }
                })
                    .catch(function () {
                    _this.loading = false;
                    _this.messageService.add({
                        key: "notificationPopup",
                        severity: "error",
                        summary: "Thông báo",
                        detail: "Xóa kiện hàng không thành công",
                    });
                });
            }
            else {
                this.messageService.add({
                    key: "notificationPopup",
                    severity: "success",
                    summary: "Thông báo",
                    detail: "Đã xóa kiện hàng",
                });
                var filtered = this.warehouseImpDetailList.filter(function (element) { return !_this.selected.includes(element); });
                this.warehouseImpDetailList = filtered.slice();
            }
        }
    };
    /**
     * On select warehouse import details
     * @param selected
     */
    AddWarehouseImpComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        var _b;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    /**
     * Load warehouse status
     */
    AddWarehouseImpComponent.prototype.loadWareHouseStatus = function () {
        var _this = this;
        this.loading = true;
        this.systemService
            .getWarehouseImpStatus()
            .toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                _this.warehouseImpStatusList = res.result.data;
                if (!_this.warehouseImp.status) {
                    _this.warehouseImp.status = _this.defaultWarehouseStatus;
                }
            }
            else {
                _this.warehouseImpStatusList = [];
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.warehouseImpStatusList = [];
        });
    };
    /**
     * Load warehouse list
     */
    AddWarehouseImpComponent.prototype.loadWareHouseList = function () {
        var _this = this;
        this.loading = true;
        this.systemService
            .getAllWarehouse()
            .toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                _this.warehouseList = res.result.data;
                if (!_this.warehouseImp.warehouseId) {
                    _this.warehouseImp.warehouseId = _this.defaultImportWarehouse;
                }
                _this.loadListStorekeeperInWarehouse(_this.warehouseImp.warehouseId);
            }
            else {
                _this.warehouseList = [];
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.warehouseList = [];
        });
    };
    /**
     * Load storekeeper list by warehouse import id
     */
    AddWarehouseImpComponent.prototype.loadListStorekeeperInWarehouse = function (value) {
        var _this = this;
        this.loading = true;
        this.userService
            .getListStorekeeperInWarehouse(value)
            .toPromise()
            .then(function (res) {
            _this.loading = false;
            if (res.result.success) {
                _this.storekeeperList = res.result.data;
                if (!_this.warehouseImp.storekeeperId) {
                    _this.warehouseImp.storekeeperId = _this.defaultStoreKeeper;
                }
                var storekeeper = _this.storekeeperList.find(function (item) { return item.userId === _this.warehouseImp.storekeeperId; });
                if (!storekeeper) {
                    _this.warehouseImp.storekeeperId = _this.storekeeperList[0].userId;
                }
            }
            else {
                _this.storekeeperList = [];
            }
        })
            .catch(function () {
            _this.loading = false;
            _this.storekeeperList = [];
        });
    };
    /**
     * Load warehouse import by export code
     * @param expCode
     */
    AddWarehouseImpComponent.prototype.loadWarehouseImpByExpCode = function (expCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (expCode) {
                    this.loading = true;
                    this.warehouseImpService
                        .getWarehouseExpByCode(expCode)
                        .toPromise()
                        .then(function (res) {
                        _this.loading = false;
                        if (res.result.success) {
                            _this.mapResData(res.result.data, true);
                            _this.loadListStorekeeperInWarehouse(_this.warehouseImp.warehouseId);
                        }
                        else {
                            _this.warehouseImpDetailList = [];
                            _this.warehouseImp = new _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__["WarehouseImp"]();
                            _this.messageService.add({
                                key: "notificationPopup",
                                severity: "error",
                                summary: "Thông báo",
                                detail: res.result.message,
                            });
                        }
                    })
                        .catch(function () {
                        _this.loading = false;
                        _this.warehouseImp = new _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__["WarehouseImp"]();
                        _this.warehouseImpDetailList = [];
                        _this.messageService.add({
                            key: "notificationPopup",
                            severity: "error",
                            summary: "Thông báo",
                            detail: "Không lấy được thông tin",
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * load warehouse import info by warehouse import id
     * @param warehouseImpId
     */
    AddWarehouseImpComponent.prototype.loadWarehouseById = function (warehouseImpId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = true;
                this.warehouseImpService
                    .getWarehouseImpViewById(warehouseImpId)
                    .toPromise()
                    .then(function (res) {
                    _this.loading = false;
                    if (res.result.success) {
                        _this.warehouseImp = res.result.data;
                        _this.warehouseExpCode = _this.warehouseImp.warehouseExpCode;
                        _this.warehouseImp.impDate = _this.warehouseImp.impDate
                            ? new Date(_this.warehouseImp.impDate).toISOString().substr(0, 10)
                            : new Date().toISOString().substr(0, 10);
                        _this.warehouseImpDetailList = _this.warehouseImp.lsDetail;
                        _this.isLoadByImpId = true;
                    }
                    else {
                        _this.warehouseImp = new _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__["WarehouseImp"]();
                        _this.warehouseImpDetailList = [];
                    }
                })
                    .catch(function () {
                    _this.loading = false;
                    _this.warehouseImp = new _model_warehouse_imp_model__WEBPACK_IMPORTED_MODULE_3__["WarehouseImp"]();
                    _this.warehouseImpDetailList = [];
                });
                return [2 /*return*/];
            });
        });
    };
    AddWarehouseImpComponent.prototype.merchandiseCodeChange = function (event, merchandiseCode) {
        if (merchandiseCode.indexOf("BBV-") == 0) {
            this.warehouseImpDetail.shelfPosition = merchandiseCode;
            this.warehouseImpDetail.merchandiseCode = "";
            document.getElementById("merchandiseCode").focus();
        }
    };
    /*
      event when input merchandiseCode lost focus
    */
    AddWarehouseImpComponent.prototype.merchandiseCodeCheckExist = function () {
        if (this.checkEditExistingMerchandise()) {
            return false;
        }
        else {
            return true;
        }
    };
    /*
      Capture img
    */
    AddWarehouseImpComponent.prototype.createFormImgsData = function (imgs) {
        var formData = new FormData();
        if (imgs.length > 0) {
            for (var i = 0; i < imgs.length; i++) {
                var imgBlob = this.DataURIToBlob(imgs[i].attachLink);
                var fileName = new Date().getTime().toString();
                formData.append("file", imgBlob, fileName.toString());
            }
        }
        return formData;
    };
    AddWarehouseImpComponent.prototype.DataURIToBlob = function (dataURI) {
        var splitDataURI = dataURI.split(",");
        var byteString = splitDataURI[0].indexOf("base64") >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        // { type: mimeString }
        return new Blob([ia], { type: this.imgUploadType });
    };
    AddWarehouseImpComponent.prototype.captureMerchandise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            var _this = this;
            return __generator(this, function (_a) {
                // add ảnh
                if (this.loading == false) {
                    ref = this.dialogService.open(_capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_13__["CaptureMerchandiseComponent"], {
                        header: "Chụp ảnh kiện hàng",
                        width: "100vw",
                        style: { "max-width": "700px", "overflow-y": "auto" },
                        data: {
                            imgLinks: this.warehouseImpDetail.lsImage
                                ? this.warehouseImpDetail.lsImage
                                : [],
                            action: "capture",
                        },
                    });
                    ref.onClose.subscribe(function (capturedImgs) {
                        if (capturedImgs) {
                            _this.warehouseImpDetail.lsImage = capturedImgs;
                        }
                        var netWeightInput = document.getElementById("netWeight");
                        netWeightInput.focus();
                        netWeightInput.select();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddWarehouseImpComponent.prototype.editListImgOfMerchandise = function (imgs, indexMerchandise) {
        var _this = this;
        // edit from gird
        if (this.loading == false) {
            var ref = this.dialogService.open(_capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_13__["CaptureMerchandiseComponent"], {
                header: "Ảnh kiện hàng",
                width: "100vw",
                style: { "max-width": "700px", "overflow-y": "auto" },
                data: {
                    imgLinks: imgs,
                    action: "viewImg",
                },
            });
            ref.onClose.subscribe(function (capturedImgs) {
                if (capturedImgs) {
                    _this.warehouseImpDetailList[indexMerchandise].lsImage = capturedImgs;
                }
            });
        }
    };
    AddWarehouseImpComponent.prototype.focusAndSelectMerchandiseCode = function () {
        var merchandiseCodeInput = document.getElementById("merchandiseCode");
        merchandiseCodeInput.focus();
        merchandiseCodeInput.select();
    };
    AddWarehouseImpComponent.prototype.checkMerchandiseCode = function (event, merchandiseCode, type) {
        return __awaiter(this, void 0, void 0, function () {
            var merchandiseCodeInput_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.messageService.clear();
                        if (!!this.loading) return [3 /*break*/, 5];
                        this.loading = true;
                        merchandiseCodeInput_1 = document.getElementById("merchandiseCode");
                        if (!!merchandiseCode) return [3 /*break*/, 1];
                        this.messageService.add({
                            key: "notificationPopup",
                            severity: "error",
                            summary: "Thông báo",
                            detail: "Bắt buộc phải nhập mã vận đơn",
                        });
                        this.loading = false;
                        this.focusAndSelectMerchandiseCode();
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.merchandiseCodeCheckExist() == false)) return [3 /*break*/, 2];
                        this.loading = false;
                        this.messageService.add({
                            key: "notificationPopup",
                            severity: "error",
                            summary: "Thông báo",
                            detail: "Kiện hàng đã tồn tại trong danh sách",
                        });
                        this.focusAndSelectMerchandiseCode();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(merchandiseCode && this.merchandiseCodeCheckExist() == true)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.merchandiseServices
                                .getMerchandiseByCode(merchandiseCode)
                                .toPromise()
                                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(res.result.success && res.result.data !== null)) return [3 /*break*/, 1];
                                            // hiển thị dữ liệu đơn hàng của kiện hàng
                                            // Next sang control tiếp theo
                                            this.loading = false;
                                            this.captureMerchandise();
                                            merchandiseCodeInput_1.blur();
                                            console.log('run');
                                            return [3 /*break*/, 3];
                                        case 1:
                                            // hiển thị thông báo đơn hàng chưa được map vào kiện hàng
                                            this.orderCodeMapping = "";
                                            setTimeout(function () {
                                                var orderCodeMappingInput = document.getElementById("orderCodeMapping");
                                                orderCodeMappingInput.focus();
                                                _this.loading = false;
                                            }, 300);
                                            return [4 /*yield*/, this.confirmationService.confirm({
                                                    key: "comfirmOrder",
                                                    header: "Xác nhận",
                                                    message: "Ki\u1EC7n h\u00E0ng ch\u01B0a \u0111\u01B0\u1EE3c khai b\u00E1o.",
                                                    acceptLabel: "Khai báo",
                                                    rejectLabel: "Bỏ qua",
                                                    accept: function () {
                                                        var params = {
                                                            merchandiseCode: merchandiseCode,
                                                            OrderCode: _this.orderCodeMapping,
                                                            createdUserId: _this.userId,
                                                        };
                                                        _this.loading = true;
                                                        _this.merchandiseServices.addMerchandise(params).subscribe(function (resAddAddMerchandise) {
                                                            if (resAddAddMerchandise.result.success) {
                                                                _this.messageService.add({
                                                                    key: "notificationPopup",
                                                                    severity: "success",
                                                                    summary: "Thông báo",
                                                                    detail: "Cập nhật thành công!",
                                                                });
                                                                _this.captureMerchandise();
                                                                merchandiseCodeInput_1.blur();
                                                            }
                                                            else {
                                                                _this.messageService.add({
                                                                    key: "notificationPopup",
                                                                    severity: "error",
                                                                    summary: "Thông báo",
                                                                    detail: resAddAddMerchandise.result.message,
                                                                });
                                                                _this.focusAndSelectMerchandiseCode();
                                                            }
                                                            _this.loading = false;
                                                        }, function (err) {
                                                            _this.loading = false;
                                                        });
                                                    },
                                                    reject: function () {
                                                        _this.loading = false;
                                                        _this.focusAndSelectMerchandiseCode();
                                                    },
                                                })];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function () {
                                _this.loading = false;
                                _this.messageService.add({
                                    key: "notificationPopup",
                                    severity: "error",
                                    summary: "Thông báo",
                                    detail: "Có lỗi xảy ra. Hãy thử lại",
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.messageService.add({
                            key: "notificationPopup",
                            severity: "error",
                            summary: "Thông báo",
                            detail: "Có lỗi xảy ra",
                        });
                        this.loading = false;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Focus next input
     * @param event
     */
    AddWarehouseImpComponent.prototype.nextFocus = function (event) {
        event.preventDefault();
        var inputs = Array.prototype.slice.call(document.querySelectorAll("button[tabindex],input[tabindex]"));
        var index = (inputs.indexOf(document.activeElement) + 1) % inputs.length;
        var input = inputs[index];
        input.focus();
        if (input.nodeName === "INPUT") {
            input.select();
        }
    };
    /**
     * Check is editing existing merchandise
     * If merchandise code just entered is existing Merchandise list => edit
     */
    AddWarehouseImpComponent.prototype.checkEditExistingMerchandise = function () {
        if (this.warehouseImpDetail.merchandiseCode) {
            var mCode_1 = this.warehouseImpDetail.merchandiseCode
                .trim()
                .toLowerCase();
            var editingM = this.warehouseImpDetailList.find(function (e) { return e.merchandiseCode.toLowerCase() === mCode_1; });
            return !!editingM;
        }
        else {
            return false;
        }
    };
    /**
     * Map response merchandise exp data
     * @param data
     * @param isLoadFromExpCode
     */
    AddWarehouseImpComponent.prototype.mapResData = function (data, isLoadFromExpCode) {
        var _this = this;
        if (isLoadFromExpCode === void 0) { isLoadFromExpCode = false; }
        this.warehouseImp.warehouseExpId = data.warehouseExpId;
        this.warehouseImp.expWarehouseId = data.expWarehouseId;
        this.warehouseImp.warehouseImpCode = data.warehouseImpCode;
        this.warehouseImp.warehouseImpId = data.warehouseImpId;
        this.warehouseImp.warehouseId = data.warehouseId;
        this.warehouseImp.status = isLoadFromExpCode
            ? this.defaultStatus
            : data.status;
        if (!isLoadFromExpCode) {
            this.warehouseImpDetailList = data.lsDetail.map(function (item) {
                var warehouseImpDetail = new _model_warehouse_imp_detail_model__WEBPACK_IMPORTED_MODULE_4__["WarehouseImpDetail"]();
                warehouseImpDetail.merchandiseCode = item.merchandiseCode;
                warehouseImpDetail.warehouseImpDetailId = item.warehouseImpDetailId;
                warehouseImpDetail.netWeight = item.netWeight;
                warehouseImpDetail.chargedWeight = item.chargedWeight;
                warehouseImpDetail.paymentWeight = item.paymentWeight;
                warehouseImpDetail.length = item.length;
                warehouseImpDetail.width = item.width;
                warehouseImpDetail.height = item.height;
                warehouseImpDetail.shelfPosition = _this.warehouseImpDetail.shelfPosition;
                warehouseImpDetail.lsImage = item.lsImage;
                return warehouseImpDetail;
            });
        }
        this.changeDetectorRef.detectChanges();
    };
    /**
     * Check valid size
     */
    AddWarehouseImpComponent.prototype.isValidSize = function () {
        return ((!this.warehouseImpDetail.length &&
            !this.warehouseImpDetail.width &&
            !this.warehouseImpDetail.height) ||
            (this.warehouseImpDetail.length &&
                this.warehouseImpDetail.width &&
                this.warehouseImpDetail.height));
    };
    /*
      prevent next tab when merchandiseCode = null || netWeight == null
    */
    AddWarehouseImpComponent.prototype.checkNextControlMerchandiseCode = function ($event, merchandiseCode) {
        if (merchandiseCode == undefined ||
            merchandiseCode == null ||
            merchandiseCode == "") {
            setTimeout(function () {
                var merchandiseCodeInput = document.getElementById("merchandiseCode");
                merchandiseCodeInput.focus();
            }, 200);
        }
    };
    AddWarehouseImpComponent.prototype.checkNextControlNetWeight = function ($event, netWeight, type) {
        var _this = this;
        if (this.loading == false) {
            if (netWeight == undefined || netWeight == null || netWeight == "") {
                this.loading = true;
                setTimeout(function () {
                    var merchandiseCodeInput = document.getElementById("netWeight");
                    merchandiseCodeInput.focus();
                    merchandiseCodeInput.select();
                    _this.loading = false;
                }, 200);
            }
            else {
                if (type == 'keyupEnter') {
                    this.nextFocus($event);
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("warehouseImpDetailForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AddWarehouseImpComponent.prototype, "warehouseImpDetailForm", void 0);
    AddWarehouseImpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-warehouse-imp",
            template: __webpack_require__(/*! ./add-warehouse-imp.component.html */ "./src/app/warehouseimp/add/add-warehouse-imp.component.html"),
            styles: [__webpack_require__(/*! ./add-warehouse-imp.component.scss */ "./src/app/warehouseimp/add/add-warehouse-imp.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]],
        }),
        __metadata("design:paramtypes", [app_services_warehouse_imp_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseImpService"],
            app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_11__["MerchandiseServices"],
            app_services_system_services__WEBPACK_IMPORTED_MODULE_9__["SystemService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_fileManager_services__WEBPACK_IMPORTED_MODULE_12__["FileManagerServices"]])
    ], AddWarehouseImpComponent);
    return AddWarehouseImpComponent;
}());



/***/ }),

/***/ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-wrapper\" *ngIf=\"loading\" style=\"z-index: 1000;\">\n  <div class=\"bg-spiner w100 h100\"></div>\n  <div class=\"spinner-container w100 h100\">\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n</div>\n\n<form style=\"width: 100%;margin: 0 auto; max-width: 700px;\">\n  <!-- {{width}} - {{height}} -->\n  <div class=\"webcam\" *ngIf=\"currentAction=='capture' && showWebcam\">\n    <webcam [width]=\"width\" [height]=\"height\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\"\n      [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [imageType]=\"imgUploadType\"\n      [imageQuality]=\"1\" (cameraSwitched)=\"cameraWasSwitched($event)\" (initError)=\"handleInitError($event)\">\n    </webcam>\n  </div>\n  <div class=\"view-img\" *ngIf=\"currentAction !== 'capture'\">\n    <img *ngIf=\"currentZoomImg && currentZoomImg.attachLink\" [src]=\"currentZoomImg.attachLink\" class=\"zoom-img\"\n      [style.borderBottom]=\"currentZoomImg.uploadSuccess==true ? '5px solid blue' :'1px solid red'\" />\n  </div>\n  <br />\n  <div class=\"gr-action-btn\">\n    <div class=\"imgs style-scrollbar\" *ngIf=\"webcamImages && webcamImages.length\">\n      <div class=\"snapshot\" *ngFor=\"let webcamImage of webcamImages; let i = index;\">\n        <img [src]=\"webcamImage.attachLink\" class=\"img\" pTooltip=\"Phóng to\" (click)=\"zoomImg(webcamImage)\" />\n        <span class=\"remove-btn\" pTooltip=\"Xóa ảnh\" (click)=\"removeImg(i)\">\n          <i class=\"pi pi-times\"></i>\n        </span>\n        <span class=\"img-index\">{{i + 1}}</span>\n      </div>\n    </div>\n    <div class=\"btn-list\">\n      <p-button class=\"continue-capture\" *ngIf=\"currentAction =='viewImg' \" pTooltip=\"Tiếp tục chụp\" label=\"Tiếp tục\"\n        (click)=\"changeAction('capture')\">\n      </p-button>\n      <span>&nbsp;&nbsp;</span>\n      <p-button class=\"toggle-webcam\" *ngIf=\"currentAction=='capture'\" (click)=\"showNextWebcam(true);\"\n        [disabled]=\"!multipleWebcamsAvailable\" pTooltip=\"Chuyển Camera\" icon=\"pi pi-refresh\"></p-button>\n      <span>&nbsp;&nbsp;</span>\n      <p-button label=\"Chụp\" autofocus class=\"p-button-secondary\" *ngIf=\"currentAction=='capture'\" icon=\"pi pi-camera\"\n        (click)=\"triggerSnapshot();\"></p-button>\n      <span>&nbsp;&nbsp;</span>\n      <p-button label=\"Dừng chụp\" type=\"submit\" [disabled]=\"webcamImages.length == 0\" class=\"p-button-secondary\"\n        (click)=\"uploadImgAndClose()\"></p-button>\n      <input value='Save' id=\"save-btn\" name='Save' (keydown.enter)=\"captureAndUpload()\">\n    </div>\n  </div>\n  <br />\n</form>\n<div *ngIf=\"errors.length > 0\">\n  <h4>CAMERA ERROR:</h4>\n  <ul *ngFor=\"let error of errors\">\n    <li>{{error | json}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.webcam {\n  display: flex;\n  justify-content: center;\n  min-height: 380px;\n  position: relative; }\n\n@media only screen and (max-width: 600px) {\n  .gr-action-btn {\n    flex-direction: column; }\n    .gr-action-btn .imgs {\n      margin-bottom: 12px;\n      border-bottom: 1px solid #808082;\n      padding-bottom: 10px; }\n    .gr-action-btn .btn-list {\n      display: flex;\n      justify-content: flex-end;\n      margin-bottom: 12px; }\n  .toggle-webcam {\n    position: absolute;\n    top: 20px !important;\n    right: 10px !important;\n    z-index: 1; }\n    .toggle-webcam button {\n      width: 50px;\n      height: 50px;\n      border-radius: 10px;\n      font-size: 20px; } }\n\n.view-img {\n  display: flex;\n  justify-content: center;\n  min-height: 380px;\n  position: relative; }\n\n.view-img .continue-capture {\n    z-index: 1;\n    position: absolute;\n    right: 0;\n    top: 0; }\n\n.view-img .zoom-img {\n    height: 480px; }\n\n.allow-switch {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888; }\n\n#save-btn {\n  width: 0;\n  opacity: 0; }\n\n.style-scrollbar::-webkit-scrollbar {\n  width: 4px; }\n\n.gr-action-btn {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 4px;\n  border-top: 1px solid #798898;\n  padding-top: 12px;\n  display: flex; }\n\n.gr-action-btn .imgs {\n    flex: 1;\n    display: flex;\n    overflow: auto; }\n\n.gr-action-btn .imgs .snapshot {\n      width: 70px;\n      cursor: pointer;\n      margin-right: 4px;\n      position: relative; }\n\n.gr-action-btn .imgs .snapshot .img {\n        width: 70px;\n        min-width: 70px;\n        background: #ddd;\n        min-height: 50px; }\n\n.gr-action-btn .imgs .snapshot .img-index {\n        position: absolute;\n        left: 4px;\n        bottom: 4px;\n        font-size: 16px;\n        font-weight: bold;\n        color: #fff; }\n\n.gr-action-btn .imgs .snapshot .remove-btn {\n        position: absolute;\n        right: 0;\n        top: 0px;\n        cursor: pointer;\n        display: block;\n        width: 16px;\n        height: 16px;\n        line-height: 16px;\n        border: 1px solid red;\n        border-radius: 50%; }\n\n.gr-action-btn .imgs .snapshot .remove-btn i {\n          color: red;\n          font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FyZWhvdXNlaW1wL2FkZC9jYXB0dXJlLW1lcmNoYW5kaXNlL0Y6XFxDw5RORyBWSeG7hkMgLSBMw4BNIFRIw4pNXFxKT0IgQW5ndWxhclxcYmFidXZpL3NyY1xcYXBwXFx3YXJlaG91c2VpbXBcXGFkZFxcY2FwdHVyZS1tZXJjaGFuZGlzZVxcY2FwdHVyZS1tZXJjaGFuZGlzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0U7SUFDRSx1QkFBc0IsRUFXdkI7SUFaRDtNQUdJLG9CQUFtQjtNQUNuQixpQ0FBZ0M7TUFDaEMscUJBQW9CLEVBQ3JCO0lBTkg7TUFRSSxjQUFhO01BQ2IsMEJBQXlCO01BQ3pCLG9CQUFtQixFQUNwQjtFQUVIO0lBQ0UsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQix1QkFBc0I7SUFDdEIsV0FBVSxFQU9YO0lBWEQ7TUFNSSxZQUFXO01BQ2IsYUFBWTtNQUNaLG9CQUFtQjtNQUNuQixnQkFBZSxFQUNkLEVBQUE7O0FBR0w7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFVbkI7O0FBZEQ7SUFNSSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixPQUFNLEVBQ1A7O0FBVkg7SUFZSSxjQUFhLEVBQ2Q7O0FBR0g7RUFDRSxjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFFRCxXQUFXOztBQUNYO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxTQUFRO0VBQ1IsV0FBVSxFQUNYOztBQUVEO0VBRUksV0FBVSxFQUNYOztBQUdIO0VBQ0UsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLDhCQUE2QjtFQUM3QixrQkFBaUI7RUFDakIsY0FBYSxFQTBDZDs7QUFoREQ7SUFRSSxRQUFPO0lBQ1AsY0FBYTtJQUNiLGVBQWMsRUFxQ2Y7O0FBL0NIO01BWU0sWUFBVztNQUNYLGdCQUFlO01BQ2Ysa0JBQWlCO01BQ2pCLG1CQUFrQixFQStCbkI7O0FBOUNMO1FBaUJRLFlBQVc7UUFDWCxnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixpQkFBZ0IsRUFDakI7O0FBckJQO1FBdUJRLG1CQUFrQjtRQUNsQixVQUFTO1FBQ1QsWUFBVztRQUNYLGdCQUFlO1FBQ2Ysa0JBQWlCO1FBQ2pCLFlBQVcsRUFDWjs7QUE3QlA7UUErQlEsbUJBQWtCO1FBQ2xCLFNBQVE7UUFDUixTQUFRO1FBQ1IsZ0JBQWU7UUFDZixlQUFjO1FBQ2QsWUFBVztRQUNYLGFBQVk7UUFDWixrQkFBaUI7UUFDakIsc0JBQXFCO1FBQ3JCLG1CQUFrQixFQUtuQjs7QUE3Q1A7VUEwQ1UsV0FBVTtVQUNWLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvd2FyZWhvdXNlaW1wL2FkZC9jYXB0dXJlLW1lcmNoYW5kaXNlL2NhcHR1cmUtbWVyY2hhbmRpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2ViY2FtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmdyLWFjdGlvbi1idG57XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmltZ3N7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5idG4tbGlzdHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRvZ2dsZS13ZWJjYW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJ1dHRvbntcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udmlldy1pbWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzgwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5jb250aW51ZS1jYXB0dXJlIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnpvb20taW1nIHtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxsb3ctc3dpdGNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbiNzYXZlLWJ0biB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnN0eWxlLXNjcm9sbGJhciB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbi5nci1hY3Rpb24tYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzk4ODk4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmltZ3Mge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC5zbmFwc2hvdCB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5pbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1pbmRleCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLnJlbW92ZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CaptureMerchandiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureMerchandiseComponent", function() { return CaptureMerchandiseComponent; });
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/components/common/api */ "./node_modules/primeng/components/common/api.js");
/* harmony import */ var primeng_components_common_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_fileManager_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/fileManager.services */ "./src/app/services/fileManager.services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CaptureMerchandiseComponent = /** @class */ (function () {
    function CaptureMerchandiseComponent(cdr, ref, config, messageService, fileManagerServices) {
        this.cdr = cdr;
        this.ref = ref;
        this.config = config;
        this.messageService = messageService;
        this.fileManagerServices = fileManagerServices;
        this.width = screen.width < 640 ? Number(screen.width) : 640;
        this.height = screen.height < 550 ? Number(screen.height) : 550;
        this.currentAction = "capture"; // "capture" , 'viewImg' , 'viewHistoryImg'
        this.currentZoomImg = null;
        this.loading = false;
        this.imgUploadType = "image/jpeg";
        this.multipleWebcamsAvailable = false;
        /*
          handel camera
          DEMO: https://basst314.github.io/ngx-webcam/?
          GIT: https://github.com/basst314/ngx-webcam-demo/tree/master/src/app
        */
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.errors = [];
        // public webcamImages: WebcamImage[] = [];
        this.webcamImages = [];
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CaptureMerchandiseComponent.prototype.ngOnInit = function () {
        // let constraints = { video: true, audio: true };
        // navigator.mediaDevices.getUserMedia(constraints)
        //   .then(stream => { console.log('get perm success')} )
        //   .catch(e => console.error(e));
        var _this = this;
        ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamUtil"].getAvailableVideoInputs().then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        if (this.config && this.config.data && this.config.data.imgLinks) {
            this.webcamImages = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.config.data.imgLinks);
        }
        if (this.config && this.config.data && this.config.data.action) {
            // 'viewImg'
            this.currentAction = this.config.data.action;
            if (this.config.data.action == "viewImg") {
                this.zoomImg(this.config.data.imgLinks[0]);
            }
        }
        this.autoFocusBtnSubmit();
        this.cdr.detectChanges();
    };
    CaptureMerchandiseComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    Object.defineProperty(CaptureMerchandiseComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaptureMerchandiseComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CaptureMerchandiseComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    CaptureMerchandiseComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    CaptureMerchandiseComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    CaptureMerchandiseComponent.prototype.handleImage = function (webcamImage) {
        var img = { attachLink: webcamImage.imageAsDataUrl };
        if (webcamImage) {
            this.webcamImages.push(img);
        }
    };
    CaptureMerchandiseComponent.prototype.cameraWasSwitched = function (deviceId) {
        this.deviceId = deviceId;
    };
    CaptureMerchandiseComponent.prototype.zoomImg = function (img) {
        this.currentZoomImg = img;
        this.changeAction("viewImg");
    };
    CaptureMerchandiseComponent.prototype.changeAction = function (action) {
        this.currentAction = action;
    };
    CaptureMerchandiseComponent.prototype.removeImg = function (i) {
        this.webcamImages.splice(i, 1);
    };
    // close
    CaptureMerchandiseComponent.prototype.uploadImgAndClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = true;
                this.ref.close(this.webcamImages);
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    CaptureMerchandiseComponent.prototype.captureAndUpload = function () {
        this.triggerSnapshot();
        event.preventDefault();
        if (this.webcamImages && this.webcamImages.length) {
            this.uploadImgAndClose();
        }
        else {
            var saveBtn = document.getElementById("save-btn");
            saveBtn.focus();
        }
    };
    CaptureMerchandiseComponent.prototype.autoFocusBtnSubmit = function () {
        var submitBtnId = "save-btn";
        var input = document.getElementById(submitBtnId);
        input.focus();
    };
    CaptureMerchandiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-capture-merchandise",
            template: __webpack_require__(/*! ./capture-merchandise.component.html */ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.html"),
            styles: [__webpack_require__(/*! ./capture-merchandise.component.scss */ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"],
            primeng_components_common_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
            _services_fileManager_services__WEBPACK_IMPORTED_MODULE_1__["FileManagerServices"]])
    ], CaptureMerchandiseComponent);
    return CaptureMerchandiseComponent;
}());



/***/ }),

/***/ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/warehouseimp/handel-delivery/handel-delivery.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast key=\"toast-message\"></p-toast>\r\n<div class=\"spinner-wrapper\" *ngIf=\"loading\" style=\"z-index: 1000;\">\r\n  <div class=\"bg-spiner w100 h100\"></div>\r\n  <div class=\"spinner-container w100 h100\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n  </div>\r\n</div>\r\n<div autoscroll=\"true\" class=\"ng-scope\">\r\n  <div class=\"gr-btn\">\r\n    <button type=\"button\" class=\"btn\" printSectionId=\"print-delivery-request\" [styleSheetFile]=\"styleSheetFiles\"\r\n      ngxPrint>\r\n      In phiếu\r\n    </button>\r\n    <button type=\"button\" (click)=\"start()\" class=\"btn\">\r\n      Bắt đầu\r\n    </button>\r\n    <button type=\"button\" (click)=\"finish()\" class=\"btn\">\r\n      Hoàn thành\r\n    </button>\r\n    <button type=\"button\" (click)=\"cancelDelivery()\" class=\"btn\">\r\n      Ngừng chuẩn bị\r\n    </button>\r\n  </div>\r\n  <div class=\"handel-delivery\">\r\n    <h3 class=\"title\">\r\n      XỬ LÝ YÊU CẦU GIAO HÀNG\r\n    </h3>\r\n    <div class=\"statistic-all\">\r\n      <span>Tổng kiện: {{totalPackageOfRequestList()}} </span>\r\n      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r\n      <span>Chưa thấy: {{totalMissingAmountOfRequestList()}}</span>\r\n    </div>\r\n    <form [formGroup]=\"filterForm\" class=\"filter-form\" (keydown.enter)=\"filterRequest()\">\r\n      <div class=\"controls\">\r\n        <input type=\"text\" pInputText formControlName=\"code\" class=\"input-code\" />\r\n        <p-dropdown [options]=\"filterByOptions\" formControlName=\"filterBy\"></p-dropdown>\r\n      </div>\r\n      <button class=\"filter-btn\" pButton type=\"button\" label=\"Lọc\" (click)=\"filterRequest()\"\r\n        [disabled]=\"!filterForm.valid\"></button>\r\n    </form>\r\n\r\n    <div class=\"lst-request-title\">\r\n      Danh sách request\r\n    </div>\r\n    <div (click)=\"cleanList()\" class=\"clean-table\" *ngIf=\"requestList && requestList.length > 0\">\r\n      <i class=\"pi pi-times\"></i>\r\n      <span style=\"padding-left: 4px;\">Xóa khỏi danh sách</span>\r\n    </div>\r\n    <div class=\"table-detail\">\r\n      <div *ngIf=\"!requestList || requestList.length == 0\" style=\"padding-left: 8px;\">\r\n        <strong> 0 request found</strong>\r\n      </div>\r\n      <div *ngFor=\"let request of requestList; let i=index;\" pTooltip=\"Click để xem chi tiết\">\r\n        <div [ngClass]=\"{'d-none': (i < currentPage*numOfItemOnPage) || (i >= (currentPage + 1)*numOfItemOnPage)  }\">\r\n          <div class=\"row-statistic screen\">\r\n            <!-- for desktop -->\r\n            <p-checkbox binary=\"true\" [(ngModel)]=\"request.checked\" inputId=\"binary\" (onChange)=\"changeSelectedDeliveryRequest($event)\">\r\n            </p-checkbox>\r\n            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r\n            <span>Mã phiếu: <strong>{{request.deliveryRequestCode}}</strong></span>\r\n            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r\n            <span>Số kiện: <strong>{{request.totalPackage}}</strong></span>\r\n            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\r\n            <span>Chưa thấy: <strong>{{request.missingAmount}}</strong> </span>\r\n            <i class=\"pi\" (click)=\"request.isCollapse = !request.isCollapse\"\r\n              [ngClass]=\"request.isCollapse ? 'pi-chevron-down' : 'pi-chevron-right'\"\r\n              style=\"float: right; margin: 4px;\"></i>\r\n          </div>\r\n          <div class=\"row-statistic mobile\">\r\n            <div class=\"request-infor\">\r\n               <!-- for mobile -->\r\n              <p-checkbox binary=\"true\" [(ngModel)]=\"request.checked\" inputId=\"binary\" (onChange)=\"changeSelectedDeliveryRequest($event)\">\r\n              </p-checkbox>\r\n              <div>\r\n                <div>Mã phiếu: <strong>{{request.deliveryRequestCode}}</strong></div>\r\n                <div>Số kiện: <strong>{{request.totalPackage}}</strong></div>\r\n                <div>Chưa thấy: <strong>{{request.missingAmount}}</strong> </div>\r\n              </div>\r\n            </div>\r\n            <i class=\"pi\" (click)=\"request.isCollapse = !request.isCollapse\"\r\n              [ngClass]=\"request.isCollapse ? 'pi-chevron-down' : 'pi-chevron-right'\"\r\n              style=\"float: right; margin: 4px;\"></i>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngFor=\"let requestDetail of request.lsDetail\" [ngClass]=\"{'d-none': request['isCollapse']}\">\r\n            <div class=\"col-table col-sm-12 col-md-6 col-lg-6\">\r\n              <img class=\"img\"\r\n                src=\"https://public.bl.files.1drv.com/y4mWyQFyB_NqA6Gk5ojlRkNaXzwss0p70SnBm-RZpGJh1Mvev_G8d8y0sswmAPq1QWoedNmAnuOxSIZOHitV84mj0EyuDrBpWH-NV8ND2e29Gx-ysAWkneAhEYytXiz_rO9azV_YE74qXzK8BIzWiV3l7lDemMhCmP3x5qeOslcMg_bIsoVZtHMUAHP6X7kE94VL48f1cOdSEKsOeXUU3wbpGanlZuWD1QKxEb3HIMpxLAAalny8jgXEUW2CFwile26ZSGL1p0h-K5EtAVf1d3t9nt22tyzCEl4EnVm4r2OtxY?width=800&height=800&cropmode=none\" />\r\n            </div>\r\n            <div class=\"col-table col-sm-12 col-md-3 col-lg-3 main-infor\">\r\n              <div class=\"detail-info\">Mã vận đơn: <span class=\"id-infor\"> {{ requestDetail.merchandiseCode ?\r\n                  requestDetail.merchandiseCode : '' }} </span></div>\r\n              <div class=\"detail-info\">Vị trí: <span class=\"text-infor\"> {{ requestDetail.ShelfPosition ?\r\n                  requestDetail.ShelfPosition: '' }}</span></div>\r\n              <div class=\"detail-info\">Đơn hàng:<span class=\"text-infor\"> {{ requestDetail.orderCode ?\r\n                  requestDetail.orderCode: '' }}</span></div>\r\n              <div class=\"detail-info\">Mã phiếu:<span class=\"text-infor\"> {{ requestDetail.deliveryRequestCode ?\r\n                  requestDetail.deliveryRequestCode: '' }}</span> </div>\r\n            </div>\r\n            <div class=\"col-table col-sm-12 col-md-3 col-lg-3 sub-infor  sub-infor-mobile\">\r\n              <div>\r\n                <div class=\"detail-info\">Cân nặng:<span class=\"text-infor\"> {{ requestDetail.netWeight ?\r\n                    requestDetail.netWeight:\r\n                    ''}}</span> kg </div>\r\n                <div class=\"detail-info\">Thể tích:<span class=\"text-infor\"\r\n                    *ngIf=\"requestDetail.height !== undefined && requestDetail.width !== undefined && requestDetail.length !== undefined\">\r\n                    {{ requestDetail.height && requestDetail.width && requestDetail.length }}</span></div>\r\n                <div class=\"detail-info\">Mã khách hàng:<span class=\"text-infor\"> {{ requestDetail.userCode ?\r\n                    requestDetail.userCode: '' }}</span></div>\r\n              </div>\r\n              <div class=\"detail-info status\" class=\"status\"\r\n                (click)=\"changeStatusDeliveryRequestDetail(requestDetail, requestDetail.deliveryRequestDetailId, requestDetail.status)\"\r\n                [ngClass]=\"{'not-found':  requestDetail.status == 1 , 'found':requestDetail.status == 2 }\">\r\n                {{ requestDetail.status == 1 ? 'Chưa thấy' : 'Đã thấy'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"requestList && requestList.length > 0\">\r\n        <p-paginator [rows]=\"numOfItemOnPage\" [totalRecords]=\"requestList.length\" (onPageChange)=\"onPageChange($event)\">\r\n        </p-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"print-delivery-request\">\r\n  <div class=\"print-container\" *ngFor=\"let deliveryRequest of requestListSelected; let i=index;\">\r\n    <div class=\"page\">\r\n      <div class=\"subpage\">\r\n        <div class=\"form-3\">\r\n          <h1 class=\"text-center text-uppercase\"> Phiếu yêu cầu giao hàng </h1>\r\n          <ngx-barcode [bc-value]=\"deliveryRequest.deliveryRequestCode\" bc-height=\"30\" bc-font-size=\"15\" bc-width=\"1.8\"\r\n            [bc-display-value]=\"true\"></ngx-barcode>\r\n          <div class=\"info\">\r\n            <div><strong>Loại:</strong> {{deliveryRequest.typeDisplay}} </div>\r\n            <div><strong>Khách hàng:</strong> {{deliveryRequest.contactName}} </div>\r\n            <div><strong>Điện thoại:</strong> {{deliveryRequest.contactPhone}} </div>\r\n            <div><strong>Địa chỉ:</strong> {{deliveryRequest.address\r\n              + '-' + deliveryRequest.wardDisplay\r\n              + '-' + deliveryRequest.districtDisplay\r\n              + '-' + deliveryRequest.cityDisplay\r\n              + '-' + deliveryRequest.countryDisplay}}</div>\r\n            <div class=\"text-center\">**************</div>\r\n            <div><strong>Nhà xe:</strong> {{deliveryRequest.vehicleName}} </div>\r\n            <div><strong>Điện thoại:</strong> {{deliveryRequest.vehiclePhone}}</div>\r\n            <div><strong>Địa chỉ:</strong> {{deliveryRequest.vehicleAddress}}</div>\r\n            <div class=\"text-center\">**************</div>\r\n          </div>\r\n          <div class=\"list\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Mã hàng</th>\r\n                  <th>Vị trí</th>\r\n                  <th>Trọng lượng</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let mer of deliveryRequest.lsDetail\">\r\n                  <td style=\"white-space: nowrap;\">{{mer.merchandiseCode}}</td>\r\n                  <td style=\"min-width: 30px;\">{{mer.shelfPosition}}</td>\r\n                  <td style=\"min-width: 30px;\">{{mer.paymentWeight}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"no-border\">{{deliveryRequest.lsDetail?.length}} kiện hàng</td>\r\n                  <td class=\"no-border\"></td>\r\n                  <td class=\"no-border\">{{deliveryRequest.sumRequestWeight}} kg</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"print-footer\">\r\n            <div class=\"text-center\">{{APP_NAME}} - Order </div>\r\n            <div class=\"text-center\">Hotline: 03030203023 </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/warehouseimp/handel-delivery/handel-delivery.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".print-container {\n  display: none; }\n\n.d-none {\n  display: none; }\n\n.gr-btn {\n  display: flex; }\n\n.gr-btn .btn {\n    background: #f15922;\n    margin-right: 8px; }\n\n.handel-delivery {\n  padding: 0 10px 10px 0;\n  background: #fff;\n  min-height: calc(100vh - 100px); }\n\n.handel-delivery .title {\n    border-top: 2px solid #f15922;\n    margin-top: 12px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 10px;\n    font-size: 16px;\n    font-weight: bold; }\n\n.handel-delivery .filter-form {\n    padding: 0 10px 10px 10px;\n    width: 450px;\n    display: flex;\n    justify-content: space-around; }\n\n.handel-delivery .filter-form .controls {\n      flex: 1;\n      display: flex;\n      justify-content: space-between; }\n\n.handel-delivery .filter-form .filter-btn {\n      margin-left: 20px; }\n\n.handel-delivery .statistic-all {\n    margin: 0px 20px 16px 20px; }\n\n.handel-delivery .lst-request-title {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 10px 0 10px 10px; }\n\n.handel-delivery .clean-table {\n    cursor: pointer;\n    border: 2px solid #f15922;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-left: 12px;\n    margin-bottom: 8px;\n    padding: 8px 4px;\n    color: #f15922;\n    display: flex;\n    align-items: center;\n    height: 36px;\n    border-radius: 4px; }\n\n.handel-delivery .table-detail {\n    max-width: 1000px;\n    margin-left: 10px; }\n\n.handel-delivery .table-detail .row {\n      margin: 0 0 !important; }\n\n.handel-delivery .table-detail .row .col-table {\n        padding-top: 8px;\n        padding-bottom: 8px;\n        border: 1px solid #ddd; }\n\n.handel-delivery .table-detail .row-statistic {\n      color: #fff;\n      background: #f15922;\n      padding: 8px;\n      cursor: pointer;\n      border: 1px solid #fff; }\n\n.handel-delivery .table-detail .row-statistic.mobile {\n        display: none;\n        justify-content: space-between;\n        align-items: center; }\n\n.handel-delivery .table-detail .row-statistic.screen {\n        display: block; }\n\n.handel-delivery .table-detail .img {\n      max-width: 100%;\n      display: block;\n      color: pointer; }\n\n.handel-delivery .table-detail .main-infor div .id-infor {\n      color: #007ad9;\n      font-weight: bold; }\n\n.handel-delivery .table-detail .main-infor div .text-infor {\n      font-weight: bold; }\n\n.handel-delivery .table-detail .sub-infor .status {\n      width: -webkit-fit-content;\n      width: -moz-fit-content;\n      width: fit-content;\n      padding: 4px 20px;\n      color: #fff;\n      margin-top: 4px;\n      border-radius: 4px;\n      background: #007ad9;\n      height: 58px;\n      line-height: 50px; }\n\n.handel-delivery .table-detail .sub-infor .status.found {\n        background: #007ad9; }\n\n.handel-delivery .table-detail .sub-infor .status.not-found {\n        background: #f15922; }\n\n.handel-delivery .table-detail .sub-infor .text-infor {\n      font-weight: bold; }\n\n@media only screen and (max-width: 800px) {\n  .row-statistic.mobile {\n    display: flex !important; }\n    .row-statistic.mobile .request-infor {\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      .row-statistic.mobile .request-infor p-checkbox {\n        margin-right: 10px; }\n  .row-statistic.screen {\n    display: none !important; }\n  .filter-form {\n    width: 100% !important;\n    max-width: 450px; }\n  .sub-infor-mobile {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .sub-infor-mobile .status {\n      height: 40px; } }\n\n@media only screen and (max-width: 600px) {\n  .filter-form {\n    width: 100% !important;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end; }\n    .filter-form .controls {\n      width: 100%; }\n      .filter-form .controls .input-code {\n        margin-right: 10px;\n        flex: 1; }\n    .filter-form .filter-btn {\n      margin-top: 10px;\n      width: 100px;\n      margin-bottom: 20px; } }\n\n@media (max-width: 400px) {\n  .filter-form {\n    width: 100% !important;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end; }\n    .filter-form .controls {\n      width: 100%;\n      flex-direction: column; }\n      .filter-form .controls .input-code {\n        flex: 1;\n        margin-bottom: 20px; }\n      .filter-form .controls ::ng-deep p-dropdown .ui-dropdown {\n        width: calc( 100% - 10px);\n        margin-bottom: 10px; }\n    .filter-form .filter-btn {\n      margin-top: 10px;\n      width: 100px;\n      margin-bottom: 20px;\n      margin-right: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FyZWhvdXNlaW1wL2hhbmRlbC1kZWxpdmVyeS9GOlxcQ8OUTkcgVknhu4ZDIC0gTMOATSBUSMOKTVxcSk9CIEFuZ3VsYXJcXGJhYnV2aS9zcmNcXGFwcFxcd2FyZWhvdXNlaW1wXFxoYW5kZWwtZGVsaXZlcnlcXGhhbmRlbC1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFLZDs7QUFORDtJQUdJLG9CQXJCcUI7SUFzQnJCLGtCQUFpQixFQUNsQjs7QUFHSDtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsZ0NBQStCLEVBOEdoQzs7QUFqSEQ7SUFLSSw4QkEvQnFCO0lBZ0NyQixpQkFBZ0I7SUFDaEIsMkJBQWtCO0lBQWxCLHdCQUFrQjtJQUFsQixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCOztBQVhIO0lBYUksMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWixjQUFhO0lBQ2IsOEJBQTZCLEVBUzlCOztBQXpCSDtNQWtCTSxRQUFPO01BQ1AsY0FBYTtNQUNiLCtCQUE4QixFQUMvQjs7QUFyQkw7TUF1Qk0sa0JBQWlCLEVBQ2xCOztBQXhCTDtJQTJCSSwyQkFBMEIsRUFDM0I7O0FBNUJIO0lBOEJJLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLHlCQUF3QixFQUN6Qjs7QUFqQ0g7SUFtQ0ksZ0JBQWU7SUFDZiwwQkFBeUI7SUFDekIsMkJBQTBCO0lBQzFCLHdCQUF1QjtJQUN2QixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLG1CQUFrQixFQUNuQjs7QUFoREg7SUFrREksa0JBQWlCO0lBQ2pCLGtCQUFpQixFQTZEbEI7O0FBaEhIO01BcURNLHVCQUF1QixFQU14Qjs7QUEzREw7UUF1RFEsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQix1QkFBc0IsRUFDdkI7O0FBMURQO01BNkRNLFlBQVc7TUFDWCxvQkFBbUI7TUFDbkIsYUFBWTtNQUNaLGdCQUFlO01BQ2YsdUJBQXNCLEVBU3ZCOztBQTFFTDtRQW1FUSxjQUFhO1FBQ2IsK0JBQThCO1FBQzlCLG9CQUFtQixFQUNwQjs7QUF0RVA7UUF3RVEsZUFBYyxFQUNmOztBQXpFUDtNQTRFTSxnQkFBZTtNQUNmLGVBQWM7TUFDZCxlQUFjLEVBQ2Y7O0FBL0VMO01BbUZVLGVBQWM7TUFDZCxrQkFBaUIsRUFDbEI7O0FBckZUO01BdUZVLGtCQUFpQixFQUNsQjs7QUF4RlQ7TUE2RlEsMkJBQWtCO01BQWxCLHdCQUFrQjtNQUFsQixtQkFBa0I7TUFDbEIsa0JBQWlCO01BQ2pCLFlBQVc7TUFDWCxnQkFBZTtNQUNmLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsYUFBWTtNQUNaLGtCQUFpQixFQU9sQjs7QUEzR1A7UUFzR1Usb0JBQW1CLEVBQ3BCOztBQXZHVDtRQXlHVSxvQkFBbUIsRUFDcEI7O0FBMUdUO01BNkdRLGtCQUFpQixFQUNsQjs7QUFLUDtFQUNFO0lBRUkseUJBQXdCLEVBU3pCO0lBWEg7TUFJTSxjQUFhO01BQ2IsK0JBQThCO01BQzlCLG9CQUFtQixFQUlwQjtNQVZMO1FBUVEsbUJBQWtCLEVBQ25CO0VBVFA7SUFhSSx5QkFBd0IsRUFDekI7RUFFSDtJQUNFLHVCQUFzQjtJQUN0QixpQkFBZ0IsRUFDakI7RUFDRDtJQUNFLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsb0JBQW1CLEVBSXBCO0lBUEQ7TUFLSSxhQUFZLEVBQ2IsRUFBQTs7QUFJTDtFQUNFO0lBQ0UsdUJBQXNCO0lBQ3RCLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsc0JBQXFCLEVBYXRCO0lBakJEO01BTUksWUFBVyxFQUtaO01BWEg7UUFRTSxtQkFBa0I7UUFDbEIsUUFBTyxFQUNSO0lBVkw7TUFhSSxpQkFBZ0I7TUFDaEIsYUFBWTtNQUNaLG9CQUFtQixFQUNwQixFQUFBOztBQUlMO0VBQ0U7SUFDRSx1QkFBc0I7SUFDdEIsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixzQkFBcUIsRUF1QnRCO0lBM0JEO01BTUksWUFBVztNQUNYLHVCQUFzQixFQWF2QjtNQXBCSDtRQVNNLFFBQU87UUFDUCxvQkFBbUIsRUFDcEI7TUFYTDtRQWVVLDBCQUF5QjtRQUN6QixvQkFBbUIsRUFDcEI7SUFqQlQ7TUFzQkksaUJBQWdCO01BQ2hCLGFBQVk7TUFDWixvQkFBbUI7TUFDbkIsbUJBQWtCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93YXJlaG91c2VpbXAvaGFuZGVsLWRlbGl2ZXJ5L2hhbmRlbC1kZWxpdmVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjX3ByaW1hcnktY29sb3I6ICNmMTU5MjI7XHJcbiRjX3N0YXR1cy0xNi1iYWNrZ3JvdW5kOiAjZTEwZDBjO1xyXG4kY19zdGF0dXMtMTUtYmFja2dyb3VuZDogb3JhbmdlO1xyXG4kY19zdGF0dXMtMTQtYmFja2dyb3VuZDogeWVsbG93O1xyXG4kY19zdGF0dXMtMS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuJGNfc3RhdHVzX2RlZmF1bHQ6IGJsdWU7XHJcbiRjX3doaXRlOiAjZmZmO1xyXG4kY19ib3JkZXI6ICNlOGU4ZTg7XHJcbiRjX2FsZXJ0OiAjZDkwMDAwO1xyXG4kY29sLWxlZnQtbWQtd2lkdGg6IDM1JTtcclxuXHJcbi5wcmludC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmdyLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAuYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICRjX3ByaW1hcnktY29sb3I7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5oYW5kZWwtZGVsaXZlcnkge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gIC50aXRsZSB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJGNfcHJpbWFyeS1jb2xvcjtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5maWx0ZXItZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLmNvbnRyb2xzIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLmZpbHRlci1idG4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnN0YXRpc3RpYy1hbGwge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAxNnB4IDIwcHg7XHJcbiAgfVxyXG4gIC5sc3QtcmVxdWVzdC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gIH1cclxuICAuY2xlYW4tdGFibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxNTkyMjtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICBjb2xvcjogI2YxNTkyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAudGFibGUtZGV0YWlsIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luOiAwIDAgIWltcG9ydGFudCA7XHJcbiAgICAgIC5jb2wtdGFibGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LXN0YXRpc3RpYyB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjE1OTIyO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgJi5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJi5zY3JlZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWFpbi1pbmZvciB7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgLmlkLWluZm9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3YWQ5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWluZm9yIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Yi1pbmZvciB7XHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDdhZDk7XHJcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICYuZm91bmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwN2FkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5ub3QtZm91bmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxNTkyMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtaW5mb3Ige1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnJvdy1zdGF0aXN0aWMge1xyXG4gICAgJi5tb2JpbGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5yZXF1ZXN0LWluZm9yIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHAtY2hlY2tib3gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5zY3JlZW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWx0ZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgLnN1Yi1pbmZvci1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuc3RhdHVzIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5maWx0ZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLmlucHV0LWNvZGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlsdGVyLWJ0biB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5maWx0ZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLmlucHV0LWNvZGUge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXB7XHJcbiAgICAgICAgcC1kcm9wZG93bntcclxuICAgICAgICAgIC51aS1kcm9wZG93bntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5maWx0ZXItYnRuIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/warehouseimp/handel-delivery/handel-delivery.component.ts ***!
  \***************************************************************************/
/*! exports provided: HandelDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandelDeliveryComponent", function() { return HandelDeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/merchandise.services */ "./src/app/services/merchandise.services.ts");
/* harmony import */ var app_config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/app.config */ "./src/app/config/app.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PrintBillComponent } from "./../../merchandise/delivery/print-bill/print-bill.component";





var HandelDeliveryComponent = /** @class */ (function () {
    function HandelDeliveryComponent(fb, messageService, merchandiseServices, dialogService, cdr) {
        this.fb = fb;
        this.messageService = messageService;
        this.merchandiseServices = merchandiseServices;
        this.dialogService = dialogService;
        this.cdr = cdr;
        this.APP_NAME = app_config_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"];
        this.styleSheetFiles = "/assets/styles/css/print-bill.css";
        this.loading = false;
        this.filterByOptions = [{ label: "Theo mã phiếu", value: 1 }];
        this.currentPage = 0;
        this.numOfItemOnPage = 5;
        this.requestList = [];
        this.requestListSelected = []; // for print
    }
    HandelDeliveryComponent.prototype.ngOnInit = function () {
        this.filterForm = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            filterBy: [this.filterByOptions[0].value, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    HandelDeliveryComponent.prototype.cleanList = function () {
        if (confirm("Bạn có chắc chắn muốn xóa?")) {
            this.requestList = this.requestList.filter(function (request) { return request.checked == false; });
        }
    };
    HandelDeliveryComponent.prototype.filterRequest = function () {
        var _this = this;
        var code = this.filterForm.getRawValue().code.trim();
        var filterType = this.filterForm.getRawValue().filterBy;
        if (this.requestList
            .map(function (request) { return request.deliveryRequestCode; })
            .includes(code)) {
            this.showMessage("error", "Mã đã tồn tại", "Thông báo");
        }
        else {
            switch (filterType) {
                case 1:
                    this.merchandiseServices.getDeliveryRequestByCode(code).subscribe(function (res) {
                        if (res && res.result && res.result.success == true) {
                            var listRequest = res.result.data && res.result.data.lsDetail
                                ? res.result.data.lsDetail
                                : [];
                            res.result.data.checked = false;
                            res.result.data.isCollapse = false;
                            res.result.sumRequestWeight = _this.sumWeightOfRequestList(res.result.data.lsDetail);
                            _this.requestList.unshift(res.result.data);
                        }
                    }, function (err) {
                        _this.showMessage("error", "Lọc dữ liệu không thành công", "Thông báo");
                    });
                    break;
            }
        }
    };
    HandelDeliveryComponent.prototype.sumWeightOfRequestList = function (requestList) {
        if (requestList && requestList.length > 0) {
            return requestList.reduce(function (a, b) { return a + (parseInt(b['paymentWeight']) || 0); }, 0);
        }
        else {
            return 0;
        }
    };
    HandelDeliveryComponent.prototype.totalPackageOfRequestList = function () {
        if (this.requestList && this.requestList.length > 0) {
            return this.requestList.reduce(function (a, b) { return a + (parseInt(b['totalPackage']) || 0); }, 0);
        }
        else {
            return 0;
        }
    };
    HandelDeliveryComponent.prototype.totalMissingAmountOfRequestList = function () {
        if (this.requestList && this.requestList.length > 0) {
            return this.requestList.reduce(function (a, b) { return a + (parseInt(b['missingAmount']) || 0); }, 0);
        }
        else {
            return 0;
        }
    };
    HandelDeliveryComponent.prototype.changeStatusDeliveryRequestDetail = function (requestDetail, deliveryRequestDetailId, oldStatus) {
        var _this = this;
        if (confirm("Bạn có muốn thay đổi trạng thái bản ghi này?")) {
            this.loading = true;
            this.merchandiseServices
                .changeStatusDeliveryRequestDetail(deliveryRequestDetailId)
                .subscribe(function (resChangeStatus) {
                if (resChangeStatus &&
                    resChangeStatus.result &&
                    resChangeStatus.result.success == true) {
                    _this.showMessage("success", "Đổi trạng thái thành công", "Thông báo");
                    requestDetail.status = oldStatus == 1 ? 2 : 1;
                    _this.loading = false;
                    _this.cdr.detectChanges();
                }
                else {
                    _this.showMessage("error", "Đổi trạng thái không thành công", "Thông báo");
                    _this.loading = false;
                }
            }, function (errChangeStatus) {
                _this.showMessage("error", "Đổi trạng thái không thành công", "Thông báo");
                _this.loading = false;
            });
        }
    };
    HandelDeliveryComponent.prototype.start = function () {
        var _this = this;
        this.loading = true;
        var deliveryRequestIds = this.requestList
            .filter(function (request) { return request.checked == true; })
            .map(function (request) { return request.deliveryRequestId; });
        this.merchandiseServices
            .startHandleDeliveryRequest(deliveryRequestIds)
            .subscribe(function (resStart) {
            if (resStart && resStart.result && resStart.result.success == true) {
                _this.showMessage("success", "Bắt đầu thành công", "Thông báo");
            }
            else {
                _this.showMessage("error", "Bắt đầu không thành công", "Thông báo");
            }
            _this.loading = false;
        }, function (errStart) {
            _this.showMessage("error", "Bắt đầu không thành công", "Thông báo");
            _this.loading = false;
        });
    };
    HandelDeliveryComponent.prototype.finish = function () {
        var _this = this;
        this.loading = true;
        var deliveryRequestIds = this.requestList
            .filter(function (request) { return request.checked == true; })
            .map(function (request) { return request.deliveryRequestId; });
        this.merchandiseServices
            .finishHandleDeliveryRequest(deliveryRequestIds)
            .subscribe(function (resFinish) {
            if (resFinish &&
                resFinish.result &&
                resFinish.result.success == true) {
                _this.showMessage("success", "Đã hoàn thành", "Thông báo");
            }
            else {
                _this.showMessage("error", "Có lỗi xảy ra", "Thông báo");
            }
            _this.loading = false;
        }, function (errFinish) {
            _this.showMessage("error", "Có lỗi xảy ra", "Thông báo");
            _this.loading = false;
        });
    };
    /**
     * Cancel delivery
     */
    HandelDeliveryComponent.prototype.cancelDelivery = function () {
        var _this = this;
        this.loading = true;
        var deliveryRequestIds = this.requestList
            .filter(function (request) { return request.checked == true; })
            .map(function (request) { return request.deliveryRequestId; });
        this.merchandiseServices
            .cancelHandleDeliveryRequest(deliveryRequestIds)
            .toPromise()
            .then(function (res) {
            if (res.result.success) {
                _this.showMessage("success", "Hủy thành công", "Thông báo");
            }
            else {
                _this.showMessage("error", res.result.message, "Thông báo");
            }
            _this.loading = false;
        })
            .catch(function () {
            _this.loading = false;
            _this.showMessage("error", "Hủy thất bại", "Thông báo");
        });
    };
    HandelDeliveryComponent.prototype.changeSelectedDeliveryRequest = function ($event) {
        console.log($event, this.requestListSelected);
        this.requestListSelected = this.requestList.filter(function (request) { return request.checked == true; });
    };
    HandelDeliveryComponent.prototype.showMessage = function (type, message, summary) {
        this.messageService.add({
            key: "toast-message",
            severity: type,
            summary: summary,
            detail: message,
        });
    };
    HandelDeliveryComponent.prototype.onPageChange = function ($event) {
        this.currentPage = $event.page;
        window.scrollTo(0, 0);
    };
    HandelDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-handel-delivery",
            template: __webpack_require__(/*! ./handel-delivery.component.html */ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.html"),
            styles: [__webpack_require__(/*! ./handel-delivery.component.scss */ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.scss")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["DialogService"]],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_2__["MerchandiseServices"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HandelDeliveryComponent);
    return HandelDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/warehouseimp/warehouse-imp.module.ts":
/*!******************************************************!*\
  !*** ./src/app/warehouseimp/warehouse-imp.module.ts ***!
  \******************************************************/
/*! exports provided: WarehouseImpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImpModule", function() { return WarehouseImpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_add_warehouse_imp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add-warehouse-imp.component */ "./src/app/warehouseimp/add/add-warehouse-imp.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warehouse_imp_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse-imp.routing */ "./src/app/warehouseimp/warehouse-imp.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/dynamicdialog.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var app_services_warehouse_imp_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/services/warehouse-imp.service */ "./src/app/services/warehouse-imp.service.ts");
/* harmony import */ var app_services_system_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/services/system.services */ "./src/app/services/system.services.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/services/merchandise.services */ "./src/app/services/merchandise.services.ts");
/* harmony import */ var _add_capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add/capture-merchandise/capture-merchandise.component */ "./src/app/warehouseimp/add/capture-merchandise/capture-merchandise.component.ts");
/* harmony import */ var _services_fileManager_services__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../services/fileManager.services */ "./src/app/services/fileManager.services.ts");
/* harmony import */ var _handel_delivery_handel_delivery_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./handel-delivery/handel-delivery.component */ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//primeng service


//primeng








// Other


//service







// component
var WarehouseImpModule = /** @class */ (function () {
    function WarehouseImpModule() {
    }
    WarehouseImpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_add_warehouse_imp_component__WEBPACK_IMPORTED_MODULE_2__["AddWarehouseImpComponent"],
                _add_capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_25__["CaptureMerchandiseComponent"],
                _handel_delivery_handel_delivery_component__WEBPACK_IMPORTED_MODULE_27__["HandelDeliveryComponent"],
            ],
            imports: [
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_warehouse_imp_routing__WEBPACK_IMPORTED_MODULE_4__["WarehouseImpRoutes"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_9__["WebcamModule"],
                primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__["DynamicDialogModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_18__["PaginatorModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_20__["NgxPrintModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_19__["NgxBarcodeModule"]
            ],
            providers: [
                app_services_warehouse_imp_service__WEBPACK_IMPORTED_MODULE_21__["WarehouseImpService"],
                app_services_system_services__WEBPACK_IMPORTED_MODULE_22__["SystemService"],
                app_services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
                app_services_merchandise_services__WEBPACK_IMPORTED_MODULE_24__["MerchandiseServices"],
                _services_fileManager_services__WEBPACK_IMPORTED_MODULE_26__["FileManagerServices"],
            ],
            entryComponents: [_add_capture_merchandise_capture_merchandise_component__WEBPACK_IMPORTED_MODULE_25__["CaptureMerchandiseComponent"]],
        })
    ], WarehouseImpModule);
    return WarehouseImpModule;
}());



/***/ }),

/***/ "./src/app/warehouseimp/warehouse-imp.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/warehouseimp/warehouse-imp.routing.ts ***!
  \*******************************************************/
/*! exports provided: WarehouseImpRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImpRoutes", function() { return WarehouseImpRoutes; });
/* harmony import */ var _handel_delivery_handel_delivery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handel-delivery/handel-delivery.component */ "./src/app/warehouseimp/handel-delivery/handel-delivery.component.ts");
/* harmony import */ var _add_add_warehouse_imp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add-warehouse-imp.component */ "./src/app/warehouseimp/add/add-warehouse-imp.component.ts");


var WarehouseImpRoutes = [
    {
        path: 'add',
        component: _add_add_warehouse_imp_component__WEBPACK_IMPORTED_MODULE_1__["AddWarehouseImpComponent"]
    },
    {
        path: 'handel-delivery',
        component: _handel_delivery_handel_delivery_component__WEBPACK_IMPORTED_MODULE_0__["HandelDeliveryComponent"]
    },
];


/***/ })

}]);
//# sourceMappingURL=warehouseimp-warehouse-imp-module.js.map