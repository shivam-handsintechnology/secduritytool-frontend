import { useState, useRef } from "react";
import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import { Link } from "react-router-dom";

import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

export default function Editors() {

    const editorElement = document.createElement('div');
    editorElement.style.height = '10vh'; // Set height
    editorElement.style.maxHeight = 'auto'; // Set height
    document.body.appendChild(editorElement);

    // Create Monaco Editor instance
    const editor = monaco.editor.create(editorElement, {
        value: '// some comment',
        language: 'javascript',
        readOnly: true, // Set readOnly to true
    });
    return (
        <div>
            <>
                <div className="container justify-content-center"> <span className="icon_holder">
                    <span className="icon node-plain" />
                  </span>
                    <div className="docs_content dynamic_content">
                        <div className="docs_content_col">
                            <button>Show value</button>
                            <div class="text-wrap2">
                                <div id="textToCopy" className="text-copyboard">
                                    <Editor
                                        height="20vh"
                                        defaultLanguage="javascript"
                                        defaultValue="// some comment"


                                    /></div>
                                <button class="copubutton"><i class="fa fa-copy"></i></button>
                                {/* <div id="copyResult">{copyResult}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
}
