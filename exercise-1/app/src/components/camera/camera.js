import React from 'react';
import Webcam from 'react-webcam';
import { recognizeFace } from '../../cognitive-service-client';
import { FaceApiResult } from '../../face-api-result';

export class Camera extends React.Component {
    constructor() {
        super();

        this.webcam = {};

        this.setRef = this.setRef.bind(this);
        this.capture = this.capture.bind(this);
        this.recognize = this.recognize.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            imageSrc: undefined,
            result: undefined,
            displayCamera: true
        };
    }

    setRef(webcam) {
        this.webcam = webcam;
    }

    capture() {
        const image = this.webcam.getScreenshot();
        this.setState({ 'imageSrc': image });
        this.recognize(image);
    };

    recognize(imageSrc) {
        recognizeFace(imageSrc).then((result) => {
            this.setState({ 'result': result, displayCamera: false });
        }).catch((error) => {
            console.error(error);
        });
    }

    reset() {
        this.setState({ result: null, displayCamera: true, imageSrc: null });
    }

    render() {
        let display = this.state.displayCamera ?
            (<div>
                <Webcam audio={false} height={450} ref={this.setRef} screenshotFormat="image/jpeg" width={450} />
                <button onClick={this.capture}>Capture photo</button>
            </div>) :
            (<FaceApiResult imageSrc={this.state.imageSrc} result={this.state.result} reset={this.reset} />);

        return (
            <div>
                <div>
                    <div className="left">
                        {display}
                    </div>
                    <div className="right">
                        {this.state.result &&
                            <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
                        }
                    </div>
                </div>
            </div>
        );
    }
}