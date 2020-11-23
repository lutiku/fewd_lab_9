import React, { Component } from 'react' ;



export default class BoxElement extends Component{
    render(){
        return(
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child box">
                                <p className="title">Start-up "BOOM" wants to Be the Amazon of Photography</p>
                                Boom, a Milan-based start-up, has raised $ 7 million
                                in funding based on its proprietary technology that
                                is said to allow businesses to purchase "high quality"
                                images at an affordable price, at worldwide.
                            </article>
                            <article className="tile is-child box">
                                <p className="title">Photoshop</p>
                                Photoshop's desktop update received most
                                of the major giveaways in today's announcement,
                                but Adobe hasn't forgotten about the iPad version.
                                The company has released a modest update to the tablet photo editor,
                                adding image size control and the ability to use Livestream while editing.
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">DxO announces “PhotoLab 4”</p>
                                DxO PhotoLab 4 is the latest update to DxO's photo editing software.
                                It is based on a new technology called "DeepPRIME",
                                a "revolutionary" technology of demosaicing and denoising
                                based on artificial intelligence driven by Deep Learning.

                                <figure className="image is-4by3">
                                    <img src="https://www.lartdelaphoto.fr/wp-content/uploads/2020/11/DxO-Photoloab-4-770x515.jpg"/>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Lightroom Classic 10.0</p>
                            Adobe released Lightroom Classic 10.0 which brings
                            new controlled adjustments for shadows, midtones,
                            and highlights in the color grading tool, faster
                            editing with performance improvements, connection
                            support in real time for Canon, and more.
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">ON1 RAW 2021</p>
                        ON1 launched its latest iteration of photo editing software,
                        Photo RAW 2021, which includes new organizational tools,
                        full integration of ON1 Portrait AI, new creative features,
                        workflow improvements, and several new features in the integrated Photo RAW for Mobile application
                        <br/><br/>
                        411/5000
                        ON1 calls the new Photo RAW 2021 a "worry-free" professional photo organizer, RAW processor, layer editor, and effects app. Similar to Lightroom, Photo RAW is an all-in-one image editing solution and is available as a perpetual license or as a subscription service.
                        ON1 has a long list of updates to version 2021 of its software:
                        <br/><br/>
                        ON1 has added full integration of its "IA Portrait",
                        which finds every face in your photos, analyzes them for eyes and mouths,
                        and categorizes them to apply the correct retouching. ON1 claims that it
                        "gives excellent results with minimal effort" using the frequency separation
                        based skin retouching built into the AI. It can also, it seems, make more complex
                        adjustments to a face's shape and even lighting. Each touch-up is non-destructive.
                        "The addition of ON1 Portrait AI in the RAW version of ON1 Photo will allow portrait
                        photographers to automatically retouch an entire shoot," the company said.
                        “Detect and analyze every face, then give them the best control and results
                        for manual touch-ups when needed. "
                    </article>
                </div>
            </div>
        )
    }
}
