import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
// import 'wavesurfer.js/dist/wavesurfer.css';

function Waveform(props) {
    const waveformRef = useRef(null);

    useEffect(() => {
        const options = {
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            cursorWidth: 1,
            barWidth: 3,
            barRadius: 3,
            responsive: true,
            height: 150,
            normalize: true,
            backend: 'WebAudio',
            plugins: [
                WaveSurfer.timeline.create({
                    container: '#wave-timeline'
                })
            ]
        };
        const wavesurfer = WaveSurfer.create(options);

        wavesurfer.load(props.url);

        return () => {
            wavesurfer.destroy();
        };
    }, [props.url]);

    return <div ref={waveformRef} />;
}

export default Waveform;