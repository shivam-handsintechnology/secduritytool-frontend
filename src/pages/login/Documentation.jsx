    import { useState, useRef } from "react";
    import React from "react";
    import Accordion from 'react-bootstrap/Accordion';

    import { Link } from "react-router-dom";

    import Editor from '@monaco-editor/react';
    export default function Documentation() {
        const [text, setText] = useState(
            "Add text you want to copy"
        );

        const handleCopyClick = async () => {
            try {
                await navigator.clipboard.writeText(text);
                alert("Copied to clipboard!");
            } catch (err) {
                console.error(
                    "Unable to copy to clipboard.",
                    err
                );
                alert("Copy to clipboard failed.");
            }
        };
        const editorRef = useRef(null);

        function handleEditorDidMount(editor, monaco) {
            editorRef.current = editor;
        }

        function showValue() {
            alert(editorRef.current.getValue());
        }
        const [copyResult, setCopyResult] = useState('');

        const copyText = () => {
            const textToCopy = document.getElementById("textToCopy");
            const selection = window.getSelection();
            const range = document.createRange();

            range.selectNodeContents(textToCopy);
            selection.removeAllRanges();
            selection.addRange(range);

            const successful = document.execCommand('copy');
            if (successful) {
                setCopyResult('Copied!');
            } else {
                setCopyResult('Unable to copy!');
            }
            window.getSelection().removeAllRanges();
        };


        return (
            <div>
                <>

                    <div className="container justify-content-center"> <span className="icon_holder">
                        <span className="icon node-plain" />
                    </span>
                        <div className="docs_content dynamic_content">
                            <h1 className="">
                                <span className="caption">Node.js SDK</span>
                            </h1>
                            <p className="updated-at">Last updated: Jan-30-2024</p>
                            <div className="docs_content_col">
                                <p>This page provides an in-depth introduction to the Node.js SDK.</p>
                                <p />
                                <div className="md_special md_tip md_single_line">
                                    <div className="md_special_inner">
                                        <div className="md_title">
                                            <div className="note_icon" /><i class="fa fa-lightbulb pr-2" style={{ color: "#3dadc8" }}></i>
                                            Tip:  If you're ready to get coding, jump straight to our{" "}
                                            <a href="node_quickstart.html">quick start</a>.{" "}
                                        </div>

                                    </div>
                                </div>
                                <p />

                                <a name="overview" className="anchor" />
                                <h2>
                                    <a href="#overview">Overview</a>
                                </h2>
                                <p>
                                    Cloudinary's Node.js SDK provides simple, yet comprehensive image and
                                    video upload, transformation, optimization, and delivery capabilities
                                    that you can implement using code that integrates seamlessly with your
                                    existing Node.js application.
                                </p>
                                <p />
                                <div className="collapsed">
                                    {/* <a href="#">You might also want to know...</a> */}
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="header-accord">You might also want to know...</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>If youre brand new to Cloudinary, you may want to start with the <a href="how_to_integrate_cloudinary">Developer onboarding guide</a> for a high-level overview of integrating Cloudinary into your code, and an introduction to the main concepts. </li>
                                                    <li>You may also find our <a href="cloudinary_glossary">Glossary</a> helpful to understand Cloudinary-specific terminology.</li>
                                                    <li>Keep in mind that this guide focusses on how to set up and implement popular Cloudinary capabilities using the Node.js SDK, but it doesn't
                                                        cover every feature or option.The complete documentation for all Cloudinary features including sample code for each SDK can be found
                                                        in our Programmable Media
                                                        <a href="programmable_media_guides">Guides</a> and <a href="cloudinary_references">References</a>.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>
                                </div>
                                <div className="js-template" />
                                <p />
                                <div className="md_special md_reading md_no_title">
                                    <div className="md_special_inner">

                                        <p>
                                            <strong>
                                                This guide relates to the latest released version of the{" "}
                                                <a
                                                    data-popup="true"
                                                    href="https://github.com/cloudinary/cloudinary_npm"
                                                >
                                                    Cloudinary Node.js
                                                </a>{" "}
                                                library.
                                            </strong>
                                        </p>
                                        <ul>
                                            <li className="mb-2">
                                                For details on all new features and fixes from previous versions,
                                                see the{" "}
                                                <a
                                                    data-popup="true"
                                                    href="https://github.com/cloudinary/cloudinary_npm/blob/master/CHANGELOG.md"
                                                >
                                                    CHANGELOG
                                                </a>
                                                .{" "}
                                            </li>
                                            <li className="mb-2">
                                                The latest version of the SDK supports <strong>Node.js v9</strong>{" "}
                                                and up.
                                            </li>
                                            <li className="mb-2">
                                                By default, URLs generated with this SDK include an appended
                                                SDK-usage query parameter. Cloudinary tracks aggregated data from
                                                this parameter to improve future SDK versions and no individual
                                                data is collected. If needed, you can disable the{" "}
                                                <code>analytics</code> configuration option.{" "}
                                                <a href="cloudinary_sdks.html#analytics_config">Learn more</a>.
                                            </li>
                                        </ul>
                                        <p />
                                    </div>
                                </div>

                                <div>
                                    <a name="quick_example_transformations" class="anchor"></a><h2><a href="#quick_example_transformations">Quick example: Transformations</a></h2>
                                    <p>Take a look at the following transformation code and the image it delivers:</p>
                                    <div class="text-wrap">
                                        <textarea value={text}
                                            onChange={(e) => setText(e.target.value)}></textarea>
                                        <div id="copyToClipboard-a" class="clipboard icon" onClick={handleCopyClick}></div>
                                    </div>

                                </div>
                                <div>

                                    <p>This relatively simple code performs all of the following on the original <a href="../../res.cloudinary.com/demo/image/upload/front_face.jpg" target="_blank">front_face.jpg</a> image before delivering it:</p>
                                    <ul>
                                        <li className="mb-2">
                                            <strong>Crop</strong> to a 150x150 thumbnail using face-detection gravity to automatically determine the location for the crop</li>
                                        <li className="mb-2">
                                            <strong>Round the corners</strong> with a 20 pixel radius</li>
                                        <li className="mb-2">Apply a <strong>sepia effect</strong>
                                        </li>
                                        <li className="mb-2">
                                            <strong>Overlay the Cloudinary logo</strong> on the southeast corner of the image (with a slight offset). The logo is scaled down to a 50 pixel width, with increased brightness and partial transparency (opacity = 60%)</li>
                                        <li className="mb-2">
                                            <strong>Rotate</strong> the resulting image (including the overlay) by 10 degrees</li>
                                        <li className="mb-2">
                                            <strong>Convert</strong> and deliver the image in PNG format (the originally uploaded image was a JPG)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p>And here's the URL that would be included in the image tag that's automatically generated from the above code:</p>
                                    <div class="text-wrap">
                                        <textarea value={text}
                                            onChange={(e) => setText(e.target.value)}></textarea>
                                        <div id="copyToClipboard-a" class="clipboard icon" onClick={handleCopyClick}><i class="fa fa-copy" style={{color:"white"}}></i></div>
                                    </div>
                                </div>
                                <div className="md_special md_reading md_no_title">
                                    <div className="md_special_inner">

                                        <p className="sec-head">
                                            <b>Learn more about transformations</b>
                                        </p>
                                        <ul>
                                            <li className="mb-2">See all possible transformations in the <a href="#">Transformation URL API reference</a>.</li>
                                            <li>See more examples of <a href="#">image</a> and <a href="#">video</a> transformations using the Cloudinary Node.js library.<br />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2><a href="#quick_example_file_upload">Quick example: File upload</a></h2>
                                    <p>The following Node.js code uploads the <code>dog.mp4</code> video to the specified sub-folder using the public_id, <code>my_dog</code>. The video will overwrite the existing <code>my_dog</code> video if it exists. When the video upload is complete, the specified notification URL will receive details about the uploaded media asset.</p>
                                    <div class="text-wrap2">
                                        <div id="textToCopy" className="text-copyboard"> <Editor
                                            height="20vh"
                                            defaultLanguage="javascript"
                                            defaultValue="// some comment"
                                            onMount={handleEditorDidMount}
                                        /></div>
                                        <button onClick={copyText} class="copubutton"><i class="fa fa-copy"></i></button>
                                        {/* <div id="copyResult">{copyResult}</div> */}
                                    </div>
                            
                                </div>
                                <div className="mt-3">
                                    <a name="node_js_sdk_features" class="anchor"></a><h2><a href="#node_js_sdk_features">Node.js SDK features</a></h2>
                                    <ul>
                                        <li>Build URLs for <a href="node_image_manipulation.html">image</a> and <a href="node_video_manipulation.html">video</a> transformation</li>
                                        <li>Node.js <a href="node_image_manipulation.html#the_cloudinary_image_method">helper methods</a> for embedding and transforming images</li>
                                        <li>API wrappers: <a href="image_upload_api_reference.html">file upload</a>, <a href="admin_api.html">administration</a>, <a href="sprite_generation.html">sprite generation</a> and more</li>
                                        <li>
                                            <a href="node_image_and_video_upload.html#server_side_upload">Server-side</a> file upload + <a href="node_image_and_video_upload.html#direct_uploading_from_the_browser">direct unsigned</a> file upload from the browser using the jQuery plugin</li>
                                        <li>TypeScript support. View the <a data-popup="true" href="https://github.com/cloudinary/cloudinary_npm/blob/master/types/index.d.ts">TypeScript declaration file</a>.</li>
                                    </ul>
                                </div>

                                <button onClick={showValue}>Show value</button>
                                <div class="text-wrap2">
                                    <div id="textToCopy" className="text-copyboard">
                                        <Editor
                                        height="20vh"
                                        defaultLanguage="javascript"
                                        defaultValue="// some comment"
                                        
                                        onMount={handleEditorDidMount}
                                    /></div>
                                    <button onClick={copyText} class="copubutton"><i class="fa fa-copy"></i></button>
                                    {/* <div id="copyResult">{copyResult}</div> */}
                                </div>
                            </div>
                        </div></div>
                </>

            </div>
        );
    }
