import React from 'react';

const Faq = () => {
    return (
        <div className='md:w-2/3 w-4/5 min-h- m-auto my-8'>
            <h2 className='text-2xl text-center my-4'>Yor will find here some the common C&A</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    My computer does not turn on, what do I do now?
                </div>
                <div className="collapse-content">
                    <p>First check the computer's power cord to make sure it is completely plugged into the wall socket. If you are using a plug strip, make sure it is completely plugged into the wall socket and that the power switch on the plug strip is turned on. Some plug strips also have a built in circuit breaker which usually looks like a black or red button near the power switch. Press the button to reset it and see if that solves the problem.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What do I do when my computer crashes?
                </div>
                <div className="collapse-content">
                    <p>There are many reasons why a computer may just stop working or "freeze". Most of the time there isn't much we can do about it, it is a fact of life that computer programs have become so complex that occasionally users will experience problems even when performing common tasks. When your computer no longer responds to keyboard commands your best bet is to restart the computer.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What do I do if my hard disk fails to work?
                </div>
                <div className="collapse-content">
                    <p>As with most computer errors, your first step is to shut down your computer and restart it. This will help you determine whether or not you actually have a hard disk problem. If the disk is severely damaged then your computer will probably fail to restart properly. If this is the case then contact MCWare IT Solutions, this is a job for the professionals.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    There is no display on the monitor, what do I do now?
                </div>
                <div className="collapse-content">
                    <p>Make sure the monitor is on. If no power light (green or orange light) is seen on the monitor display try pressing the power button until it comes on. If your computer monitor was on and you stepped away from the computer and upon returning it was black, it's likely that the computer is asleep. Try moving your mouse, clicking the mouse buttons, and/or pressing any key (space bar) on the keyboard to wake it up. Make sure that the monitor is connected properly to the back of the computer.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What do I do if the image on my monitor is distorted or skewed?
                </div>
                <div className="collapse-content">
                    <p>You may receive a distorted image when the cable is loose or defective. Disconnect the video cable going from the back of the computer and verify that no pins are bent, burnt or broken. Once verified re-connect the monitor cable. If the refresh rate is not properly set the monitor may have a wavy or an appearance that lines are going down or across the monitor slowly or fast, this may also cause a flickering affect. A distorted image can be caused by magnetic or other types of interference. Verify no speakers, fans or other magnetic devices are close to the monitor.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    I get a 'no signal input' message on my monitor, what do I do?
                </div>
                <div className="collapse-content">
                    <p>Verify that the monitor is properly connected in the back of the monitor as well as to the back of the computer. If the monitor appears to be connected properly, verify that a cable is not loose by disconnecting all cables that can be disconnected in the back of the monitor (generally the data cable cannot be disconnected). Next, disconnect the data cable connected to the back of the computer and then reconnect the cable. When connecting the cable in the back of the computer ensure the cable connection is tight. Most Computers will also have screw ends that can be screwed in to hold the connector in place.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;