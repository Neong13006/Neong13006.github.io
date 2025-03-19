globalThis.C3.Plugins.EMI_INDO_WaveSurfer.Acts = {
    async Options(containerId, height, width, splitChannels, normalize, waveColor, progressColor, cursorColor, cursorWidth, barWidth, barGap, barRadius, barHeight, barAlign, minPxPerSec, fillParent, mediaControls, autoplay, interact, dragToSeek, hideScrollbar, audioRate, autoScroll, autoCenter, sampleRate) {
        this._container = containerId;
        this._height = height;
        this._width = width;
        this._splitChannels = splitChannels;
        this._normalize = normalize;
        this._waveColor = waveColor;
        this._progressColor = progressColor;
        this._cursorColor = cursorColor;
        this._cursorWidth = cursorWidth;
        this._barWidth = barWidth;
        this._barGap = barGap;
        this._barRadius = barRadius;
        this._barHeight = barHeight;
        this._barAlign = barAlign;
        this._minPxPerSec = minPxPerSec;
        this._fillParent = fillParent;
        this._mediaControls = mediaControls;
        this._autoplay = autoplay;
        this._interact = interact;
        this._dragToSeek = dragToSeek;
        this._hideScrollbar = hideScrollbar;
        this._audioRate = audioRate;
        this._autoScroll = autoScroll;
        this._autoCenter = autoCenter;
        this._sampleRate = sampleRate;
    },
    async Create(file) {
        await this._Create(file);
    },
    async Play() {
        await this._Play();
    },
    async Pause() {
        await this._Pause();
    },
    async Stop() {
        await this._Stop();
    }
};
