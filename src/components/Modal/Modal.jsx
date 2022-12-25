import { Component } from "react"
import style from "./Modal.module.scss"


// ({bigImage, onModalClick})
export class Modal extends Component{

    componentDidMount() {
        console.log("didM");
        window.addEventListener("keydown", this.onKeyCklick)

    }

    componentWillUnmount() {
        console.log("ulmount");
        window.removeEventListener("keydown", this.onKeyCklick)
    }

    onKeyCklick = (e) => {
        if (e.code === "Escape") {
           this.props.onModalClick(e)
        }
    }

    onModalClick = (e) => {
        console.log("modal");
        this.props.onModalClick(e)
    }

    render()
    { return < div id="modal" className={style.Overlay} onClick={this.onModalClick} >
            <div className={style.Modal}>
                <img src={this.props.bigImage} alt="" />
            </div>
        </div>
    }
}