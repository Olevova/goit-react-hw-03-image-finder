import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Modal } from "./Modal/Modal";
import { ButtonLoad } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Spiner } from './Loader/Loader'
import { pictureResp } from "../HelpComp/Respons"
import {MySwal} from "../HelpComp/Answer"



export class App extends Component {
  
  state = {
  gallery: null,
  page: 0,
  search: null,
  isdownload:null,
  isload: null,
  bigImage: false
  
}

  onHandler = (props) => {
    console.log(props);
    if (this.state.search === props) {
      MySwal.fire({
        title: "try new word",
        icon: "warning"
      })
      return 
    }
  
    this.setState({
      gallery:null,
      page: 1,
      isload: null,
      bigImage: false,
      search: props,
      isdownload: true,
      totalHitsLeft: null
  })
  }
  
async componentDidUpdate(prevProps, prevState) {

  if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
    console.log(prevState.page, this.state.page);
    const respons = await pictureResp(this.state.search, this.state.page)
    this.setState()
    if (respons.data.hits.length < 1) {
      MySwal.fire({
        title: "Nothing found on this request",
        icon: "warning"
      })
    }

    if (prevState.search !== this.state.search) {
      console.log("one");
      this.setState({
        isload: true,
        isdownload: null,
        gallery: respons.data.hits,
        totalHitsLeft: respons.data.totalHits-12
      })
      return
    }
    console.log(respons.data);
    this.setState((prev) => ({
      gallery: [...prev.gallery, ...respons.data.hits],
      totalHitsLeft: prev.totalHitsLeft-12
          })
      )
  }
  }

onLargePicture=(e)=> {
  console.log("hit");
  // console.log(e);
  this.setState({bigImage : e})
  }

onModalClick = (e) => {
  console.log(e.currentTarget, e.code);
  this.setState((prev)=>({bigImage : !prev.bigImage}))
  }
  
onClickLoad = () => {
    this.setState((prev) => 
      ({page: prev.page+1}))
  }

render(){
  return <div>
      
    <Searchbar onSubmit={this.onHandler} />
    {this.state.bigImage &&
    <Modal bigImage={this.state.bigImage} onModalClick={this.onModalClick } />
    } 
    {this.state.isdownload && <Spiner/>}
    {this.state.isload && <ImageGallery onRender={this.state.gallery} onLargePicture={this.onLargePicture} />}
    {this.state.page > 0 && this.state.totalHitsLeft>12 &&<ButtonLoad onClickSearch={this.onClickLoad} />}
     </div>
  };
};
