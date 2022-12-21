import { Component } from "react";

export class Searchbar extends Component{
    someHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.currentTarget.picture.value)
        
 }

    render() {
        return (
            <header className="searchbar">
                <form className="form"  onSubmit={this.someHandler}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className=""
                        type="text"
                        name="picture"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    }
}