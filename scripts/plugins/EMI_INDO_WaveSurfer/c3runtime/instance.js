const C3 = globalThis.C3;
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';
class EMI_INDO_WaveSurferInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        const properties = this._getInitProperties();
        if (properties) {
        }
        this._container = "body";
        this._height = 128;
        this._width = 300;
        this._splitChannels = false;
        this._normalize = false;
        this._waveColor = "#ff4e00";
        this._progressColor = "#dd5e98";
        this._cursorColor = "#ddd5e9";
        this._cursorWidth = 2;
        this._barWidth = NaN;
        this._barGap = NaN;
        this._barRadius = NaN;
        this._barHeight = NaN;
        this._barAlign = "";
        this._minPxPerSec = 1;
        this._fillParent = true;
        this._url = "",
            this._mediaControls = true;
        this._autoplay = false;
        this._interact = true;
        this._dragToSeek = false;
        this._hideScrollbar = false;
        this._audioRate = 1;
        this._autoScroll = true;
        this._autoCenter = true;
        this._sampleRate = 8000;
        let wavesurfer = null;
    }
    _release() {
        super._release();
    }
    _setTestProperty(n) {
    }
    _getTestProperty() {
    }
    _saveToJson() {
        return {};
    }
    _loadFromJson(o) {
    }
    _Create(file) {
        this._url = file;
        this._CreateWaveSurfer();
        if (this.wavesurfer) {
            this.wavesurfer.load(this._url);
        }
    }
    _Play() {
        if (this.wavesurfer) {
            this.wavesurfer.play();
        }
    }
    _Pause() {
        if (this.wavesurfer) {
            this.wavesurfer.pause();
        }
    }
    _Stop() {
        if (this.wavesurfer) {
            this.wavesurfer.stop();
        }
    }
    _CreateWaveSurfer() {
        this.wavesurfer = WaveSurfer.create({
            container: this._container,
            height: this._height,
            width: this._width,
            splitChannels: this._splitChannels,
            normalize: this._normalize,
            waveColor: this._waveColor,
            progressColor: this._progressColor,
            cursorColor: this._cursorColor,
            cursorWidth: this._cursorWidth,
            barWidth: this._barWidth,
            barGap: this._barGap,
            barRadius: this._barRadius,
            barHeight: this._barHeight,
            barAlign: this._barAlign,
            minPxPerSec: this._minPxPerSec,
            fillParent: this._fillParent,
            url: this._url,
            mediaControls: this._mediaControls,
            autoplay: this._autoplay,
            interact: this._interact,
            dragToSeek: this._dragToSeek,
            hideScrollbar: this._hideScrollbar,
            audioRate: this._audioRate,
            autoScroll: this._autoScroll,
            autoCenter: this._autoCenter,
            sampleRate: this._sampleRate,
        });
    }
}
;
C3.Plugins.EMI_INDO_WaveSurfer.Instance = EMI_INDO_WaveSurferInstance;
