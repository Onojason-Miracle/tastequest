import React from "react";

function Notification() {
    return(
        <div className="Notify"> 
            <div className="notify-text-div">
                <p className="notify-header">Get notified when we update!</p>

                <p className="notify-header2">
                Get notified when we add new items to our specials menu, update our price list of have promos!
                </p>
            </div>

            <div>
                <form className="notify-form">
                    <input type="email"  placeholder="janedoe@gmail.com" className="notify-input " />

                    <button className="notify-submit-btn">Get Notified</button>
                </form>
            </div>
        </div>
    )
}

export default Notification

