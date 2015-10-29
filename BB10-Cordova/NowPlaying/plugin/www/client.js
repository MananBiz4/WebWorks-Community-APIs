/*
* Copyright (c) 2013 BlackBerry Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var _self = {},
    _ID = "com.blackberry.community.nowplaying",
    exec = cordova.require("cordova/exec");

	_self.NowPlayingRequestPlayback = function(input) {

        // TODO: verify json input.

        /* Bind callbacks */
      	_self.NowPlayingBindPlayCallback(input.callbacks.play);
        _self.NowPlayingBindPauseCallback(input.callbacks.pause);
        _self.NowPlayingBindStopCallback(input.callbacks.stop);
        _self.NowPlayingBindResumeCallback(input.callbacks.resume);
        delete input.callbacks;

        var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingRequestPlayback", { input: input });
		return result;
	};

    _self.NowPlayingBindPlayCallback = function (callback) {
        var success = function (data, response) {
                var json = JSON.parse(data);
                callback(json);
            },
            fail = function (data, response) {
                console.log("Error: " + data);
            };
        exec(success, fail, _ID, "NowPlayingBindPlayCallback", null);
    };

    _self.NowPlayingBindPauseCallback = function (callback) {
        var success = function (data, response) {
                var json = JSON.parse(data);
                callback(json);
            },
            fail = function (data, response) {
                console.log("Error: " + data);
            };
        exec(success, fail, _ID, "NowPlayingBindPauseCallback", null);
    };

    _self.NowPlayingBindStopCallback = function (callback) {
        var success = function (data, response) {
                var json = JSON.parse(data);
                callback(json);
            },
            fail = function (data, response) {
                console.log("Error: " + data);
            };
        exec(success, fail, _ID, "NowPlayingBindStopCallback", null);
    };

    _self.NowPlayingBindResumeCallback = function (callback) {
        var success = function (data, response) {
                var json = JSON.parse(data);
                callback(json);
            },
            fail = function (data, response) {
                console.log("Error: " + data);
            };
        exec(success, fail, _ID, "NowPlayingBindResumeCallback", null);
    };

	_self.NowPlayingTrackChange = function (input) {
		var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingTrackChange", { input: input });
		return result;
	};

	_self.NowPlayingPlay = function () {
		var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingPlay", null);
		return result;
	};

	_self.NowPlayingPause = function () {
		var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingPause", null);
		return result; 
	};

	_self.NowPlayingStop = function () {
		var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingStop", null);
		return result; 
	};

	_self.NowPlayingResume = function () {
        var result,
            success = function (data, response) {
                result = data;
            },
            fail = function (data, response) {
                console.log("Error: " + data);
            };
        exec(success, fail, _ID, "NowPlayingResume", null);
        return result;
    };

	_self.NowPlayingGetState = function () {
		var result,
			success = function (data, response) {
				result = data;
			},
			fail = function (data, response) {
				console.log("Error: " + data);
			};
		exec(success, fail, _ID, "NowPlayingGetState", null);
		return result;
	};

module.exports = _self;
