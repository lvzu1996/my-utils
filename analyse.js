
/*
 @Author:lvzu
 @Update:2017/9/22
 
 *this is a voice anylyser
 *import {voiceAnalyser} from ''
 *then do voiceAnalyser._start(arrayBuffer)
 *data would be loged in console
 
 */

var audioContext = new AudioContext(),

    voiceDataArr = new Array(),
    
    voiceAnalyser = function() {
    this.file = null; //the current file
    this.audioContext = null;
    this.source = null; //the audio source
    this.animationId = null;
    this.status = 0; //flag for sound is playing 1 or stopped 0
    this.forceStop = false;
};

voiceAnalyser.prototype = {
    _start: function(arrayBuffer) {
        audioContext.decodeAudioData(arrayBuffer, function(buffer) {
            this._visualize(audioContext, buffer);
        }, function(e) {
            //提示解码错误
            console.error(e);
        });
    },
    _visualize: function(audioContext, buffer) {
        var audioBufferSouceNode = audioContext.createBufferSource(),
            analyser = audioContext.createAnalyser(),
            that = this;
        //链接分析器，源，和播放器
        audioBufferSouceNode.connect(analyser);
        analyser.connect(audioContext.destination);
        //将解析出的audiobuffer传给audiocontext
        audioBufferSouceNode.buffer = buffer;
        //播放音频
        if (!audioBufferSouceNode.start) {
            audioBufferSouceNode.start = audioBufferSouceNode.noteOn //in old browsers use noteOn method
            audioBufferSouceNode.stop = audioBufferSouceNode.noteOff //in old browsers use noteOff method
        };
        //如果有播放则取消之前的播放
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.source !== null) {
            this.source.stop(0);
        }
        audioBufferSouceNode.start(0);
        this.status = 1;
        this.source = audioBufferSouceNode;
        //播放完毕
        audioBufferSouceNode.onended = function() {
            that._audioEnd(that);
        };
        this.getData(analyser);
    },
    getData: function(analyser) {
        var that = this
        var drawMeter = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            voiceDataArr.push(array)
            that.animationId = requestAnimationFrame(drawMeter);
        }
        this.animationId = requestAnimationFrame(drawMeter);
    },
    _audioEnd: function(instance) {
      console.log(voiceDataArr);
        if (this.forceStop) { 
            this.forceStop = false;
            this.status = 1;
            return;
        };
        this.status = 0;
    },
    
}

module.exports = {
  voiceAnalyser:voiceAnalyser
}
