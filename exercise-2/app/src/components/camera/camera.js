import React from 'react';
import Webcam from 'react-webcam';
import { runCustomVision } from '../../vision-client';
import { CustomVisionResult } from '../../vision-api-result';
import FileBase64 from 'react-file-base64';

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
            displayCamera: true,
            loading: false
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
        runCustomVision(imageSrc).then((result) => {
            this.setState({ 'result': result, displayCamera: false, loading: false });

        }).catch((error) => {
            console.error(error);
        });
    };

    getFile(file) {
        let image = file.base64;

        this.setState({ loading: true });
        this.setState({ 'imageSrc': image });
        this.recognize(image);
    }

    reset() {
        this.setState({ result: null, displayCamera: true, imageSrc: null, loading: false });
    }

    render() {
        let display = this.state.displayCamera ?
            (<div>
                <Webcam audio={false} height={450} ref={this.setRef} screenshotFormat="image/jpeg" width={450} />
                <button onClick={this.capture}>Capture photo</button>
                <br />
                <FileBase64 onDone={this.getFile.bind(this)} />
            </div>) :
            (<CustomVisionResult imageSrc={this.state.imageSrc} result={this.state.result} reset={this.reset} />);

        return (


            <div>
                {!this.state.loading &&
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
                }

                {this.state.loading &&
                    <h3>Working...</h3>
                }

            </div>
        );
    }
}